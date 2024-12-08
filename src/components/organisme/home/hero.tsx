import Autoplay from "embla-carousel-autoplay"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/atoms/carousel"
import { Button } from "@/components/atoms/button"
import { useImagesSlider } from "@/features/image-slider/use-images-slider"
import { Skeleton } from "@/components/atoms/skeleton"

const Hero = () => {

    const { data: imagesSlider, isLoading } = useImagesSlider()

    return (
        <section className="w-full relative" aria-labelledby="hero-header">
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
                aria-live="polite"  // Ensures that updates to the carousel are announced by screen readers
            >
                <CarouselContent>
                    {isLoading ?
                        <Skeleton className="min-h-[70vh] md:min-h-[90vh] h-full w-full" />
                        :
                        imagesSlider?.map((image) => (
                            <CarouselItem
                                id={image._id}
                                key={image._id}
                                className="min-h-[70vh] md:min-h-[90vh] w-full"
                                style={{
                                    backgroundImage: `url('${image?.image}')`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center"
                                }}
                                aria-label={`Slide showing ${image.name}`}
                            />
                        ))
                    }
                </CarouselContent>
            </Carousel>
            <div className="absolute top-1/2 -translate-y-1/2 left-1 md:left-20 space-y-3 max-w-[600px]" aria-live="assertive">
                <h1 id="hero-header" className="text-h3 md:text-h1 font-montserrat-alt font-bold drop-shadow-2xl select-none text-white">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </h1>
                <p className="text-sm md:text-base font-medium drop-shadow-2xl select-none text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur consectetur quam tempora, neque fugiat ad! Vel illo modi animi libero? Aliquid, quam hic quaerat quisquam doloribus excepturi corporis facilis provident sunt quibusdam obcaecati quod a explicabo inventore. Rem ratione, tempora labore repellendus nostrum voluptate dolor similique debitis, placeat illo laboriosam.
                </p>
                <Button aria-label="Learn more about our services">Learn More</Button>
            </div>
        </section>
    )
}

export default Hero
