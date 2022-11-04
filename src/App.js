import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./components/about-us";
import ContactUs from "./components/contact-us";
import Home from "./components/home";
import Login from "./components/login";
import HeaderNavigation from "./components/navigation";
import Plans from "./components/plans";
import Register from "./components/register";

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
    </Router>
  );
}

export default App;
