import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import {
  useGetBrandsByDeviceIdQuery,
  useGetDevices,
  useGetModelsByBrandIdQuery,
} from "./api-queries";
import { useSetAtom } from "jotai";
import { selectedModelAtom } from "@/store";

export function SelectDeviceForm() {
  const setSelectedModel = useSetAtom(selectedModelAtom);
  const [selectedModelName, setSelectedModelName] = useState("");
  const [selectedBrandName, setSelectedBrandName] = useState("");
  const [guideFetched, setGuideFetched] = useState(false);

  const {
    register,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      deviceId: undefined,
      brandId: undefined,
      modelId: undefined,
    },
  });

  const { data: devices } = useGetDevices();
  const deviceId = watch("deviceId");
  const brandId = watch("brandId");
  const modelId = watch("modelId");

  const { data: brands } = useGetBrandsByDeviceIdQuery(deviceId);
  const { data: models } = useGetModelsByBrandIdQuery(brandId);

  useEffect(() => {
    setSelectedModel(modelId);
    setGuideFetched(false);
  }, [modelId, setSelectedModel]);

  useEffect(() => {
    if (modelId && brandId) {
      setTimeout(() => {
        setGuideFetched(true);
        const selectedModelData = models?.find(
          (model: any) => model.id === parseInt(modelId)
        );
        setSelectedModelName(selectedModelData?.attributes?.name || "");

        const selectedBrand = brands?.find(
          (brand: any) => brand.id === parseInt(brandId)
        );
        if (selectedBrand) {
          setSelectedBrandName(selectedBrand.attributes?.name || "");
        }
      }, 2000);
    }
  }, [modelId, models, brandId, brands]);
  const title = "Find a solution for your Device ";
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768); // Adjust the screen width as needed
    };

    // Add event listener to update screen size when the window is resized
    window.addEventListener("resize", handleResize);

    // Initial check on component mount
    handleResize();

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
    // style={{
    //   background:
    //     'rgba(255, 255, 255, 0.8) url("https://img.freepik.com/premium-vector/abstract-background-with-wavy-lines-white-background-abstract-gradient-background-design_745217-70.jpg?w=900") repeat', // Adjust alpha (transparency) value as needed
    // }}
    >
      <br></br>
      <h2 className="text-2xl font-bold tracking-tight text-lime-500 text-center lg:ml-24 sm:ml-0 p-2">
        {title}
      </h2>

      <div
        className={`mt-6 pt-4 ${
          isSmallScreen ? "" : "bg-gray-100"
        } rounded-xl flex justify-center space-x-4 ml-32 mr-32 ${
          isSmallScreen ? "" : "border-2 border-gray-300"
        }`}
      >
        <div className="hidden sm:block">
          <Image
            src="https://friendtok.com/first_bg-removebg-preview.png"
            alt="Device"
            height={400}
            width={600}
            className="w-80 h-auto ps-14"
          />
        </div>
        <form className="mt-4 space-y-4">
          <div className="flex flex-col sm:flex-row sm:space-x-4">
            <div>
              <label htmlFor="deviceId" className="block text-gray-500">
                Device Type
              </label>
              <select
                {...register("deviceId")}
                id="deviceId"
                className="form-select mt-4 space-y-4 rounded border border-gray-400"
                style={{ width: "200px" }}
              >
                <option value="">Select Device</option>
                {devices?.map((device: any) => (
                  <option key={device.id} value={device.id}>
                    {device.attributes.name}
                  </option>
                ))}
              </select>
            </div>
            <br></br>
            <div>
              <label htmlFor="brandId" className="block text-gray-500">
                Brand
              </label>
              <select
                {...register("brandId")}
                id="brandId"
                className="form-select mt-4 space-y-4 rounded border border-gray-400 select-width"
                style={{ width: "200px" }}
              >
                <option value="">Select brand</option>
                {brands?.map((brand: any) => (
                  <option key={brand.id} value={brand.id}>
                    {brand?.attributes?.name}
                  </option>
                ))}
              </select>
            </div>
            <br></br>
            <div>
              <label htmlFor="modelId" className="block text-gray-500">
                Model
              </label>
              <select
                {...register("modelId")}
                id="modelId"
                className="form-select mt-4 space-y-4 rounded border border-gray-400 select-width"
                style={{ width: "200px" }}
              >
                <option value="">Select model</option>
                {models?.map((model: any) => (
                  <option key={model.id} value={model.id}>
                    {model?.attributes?.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </form>
      </div>
      <br></br>
      {!guideFetched && (
        <div className="hidden sm:block ml-32">
          <Image
            src="https://friendtok.com/Screenshot%202023-10-21%20090932.png"
            alt="Device"
            height={700}
            width={1000}
            className="w-85 h-auto ps-50"
          />
        </div>
      )}
      {guideFetched && (
        <div className="mt-4 text-center">
          <h1 className="text-4xl font-bold text-blue-500 ">
            <span className="transition-transform inline-block">
              {selectedBrandName}
            </span>{" "}
            <span className="transition-transform inline-block">
              {selectedModelName}
            </span>
          </h1>
        </div>
      )}
    </div>
  );
}
