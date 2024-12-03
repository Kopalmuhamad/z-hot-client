import { axiosWithConfig } from "@/services/axios-with-config";
import { useQuery } from "@tanstack/react-query";
import { IArticleResponse } from "./article-interface";
import { IArticle } from "@/features/articles/article-interface";

// Update the fetchArticles function to return an array of IArticle
const fetchArticles = async (): Promise<IArticle[]> => {
  const response = await axiosWithConfig.get<IArticleResponse>("/article");
  return response.data.data;
};

export const useArticles = () => {
  return useQuery<IArticle[], Error>({
    queryKey: ["articles"],
    queryFn: fetchArticles,
  });
};
