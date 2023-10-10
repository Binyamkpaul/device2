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
              <label htmlFor="brandId" className="block mb-2 text-gray-500">
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
              <label htmlFor="modelId" className="block mb-2 text-gray-500">
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
      {guideFetched && (
        <div className="mt-4 text-center">
          <h1 className="text-4xl font-bold text-blue-500">
            {selectedBrandName} {selectedModelName}
          </h1>
        </div>
      )}
    </>
  );
}
