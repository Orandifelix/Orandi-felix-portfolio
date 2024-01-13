import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { CiLinkedin } from "react-icons/ci";
import { VscGithub } from "react-icons/vsc";
import { TfiYoutube } from "react-icons/tfi";
import Skills from "./Skills";

function Home() {
  return (
    <div className="py-12 w-4/5 m-auto text-white  min-h-screen">
      <h2 className="text-6xl mb-6 font-extrabold w-4/5">
        <span
          style={{
            background: "linear-gradient(45deg, #8134AF, #ED3833)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Code is elegant, design is true...
        </span>{" "}
        <span style={{ color: "#FFF", marginLeft: "10px" }}>
          welcome to my world, where creativity brews.
        </span>
      </h2>

      <p className="text-xl mt-6 mb-6 w-4/5 font-light ">
        I'm Orandi Felix, a versatile Full Stack Developer and Health/Corporate
        Communication Strategist. My focus lies in researching User/Customer
        success, delving into the nexus of technology and communication. Through
        code and compelling content, I innovate and strive for impactful
        solutions, shaping a unique narrative in both domains.
      </p>

      <div className="flex text-xl font-bold m-4 space-x-4 items-center">
        <BsTwitterX style={{ fontSize: "16px" }} />
        <CiLinkedin style={{ fontSize: "20px" }} />
        <VscGithub style={{ fontSize: "18px" }} />
        <TfiYoutube style={{ fontSize: "18px" }} />
      </div>
      <p className="mb-6 text-2xl font-bold mt-6">Featured blog posts</p>
      <div className="grid grid-cols-3 gap-6">
        <div className="border-solid border-t-4 border-r-2 border-b-4 border-l-2 border-gradient p-6 rounded-lg mb-6 transition-transform transform hover:scale-105 duration-300 ease-in-out">
          <h2 className="text-xl font-bold mb-2">
            A Prelude to Web Development
          </h2>
          <p className="mb-4">
            This article focuses on a few things to note/understand before you
            dive into the world of web development. Though complex...
          </p>
          <div className="grid grid-cols-2 mb-4 gap-2">
            <div className="bg-green-800 rounded-full m-auto px-2">#webdev</div>
            <div className="bg-green-800 rounded-full m-auto px-2">
              #frontend
            </div>
            <div className="bg-green-800 rounded-full m-auto px-2">
              #fullstack
            </div>
            <div className="bg-green-800 rounded-full m-auto px-2">
              #backend
            </div>
          </div>
          <button className="text-lg font-bold hover:text-blue-500 transition duration-300 ease-in-out">
            Read more
          </button>
        </div>

        <div className="border-solid border-t-4 border-r-2 border-b-4 border-l-2 border-gradient p-6 rounded-lg mb-6 transition-transform transform hover:scale-105 duration-300 ease-in-out">
          <h2 className="text-xl font-bold mb-2">
            A Prelude to Web Development
          </h2>
          <p className="mb-4">
            This article focuses on a few things to note/understand before you
            dive into the world of web development. Though complex...
          </p>
          <div className="grid grid-cols-2 mb-4 gap-2">
            <div className="bg-green-800 rounded-full m-auto px-2">#webdev</div>
            <div className="bg-green-800 rounded-full m-auto px-2">
              #frontend
            </div>
            <div className="bg-green-800 rounded-full m-auto px-2">
              #fullstack
            </div>
            <div className="bg-green-800 rounded-full m-auto px-2">
              #backend
            </div>
          </div>
          <button className="text-lg font-bold hover:text-blue-500 transition duration-300 ease-in-out">
            Read more
          </button>
        </div>
        <div className="border-solid border-t-4 border-r-2 border-b-4 border-l-2 border-gradient p-6 rounded-lg mb-6 transition-transform transform hover:scale-105 duration-300 ease-in-out">
          <h2 className="text-xl font-bold mb-2">
            A Prelude to Web Development
          </h2>
          <p className="mb-4">
            This article focuses on a few things to note/understand before you
            dive into the world of web development. Though complex...
          </p>
          <div className="grid grid-cols-2 mb-4 gap-2">
            <div className="bg-green-800 rounded-full m-auto px-2">#webdev</div>
            <div className="bg-green-800 rounded-full m-auto px-2">
              #frontend
            </div>
            <div className="bg-green-800 rounded-full m-auto px-2">
              #fullstack
            </div>
            <div className="bg-green-800 rounded-full m-auto px-2">
              #backend
            </div>
          </div>
          <button className="text-lg font-bold hover:text-blue-500 transition duration-300 ease-in-out">
            Read more
          </button>
        </div>
        <div className="border-solid border-t-4 border-r-2 border-b-4 border-l-2 border-gradient p-6 rounded-lg mb-6 transition-transform transform hover:scale-105 duration-300 ease-in-out">
          <h2 className="text-xl font-bold mb-2">
            A Prelude to Web Development
          </h2>
          <p className="mb-4">
            This article focuses on a few things to note/understand before you
            dive into the world of web development. Though complex...
          </p>
          <div className="grid grid-cols-2 mb-4 gap-2">
            <div className="bg-green-800 rounded-full m-auto px-2">#webdev</div>
            <div className="bg-green-800 rounded-full m-auto px-2">
              #frontend
            </div>
            <div className="bg-green-800 rounded-full m-auto px-2">
              #fullstack
            </div>
            <div className="bg-green-800 rounded-full m-auto px-2">
              #backend
            </div>
          </div>
          <button className="text-lg font-bold hover:text-blue-500 transition duration-300 ease-in-out">
            Read more
          </button>
        </div>
        <div className="border-solid border-t-4 border-r-2 border-b-4 border-l-2 border-gradient p-6 rounded-lg mb-6 transition-transform transform hover:scale-105 duration-300 ease-in-out">
          <h2 className="text-xl font-bold mb-2">
            A Prelude to Web Development
          </h2>
          <p className="mb-4">
            This article focuses on a few things to note/understand before you
            dive into the world of web development. Though complex...
          </p>
          <div className="grid grid-cols-2 mb-4 gap-2">
            <div className="bg-green-800 rounded-full m-auto px-2">#webdev</div>
            <div className="bg-green-800 rounded-full m-auto px-2">
              #frontend
            </div>
            <div className="bg-green-800 rounded-full m-auto px-2">
              #fullstack
            </div>
            <div className="bg-green-800 rounded-full m-auto px-2">
              #backend
            </div>
          </div>
          <button className="text-lg font-bold hover:text-blue-500 transition duration-300 ease-in-out">
            Read more
          </button>
        </div>
        <div className="border-solid border-t-4 border-r-2 border-b-4 border-l-2 border-gradient p-6 rounded-lg mb-6 transition-transform transform hover:scale-105 duration-300 ease-in-out">
          <h2 className="text-xl font-bold mb-2">
            A Prelude to Web Development
          </h2>
          <p className="mb-4">
            This article focuses on a few things to note/understand before you
            dive into the world of web development. Though complex...
          </p>
          <div className="grid grid-cols-2 mb-4 gap-2">
            <div className="bg-green-800 rounded-full m-auto px-2">#webdev</div>
            <div className="bg-green-800 rounded-full m-auto px-2">
              #frontend
            </div>
            <div className="bg-green-800 rounded-full m-auto px-2">
              #fullstack
            </div>
            <div className="bg-green-800 rounded-full m-auto px-2">
              #backend
            </div>
          </div>
          <button className="text-lg font-bold hover:text-blue-500 transition duration-300 ease-in-out">
            Read more
          </button>
        </div>
      </div>

      <Skills />
    </div>
  );
}

export default Home;
