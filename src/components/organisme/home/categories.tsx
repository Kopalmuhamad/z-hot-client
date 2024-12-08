import { Card } from "@/components/atoms/card"
import Container from "@/components/atoms/container"
import { Skeleton } from "@/components/atoms/skeleton"
import CategoryCard from "@/components/moleculs/category-card"
import { useCategories } from "@/features/category/use-categories"

const Categories = () => {
    const { data: categories, isLoading } = useCategories()

    return (
        <Container className="space-y-4 pt-10 pb-10">
            <header className="text-h1 font-montserrat-alt font-semibold text-foreground">
                Categories
            </header>
            <div
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
                role="region"
                aria-labelledby="categories-header"
            >
                {isLoading ?
                    Array.from({ length: 4 }).map((_, index) => (
                        <Card key={index} className="space-y-2" aria-hidden="true">
                            {/* The Skeleton elements should not be focusable */}
                            <Skeleton className="h-[250px]" />
                            <Skeleton className="h-[50px]" />
                        </Card>
                    ))
                    :
                    categories?.map((category) => (
                        <CategoryCard key={category._id} category={category} />
                    ))
                }
            </div>
        </Container>
    )
}

export default Categories
