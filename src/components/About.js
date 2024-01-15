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
    <div className="bg-gray-800 w-4/5 m-auto grid grid-cols-2 gap-6 text-white py-10 h-screen">
      <div>
        <h1 className="  text-4xl font-extrabold">Hello, I'm Orandi Felix.</h1>
        <h2
          className=" text-4xl font-extrabold"
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
            transform: "rotate(5deg)",
            margin: "auto",
            borderRadius: "10px",
          }}
        />
        <div>
          <h2>Follow On X</h2>
          <h2>Follow On Github</h2>
          <h2>Follow On LinkedIn</h2>
          <h2>Follow On Youtube</h2>
          <h2>Follow On Twitch</h2>
          <h2>felixorandi@gmail.com</h2>
        </div>
      </div>
    </div>
  );
}

export default About;
