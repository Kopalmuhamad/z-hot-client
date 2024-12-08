import Container from "@/components/atoms/container";
import ArticleCard from "@/components/moleculs/article-card";
import { IArticle } from "@/features/articles/article-interface";
import { useArticles } from "@/features/articles/use-get-articles";
import { Skeleton } from "@/components/atoms/skeleton";  // Assuming Skeleton is already defined for loading state.

const Articles = () => {
    const { data: articles, isLoading, isError } = useArticles();

    if (isLoading) {
        // Show loading state while data is fetching
        return (
            <Container className="space-y-4 pb-20">
                <header className="text-h1 font-montserrat-alt font-semibold text-foreground">
                    Articles
                </header>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {[...Array(6)].map((_, index) => (
                        <Skeleton key={index} className="h-[300px] w-full rounded-md" />
                    ))}
                </div>
            </Container>
        );
    }

    if (isError) {
        // Show error state in case of fetching failure
        return (
            <Container className="space-y-4 pb-20">
                <header className="text-h1 font-montserrat-alt font-semibold text-foreground">
                    Articles
                </header>
                <p className="text-center text-destructive">Error loading articles. Please try again later.</p>
            </Container>
        );
    }

    return (
        <Container className="space-y-4 pb-20">
            <header className="text-h1 font-montserrat-alt font-semibold text-foreground">
                Articles
            </header>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {articles?.map((article: IArticle) => (
                    <ArticleCard key={article._id} article={article} />
                ))}
            </div>
        </Container>
    );
};

export default Articles;
