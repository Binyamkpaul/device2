"use client";
import Image from "next/image";
import Navbar from "@/components/common/Navbar";
import SocialLinks from "@/components/common/SocialLinks";
// import AppScreen from "./devices/AppScreen";
import TopNav from "@/components/common/TopNav";
import { SelectDeviceForm } from "@/components/devices/select-device-form";
import Footer from "@/components/common/Footer";
import StepList from "@/components/steps/StepList";
import DeviceList from "@/components/devices/devices-list";

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
      <SelectDeviceForm />

      {/* <AppScree-n /> */}
      <DeviceList />
      {/* <StepList /> */}
      {/* <Steps /> */}
      <Footer />
    </>
  );
}
