import { queryKeys } from "@/utils//queryConstants";
import axios from "@/utils";
import { useQuery } from "@tanstack/react-query";
import qs from "qs";

const deviceQueryStr = qs.stringify(
  {
    populate: {
      models: true,
    },
  },
  {
    encodeValuesOnly: true,
  }
);
const filterDeviceByDeviceTypeQs = (type: string) =>
  qs.stringify(
    {
      filters: {
        type: {
          $eq: type,
        },
      },
      populate: {
        models: true,
      },
    },
    {
      encodeValuesOnly: true,
    }
  );

const URI = `/devices`;
export const getAllDevices = () =>
  axios.get(`${URI}?${deviceQueryStr}`).then(({ data }: any) => {
    return data.data;
  });

export const getDeviceById = (id: number) =>
  axios.get(`${URI}/${id}?${deviceQueryStr}`).then(({ data }: any) => {
    return data.data;
  });
export const getDeviceByDeviceType = (type: string) =>
  axios
    .get(`${URI}?${filterDeviceByDeviceTypeQs(type)}`)
    .then(({ data }: any) => {
      return data.data;
    });

export const useGetDevices = () =>
  useQuery({
    queryFn: getAllDevices,
    queryKey: [queryKeys.devices],
  });

export const useGetDeviceById = (id: number) =>
  useQuery({
    queryKey: [queryKeys.devices, id],
    queryFn: () => getDeviceById(id),
  });
export const useGetBrandsByDeviceId = (deviceId?: number) =>
  useQuery({
    queryKey: [queryKeys.brands, deviceId],
    queryFn: getAllDevices,
    enabled: !!deviceId,
  });
export const useGetDeviceByDeviceTypeQuery = (type: string) =>
  useQuery({
    queryKey: [queryKeys.devices, type],
    queryFn: () => getDeviceByDeviceType(type),
  });
export const useGetModelsByBrandId = (brandId?: number) =>
  useQuery({
    queryKey: [queryKeys.models, brandId],
    queryFn: getAllDevices,
  });
