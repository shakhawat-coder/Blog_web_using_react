import React from "react";
import BlogPage from "../components/blog_page/BlogPage";

function Blogs() {
  return (
    <>
      <div>
        <div className="bg-black text-white py-32 mb-10">
          <h1 className="text-center text-4xl font-bold">Blog Page</h1>
        </div>
        <BlogPage />
      </div>
    </>
  );
}

export default Blogs;
