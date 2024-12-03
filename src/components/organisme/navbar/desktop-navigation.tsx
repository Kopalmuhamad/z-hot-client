import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/atoms/navigation-menu"
import { cn } from "@/lib/utils"
import { Link, useLocation } from "react-router-dom"

const DesktopNavigation = ({ isScrolled }: { isScrolled: boolean }) => {

    const pathname = useLocation().pathname

    const isHome = pathname === "/"

    return (
        <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
                <NavigationMenuItem>
                    <Link to={"/"} className={cn(`bg-transparent ${isHome ? isScrolled ? "text-foreground" : "text-white" : "text-foreground"}`, navigationMenuTriggerStyle())}>Home</Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link to={"/about"} className={cn(`bg-transparent ${isHome ? isScrolled ? "text-foreground" : "text-white" : "text-foreground"}`, navigationMenuTriggerStyle())}>About</Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link to={"/product"} className={cn(`bg-transparent ${isHome ? isScrolled ? "text-foreground" : "text-white" : "text-foreground"}`, navigationMenuTriggerStyle())}>Product</Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link to={"/location"} className={cn(`bg-transparent ${isHome ? isScrolled ? "text-foreground" : "text-white" : "text-foreground"}`, navigationMenuTriggerStyle())}>Location</Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link to={"/our-team"} className={cn(`bg-transparent ${isHome ? isScrolled ? "text-foreground" : "text-white" : "text-foreground"}`, navigationMenuTriggerStyle())}>Our Team</Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>

    )
}

export default DesktopNavigation