import { axiosWithConfig } from "@/services/axios-with-config";
import { useQuery } from "@tanstack/react-query";

const fetchProduct = async (id: string) => {
  const response = await axiosWithConfig.get(`/product/${id}`);
  return response.data.data;
};

export const useProduct = (id: string) => {
  return useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProduct(id),
  });
};
