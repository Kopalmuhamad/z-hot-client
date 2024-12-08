import { Suspense, lazy } from "react";
import { Skeleton } from "@/components/atoms/skeleton"; // For loading state
import Container from "@/components/atoms/container";

// Lazy loading the components to improve performance
const Location = lazy(() => import("@/components/moleculs/location"));
const LocationDetail = lazy(() => import("@/components/organisme/location/location-detail"));

const LocationPage = () => {
    return (
        <div>
            <Container className="grid grid-cols-1 md:grid-cols-2 pt-20 pb-20 gap-4">
                {/* Lazy loading Location component */}
                <Suspense fallback={<Skeleton className="w-full h-[400px]" />}>
                    <section>
                        <Location />
                    </section>
                </Suspense>

                {/* Lazy loading LocationDetail component */}
                <Suspense fallback={<Skeleton className="w-full h-[400px]" />}>
                    <section>
                        <LocationDetail />
                    </section>
                </Suspense>
            </Container>
        </div>
    );
};

export default LocationPage;
