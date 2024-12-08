import { axiosWithConfig } from "@/services/axios-with-config";
import { IProductResponse } from "./product-interface";
import { useQuery } from "@tanstack/react-query";

interface IProps {
  [key: string]: string | number;
}

const fetchProducts = async (params?: IProps) => {
  const response = await axiosWithConfig.get<IProductResponse>("/product", {
    params,
  });
  return response.data.data;
};

export const useProducts = (params?: IProps) => {
  return useQuery({
    queryKey: ["products", params],
    queryFn: () => fetchProducts(params),
  });
};
