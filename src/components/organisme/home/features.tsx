import Container from "@/components/atoms/container"
import FeatureCard from "@/components/moleculs/feature-card"

import { IoMdClock } from "react-icons/io";
import { MdLocalShipping } from "react-icons/md";
import { FaAward } from "react-icons/fa";

const featuresData = [
    {
        id: 1,
        icon: IoMdClock,
        title: "Service 24 Hours",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse fuga adipisicing elit"
    },
    {
        id: 2,
        icon: MdLocalShipping,
        title: "Free Shipping in Bogor",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse fuga adipisicing elit"
    },
    {
        id: 3,
        icon: FaAward,
        title: "Best Quality",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse fuga adipisicing elit"
    },

]

const Features = () => {
    return (
        <div className="pt-5 pb-10 bg-secondary">
            <Container className=" space-y-4 flex flex-col items-center justify-center w-full">
                <header className="text-h1 font-montserrat-alt font-semibold text-foreground">
                    Features
                </header>
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center gap-4">
                    {featuresData.map((features, index) => (
                        <FeatureCard key={index} features={features} />
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Features