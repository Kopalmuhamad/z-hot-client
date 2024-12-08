import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/atoms/carousel";
import { Skeleton } from "@/components/atoms/skeleton";

interface IProps {
    images: string[];
}

const DetailProductImage = ({ images }: IProps) => {
    // Check if there are no images
    if (!images || images.length === 0) {
        return <p>No images available</p>;
    }

    return (
        <Carousel
            opts={{
                align: "start",
                loop: true,
            }}
        >
            <CarouselContent className="w-full space-x-4 -ml-0">
                {/* Render images or skeleton loader if images array is empty */}
                {images.length === 0 ? (
                    <CarouselItem>
                        <Skeleton className="h-[400px] rounded-md w-full" />
                    </CarouselItem>
                ) : (
                    images.map((image, index) => (
                        <CarouselItem
                            key={index}
                            className="min-h-[400px] aspect-video rounded-md w-full"
                            style={{
                                backgroundImage: `url(${image})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                            }}
                            aria-label={`Image ${index + 1} of ${images.length}`}
                        />
                    ))
                )}
            </CarouselContent>
            <CarouselPrevious
                id="prev"
                className="left-0"
                aria-label="Previous image"
            />
            <CarouselNext
                id="next"
                className="right-0"
                aria-label="Next image"
            />
        </Carousel>
    );
};

export default DetailProductImage;
