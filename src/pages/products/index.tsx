import Container from "@/components/atoms/container"
import ProductCard from "@/components/moleculs/product-card"
import { useProducts } from "@/features/products/use-products"
import { Skeleton } from "@/components/atoms/skeleton" // Import Skeleton

const ProductsPage = () => {
    const { data: products, isLoading } = useProducts()

    return (
        <div className="w-full">
            <Container className="pt-20 pb-20 space-y-4">
                <header>
                    <h1 className="text-h1 font-montserrat-alt font-semibold text-foreground">
                        Products
                    </h1>
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
                            <ProductCard card={product} key={product._id} />
                        ))
                    )}
                </div>
            </Container>
        </div>
    )
}

export default ProductsPage
