"use client";
import React, { useState } from "react";
import {
  useGetBrandsByDeviceId,
  useGetDeviceByDeviceTypeQuery,
  useGetDevices,
  useGetModelsByBrandId,
} from "../devices/devices.query";
import { useForm } from "react-hook-form";
import Image from "next/image";

export function SelectDeviceForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      deviceId: undefined,
      brand: undefined,
      modelId: undefined,
    },
  });

  const { data: devices } = useGetDevices();
  const deviceId = watch("deviceId");
  const brand = watch("brand");
  //   const { data: brands } = useGetBrandsByDeviceId(deviceId);
  const { data: models } = useGetModelsByBrandId(brand);
  const { data: brands } = useGetDeviceByDeviceTypeQuery("ADSL");
  console.log({ models, brand });
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
              <option value="">Select device</option>
              {devices?.map((device: any) => (
                <option key={device.id} value={device.attributes.type}>
                  {device.attributes.type}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="brand" className="block mb-2">
              Brand
            </label>
            <select
              {...register("brand")}
              className="px-4 py-2 border border-gray-300 rounded-md"
            >
              <option value="">Select brand</option>
              {brands?.map((brand: any) => (
                <option key={brand.id} value={brand.attributes.brand}>
                  {brand.attributes.brand}
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
              <option value="">Select Model</option>
              {models?.map((model: any) => (
                <option key={model.id} value={model.attributes.model}>
                  {model.attributes.model}
                </option>
              ))}
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
    </div>
  );
}
