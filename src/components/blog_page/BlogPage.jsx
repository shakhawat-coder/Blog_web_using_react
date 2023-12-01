import React, { useState, useEffect } from "react";
import BlogCart from "./BlogCart";
import Category from "./Category";
// import Sidebar from "./Sidebar";
function BlogPage() {
  //   const [data, setData] = useState([]);

  //   useEffect(() => {
  //     async function fetchData() {
  //       const response = await fetch(blog_data); // Replace with the actual path to your JSON file
  //       const jsonData = await response.json();
  //       //   console.log(jsonData);
  //       setData(jsonData);
  //     }

  //     // fetchData();
  //   }, []); // Empty dependency array means this effect will run once, similar to componentDidMount

  //   //   console.log(data);
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };
  return (
    <>
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-12">
          <div>
            <Category onSelectCategory={handleCategoryChange} />
            <BlogCart />
          </div>
          <div className="">{/* <Sidebar /> */}</div>
        </div>
      </div>
    </>
  );
}

export default BlogPage;
