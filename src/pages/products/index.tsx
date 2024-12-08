import Container from "@/components/atoms/container";
import ProductCard from "@/components/moleculs/product-card";
import { useProducts } from "@/features/products/use-products";
import { Skeleton } from "@/components/atoms/skeleton"; // Import Skeleton
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/atoms/select";
import { useSearchParams, useNavigate } from "react-router-dom";

const ProductsPage = () => {
    const [searchParams] = useSearchParams();
    const category = searchParams.get("category") || ""; // Get category from URL query params

    // Use products hook with the selected category
    const { data: products, isLoading } = useProducts({ category });

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
                <header>
                    <h1 className="text-h1 font-montserrat-alt font-semibold text-foreground">
                        Products
                    </h1>

                    <Select
                        name="category"
                        defaultValue={category}
                        onValueChange={handleCategoryChange}
                    >
                        <SelectTrigger>
                            <SelectValue placeholder="Filter by category" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Category</SelectLabel>
                                <SelectItem value="all">All</SelectItem>
                                <SelectItem value="cabaiMerah">Cabai Merah</SelectItem>
                                <SelectItem value="cabaiHijau">Cabai Hijau</SelectItem>
                                <SelectItem value="rawitMerah">Rawit Merah</SelectItem>
                                <SelectItem value="rawitHijau">Rawit Hijau</SelectItem>
                                <SelectItem value="cabaiKeriting">Cabai Keriting</SelectItem>
                                <SelectItem value="cabaiPetikan">Cabai Petikan</SelectItem>
                                <SelectItem value="rawitPetikan">Rawit Petikan</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </header>

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
