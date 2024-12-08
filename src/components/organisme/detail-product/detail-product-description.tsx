import { Badge } from "@/components/atoms/badge"
import { IProduct } from "@/features/products/product-interface"

interface IProps {
    products: IProduct
}

const DetailProductDescription = ({ products }: IProps) => {


    return (
        <div className="space-y-2">
            {products.new && <Badge>Newest</Badge>}
            {products.hot && <Badge>Hot Product</Badge>}
            <h1 className="text-base md:text-h4 font-medium capitalize">Name : {products.name}</h1>
            <p className="text-sm md:text-base font-normal text-muted-foreground">Description : {products.description}</p>
            <h1 className="text-h4">
                <span className="text-h4 font-semibold">Price / Kg</span>
                {" "}:{" "}
                <span className="font-normal">By request</span>
            </h1>
        </div>
    )
}

export default DetailProductDescription