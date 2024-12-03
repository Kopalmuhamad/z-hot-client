import Container from "@/components/atoms/container"
import Logo from "@/components/moleculs/logo"
import DesktopNavigation from "./desktop-navigation"
import MobileNavigation from "./mobile-navigation"
import { useEffect, useState } from "react"
import { ModeToggle } from "@/components/atoms/mode-toggle"

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState<boolean>(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 py-4 shadow-xl ${isScrolled ? "bg-background" : "supports-backdrop-blur:bg-white/10 rounded-md p-2 backdrop-blur-md"}`}>
            <Container className="flex justify-between items-center">
                <Logo />
                <DesktopNavigation isScrolled={isScrolled} />
                <ModeToggle />
                <MobileNavigation />
            </Container>
        </nav>
    )
}

export default Navbar