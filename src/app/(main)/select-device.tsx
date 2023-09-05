"use client";
import React, { useEffect } from "react";
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
  console.log(
    "🚀 ~ file: select-device.tsx:32 ~ SelectDeviceForm ~ modelId:",
    modelId
  );
  const { data: brands } = useGetBrandsByDeviceIdQuery(deviceId);
  const { data: models } = useGetModelsByBrandIdQuery(brandId);

  useEffect(() => {
    setSelectedModel(modelId);
  }, [modelId, setSelectedModel]);

  return (
    <>
      <div className="mt-6 flex justify-center space-x-4">
        <div className="hidden sm:block">
          <Image
            src="https://www.ethiotelecom.et/wp-content/uploads/2022/04/SLT869-A51-300x176.jpg"
            alt="Device"
            height={300}
            width={300}
            className="w-64 h-auto"
          />
        </div>
        <form className="mt-4 space-y-4">
          <div className="flex flex-col sm:flex-row sm:space-x-4">
            <div>
              <label htmlFor="deviceId" className="block mb-2">
                Device
              </label>
              <select
                {...register("deviceId")}
                className="px-4 py-2 border border-gray-300 rounded-md"
              >
                <option value="">Select</option>
                {devices?.map((device: any) => (
                  <option key={device.id} value={device.id}>
                    {device.attributes.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="brandId" className="block mb-2">
                Brand
              </label>
              <select
                {...register("brandId")}
                className="px-4 py-2 border border-gray-300 rounded-md"
              >
                <option value="">Select brand</option>
                {brands?.map((brand: any) => (
                  <option key={brand.id} value={brand.id}>
                    {brand?.attributes?.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="modelId" className="block mb-2">
                Model
              </label>
              <select
                {...register("modelId")}
                className="px-4 py-2 border border-gray-300 rounded-md"
              >
                <option value="">Select brand</option>
                {models?.map((model: any) => (
                  <option key={model.id} value={model.id}>
                    {model?.attributes?.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* <button
            type="submit"
            className="px-4 py-2 text-white bg-blue-500 rounded-md"
          >
            Submit
          </button> */}
        </form>
      </div>
      {/* <GuideList id={modelId ?? 0} /> */}
      {/* <div className="mt-4">
        <StepList id={modelId ?? 0} />
      </div> */}
      {/* <GuideList /> */}
    </>
  );
}
