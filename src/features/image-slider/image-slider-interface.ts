export interface IImageSlider {
  _id: string;
  image: string;
  name: string;
}

export interface IImageSliderResponse {
  success: boolean;
  data: IImageSlider[];
  message: string;
}
