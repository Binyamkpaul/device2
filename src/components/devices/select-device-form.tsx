"use client";
import React, { useState } from "react";
import {
  useGetBrandsByDeviceIdQuery,
  useGetDevices,
  useGetModelsByBrandIdQuery,
  useGetModelsByDeviceIdQuery,
} from "./devices.react.query";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { useGetBrandByIdQuery } from "./brands.react.query";
import { GuideList } from "@/app/guides/GuideList";

export function SelectDeviceForm() {
  const {
    register,
    handleSubmit,
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
  // const { data: brands } = useGetDeviceByDeviceTypeQuery("Fixed Broadband");
  const { data: models } = useGetModelsByBrandIdQuery(brandId);
  const { data: deviceDataById } = useGetBrandsByDeviceIdQuery(deviceId ?? 0);
  const { data: brandsDataById } = useGetBrandByIdQuery(brandId ?? 0);
  // console.log({ brandsData: deviceDataById, deviceId });
  console.log({ brandId, deviceId, brandsDataById });
  const onSubmit = (data: any) => console.log(data);

  return (
    <div className="mt-6 flex justify-center">
      <Image
        src="https://simulator-devicecare.etisalat.ae/WebApp/img/Smartphones-Laptops.jpg"
        alt="Device"
        height={300}
        width={300}
        className="w-64 h-auto"
      />

      <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-4">
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
              {deviceDataById?.data?.attributes?.brands?.data.map(
                (brand: any) => (
                  <option key={brand.id} value={brand.id}>
                    {brand?.attributes?.name}
                  </option>
                )
              )}
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
              {brandsDataById?.data?.attributes?.models?.data?.map(
                (model: any) => (
                  <option key={model.id} value={model.id}>
                    {model?.attributes?.name}
                  </option>
                )
              )}
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="px-4 py-2 text-white bg-blue-500 rounded-md"
        >
          Submit
        </button>
      </form>
      {/* <GuideList id={modelId ?? 0} /> */}
    </div>
  );
}
