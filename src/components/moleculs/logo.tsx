import { Link } from "react-router-dom";

const Logo = () => {
    return (
        <Link
            to="/"
            className="font-bold font-montserrat-alt text-base text-primary"
            aria-label="Go to homepage" // Adding aria-label for accessibility
        >
            ZHOT
        </Link>
    );
}

export default Logo;
