import { Badge } from "@/components/atoms/badge";
import { IProduct } from "@/features/products/product-interface";

interface IProps {
    product: IProduct | null; // Explicit null/undefined handling
}

const DetailProductDescription = ({ product }: IProps) => {
    // Check if the product is available
    if (!product) {
        return <div>Loading...</div>; // Or handle a missing product state more gracefully
    }

    return (
        <div className="space-y-2">
            {/* Conditional badges */}
            {product.new && <Badge>Newest</Badge>}
            {product.hot && <Badge>Hot Product</Badge>}

            {/* Product name and description */}
            <h1 className="text-base md:text-h4 font-medium capitalize">
                Name: {product.name || "No product name available"} {/* Fallback text */}
            </h1>

            <p className="text-sm md:text-base font-normal text-muted-foreground">
                Description: {product.description || "No description available"} {/* Fallback text */}
            </p>

            {/* Price */}
            <h1 className="text-h4">
                <span className="text-h4 font-semibold">Price / Kg</span>:{" "}
                <span className="font-normal">By request</span>
            </h1>
        </div>
    );
};

export default DetailProductDescription;
