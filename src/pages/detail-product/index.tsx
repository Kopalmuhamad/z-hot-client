import Container from "@/components/atoms/container";
import { Skeleton } from "@/components/atoms/skeleton";
import DetailProductDescription from "@/components/organisme/detail-product/detail-product-description";
import DetailProductImage from "@/components/organisme/detail-product/detail-product-image";
import { useProduct } from "@/features/products/use-product";
import { useParams } from "react-router-dom";

const DetailProductPage = () => {
    const { productId } = useParams();
    const { data: product, isLoading, isError } = useProduct(productId as string);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (isError) {
        return <p>Error loading product details.</p>;
    }

    if (!product) {
        return <p>Product not found.</p>;
    }

    const images = product?.image || [];

    return (
        <div className="w-full">
            <Container className="pt-28 py-20 grid grid-cols-1 md:grid-cols-2 gap-4">
                {isLoading ?
                    <Skeleton className="min-h-[400px]" />
                    :
                    <DetailProductImage images={images} />
                }
                {isLoading ?
                    <Skeleton className="min-h-[400px]" />
                    :
                    <DetailProductDescription products={product} />
                }
            </Container>
        </div>
    );
};

export default DetailProductPage;
