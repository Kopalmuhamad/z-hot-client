import { axiosWithConfig } from "@/services/axios-with-config";
import { useQuery } from "@tanstack/react-query";
import { IImageSliderResponse } from "./image-slider-interface";

const fetchImagesSlider = async () => {
  const response = await axiosWithConfig.get<IImageSliderResponse>(
    "/imageSlider"
  );

  return response.data.data;
};

export const useImagesSlider = () => {
  return useQuery({
    queryKey: ["imagesSlider"],
    queryFn: () => fetchImagesSlider(),
  });
};
