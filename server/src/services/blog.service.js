const mongoose = require("mongoose");
const Blog = require("../models/blog.model");
const {
  ensureUniqueSlug,
  extractTitleFromHtml,
  slugifyTitle,
} = require("../utils/slug.util");
const cloudinaryService = require("./cloudinary.service");

function buildIdentifierQuery(identifier) {
  if (mongoose.Types.ObjectId.isValid(identifier)) {
    return { _id: identifier };
  }
  return { slug: identifier };
}

function serializeBlog(doc) {
  const obj = doc.toObject();
  return {
    ...obj,
    id: String(obj._id),
  };
}

function pickUpdates(input) {
  const updates = {};
  if (input.title !== undefined) updates.title = input.title;
  if (input.content !== undefined) updates.content = input.content;
  if (input.coverImage !== undefined) updates.coverImage = input.coverImage;
  if (input.featuredImage !== undefined) {
    updates.featuredImage = input.featuredImage;
  }
  if (input.slug !== undefined) updates.slug = input.slug;
  return updates;
}

function normalizeFeaturedImage(featuredImage) {
  if (!featuredImage?.publicId || !featuredImage?.url) {
    return null;
  }

  if (!cloudinaryService.isCloudinaryUrl(featuredImage.url)) {
    throw new Error("featuredImage.url must be a Cloudinary secure URL.");
  }

  return {
    publicId: featuredImage.publicId,
    url: featuredImage.url,
  };
}

class BlogService {
  async list(query) {
    const { page, limit, search, sortBy, sortOrder } = query;
    const skip = (page - 1) * limit;

    const filter = {};

    if (search?.trim()) {
      const term = search.trim();
      filter.$or = [
        { title: { $regex: term, $options: "i" } },
        { slug: { $regex: term, $options: "i" } },
        { content: { $regex: term, $options: "i" } },
      ];
    }

    const sort = {
      [sortBy]: sortOrder === "asc" ? 1 : -1,
    };

    const [blogs, total] = await Promise.all([
      Blog.find(filter).sort(sort).skip(skip).limit(limit),
      Blog.countDocuments(filter),
    ]);

    return {
      blogs: blogs.map(serializeBlog),
      total,
      page,
      limit,
      hasMore: skip + blogs.length < total,
    };
  }

  async getByIdentifier(identifier) {
    const blog = await Blog.findOne(buildIdentifierQuery(identifier));
    if (!blog) return null;
    return serializeBlog(blog);
  }

  async resolveCoverFields(input) {
    const featuredImage = normalizeFeaturedImage(input.featuredImage);
    if (featuredImage) {
      return {
        coverImage: featuredImage.url,
        featuredImage,
      };
    }

    const coverImage = input.coverImage;
    if (!coverImage) {
      return {};
    }

    if (cloudinaryService.isCloudinaryUrl(coverImage)) {
      return { coverImage };
    }

    if (
      cloudinaryService.isConfigured() &&
      typeof coverImage === "string" &&
      (coverImage.startsWith("http") || coverImage.startsWith("data:image/"))
    ) {
      const uploaded = await cloudinaryService.uploadBlogImage(coverImage);
      return {
        coverImage: uploaded.url,
        featuredImage: uploaded,
      };
    }

    return { coverImage };
  }

  async replaceFeaturedImage(existing, nextFeaturedImage) {
    const previousPublicId = existing.featuredImage?.publicId;
    const nextPublicId = nextFeaturedImage?.publicId;

    if (
      previousPublicId &&
      nextPublicId &&
      previousPublicId !== nextPublicId
    ) {
      await cloudinaryService.destroyBlogImage(previousPublicId);
    }
  }

  async create(input) {
    let title = input.title?.trim();
    const content = input.content ?? "";

    if (!title) {
      title =
        extractTitleFromHtml(content) ?? "Untitled Generated Blog";
    }

    const baseSlug = input.slug?.trim() || slugifyTitle(title);
    const slug = await ensureUniqueSlug(baseSlug, async (candidate) => {
      const existing = await Blog.findOne({ slug: candidate });
      return Boolean(existing);
    });

    const coverFields = await this.resolveCoverFields(input);

    const blog = await Blog.create({
      title,
      content,
      slug,
      ...coverFields,
    });

    return serializeBlog(blog);
  }

  async update(identifier, input) {
    const query = buildIdentifierQuery(identifier);
    const existing = await Blog.findOne(query);
    if (!existing) return null;

    const coverFields = await this.resolveCoverFields(input);
    const updates = pickUpdates(input);

    if (coverFields.featuredImage) {
      await this.replaceFeaturedImage(existing, coverFields.featuredImage);
      updates.featuredImage = coverFields.featuredImage;
      updates.coverImage = coverFields.coverImage;
    } else if (coverFields.coverImage !== undefined) {
      updates.coverImage = coverFields.coverImage;
    }

    if (input.title && !input.slug) {
      const baseSlug = slugifyTitle(input.title);
      if (baseSlug !== existing.slug) {
        updates.slug = await ensureUniqueSlug(baseSlug, async (candidate) => {
          if (candidate === existing.slug) return false;
          const found = await Blog.findOne({ slug: candidate });
          return Boolean(found);
        });
      }
    }

    if (input.slug && input.slug !== existing.slug) {
      updates.slug = await ensureUniqueSlug(input.slug, async (candidate) => {
        if (candidate === existing.slug) return false;
        const found = await Blog.findOne({ slug: candidate });
        return Boolean(found);
      });
    }

    const updated = await Blog.findOneAndUpdate(query, updates, {
      returnDocument: "after",
      runValidators: true,
    });

    return updated ? serializeBlog(updated) : null;
  }

  async remove(identifier) {
    const query = buildIdentifierQuery(identifier);
    const existing = await Blog.findOne(query);
    if (!existing) return null;

    if (existing.featuredImage?.publicId) {
      await cloudinaryService.destroyBlogImage(
        existing.featuredImage.publicId,
      );
    }

    const deleted = await Blog.findOneAndDelete(query);
    return deleted ? serializeBlog(deleted) : null;
  }
}

const blogService = new BlogService();

module.exports = { blogService };
