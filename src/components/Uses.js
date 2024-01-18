import React from "react";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import { GoRocket } from "react-icons/go";

function Uses() {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const props = useSpring({
    opacity: inView ? 1 : 0,
  });

  return (
    <div className="w-4/5 m-auto text-white ">
      <h1 className="text-4xl w-2/3 font-bold py-6">
        Some of my uses, preferences and general things that I find awesome...
      </h1>
      <animated.div
        style={props}
        ref={ref}
        className="flex py-2 flex-col w-11/12"
      >
        <div className="flex items-center py-2">
          <GoRocket style={{ fontSize: "30px" }} className="mr-2" />
          <h2 className="px-4 text-xl font-semibold">
            Workstation and Environment
          </h2>
        </div>
        <div className="flex mb-4 py-2 ml-4">
          <p
            style={{ borderLeft: "1px solid" }}
            className="border-gray-200 px-6"
          ></p>
          <p className="font-normal text-gray-300 text-lg ">
            I don't have crazy setup with an M1 Mac or anything like that. I'm
            running on Windows, which I don't really like but have to use since
            I depend on some Adobe software. However, I'm using WSL and for my
            purposes, it has served me well. I don't have to dual boot for this
            reason. Despite my strong dislike for microsoft-concerned products,
            I have to admit that Windows tooling has certainly improved.
            Especially winget and windows terminal. I use winget to install
            pretty much everything. My default terminal is bash but I have been
            playing around with Nushell. I mostly use VScode and occassionaly
            spin up sublime text when I need something faster and more
            memory-effecient. It never ceases to amaze me by how fast it always
            starts up.
          </p>
        </div>
      </animated.div>
      <animated.div style={props} className="flex py-2 flex-col w-11/12">
        <div className="flex items-center py-2">
          <GoRocket style={{ fontSize: "30px" }} className="mr-2" />
          <h2 className="px-4 text-xl font-semibold">
            Workstation and Environment
          </h2>
        </div>
        <div className="flex mb-4 py-2 ml-4">
          <p
            style={{ borderLeft: "1px solid" }}
            className="border-gray-200 px-6"
          ></p>
          <p className="font-normal text-gray-300 text-lg ">
            I don't have crazy setup with an M1 Mac or anything like that. I'm
            running on Windows, which I don't really like but have to use since
            I depend on some Adobe software. However, I'm using WSL and for my
            purposes, it has served me well. I don't have to dual boot for this
            reason. Despite my strong dislike for microsoft-concerned products,
            I have to admit that Windows tooling has certainly improved.
            Especially winget and windows terminal. I use winget to install
            pretty much everything. My default terminal is bash but I have been
            playing around with Nushell. I mostly use VScode and occassionaly
            spin up sublime text when I need something faster and more
            memory-effecient. It never ceases to amaze me by how fast it always
            starts up.
          </p>
        </div>
      </animated.div>
      <animated.div style={props} className="flex py-2 flex-col w-11/12">
        <div className="flex items-center py-2">
          <GoRocket style={{ fontSize: "30px" }} className="mr-2" />
          <h2 className="px-4 text-xl font-semibold">
            Workstation and Environment
          </h2>
        </div>
        <div className="flex mb-4 py-2 ml-4">
          <p
            style={{ borderLeft: "1px solid" }}
            className="border-gray-200 px-6"
          ></p>
          <p className="font-normal text-gray-300 text-lg ">
            I don't have crazy setup with an M1 Mac or anything like that. I'm
            running on Windows, which I don't really like but have to use since
            I depend on some Adobe software. However, I'm using WSL and for my
            purposes, it has served me well. I don't have to dual boot for this
            reason. Despite my strong dislike for microsoft-concerned products,
            I have to admit that Windows tooling has certainly improved.
            Especially winget and windows terminal. I use winget to install
            pretty much everything. My default terminal is bash but I have been
            playing around with Nushell. I mostly use VScode and occassionaly
            spin up sublime text when I need something faster and more
            memory-effecient. It never ceases to amaze me by how fast it always
            starts up.
          </p>
        </div>
      </animated.div>
      <animated.div style={props} className="flex py-2 flex-col w-11/12">
        <div className="flex items-center py-2">
          <GoRocket style={{ fontSize: "30px" }} className="mr-2" />
          <h2 className="px-4 text-xl font-semibold">
            Workstation and Environment
          </h2>
        </div>
        <div className="flex mb-4 py-2 ml-4">
          <p
            style={{ borderLeft: "1px solid" }}
            className="border-gray-200 px-6"
          ></p>
          <p className="font-normal text-gray-300 text-lg ">
            I don't have crazy setup with an M1 Mac or anything like that. I'm
            running on Windows, which I don't really like but have to use since
            I depend on some Adobe software. However, I'm using WSL and for my
            purposes, it has served me well. I don't have to dual boot for this
            reason. Despite my strong dislike for microsoft-concerned products,
            I have to admit that Windows tooling has certainly improved.
            Especially winget and windows terminal. I use winget to install
            pretty much everything. My default terminal is bash but I have been
            playing around with Nushell. I mostly use VScode and occassionaly
            spin up sublime text when I need something faster and more
            memory-effecient. It never ceases to amaze me by how fast it always
            starts up.
          </p>
        </div>
      </animated.div>
    </div>
  );
}

export default Uses;
