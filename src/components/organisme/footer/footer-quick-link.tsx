import { Link } from "react-router-dom"

const FooterQuickLink = () => {
    return (
        <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
                <li><Link to="/" className="text-sm hover:text-gray-900">Home</Link></li>
                <li><Link to="/services" className="text-sm hover:text-gray-900">Services</Link></li>
                <li><Link to="/about" className="text-sm hover:text-gray-900">About</Link></li>
                <li><Link to="/contact" className="text-sm hover:text-gray-900">Contact</Link></li>
            </ul>
        </div>
    )
}

export default FooterQuickLink