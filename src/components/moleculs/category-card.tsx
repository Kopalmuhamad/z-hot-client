import { Link } from "react-router-dom"
import { Card, CardContent, CardHeader } from "../atoms/card"
import { ICategory } from "@/features/category/category-interface"

interface IProps {
    category: ICategory
}

const CategoryCard = ({ category }: IProps) => {
    return (
        <Link to={`/product/category/${category._id}`}>
            <Card key={category._id}>
                <CardHeader className="p-2">
                    <img className="object-cover aspect-video rounded-md" src={category.image} alt={category.name} />
                </CardHeader>
                <CardContent className="pb-2">
                    <h1 className="text-h4 text-center capitalize">
                        {category.name}
                    </h1>
                </CardContent>
            </Card>
        </Link>
    )
}

export default CategoryCard