import React from "react";
import { IoFolderOpen } from "react-icons/io5";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";

function Orandi() {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const props = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0)" : "translateX(-100%)",
  });

  return (
    <div>
      <animated.div style={props}  ref={ref} className="flex py-2 flex-col">
        <div className="flex items-center py-2">
          <IoFolderOpen style={{ fontSize: "30px" }} className="mr-2" />
          <h2 className="px-4 text-xl font-semibold">Who I Am ?</h2>
        </div>
        <div className="flex mb-4 py-2 ml-4">
          <p
            style={{ borderLeft: "1px solid" }}
            className=" border-gray-200  px-6 "
          ></p>
          <p className="font-normal text-gray-300 text-lg ">
            A simple nerd from Kenya who loves to code! I love talking and
            researching about physics. I love listening to music. I love movies
            and tv shows. I love pretty much all the nerdy things, what I would
            refer to as nerdology. I believe in doing things with passion and
            with all your heart, or not at all! It's like that cool Bill
            Skarsgård line from John Wick, "How you do anything, is how you do
            everything"
          </p>
        </div>
      </animated.div>
      <animated.div style={props} className="flex py-2 flex-col">
        <div className="flex items-center py-2">
          <IoFolderOpen style={{ fontSize: "30px" }} className="mr-2" />
          <h2 className="px-4 text-xl font-semibold">Who I Am ?</h2>
        </div>
        <div className="flex mb-4 py-2 ml-4">
          <p
            style={{ borderLeft: "1px solid" }}
            className=" border-gray-200  px-6 "
          ></p>
          <p className="font-normal text-gray-300 text-lg ">
            A simple nerd from Kenya who loves to code! I love talking and
            researching about physics. I love listening to music. I love movies
            and tv shows. I love pretty much all the nerdy things, what I would
            refer to as nerdology. I believe in doing things with passion and
            with all your heart, or not at all! It's like that cool Bill
            Skarsgård line from John Wick, "How you do anything, is how you do
            everything"
          </p>
        </div>
      </animated.div>
      <animated.div style={props} className="flex py-2 flex-col">
        <div className="flex items-center py-2">
          <IoFolderOpen style={{ fontSize: "30px" }} className="mr-2" />
          <h2 className="px-4 text-xl font-semibold">Who I Am ?</h2>
        </div>
        <div className="flex mb-4 py-2 ml-4">
          <p
            style={{ borderLeft: "1px solid" }}
            className=" border-gray-200  px-6 "
          ></p>
          <p className="font-normal text-gray-300 text-lg ">
            A simple nerd from Kenya who loves to code! I love talking and
            researching about physics. I love listening to music. I love movies
            and tv shows. I love pretty much all the nerdy things, what I would
            refer to as nerdology. I believe in doing things with passion and
            with all your heart, or not at all! It's like that cool Bill
            Skarsgård line from John Wick, "How you do anything, is how you do
            everything"
          </p>
        </div>
      </animated.div>
      <animated.div style={props} className="flex py-2 flex-col">
        <div className="flex items-center py-2">
          <IoFolderOpen style={{ fontSize: "30px" }} className="mr-2" />
          <h2 className="px-4 text-xl font-semibold">Who I Am ?</h2>
        </div>
        <div className="flex mb-4 py-2 ml-4">
          <p
            style={{ borderLeft: "1px solid" }}
            className=" border-gray-200  px-6 "
          ></p>
          <p className="font-normal text-gray-300 text-lg ">
            A simple nerd from Kenya who loves to code! I love talking and
            researching about physics. I love listening to music. I love movies
            and tv shows. I love pretty much all the nerdy things, what I would
            refer to as nerdology. I believe in doing things with passion and
            with all your heart, or not at all! It's like that cool Bill
            Skarsgård line from John Wick, "How you do anything, is how you do
            everything"
          </p>
        </div>
      </animated.div>
      <animated.div style={props} className="flex py-2 flex-col">
        <div className="flex items-center py-2">
          <IoFolderOpen style={{ fontSize: "30px" }} className="mr-2" />
          <h2 className="px-4 text-xl font-semibold">Who I Am ?</h2>
        </div>
        <div className="flex mb-4 py-2 ml-4">
          <p
            style={{ borderLeft: "1px solid" }}
            className=" border-gray-200  px-6 "
          ></p>
          <p className="font-normal text-gray-300 text-lg ">
            A simple nerd from Kenya who loves to code! I love talking and
            researching about physics. I love listening to music. I love movies
            and tv shows. I love pretty much all the nerdy things, what I would
            refer to as nerdology. I believe in doing things with passion and
            with all your heart, or not at all! It's like that cool Bill
            Skarsgård line from John Wick, "How you do anything, is how you do
            everything"
          </p>
        </div>
      </animated.div>
    </div>
  );
}

export default Orandi;
