import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/atoms/navigation-menu"
import { cn } from "@/lib/utils"
import { Link, useLocation } from "react-router-dom"

const DesktopNavigation = ({ isScrolled }: { isScrolled: boolean }) => {
    const { pathname } = useLocation()
    const isHome = pathname === "/"

    // Determine the class based on isScrolled and the current page
    const getLinkClasses = (path: string) => {
        const isActive = pathname === path
        return cn(
            "bg-transparent",
            isHome
                ? isScrolled
                    ? "text-foreground"
                    : "text-white"
                : "text-foreground",
            isActive && "font-bold", // Bold active link
            navigationMenuTriggerStyle()
        )
    }

    return (
        <nav aria-label="Main Navigation" className="hidden md:flex">
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <Link
                            to={"/"}
                            className={getLinkClasses("/")}
                            aria-current={pathname === "/" ? "page" : undefined}
                        >
                            Home
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link
                            to={"/about"}
                            className={getLinkClasses("/about")}
                            aria-current={pathname === "/about" ? "page" : undefined}
                        >
                            About
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link
                            to={"/product"}
                            className={getLinkClasses("/product")}
                            aria-current={pathname === "/product" ? "page" : undefined}
                        >
                            Product
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link
                            to={"/location"}
                            className={getLinkClasses("/location")}
                            aria-current={pathname === "/location" ? "page" : undefined}
                        >
                            Location
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link
                            to={"/our-team"}
                            className={getLinkClasses("/our-team")}
                            aria-current={pathname === "/our-team" ? "page" : undefined}
                        >
                            Our Team
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </nav>
    )
}

export default DesktopNavigation
