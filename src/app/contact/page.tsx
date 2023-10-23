"use client";
import Footer from "@/components/common/Footer";
import Nav from "@/components/common/Navbar";
import React from "react";
import Contact from "./contactus";

const page = () => {
  return (
    <div>
      <Nav />
      <br></br>
      <Contact />
      <Footer />
    </div>
  );
};

export default page;
