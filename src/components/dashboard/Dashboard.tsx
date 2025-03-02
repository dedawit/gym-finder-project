import React from "react";
import { NavBar } from "../navbar/NavBar";
import Footer from "../footer/Footer";
import Hero from "../hero/Hero";

export const Dashboard: React.FC = () => {
  return (
    <div>
      <div className="container">
        <NavBar />
      </div>
      <div>
        <Hero />
      </div>
      <Footer />
    </div>
  );
};
