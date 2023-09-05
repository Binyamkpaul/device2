import { queryKeys } from "@/utils//queryConstants";
import axios from "@/utils";
import { useQuery } from "@tanstack/react-query";
import {
  deviceQs,
  filterBrandsByIdQs,
  filterDeviceByIdQs,
  filterGuidsByIdQs,
  filterModelByIdQs,
  filterModelsByBrandIdQs,
} from "./devices.qs";

const URI = `/models`;
export const getAllBrands = () =>
  axios.get(`${URI}?${deviceQs}`).then(({ data }: any) => {
    return data.data;
  });

export const getBrandsById = async (id: number) => {
  const { data } = await axios.get(`${URI}/${id}?${filterBrandsByIdQs(id)}`);
  return data;
};
export const getModelById = async (id: number) => {
  const { data } = await axios.get(`${URI}/${id}?${filterModelByIdQs(id)}`);
  return data;
};
export const getGuideById = async (id: number) => {
  const { data } = await axios.get(`${URI}/${id}?${filterGuidsByIdQs(id)}`);
  return data;
};
export const useGetBrandByIdQuery = (id: number) =>
  useQuery({
    queryFn: () => getBrandsById(id),
    queryKey: [queryKeys.brands, id],
  });
export const useGetModelByIdQuery = (id: number) =>
  useQuery({
    queryFn: () => getModelById(id),
    queryKey: [queryKeys.brands, id],
  });
export const useGetGuideByIdQuery = (id: number) =>
  useQuery({
    queryFn: () => getGuideById(id),
    queryKey: [queryKeys.brands, id],
  });
export const useGetBrandsQuery = () =>
  useQuery({
    queryFn: getAllBrands,
    queryKey: [queryKeys.brands],
  });
