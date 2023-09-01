"use client";
import Image from "next/image";
import Navbar from "./components/commen/Navbar";
import SocialLinks from "./components/commen/SocialLinks";
// import AppScreen from "./devices/AppScreen";
import TopNav from "./components/commen/TopNav";
import Filter from "./components/filter/Filter";
import Footer from "./components/commen/Footer";
import StepList from "./components/steps/StepList";
import DeviceList from "./devices/DeviceList";

export default function Home() {
  const title = "Find a solution for your device ";
  return (
    <>
      {/* <SocialLinks /> */}
      <TopNav />
      <hr></hr>
      <Navbar />

      <hr></hr>
      <br></br>
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 text-center">
        {title}
      </h2>
      <Filter />

      {/* <AppScree-n /> */}
      <DeviceList />
      {/* <StepList /> */}
      {/* <Steps /> */}
      <Footer />
    </>
  );
}
