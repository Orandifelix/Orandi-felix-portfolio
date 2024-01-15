import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaYoutube, FaTwitch } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdAttachEmail } from "react-icons/md";

function About() {
  const headings = [
    "Fullstack Developer",
    "Mobile App Developer",
    "JavaScript Developer",
    "Ruby & Ruby On Rails Developer",
    "Corporate and Health Communication Strategist",
    "User and Customer Success Enthusiast",
  ];

  const gradients = [
    "linear-gradient(45deg, #FF5733, #FFD700)",
    "linear-gradient(45deg, #33FF57, #FFD700)",
    "linear-gradient(45deg, #5733FF, #FFD700)",
    "linear-gradient(45deg, #33A6FF, #FFD700)",
    "linear-gradient(45deg, #FF33A6, #FFD700)",
    "linear-gradient(45deg, #A6FF33, #FFD700)",
  ];

  const [visibleIndex, setVisibleIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setVisibleIndex((prevIndex) => (prevIndex + 1) % headings.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [headings.length]);

  return (
    <div className="bg-gray-800 w-4/5 m-auto grid grid-cols-2 gap-6 text-white py-10 ">
      <div>
        <h1 className="text-4xl font-extrabold">Hello, I'm Orandi Felix.</h1>
        <h2
          className="text-4xl font-extrabold"
          style={{
            backgroundImage: gradients[visibleIndex],
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {headings[visibleIndex]}
        </h2>
      </div>
      <div className="flex items-center flex-col justify-center">
        <img
          src="https://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg?w=740&t=st=1705307889~exp=1705308489~hmac=5dccedb32e8b465d4f77ae5bb055bc0104771fdae215af1ac80fe4bdef27bb5f"
          alt="avatar"
          style={{
            width: "300px",
            height: "350px",
            transform: "rotate(6deg)",
            margin: "auto",
            borderRadius: "10px",
          }}
        />
        <div className="mt-20 flex flex-col gap-4">
          <a
            className="flex text-lg font-semibold items-center hover:text-teal-600"
            href="https://github.com/Orandifelix"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={20} className="mx-2" />
            <span> Follow On Github</span>
          </a>

          <a
            className="flex text-lg font-semibold items-center hover:text-teal-600"
            href="https://www.linkedin.com/in/orandi-felix"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={20} className="mx-2" />
            <span> Follow On LinkedIn</span>
          </a>
          <a
            className="flex text-lg font-semibold items-center hover:text-teal-600"
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube size={20} className="mx-2" />
            <span> Follow On Youtube</span>
          </a>
          <a
            className="flex text-lg font-semibold items-center hover:text-teal-600"
            href="https://twitter.com/fel_rand"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter size={20} className="mx-2" />
            <span> Follow On X</span>
          </a>
          <a
            className="flex text-lg font-semibold items-center hover:text-teal-600"
            href="https://www.twitch.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitch size={20} className="mx-2" />
            <span> Follow On Twitch</span>
          </a>

          <a
            className="flex text-lg font-semibold items-center hover:text-teal-600 my-10"
            href="https://www.gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MdAttachEmail size={20} className="mx-2" />
            <span> felixorandi@gmail.com</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
