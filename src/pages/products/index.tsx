import Container from "@/components/atoms/container";
import ProductCard from "@/components/moleculs/product-card";
import { useProducts } from "@/features/products/use-products";
import { Skeleton } from "@/components/atoms/skeleton"; // Import Skeleton
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/atoms/select";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useCategories } from "@/features/category/use-categories";

const ProductsPage = () => {
    const [searchParams] = useSearchParams();
    const category = searchParams.get("category") || ""; // Get category from URL query params

    // Use products hook with the selected category
    const { data: products, isLoading, error } = useProducts({ category });
    const { data: categories, isLoading: categoriesLoading, } = useCategories()

    // Use the navigate hook from react-router-dom to push the new category to the URL
    const navigate = useNavigate();

    const handleCategoryChange = (value: string) => {
        if (value === "all") {
            navigate("/product");
            return;
        }
        // Navigate to the URL with the selected category
        navigate(`/product?category=${value}`);
    };

    return (
        <div className="w-full">
            <Container className="pt-20 pb-20 space-y-4">
                <header className="grid grid-cols-2">
                    <h1 className="text-h2 md:text-h1 font-montserrat-alt font-semibold text-foreground">
                        Products
                    </h1>
                    {categoriesLoading ?
                        (<Skeleton className="h-[50px]" />)
                        :
                        (<Select
                            name="category"
                            value={category}
                            onValueChange={handleCategoryChange}
                            aria-label="Select category filter"
                        >
                            <SelectTrigger className="capitalize max-w-[350px] justify-self-end">
                                <SelectValue placeholder="Filter by category" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Category</SelectLabel>
                                    {categories?.map((category) => (
                                        <SelectItem key={category._id} value={category._id} className="capitalize">
                                            {category.name}
                                        </SelectItem>
                                    ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>)}
                </header>

                {/* Error handling */}
                {error && (
                    <div className="text-red-500">
                        <p>Failed to load products. Please try again later.</p>
                    </div>
                )}

                {/* Conditionally render Skeleton or Products based on loading state */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {isLoading ? (
                        // Show Skeleton loaders if still loading
                        Array(8)
                            .fill(null)
                            .map((_, index) => (
                                <Skeleton key={index} className="h-[300px]" />
                            ))
                    ) : (
                        // Show Product cards once loading is complete
                        products?.map((product) => (
                            <ProductCard product={product} key={product._id} />
                        ))
                    )}
                </div>
            </Container>
        </div>
    );
};

export default ProductsPage;
