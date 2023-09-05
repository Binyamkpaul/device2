import { queryKeys } from "@/utils//queryConstants";
import axios from "@/utils";
import { useQuery } from "@tanstack/react-query";
import {
  deviceQs,
  filterBrandsByIdQs,
  filterDeviceByIdQs,
  filterModelsByBrandIdQs,
} from "./devices.qs";

const URI = `/devices`;
export const getAllDevices = () =>
  axios.get(`${URI}?${deviceQs}`).then(({ data }: any) => {
    return data.data;
  });

export const getBrandsByDeviceId = async (id: number) => {
  const { data } = await axios.get(`${URI}/${id}?${filterDeviceByIdQs(id)}`);
  return data;
};
export const getDeviceById = async (id: number) => {
  const { data } = await axios.get(`${URI}/${id}?${filterDeviceByIdQs(id)}`);
  return data;
};
export const getModelsByBrandId = async (id: number) => {
  const { data } = await axios.get(
    `${URI}/${id}?${filterModelsByBrandIdQs(id)}`
  );
  return data;
};
// export const getDeviceByDeviceType = (type: string) =>
//   axios
//     .get(`${URI}?${filterDeviceByDeviceTypeQs(type)}`)
//     .then(({ data }: any) => {
//       return data.data;
//     });

export const useGetDevices = () =>
  useQuery({
    queryFn: getAllDevices,
    queryKey: [queryKeys.devices],
  });

export const useGetBrandsByDeviceIdQuery = (id: number) =>
  useQuery({
    queryKey: [queryKeys.devices, id],
    queryFn: () => getBrandsByDeviceId(id),
  });
export const useGetModelsByDeviceIdQuery = (id: number) =>
  useQuery({
    queryKey: [queryKeys.devices, id],
    queryFn: () => getDeviceById(id),
  });
// export const useGetBrandsByDeviceId = (deviceId?: number) =>
//   useQuery({
//     queryKey: [queryKeys.brands, deviceId],
//     queryFn: getAllDevices,
//     enabled: !!deviceId,
//   });
// export const useGetDeviceByDeviceTypeQuery = (type: string) =>
//   useQuery({
//     queryKey: [queryKeys.devices, type],
//     queryFn: () => getDeviceByDeviceType(type),
//   });
export const useGetModelsByBrandIdQuery = (brandId?: number) =>
  useQuery({
    queryKey: [queryKeys.models, brandId],
    queryFn: getAllDevices,
  });
