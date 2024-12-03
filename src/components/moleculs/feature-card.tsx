import { cn } from "@/lib/utils";

interface IProps {
    className?: string;
    features: {
        id: number;
        title: string;
        description: string;
        icon: React.ElementType;
    }
}

const FeatureCard = ({ features, className }: IProps) => {
    return (
        <div
            className={cn(className, "w-full max-w-72 h-full bg-background shadow-[0px_0px_15px_rgba(0,0,0,0.09)] dark:shadow-[0px_0px_15px_rgba(255,255,255,0.02)] p-9 space-y-3 relative overflow-hidden rounded-md")}
        >
            <div className="w-24 h-24 bg-primary rounded-full absolute -right-5 -top-7">
                <p className="absolute bottom-6 left-8 text-white text-2xl">{features.id}</p>
            </div>
            <div className="fill-primary w-12">
                <features.icon size={50} />
            </div>
            <h1 className="font-bold text-xl">{features.title}</h1>
            <p className="text-sm text-muted-foreground leading-6">
                {features.description}
            </p>
        </div>

    )
}

export default FeatureCard