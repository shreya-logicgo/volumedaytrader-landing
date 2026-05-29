"use client";

import Badge from "@/components/ui/badge/Badge";
import Heading from "@/components/ui/heading/Heading";
import SubHeading from "@/components/ui/subheading/SubHeading";

import BlogsCards from "./BlogsCards";

const Blogs = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-4xl text-center">
        <div className="relative max-w-[717px] flex flex-col gap-2 mx-auto">
                <Badge text='Our Blogs' />
            </div>

        <div className="relative z-10 mx-auto space-y-4 pt-50">
          <Heading className="mx-auto max-w-3xl" text="Learn More About Volume & Market Structure" />
          <SubHeading className="mx-auto max-w-2xl" text="Educational resources and trading insights designed to help traders better understand market behavior." />
        </div>
      </div>

      <BlogsCards />

      <div className="mt-12 flex justify-center">
        <button className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-lg font-medium text-white/80 transition hover:bg-white/10 hover:text-white">
          All Blogs
        </button>
      </div>
    </section>
  );
};

export default Blogs;