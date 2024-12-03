export interface IProduct {
  _id: string;
  name: string;
  image: string[];
  category: string;
  description: string;
  hot: boolean;
  new: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface IProductResponse {
  success: string;
  message: string;
  data: IProduct[];
}
