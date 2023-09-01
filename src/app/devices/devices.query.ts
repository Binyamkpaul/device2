import { queryKeys } from "@utils//queryConstants";
import { axiosInstance } from "../../utils";
import { useQuery } from "@tanstack/react-query";

const URI = `/devices`;
export const getAllDevices = () =>
  axiosInstance.get(`${URI}?populate=*`).then(({ data }: any) => {
    return data.data;
  });
export const getDeviceById = (id: number) =>
  axiosInstance.get(`${URI}/${id}`).then(({ data }: any) => {
    return data.data;
  });

export const useGetAllDevices = () =>
  useQuery({
    queryFn: getAllDevices,
    queryKey: [queryKeys.devices],
  });

export const useGetDeviceById = (id: number) =>
  useQuery({
    queryKey: [queryKeys.devices, id],
    queryFn: () => getDeviceById(id),
  });
