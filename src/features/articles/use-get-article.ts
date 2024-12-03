import { axiosWithConfig } from "@/services/axios-with-config";
import { useQuery } from "@tanstack/react-query";

const fetchArticle = async (id: string) => {
  const response = await axiosWithConfig.get(`/article/${id}`);
  return response.data.data;
};

export const useArticle = (id: string) => {
  return useQuery({
    queryKey: ["article", id],
    queryFn: () => fetchArticle(id),
  });
};
