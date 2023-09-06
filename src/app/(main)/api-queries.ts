import { queryKeys } from "@/utils/queryConstants";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "@/utils";
import _ from "lodash";

// All Devices
export const useGetDevices = () =>
  useQuery({
    queryKey: [queryKeys.devices],
    queryFn: async () => {
      const { data } = await axios.get("/devices");
      return data?.data;
    },
  });
// Device Post method
// export const useCreateDevice = () => {
//   return useMutation((deviceData) => axios.post("/devices", deviceData));
// };

// Brands per device
export const useGetBrandsByDeviceIdQuery = (deviceId?: number) =>
  useQuery({
    queryKey: [queryKeys.brands, deviceId],
    queryFn: async () => {
      const { data } = await axios.get(`/devices/${deviceId}?populate=brands`);
      return data?.data?.attributes?.brands?.data;
    },
    enabled: !!deviceId,
  });

// Models per brand

export const useGetModelsByBrandIdQuery = (brandId?: number) =>
  useQuery({
    queryKey: [queryKeys.models, brandId],
    queryFn: async () => {
      const { data } = await axios.get(`/brands/${brandId}?populate=models`);
      return data?.data?.attributes?.models?.data;
    },
    enabled: !!brandId,
  });

// Guides per model
export const useGetGuidesByModelIdQuery = (modelId?: number) =>
  useQuery({
    queryKey: [queryKeys.guides, modelId],
    queryFn: async () => {
      const { data } = await axios.get(`/models/${modelId}?populate=guides`);
      const guides = data?.data?.attributes?.guides?.data ?? [];
      const categories = _.chain(guides).groupBy("attributes.category").value();
      return { guides, categories };
    },
    enabled: !!modelId,
  });

// Steps per guide
export const useGetStepsByGuideIdQuery = (guideId?: number) =>
  useQuery({
    queryKey: [queryKeys.steps, guideId],
    queryFn: async () => {
      const { data } = await axios.get(
        `/guides/${guideId}?populate=steps.screenshot.media`
      );
      return data?.data?.attributes?.steps?.data;
    },
    enabled: !!guideId,
  });
