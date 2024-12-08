import { axiosWithConfig } from "@/services/axios-with-config";
import { useQuery } from "@tanstack/react-query";

const fetchCategory = async (id: string) => {
  const response = await axiosWithConfig.get(`/category/${id}`);
  return response.data.data;
};

export const useCategory = (id: string) => {
  return useQuery({
    queryKey: ["category", id],
    queryFn: () => fetchCategory(id),
  });
};
