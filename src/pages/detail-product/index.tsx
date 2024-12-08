import Container from "@/components/atoms/container";
import { Skeleton } from "@/components/atoms/skeleton";
import DetailProductDescription from "@/components/organisme/detail-product/detail-product-description";
import DetailProductImage from "@/components/organisme/detail-product/detail-product-image";
import { useProduct } from "@/features/products/use-product";
import { useParams } from "react-router-dom";

const DetailProductPage = () => {
    const { productId } = useParams();
    const { data: product, isLoading, error } = useProduct(productId as string);

    const images = product?.image || [];

    // Handle error state (e.g., product not found)
    if (error) {
        return (
            <div className="w-full">
                <Container className="pt-28 py-20">
                    <h1 className="text-2xl font-bold text-red-500">Error loading product</h1>
                    <p className="text-red-500">Something went wrong while fetching the product details. Please try again later.</p>
                </Container>
            </div>
        );
    }

    return (
        <div className="w-full">
            <Container className="pt-28 py-20 grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Product Image */}
                {isLoading ? (
                    <Skeleton className="min-h-[400px]" />
                ) : (
                    <DetailProductImage images={images} />
                )}

                {/* Product Description */}
                {isLoading ? (
                    <Skeleton className="min-h-[400px]" />
                ) : (
                    <DetailProductDescription product={product} />
                )}
            </Container>
        </div>
    );
};

export default DetailProductPage;
