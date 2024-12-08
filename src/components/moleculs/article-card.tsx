import { Link } from "react-router-dom"
import { Card, CardContent, CardFooter, CardHeader } from "../atoms/card"
import { buttonVariants } from "../atoms/button"
import { IArticle } from "@/features/articles/article-interface"

interface IProps {
    article: IArticle
}

const ArticleCard = ({ article }: IProps) => {
    return (
        <Link to={`/article/${article?._id}`}>
            <Card>

                <CardHeader className="text-h4 font-semibold">
                    <img src={article?.image} alt={article?.title} className="aspect-video object-cover object-center" />
                    {article?.title}
                </CardHeader>

                <CardContent className="line-clamp-[10]">
                    {article?.description}
                </CardContent>

                <CardFooter>
                    <Link to={`/article/${article?._id}`} className={buttonVariants({ variant: "link" })}>View More</Link>
                </CardFooter>
            </Card>
        </Link>
    )
}

export default ArticleCard