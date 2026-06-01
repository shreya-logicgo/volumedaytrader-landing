"use client";

import { useEffect } from "react";
import Navbar from "@/components/common/navbar";
import Footer from "@/components/common/footer/Footer";
import Container from "@/components/layout/container/Container";
import BlogPageBackground from "@/components/sections/blogs/BlogPageBackground";
import BlogDetailView from "@/components/sections/blogs/BlogDetailView";
import SimilarBlogs from "@/components/sections/blogs/SimilarBlogs";
import { getSimilarPosts, type BlogPost } from "@/components/sections/blogs/blogPosts";

type BlogDetailPageClientProps = {
  post: BlogPost;
};

export default function BlogDetailPageClient({ post }: BlogDetailPageClientProps) {
  const similarPosts = getSimilarPosts(post.key);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, [post.key]);

  return (
    <div className="relative min-h-screen overflow-x-hidden pt-28 md:pt-32 lg:pt-36">
      <BlogPageBackground />

      <Container>
        <Navbar />
      </Container>

      <section className="relative z-10">
        <Container>
          <BlogDetailView post={post} />
        </Container>

        <Container>
          <div className="mx-auto mt-12 w-full max-w-[1360px] md:mt-16">
            <SimilarBlogs posts={similarPosts} />
          </div>
        </Container>
      </section>

      <Footer />
    </div>
  );
}
