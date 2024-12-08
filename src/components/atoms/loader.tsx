import { cn } from "@/lib/utils"

const Loader = ({ className, width = "w-4 h-4" }: { className?: string, width?: string }) => {
    return (
        <div className={cn(className, "flex flex-row gap-2")}>
            <div className={cn(width, "rounded-full bg-blue-700 animate-bounce")}></div>
            <div className={cn(width, "rounded-full bg-blue-700 animate-bounce [animation-delay:-.3s]")}></div>
            <div className={cn(width, "rounded-full bg-blue-700 animate-bounce [animation-delay:-.5s]")}></div>
        </div>
    )
}

export default Loader