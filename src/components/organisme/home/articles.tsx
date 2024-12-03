import Container from "@/components/atoms/container"
import ArticleCard from "@/components/moleculs/article-card";
import { IArticle } from "@/features/articles/article-interface";
import { useArticles } from "@/features/articles/use-get-articles";

const Articles = () => {
    const { data: articles, isLoading } = useArticles();

    if (isLoading) return <p>Loading...</p>

    return (
        <Container className="space-y-4 pb-20">
            <header className="text-h1 font-montserrat-alt font-semibold text-foreground">
                Articles
            </header>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {articles?.map((article: IArticle) => (
                    <ArticleCard key={article._id} articles={article} />
                ))}
            </div>
        </Container>
    )
}

export default Articles