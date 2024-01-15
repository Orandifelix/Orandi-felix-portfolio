// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "./App.css";
// import NavBar from "./components/NavBar";
// import Home from "./components/Home";
// import About from "./components/About";
// import Blog from "./components/Blog";
// import Projects from "./components/Projects";
// import Uses from "./components/Uses";
// import Footer from "./components/Footer";

// function App() {
//   return (
//     <Router>
//       <div className="h-fit  bg-gray-800">
//         <div className="w-4/5 m-auto pb-12">
//           <NavBar />
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/blog" element={<Blog />} />
//             <Route path="/projects" element={<Projects />} />
//             <Route path="/uses" element={<Uses />} />
//           </Routes>
//           <Footer />
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Blog from "./components/Blog";
import Projects from "./components/Projects";
import Uses from "./components/Uses";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="h-fit bg-gray-800">
        <div className="w-80% m-auto pb-12">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/uses" element={<Uses />} />
          </Routes>
          <hr className="border-t my-4 w-11/12 m-auto" />
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
