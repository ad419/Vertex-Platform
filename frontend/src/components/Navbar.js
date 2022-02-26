import React from "react";
import logo from "../components/images/logo.png";

const Navbar = () => {
  return (
    <div className="flex p-3 w-4/5 justify-center">
      <nav className="space-x-6 flex justify-center items-center">
        <img width="90px" src={logo} alt="hai" />
        <div className="text-lg space-x-6 font-pop flex">
          <a
            className="ml-4 hover:border-b-stone-800 hover:border-b-2 transition-all ease-in"
            href="#"
          >
            Home
          </a>
          <a
            className="hover:border-b-stone-800 hover:border-b-2 transition-all ease-in"
            href="#"
          >
            Hire a developer
          </a>
          <a
            className="hover:border-b-stone-800 hover:border-b-2 transition-all ease-in"
            href="#"
          >
            Find work
          </a>
          <a
            className="hover:border-b-stone-800 hover:border-b-2 transition-all ease-in"
            href="#"
          >
            Types of developers
          </a>
        </div>
        <div className="absolute right-6 top-7">
          <a
            className="mr-6 hover:border-b-stone-800 hover:border-b-2 transition-all ease-in"
            href="#"
          >
            Login
          </a>
          <a
            className="text-bold mr-8 border-2 border-black p-2 px-7 rounded-full hover:bg-black hover:text-white transition-all ease-in"
            href="#"
          >
            Join
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
