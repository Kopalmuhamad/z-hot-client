import { Suspense, lazy } from "react";
import { Skeleton } from "@/components/atoms/skeleton"; // For loading state

// Lazy load the components to improve the initial load time
const Hero = lazy(() => import("@/components/organisme/home/hero"));
const Features = lazy(() => import("@/components/organisme/home/features"));
const OurProduct = lazy(() => import("@/components/organisme/home/categories"));
const Articles = lazy(() => import("@/components/organisme/home/articles"));

const HomePage = () => {
    return (
        <div className="w-full overflow-hidden">
            <Suspense fallback={<Skeleton className="w-full h-[400px]" />}>
                {/* Hero Section */}
                <section>
                    <Hero />
                </section>
            </Suspense>

            <Suspense fallback={<Skeleton className="w-full h-[200px]" />}>
                {/* Features Section */}
                <section>
                    <Features />
                </section>
            </Suspense>

            <Suspense fallback={<Skeleton className="w-full h-[200px]" />}>
                {/* Our Product Section */}
                <section>
                    <OurProduct />
                </section>
            </Suspense>

            <Suspense fallback={<Skeleton className="w-full h-[200px]" />}>
                {/* Articles Section */}
                <section>
                    <Articles />
                </section>
            </Suspense>
        </div>
    );
}

export default HomePage;
