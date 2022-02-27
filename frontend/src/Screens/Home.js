import React from "react";
import fr from "../components/images/fr.png";

const Home = () => {
  return (
    <>
      <div className="">
        <div className=" lg:ml-40 lg:mt-40 lg:flex">
          <h1 className="font-neuton lg:w-2/6 italic font-bold">
            The best way to get a project done
            <span className="border-b-black border-b-4"> faster</span> is to
            start <span className="border-b-black border-b-4">sooner</span>
          </h1>

          <img
            src={fr}
            alt="g"
            className="lg:w-2/6 lg:absolute lg:right-72 lg:top-32"
          />
        </div>
        <div className="lg:absolute left-96 lg:ml-60">
          <h2 className="muted italic">Jim Highsmith</h2>
        </div>

        <div className="lg:absolute lg:left-40 lg:mt-7 lg:w-4/12">
          <p className="para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentium optio, eaque rerum!
          </p>
          <div className="flex space-x-3 mt-5">
            <a
              className=" border-slate-800 p-3 rounded-full px-14 border-2"
              href="#"
            >
              Find Developers
            </a>
            <a className="bg-1 rounded-full px-14 p-3 text-white" href="#">
              Find Developers
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
