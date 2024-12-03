import FooterAbout from "./footer-about"
import FooterQuickLink from "./footer-quick-link"
import FooterContactUs from "./footer-contact-us"
import FooterSocialMedia from "./footer-social-media"
import FooterSign from "./footer-sign"

const Footer = () => {
    return (
        <footer className="bg-secondary text-secondary-foreground">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <FooterAbout />
                    <FooterQuickLink />
                    <FooterContactUs />
                    <FooterSocialMedia />
                </div>
                <FooterSign />
            </div>
        </footer>
    )
}

export default Footer