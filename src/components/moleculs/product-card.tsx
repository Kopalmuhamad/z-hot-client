import { IProduct } from "@/features/products/product-interface";
import { Card, CardContent, CardFooter, CardHeader } from "../atoms/card";
import { Link } from "react-router-dom";
import { Skeleton } from "../atoms/skeleton";

interface IProps {
    product: IProduct | null;
}

const ProductCard = ({ product }: IProps) => {
    return (
        <Link to={`/product/${product?._id}`} className="flex h-full w-full" aria-label={`Go to product ${product?.name}`}>
            <Card className="overflow-hidden w-full">
                {/* Display Skeleton if no product is available */}
                {!product ? (
                    <Skeleton className="h-[200px]" />
                ) : (
                    <CardHeader className="pt-0 px-0">
                        <img
                            src={product.image[0]}
                            alt={product.name || "Product image"} // Default alt text
                            className="aspect-video object-cover object-center"
                        />
                    </CardHeader>
                )}

                {/* Display Skeleton or Product Details */}
                {!product ? (
                    <Skeleton />
                ) : (
                    <CardContent>
                        <h1 className="text-h4 font-medium">{product.name}</h1>
                        <p className="text-base line-clamp-4">{product.description}</p>
                    </CardContent>
                )}

                {/* Product Footer */}
                <CardFooter>
                    <h1 className="text-h4">Price : By Request</h1>
                </CardFooter>
            </Card>
        </Link>
    );
};

export default ProductCard;
