import { queryKeys } from "@/utils/queryConstants";
import { useQuery } from "@tanstack/react-query";
import axios from "@/utils";

// All devices
export const useGetDevices = () =>
  useQuery({
    queryKey: [queryKeys.devices],
    queryFn: async () => {
      const { data } = await axios.get("/devices");
      return data?.data;
    },
  });

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
      console.log("🚀 ~ file: api-queries.ts:45 ~ queryFn: ~ data:", data);
      return data?.data?.attributes?.guides?.data;
    },
    enabled: !!modelId,
  });

// Steps per guide
export const useGetStepsByGuideIdQuery = (guideId?: number) =>
  useQuery({
    queryKey: [queryKeys.steps, guideId],
    queryFn: async () => {
      const { data } = await axios.get(`/guides/${guideId}?populate=steps`);
      return data?.data?.attributes?.steps?.data;
    },
    enabled: !!guideId,
  });
// Feaching Catagories
export const useGetcatagoriesByModelIdQuery = (modelId?: number) =>
  useQuery({
    queryKey: [queryKeys.catagories, modelId],
    queryFn: async () => {
      const { data } = await axios.get(`/guides/${modelId}?populate=steps`);
      return data?.data?.attributes?.steps?.data;
    },
    enabled: !!modelId,
  });
