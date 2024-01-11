import React from 'react'
import { FaCode } from "react-icons/fa";
import { FaHardDrive } from "react-icons/fa6";
import { FcAndroidOs } from "react-icons/fc";
import { HiRocketLaunch } from "react-icons/hi2";

function Skills() {
  return (
    <div>
      <p className="mb-6 text-2xl font-bold mt-6">Skills and experience</p>
      <div className="grid grid-cols-2 gap-10">
        <div
          style={{ border: "1px solid grey" }}
          className="flex flex-col items-center justify-center  p-6 rounded-lg mb-6"
        >
          <FaCode
            style={{
              fontSize: "58px",
              alignSelf: "center",
              color: "rgb(248,113,113)",
            }}
          />
          <h3 className="text-xl p-2 font-bold">Frontend developer</h3>
          <ul className="list-disc pl-6">
            <li>
              Building dynamic user interfaces with React using components,
              state management with hooks, and efficient navigation with React
              Router.
            </li>
            <li>
              Implementing a global state management system with Redux to ensure
              seamless data flow across complex React applications.
            </li>
            <li>
              Enhancing code reliability and development efficiency by
              incorporating TypeScript's strong typing into React projects.
            </li>
            <li>
              Leveraging the Next.js framework for React to achieve server-side
              rendering, static site generation, and efficient data fetching.
            </li>
            <li>
              Crafting visually appealing and responsive user interfaces by
              applying styling techniques, including CSS-in-JS libraries and
              utility-first CSS frameworks.
            </li>
          </ul>
        </div>
        <div
          style={{ border: "1px solid grey" }}
          className="flex flex-col items-center justify-center   p-6 rounded-lg mb-6 "
        >
          <FaHardDrive
            style={{
              fontSize: "44px",
              alignSelf: "center",
              color: "rgb(74,222,128)",
            }}
          />
          <h3 className="text-xl p-2 font-bold">Backend developer</h3>
          <ul className="list-disc pl-6">
            <li>
              Building robust web applications using Ruby, a dynamic and
              object-oriented programming language.
            </li>
            <li>
              Creating lightweight web applications with Sinatra, a minimalistic
              Ruby web framework, for rapid development.
            </li>
            <li>
              Developing feature-rich and scalable web applications with Ruby on
              Rails, a full-stack web application framework.
            </li>
            <li>
              Integrating Ruby on Rails with React for full-stack applications,
              ensuring seamless communication between the frontend and backend.
            </li>
            <li>
              Implementing full-stack solutions by integrating Ruby-Sinatra with
              React, combining the simplicity of Sinatra with the flexibility of
              React.
            </li>
            <li>
              Utilizing PostgreSQL, MySQL3, and SQL for efficient database
              management and data storage in web applications.
            </li>
          </ul>
        </div>
        <div
          style={{ border: "1px solid grey" }}
          className="flex flex-col items-center justify-center   p-6 rounded-lg mb-6"
        >
          <FcAndroidOs style={{ fontSize: "58px", alignSelf: "center" }} />
          <h3 className="text-xl p-2 font-bold"> App Developer </h3>
          <ul className="list-disc pl-6">
            <li>
              Expertise in React Native for cross-platform mobile app
              development, enabling efficient code sharing between iOS and
              Android platforms.
            </li>
            <li>
              Proficient in utilizing Expo to streamline the development
              process, providing tools and services for faster and easier app
              creation.
            </li>
            <li>
              Experience in creating wireframes and prototypes using tools like
              Figma to plan and visualize app interfaces before development.
            </li>
            <li>
              Knowledge of integrating additional libraries and packages with
              React Native to enhance app functionality and features.
            </li>
            <li>
              Understanding of mobile app optimization techniques to ensure
              smooth performance and responsiveness.
            </li>
          </ul>
        </div>
        <div
          style={{ border: "1px solid grey" }}
          className="flex flex-col items-center justify-center   p-6 rounded-lg mb-6 "
        >
          <HiRocketLaunch
            style={{
              fontSize: "48px",
              alignSelf: "center",
              color: "rgb(221,56,69)",
            }}
          />
          <h3 className="text-xl p-2 font-bold">
            {" "}
            Innovations & Explorations{" "}
          </h3>
          <ul className="list-disc pl-6">
            <li>
              Researching on user communication and tech success to unravel key
              points for enhancing user experiences and product success.
            </li>
            <li>
              Continuously building and deploying full-stack applications with
              seamless integration across diverse platforms like maps, payments,
              and more. Leveraging both frontend and backend technologies for
              robust and efficient solutions.
            </li>
            <li>
              Engaged in continuous personal studies on cutting-edge cloud
              technologies to stay ahead of trends and advancements in cloud
              computing.
            </li>
            <li>
              Delving into the realms of AI and machine learning to explore
              their applications and potential impact on future technologies.
            </li>
            <li>
              Ongoing studies and exploration in UI and UX, aiming to refine
              design skills and create captivating user interfaces that elevate
              digital experiences.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills