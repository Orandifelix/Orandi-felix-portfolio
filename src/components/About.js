import React, { useState, useEffect } from "react";

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
    <div className="bg-gray-800 w-4/5 m-auto text-white py-10 h-screen">
      <h1 className="  text-4xl font-extrabold">
        Hello, I'm Orandi Felix.
      </h1>
      <h2
        className="w-1/2 text-4xl font-extrabold"
        style={{
          backgroundImage: gradients[visibleIndex],
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {headings[visibleIndex]}
      </h2>
    </div>
  );
}

export default About;


