export interface IArticle {
  _id: string;
  title: string;
  description: string;
  image: string;
  createdAt: Date;
}

export interface IArticleResponse {
  success: boolean;
  data: IArticle[];
}
