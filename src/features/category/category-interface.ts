export interface ICategory {
  name: string;
  _id: string;
  image: string;
}

export interface ICategoryResponse {
  data: ICategory[];
  message: string;
  status: string;
}
