import React from "react";
import blog_data from "./blogData.json";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa6";

function BlogCart() {
  const Blog_data = blog_data;

  return (
    <>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        {Blog_data.map((data) => (
          <div key={data.id} className="item w-full p-5 shadow-lg rounded">
            <div className="">
              <Link to={""}>
                <img src={data.image} alt="" />
                <h3 className="mt-4 font-bold hover:text-blue-600 cursor-pointer">
                  {data.title}{" "}
                </h3>
                <p className="flex items-center gap-x-3 my-2 text-gray-600">
                  <FaUser />
                  {data.author}
                </p>
                <p className="mb-2 text-gray-600">{data.published_date}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default BlogCart;
