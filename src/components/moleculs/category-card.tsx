import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader } from "../atoms/card";
import { ICategory } from "@/features/category/category-interface";

interface IProps {
    category: ICategory;
}

const CategoryCard = ({ category }: IProps) => {
    return (
        <Card key={category._id}>
            <CardHeader className="p-2">
                <Link to={`/product/category/${category._id}`} aria-label={`View products in ${category.name} category`}>
                    <img
                        className="object-cover aspect-video rounded-md"
                        src={category.image}
                        alt={`Image for the ${category.name} category`}
                    />
                </Link>
            </CardHeader>
            <CardContent className="pb-2">
                <h2 className="text-h4 text-center capitalize">
                    <Link to={`/product/category/${category._id}`}>{category.name}</Link>
                </h2>
            </CardContent>
        </Card>
    );
};

export default CategoryCard;
