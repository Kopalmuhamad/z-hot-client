import Autoplay from "embla-carousel-autoplay"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/atoms/carousel"
import { Button } from "@/components/atoms/button"

const Hero = () => {
    return (
        <section className="w-full relative">
            <Carousel
                opts={{
                    align: "start",
                    loop: true,
                }}
                plugins={[
                    Autoplay({
                        delay: 4000,
                    }),
                ]}
            >
                <CarouselContent>
                    <CarouselItem className="min-h-[70vh]  md:min-h-[90vh] w-full" style={{ backgroundImage: "url('/hero-image-1.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
                    </CarouselItem>
                    <CarouselItem className="min-h-[70vh]  md:min-h-[90vh] w-full" style={{ backgroundImage: "url('/hero-image-2.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
                    </CarouselItem>
                    <CarouselItem className="min-h-[70vh]  md:min-h-[90vh] w-full" style={{ backgroundImage: "url('/hero-image-3.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
                    </CarouselItem>
                </CarouselContent>
            </Carousel>
            <div className="absolute top-1/2 -translate-y-1/2 left-1 md:left-20 space-y-3 max-w-[600px]">
                <h1 className="text-h3 md:text-h1 font-montserrat-alt font-bold drop-shadow-2xl select-none text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h1>
                <p className="text-sm md:text-base font-medium drop-shadow-2xl select-none text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur consectetur quam tempora, neque fugiat ad! Vel illo modi animi libero? Aliquid, quam hic quaerat quisquam doloribus excepturi corporis facilis provident sunt quibusdam obcaecati quod a explicabo inventore. Rem ratione, tempora labore repellendus nostrum voluptate dolor similique debitis, placeat illo laboriosam.</p>
                <Button>
                    Learn More
                </Button>
            </div>
        </section>
    )
}

export default Hero