import { axiosWithConfig } from "@/services/axios-with-config";
import { useQuery } from "@tanstack/react-query";
import { ICategoryResponse } from "./category-interface";

const fetchCategories = async () => {
  const response = await axiosWithConfig.get<ICategoryResponse>("/category");
  return response.data.data;
};

export const useCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });
};
