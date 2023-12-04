import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/landing-page/home";
import About from "./pages/landing-page/about";
import Contact from "./pages/landing-page/contact";
import Login from "./pages/landing-page/login";

export const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Router>
    </>
  );
};
export default App;
