import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/atoms/carousel"

interface IProps {
    images: string[]
}

const DetailProductImage = ({ images }: IProps) => {
    if (!images || images.length === 0) {
        return <p>No images available</p>;
    }
    return (
        <Carousel
            opts={{
                align: "start",
                loop: true,
            }}>
            <CarouselContent className="w-full space-x-4 -ml-0">
                {images.map((image, index) => (
                    <CarouselItem key={index} className="min-h-[400px] aspect-video rounded-md w-full" style={{
                        backgroundImage: `url(${image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}></CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
        </Carousel>
    )
}

export default DetailProductImage