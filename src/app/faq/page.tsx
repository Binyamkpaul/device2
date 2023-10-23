"use client";
import Footer from "@/components/common/Footer";
import Nav from "@/components/common/Navbar";
import React from "react";
import FAQ from "./faq";

const page = () => {
  return (
    <div>
      <Nav />
      <FAQ />
      <Footer />
    </div>
  );
};

export default page;
