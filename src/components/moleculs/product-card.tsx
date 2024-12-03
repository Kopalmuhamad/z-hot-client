import { IProduct } from "@/features/products/product-interface"
import { Card, CardContent, CardFooter, CardHeader } from "../atoms/card"
import { Link } from "react-router-dom"

interface IProps {
    card: IProduct
}

const ProductCard = ({ card }: IProps) => {
    return (
        <Link to={`/product/${card._id}`} className="flex h-full">
            <Card className="overflow-hidden">
                <CardHeader className="pt-0 px-0">
                    <img src={card.image[0]} alt={card.name} className="aspect-video object-cover object-center" />
                </CardHeader>
                <CardContent>
                    <h1 className="text-h4 font-medium">{card.name}</h1>
                    <p className="text-base line-clamp-4">{card.description}</p>
                </CardContent>
                <CardFooter>
                    <h1 className="text-h4">Price : By Request</h1>
                </CardFooter>
            </Card>
        </Link>
    )
}

export default ProductCard