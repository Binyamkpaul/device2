"use client";
import SocialNetworksHub, {
  SelectDeviceForm,
} from "@/app/(main)/select-device";
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
import Ussd from "./ussd";
import Website from "./website";
import Chatbot from "./chatbot";
import Apps from "./app";
import MyComponent from "./agent";
import Sms from "./sms";
import IVRComponent from "./ivr";
import CallCenterComponent from "./call-center";
import Livechat from "./livechat";

export default function Home() {
  const title = "Find a solution for your Device ";
  return (
    <>
      {/* <SocialLinks /> */}
      {/* <TopNav /> */}
      <hr></hr>
      {/* <Navbar /> */}
      {/* <Nav /> */}

      <hr></hr>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 text-center lg:ml-24 sm:ml-0">
        {/* {title} */}
      </h2>
      <br></br>
      <br></br>

      {/* <div className="container "> */}
      <div className="mx-2 border-lime-500 border-1 rounded-lg p-4">
        <div className="grid grid-cols-3 gap-2">
          <Chatbot />
          <Apps />
          <Website />
          <Ussd />
          <Sms />
          <IVRComponent />
          <SocialNetworksHub />
          <CallCenterComponent />
          <Livechat />
        </div>
      </div>

      {/* <Footer /> */}
    </>
  );
}
