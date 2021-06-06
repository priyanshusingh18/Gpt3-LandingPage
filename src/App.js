import React from "react";
import Blog from "./components/containers/blog/Blog";
import Footer from "./components/containers/footer/Footer";
import Header from "./components/containers/header/Header";
import Features from "./components/containers/features/Features";
import Possibility from "./components/containers/possibility/Possibility";
import WhatGPT3 from "./components/containers/whatGPT3/WhatGPT3";
import CTA from "./components/cta/CTA";
import Brand from "./components/brand/Brand";
import Navbar from "./components/navbar/Navbar";

import "./App.css";
import "./index.css";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
