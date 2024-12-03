import Articles from "@/components/organisme/home/articles"
import Features from "@/components/organisme/home/features"
import Hero from "@/components/organisme/home/hero"
import OurProduct from "@/components/organisme/home/our-product"

const HomePage = () => {
    return (
        <div className="w-full overflow-hidden">
            <Hero />
            <Features />
            <OurProduct />
            <Articles />

        </div>
    )
}

export default HomePage