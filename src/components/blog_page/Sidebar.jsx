import React, { useEffect, useState } from "react";
import blog_data from "./blogData.json";
import { Link } from "react-router-dom";

function Sidebar() {
  const [popularBlogs, setPopularBlogs] = useState([]);

  useEffect(() => {
    fetch("blog_data")
      .then((res) => res.json())
      .then((data) => setPopularBlogs(data.slice(0, 15)));
  }, []);
  return (
    <>
      <div className="w-[200px]">
        <h3 className="r text-2xl font-semibold px-4">Latest Blogs</h3>
        <div className="">
          {popularBlogs.slice(0, 5).map((data) => (
            <div key={data.id}>
              <h4>{data.title}</h4>
              <Link>Read Mire</Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Sidebar;
