import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from "lucide-react"
import { Link } from "react-router-dom"

const FooterSocialMedia = () => {
    return (
        <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
                <Link to="#">
                    <FacebookIcon size={20} />
                    <span className="sr-only">Facebook</span>
                </Link>
                <Link to="#">
                    <TwitterIcon size={20} />
                    <span className="sr-only">Twitter</span>
                </Link>
                <Link to="#">
                    <InstagramIcon size={20} />
                    <span className="sr-only">Instagram</span>
                </Link>
                <Link to="#">
                    <LinkedinIcon size={20} />
                    <span className="sr-only">LinkedIn</span>
                </Link>
            </div>
        </div>
    )
}

export default FooterSocialMedia