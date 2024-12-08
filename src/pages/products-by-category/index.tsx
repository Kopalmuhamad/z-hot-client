import Container from "@/components/atoms/container";
import ProductCard from "@/components/moleculs/product-card";
import { useCategory } from "@/features/category/use-category";
import { useProducts } from "@/features/products/use-products";
import { useParams } from "react-router-dom";

const ProductsByCategoryPage = () => {

    const { categoryId } = useParams();

    const { data: category } = useCategory(categoryId as string)

    const { data: products } = useProducts({ category: categoryId as string })


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
    )
}

export default ProductsByCategoryPage