"use client";
import Footer from "@/components/common/Footer";
import Nav from "@/components/common/Navbar";
import React from "react";
import Term from "./term";
import TermsAndConditions from "./term";

const page = () => {
  return (
    <div>
      <Nav />
      <TermsAndConditions />
      <Footer />
    </div>
  );
};

export default page;
