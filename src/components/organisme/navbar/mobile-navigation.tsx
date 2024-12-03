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
import { Link } from "react-router-dom"

const MobileNavigation = () => {
    return (
        <Sheet>
            <SheetTrigger asChild className="md:hidden">
                <Button variant={"outline"} size={"icon"}>
                    <MenuIcon />
                </Button>
            </SheetTrigger>
            <SheetContent className="z-[999]">

                <SheetHeader>
                    <SheetTitle>
                        <Logo />
                    </SheetTitle>
                    <SheetDescription>
                        Choose Menu
                    </SheetDescription>
                </SheetHeader>

                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>
                            <Link to={'/'}>Home</Link>
                        </AccordionTrigger>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>
                            <Link to={'/about'}>About</Link>
                        </AccordionTrigger>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>
                            <Link to={'/product'}>Product</Link>
                        </AccordionTrigger>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger>
                            <Link to={'/location'}>Location</Link>
                        </AccordionTrigger>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                        <AccordionTrigger>
                            <Link to={'/our-team'}>Our Team</Link>
                        </AccordionTrigger>
                    </AccordionItem>
                </Accordion>

            </SheetContent>
        </Sheet>

    )
}

export default MobileNavigation