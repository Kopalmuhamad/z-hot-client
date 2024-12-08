import Container from "@/components/atoms/container";
import ProductCard from "@/components/moleculs/product-card";
import { useCategory } from "@/features/category/use-category";
import { useProducts } from "@/features/products/use-products";
import { Skeleton } from "@/components/atoms/skeleton"; // Import Skeleton for loading state
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductsByCategoryPage = () => {
    const { categoryId } = useParams();

    const { data: category, isLoading: isCategoryLoading, error: categoryError } = useCategory(categoryId as string);
    const { data: products, isLoading: isProductsLoading, error: productsError } = useProducts({ category: categoryId as string });

    // Update document title based on category name
    useEffect(() => {
        if (category) {
            document.title = `Products - ${category.name}`;
        }
    }, [category]);

    // Display loading skeletons if data is loading
    if (isCategoryLoading || isProductsLoading) {
        return (
            <Container className="pt-20 min-h-screen space-y-4">
                <header>
                    <h1 className="text-h1 font-montserrat-alt font-semibold text-foreground">Loading...</h1>
                </header>
                <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {Array(8)
                        .fill(null)
                        .map((_, index) => (
                            <Skeleton key={index} className="h-[300px]" />
                        ))}
                </main>
            </Container>
        );
    }

    // Handle errors
    if (categoryError || productsError) {
        return (
            <Container className="pt-20 min-h-screen space-y-4">
                <header>
                    <h1 className="text-h1 font-montserrat-alt font-semibold text-foreground">Error loading data</h1>
                </header>
                <main>
                    <p className="text-red-500">There was an issue loading the products or category information. Please try again later.</p>
                </main>
            </Container>
        );
    }

    return (
        <div>
            <Container className="pt-20 min-h-screen space-y-4">
                <header>
                    <h1 className="text-h1 font-montserrat-alt font-semibold text-foreground capitalize">
                        {category?.name}
                    </h1>
                </header>

                <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {products?.map((product) => (
                        <ProductCard key={product._id} product={product} />
                    ))}
                </main>
            </Container>
        </div>
    );
};

export default ProductsByCategoryPage;
