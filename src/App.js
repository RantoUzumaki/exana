import React from "react";
import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./components/about-us";
import ContactUs from "./components/contact-us";
import Home from "./components/home";
import Login from "./components/login";
import HeaderNavigation from "./components/navigation";
import Plans from "./components/plans";
import Register from "./components/register";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <HeaderNavigation />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </Router>
  );
}

export default App;
