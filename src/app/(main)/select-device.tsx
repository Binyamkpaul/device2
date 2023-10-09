import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import {
  useGetBrandsByDeviceIdQuery,
  useGetDevices,
  useGetModelsByBrandIdQuery,
  useGetGuide,
} from "./api-queries";
import { useSetAtom } from "jotai";
import { selectedModelAtom } from "@/store";

export function SelectDeviceForm() {
  const setSelectedModel = useSetAtom(selectedModelAtom);
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
  const { data: guide } = useGetGuide(modelId);

  useEffect(() => {
    setSelectedModel(modelId);
    setGuideFetched(false);
  }, [modelId, setSelectedModel]);

  useEffect(() => {
    if (guide) {
      setGuideFetched(true);
    }
  }, [guide]);

  return (
    <>
      <div className="mt-6 flex justify-center space-x-4 mr-16">
        <div className="hidden sm:block">
          <Image
            src="https://m.media-amazon.com/images/I/416hJsPKR3L.jpg"
            alt="Device"
            height={300}
            width={300}
            className="w-64 h-auto ps-14"
          />
        </div>
        <form className="mt-4 space-y-4">
          <div className="flex flex-col sm:flex-row sm:space-x-4">
            <div>
              <label htmlFor="deviceId" className="block mb-2 text-gray-500">
                Device Type
              </label>
              <select
                {...register("deviceId")}
                id="deviceId"
                className="form-select mt-4 space-y-4 rounded border border-gray-400"
              >
                <option value="">Select Device</option>
                {devices?.map((device: any) => (
                  <option key={device.id} value={device.id}>
                    {device.attributes.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="brandId" className="block mb-2 text-gray-500">
                Brand
              </label>
              <select
                {...register("brandId")}
                id="brandId"
                className="form-select mt-4 space-y-4 rounded border border-gray-400"
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
              <label htmlFor="modelId" className="block mb-2 text-gray-500">
                Model
              </label>
              <select
                {...register("modelId")}
                id="modelId"
                className="form-select mt-4 space-y-4 rounded border border-gray-400"
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

      {guideFetched && (
        <div className="mt-4">
          <h1 className="text-2xl">Test</h1>
        </div>
      )}
    </>
  );
}
