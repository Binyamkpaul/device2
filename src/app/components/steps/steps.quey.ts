import { axiosInstance } from "../../../utils";
import { queryKeys } from "../../../utils/queryConstants";
// import { queryKeys } from "@utils/queryConstants";
// import { axiosInstance } from "../../utils";
import { useQuery } from "@tanstack/react-query";
// import { axiosInstance } from "@utils/";

const URI = `/responses`;
export const getAllresponses = () =>
  axiosInstance.get(`${URI}?populate=*`).then(({ data }: any) => {
    return data.data;
  });
export const getResponseById = (id: number) =>
  axiosInstance.get(`${URI}/${id}`).then(({ data }: any) => {
    return data.data;
  });

export const useGetAllresponses = () =>
  useQuery({
    queryFn: getAllresponses,
    queryKey: [queryKeys.responses],
  });

export const useGetDeviceById = (id: number) =>
  useQuery({
    queryKey: [queryKeys.responses, id],
    queryFn: () => getResponseById(id),
  });
