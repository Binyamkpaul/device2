import { queryKeys } from "@/utils/queryConstants";
import {
  QueryCache,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import axios from "@/utils";
import _ from "lodash";

interface Rating {
  id: number;
  ratingValue: number;
  comment: string;
  guidesId?: number[];
  relevant: boolean;
  ces: number;
  csat: number;
  nps: number;
}

// All Devices
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

//All models
export const useGetModels = () =>
  useQuery({
    queryKey: [queryKeys.models],
    queryFn: async () => {
      const { data } = await axios.get("/models");
      return data?.data;
    },
  });
// all rating
export const useGetRatingsByGuideIdQuery = (guideId?: number) =>
  useQuery({
    queryKey: ["ratings", guideId],
    queryFn: async () => {
      const { data } = await axios.get(`/guides/${guideId}?populate=ratings`);
      return data?.data?.attributes?.ratings?.data;
    },
    enabled: !!guideId,
  });

//post method

export const useSubmitRatingMutation = () => {
  return useMutation(
    async ({
      guideId,
      rating,
      modelId,
    }: {
      guideId: number;
      rating: any;
      modelId: any;
    }) => {
      const { relevant, ces, csat, nps } = rating;
      console.log("🚀 ~ file: api-queries.ts:106 ~ rating:", rating);

      const response = await axios.post("/ratings", {
        data: {
          guide: guideId,
          model: modelId,
          relevant: relevant,
          ces: ces,
          csat: csat,
          nps: nps,
        },
      });
      return response.data;
    }
  );
};
// export const useSubmitRatingMutation = () => {
//   return useMutation(
//     async ({
//       guideId,
//       ces,
//       csat,
//       nps,
//     }: {
//       guideId: number;
//       ces: number;
//       csat: number;
//       nps: number;
//     }) => {
//       try {
//         const response = await axios.post("/ratings", {
//           guideId: guideId,
//           ces: ces,
//           csat: csat,
//           nps: nps,
//         });

//         return response.data;
//       } catch (error) {
//         throw new Error("Error submitting rating");
//       }
//     }
//   );
// };
//lattest devices

// export const useLattesModels = () => {
//   const queryClient = useQueryClient();

//   return useQuery(
//     ["models"],
//     async () => {
//       const { data } = await axios.get("/models");
//       const devices = data?.data || [];

//       // Filter devices with favorite selection of "yes"
//       const favoriteDevices = devices.filter(
//         (models: { favorite: any }) => models.attributes.favorite === "yes"
//       );

//       return favoriteDevices;
//     },
//     {
//       onSuccess: (data) => {
//         queryClient.setQueryData("models", data);
//       },
//     }
//   );
// };
export const useLattesModels = () =>
  useQuery({
    queryKey: [queryKeys.models],
    queryFn: async () => {
      const { data } = await axios.get("/models", {
        params: {
          _where: {
            favorite: "yes",
          },
        },
      });
      const models = data?.data || [];

      return models;
    },
  });
