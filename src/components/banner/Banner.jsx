import React from "react";
import "./banner.css";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <>
      <div className="bg-black text-white py-32">
        <h1 className="text-center text-4xl font-bold">Welcome to my blog</h1>
        <p className="w w-3/4 mx-auto py-8 text-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores
          accusamus nobis velit iure, autem doloribus laborum totam minus
          molestias eos quia ut esse dolores omnis deserunt repudiandae est
          nemo!
        </p>
        <div className="text-center ">
          <Link
            className="bg-red-400 py-3 px-6 rounded-md hover:bg-red-600 transition-all ease-linear duration-300"
            to={"/about"}
          >
            Learn more
          </Link>
        </div>
      </div>
    </>
  );
}

export default Banner;
