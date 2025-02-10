import React from "react";
import Hero from "./Hero";
import Form from "./Form";
import Contact from "./Contact";

const Mainpage = () => {
  return (
    <div className="py-32">
      <Hero />
      <Form />
      <Contact />
    </div>
  );
};

export default Mainpage;
