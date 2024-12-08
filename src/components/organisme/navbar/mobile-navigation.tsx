import { Button } from "@/components/atoms/button"
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
} from "@/components/atoms/accordion"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/atoms/sheet"
import Logo from "@/components/moleculs/logo"
import { MenuIcon } from "lucide-react"
import { Link, useLocation } from "react-router-dom"

const MobileNavigation = () => {
    const { pathname } = useLocation()

    // Helper function to determine if the link is active
    const isActive = (path: string) => pathname === path ? "font-bold text-primary" : ""

    return (
        <Sheet>
            <SheetTrigger asChild className="md:hidden">
                <Button
                    id="menu"
                    variant={"outline"}
                    className="bg-transparent"
                    size={"icon"}
                    aria-label="Open navigation menu"
                >
                    <MenuIcon />
                </Button>
            </SheetTrigger>
            <SheetContent className="z-[999]" aria-labelledby="menu">
                <SheetHeader>
                    <SheetTitle>
                        <Logo />
                    </SheetTitle>
                    <SheetDescription>
                        Choose Menu
                    </SheetDescription>
                </SheetHeader>

                <Accordion type="single" collapsible>
                    {[
                        { to: '/', label: 'Home' },
                        { to: '/about', label: 'About' },
                        { to: '/product', label: 'Product' },
                        { to: '/location', label: 'Location' },
                        { to: '/our-team', label: 'Our Team' }
                    ].map(({ to, label }, index) => (
                        <AccordionItem key={index} value={`item-${index + 1}`}>
                            <AccordionTrigger>
                                <Link
                                    to={to}
                                    className={`block py-2 px-4 ${isActive(to)}`}
                                    aria-label={`Navigate to ${label}`}
                                    aria-current={pathname === to ? "page" : undefined}
                                >
                                    {label}
                                </Link>
                            </AccordionTrigger>
                        </AccordionItem>
                    ))}
                </Accordion>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNavigation
