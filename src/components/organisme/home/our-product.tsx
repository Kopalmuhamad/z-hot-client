import Container from "@/components/atoms/container"
import ProductCard from "@/components/moleculs/product-card"
import { useProducts } from "@/features/products/use-products"

const OurProduct = () => {

    const { data: products } = useProducts()

    return (
        <Container className="space-y-4 pt-10 pb-10">
            <header className="text-h1 font-montserrat-alt font-semibold text-foreground">
                Our Product
            </header>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {products?.map((product) => (
                    <ProductCard key={product._id} card={product} />
                ))}
            </div>
        </Container>
    )
}

export default OurProduct