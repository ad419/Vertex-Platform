import React from "react";
import img1 from "../components/images/1.png";
import Navbar from "../components/Navbar";

const HireDeveloper = () => {
  return (
    <>
      <Navbar />
      <div className="">
        <div className="ml-20 mt-20">
          <div className="flex">
            <h1 className="font-neuton italic lg:w-1/3">
              Hiring a developer for your project has never been
              <span className="border-b-black border-b-4"> easier</span>
            </h1>
            <div className="lg:w-2/4 the-mg lg:absolute lg:right-0">
              <img src={img1} alt="w" className="" />
              <p className="text-left green-text ml-11 underline underline-offset-1">
                Browse the developers and chose the perfect for you
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-2/6 ml-20 mt-9">
          <p className="para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentium optio, eaque rerum!Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Maxime mollitia, molestiae
            quas vel sint commodi repudiandae consequuntur voluptatum laborum
            numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga
            praesentium optio, eaque rerum!
          </p>
          <div className="mt-9">
            <a
              className=" border-slate-800 p-3 rounded-full px-14 border-2"
              href="#"
            >
              Find Developers
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default HireDeveloper;
