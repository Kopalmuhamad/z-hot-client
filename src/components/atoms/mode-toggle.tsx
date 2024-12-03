import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/atoms/button"
import { useTheme } from "@/providers/theme-provider"
import { cn } from "@/lib/utils"

export function ModeToggle({ className }: { className?: string }) {
    const { theme, setTheme } = useTheme()

    const handleTheme = () => {
        if (theme === "light") {
            setTheme("dark")
        } else {
            setTheme("light")
        }
    }

    return (
        <Button variant={"outline"} className={cn(className, "")} size={"icon"} onClick={handleTheme}>
            {theme === "light" ? <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" /> : <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />}
        </Button>
    )
}
