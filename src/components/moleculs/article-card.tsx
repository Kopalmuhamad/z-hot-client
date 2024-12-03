import { Link } from "react-router-dom"
import { Card, CardContent, CardFooter, CardHeader } from "../atoms/card"
import { buttonVariants } from "../atoms/button"
import { IArticle } from "@/features/articles/article-interface"

interface IProps {
    articles: IArticle
}

const ArticleCard = ({ articles }: IProps) => {
    return (
        <Link to={`/article/${articles?._id}`}>
            <Card>
                <CardHeader className="text-h4 font-semibold">
                    {articles?.title}
                </CardHeader>
                <CardContent className="line-clamp-[10]">
                    {articles?.description}
                </CardContent>
                <CardFooter>
                    <Link to={`/article/${articles?._id}`} className={buttonVariants({ variant: "link" })}>View More</Link>
                </CardFooter>
            </Card>
        </Link>
    )
}

export default ArticleCard