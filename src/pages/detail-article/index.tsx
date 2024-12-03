import Container from "@/components/atoms/container"
import { Skeleton } from "@/components/atoms/skeleton"
import { useArticle } from "@/features/articles/use-get-article"
import { useParams } from "react-router-dom"

const DetailArticle = () => {

    const { articleId } = useParams()
    const { data: article, isLoading } = useArticle(articleId as string)

    return (
        <div className="w-full">
            <Container className="pt-28 pb-20 space-y-4">
                <header className="text-2xl font-bold">
                    {isLoading ? <Skeleton className="h-[40px]" /> : article?.title}
                </header>
                <main className="text-justify">
                    {isLoading ? <Skeleton className="h-[600px]" /> : article?.description}
                </main>
            </Container>
        </div>
    )
}

export default DetailArticle