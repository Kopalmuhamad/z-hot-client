import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader } from "../atoms/card";
import { buttonVariants } from "../atoms/button";
import { IArticle } from "@/features/articles/article-interface";

interface IProps {
    article: IArticle;
}

const ArticleCard = ({ article }: IProps) => {
    return (
        <Card>
            <CardHeader className="text-h4 font-semibold">
                <Link to={`/article/${article?._id}`} aria-label={`Read article: ${article?.title}`}>
                    <img
                        src={article?.image}
                        alt={`Image for the article ${article?.title}`}
                        className="aspect-video object-cover object-center"
                    />
                </Link>
                <h2>
                    <Link to={`/article/${article?._id}`}>{article?.title}</Link>
                </h2>
            </CardHeader>

            <CardContent className="line-clamp-[10]">
                {article?.description}
            </CardContent>

            <CardFooter>
                <Link to={`/article/${article?._id}`} className={buttonVariants({ variant: "link" })}>
                    View More
                </Link>
            </CardFooter>
        </Card>
    );
};

export default ArticleCard;
