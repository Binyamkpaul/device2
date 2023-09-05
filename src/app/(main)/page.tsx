// import Navbar from "@/components/common/Navbar";
// import AppScreen from "./devices/AppScreen";
import { SelectDeviceForm } from "@/app/(main)/select-device";
import { GuideList } from "../guides/GuideList";
import GuidesList from "./guides";
import GuidesCategories from "./guides-categories";
// import Footer from "@/components/common/Footer";

export default function Home() {
  const title = "Find a solution for your device ";
  return (
    <>
      {/* <SocialLinks /> */}
      {/* <TopNav /> */}
      <hr></hr>
      {/* <Navbar /> */}

      <hr></hr>
      <br></br>
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 text-center">
        {title}
      </h2>
      <SelectDeviceForm />
      <GuidesCategories />
      <GuidesList />

      {/* <AppScree-n /> */}
      {/* <DeviceList /> */}
      {/* <StepList /> */}
      {/* <Steps /> */}
      {/* <Footer /> */}
    </>
  );
}
