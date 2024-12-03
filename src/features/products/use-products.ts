import { axiosWithConfig } from "@/services/axios-with-config";
import { IProductResponse } from "./product-interface";
import { useQuery } from "@tanstack/react-query";

const fetchProducts = async () => {
  const response = await axiosWithConfig.get<IProductResponse>("/product");
  return response.data.data;
};

export const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: () => fetchProducts(),
  });
};
