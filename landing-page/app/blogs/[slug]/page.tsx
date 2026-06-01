import { notFound } from "next/navigation";
import {
  BLOG_POSTS,
  getBlogPostBySlug,
} from "@/components/sections/blogs/blogPosts";
import BlogDetailPageClient from "./BlogDetailPageClient";

type BlogDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return <BlogDetailPageClient post={post} />;
}
