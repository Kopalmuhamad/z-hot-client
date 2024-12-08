import Container from "@/components/atoms/container"
import Logo from "@/components/moleculs/logo"
import DesktopNavigation from "./desktop-navigation"
import MobileNavigation from "./mobile-navigation"
import { useEffect, useState, useCallback } from "react"
import { ModeToggle } from "@/components/atoms/mode-toggle"

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState<boolean>(false)

    // Using useCallback to memoize the scroll handler and prevent unnecessary re-renders
    const handleScroll = useCallback(() => {
        if (window.scrollY > 0) {
            setIsScrolled(true)
        } else {
            setIsScrolled(false)
        }
    }, [])

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [handleScroll])

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 py-4 shadow-xl transition-all duration-300 ease-in-out 
            ${isScrolled ? "bg-background" : "supports-backdrop-blur:bg-white/10 rounded-md p-2 backdrop-blur-md"}`}
            aria-label="Main navigation"
        >
            <Container className="flex justify-between items-center">
                <Logo aria-label="Logo" />
                {/* Render DesktopNavigation only for large screens */}
                <DesktopNavigation isScrolled={isScrolled} />
                <ModeToggle aria-label="Toggle dark/light mode" />
                {/* Render MobileNavigation only for small screens */}
                <MobileNavigation />
            </Container>
        </nav>
    )
}

export default Navbar
