import Container from "@/components/atoms/container"
import { Skeleton } from "@/components/atoms/skeleton"
import { useArticle } from "@/features/articles/use-get-article"
import { useParams } from "react-router-dom"

const DetailArticle = () => {
    const { articleId } = useParams()
    const { data: article, isLoading, error } = useArticle(articleId as string)

    // Handle error state (e.g., article not found)
    if (error) {
        return (
            <div className="w-full">
                <Container className="pt-28 pb-20 space-y-4">
                    <header className="text-2xl font-bold text-destructive">
                        Error loading article.
                    </header>
                    <p className="text-destructive">Something went wrong. Please try again later.</p>
                </Container>
            </div>
        )
    }

    return (
        <div className="w-full">
            <Container className="pt-28 pb-20 space-y-4">
                {/* Article Title */}
                <header className="space-y-4">
                    {isLoading ?
                        (
                            <Skeleton className="h-[400px]" />
                        )
                        :
                        (
                            <img src={article?.image} alt={article?.title} className="aspect-video object-cover w-full" />
                        )}
                    {isLoading ? (
                        <Skeleton className="h-[40px]" />
                    ) : (
                        <h1 className="text-2xl font-bold">{article?.title}</h1>
                    )}
                </header>

                {/* Article Description */}
                <main>
                    {isLoading ? (
                        <Skeleton className="h-[600px]" />
                    ) : (
                        <p className="text-justify">{article?.description}</p>
                    )}
                </main>
            </Container>
        </div>
    )
}

export default DetailArticle
