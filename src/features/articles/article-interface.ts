export interface IArticle {
  _id: string;
  title: string;
  description: string;
}

export interface IArticleResponse {
  success: boolean;
  data: IArticle[];
}
