"use client";
import { SelectDeviceForm } from "@/app/(main)/select-device";
import { GuideList } from "../guides/GuideList";
import GuidesList from "./guides";
import GuidesCategories from "./guides-categories";
import Form from "./form";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import DeviceList from "@/components/devices/devices-list";
import Rating from "./rating";
import RatingsView from "./RatingForm";
import LattesModelsComponent from "@/components/LattesModelsComponent";
import Nav from "@/components/common/Nav";

export default function Home() {
  const title = "Find a solution for your Device ";
  return (
    <>
      {/* <SocialLinks /> */}
      {/* <TopNav /> */}
      <hr></hr>
      <Navbar />
      {/* <Nav /> */}

      <hr></hr>
      <br></br>
      <br></br>
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 text-center lg:ml-24 sm:ml-0">
        {title}
      </h2>
      {/* <div className="container "> */}
      <SelectDeviceForm />

      {/* <Form /> */}
      {/* <GuidesCategories /> */}
      <GuidesList />
      {/* <LattesModelsComponent /> */}

      {/* </div> */}

      {/* <AppScree-n /> */}
      {/* <DeviceList /> */}
      {/* <Rating />
      <RatingsView /> */}
      {/* <StepList /> */}
      {/* <Steps /> */}
      <Footer />
    </>
  );
}
