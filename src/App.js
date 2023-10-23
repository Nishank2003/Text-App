import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import About from "./components/About";
import { Route, Routes } from "react-router-dom";
import Error from "./components/Error";
// import Layout from "./pages/Layout";

function App() {
  const [mode, setMode] = useState("light"); // Whether dark mode is enabled or not

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Routes>
        <Route
          path="/"
          element={
            <TextForm heading="Enter the text to analyze below" mode={mode} />
          }
        />
        {/* <div className="container my-3"> */}
        {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
        {/* <Navbar/> */}
        {/* // <TextForm heading="Enter the text to analyze below" mode={mode} /> */}
        {/* </div> */}
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
