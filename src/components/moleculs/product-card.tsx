import { IProduct } from "@/features/products/product-interface"
import { Card, CardContent, CardFooter, CardHeader } from "../atoms/card"
import { Link } from "react-router-dom"
import { Skeleton } from "../atoms/skeleton"

interface IProps {
    product: IProduct
}

const ProductCard = ({ product }: IProps) => {

    return (
        <Link to={`/product/${product._id}`} className="flex h-full">
            <Card className="overflow-hidden">
                {!product ?
                    <Skeleton className="h-[200px]" />
                    :
                    <CardHeader className="pt-0 px-0">
                        <img src={product.image[0]} alt={product.name} className="aspect-video object-cover object-center" />
                    </CardHeader>
                }
                {!product ?
                    <Skeleton />
                    :
                    <CardContent>
                        <h1 className="text-h4 font-medium">{product.name}</h1>
                        <p className="text-base line-clamp-4">{product.description}</p>
                    </CardContent>
                }
                <CardFooter>
                    <h1 className="text-h4">Price : By Request</h1>
                </CardFooter>
            </Card>
        </Link>
    )
}

export default ProductCard