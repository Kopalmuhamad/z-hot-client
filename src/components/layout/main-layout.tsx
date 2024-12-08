import { Outlet } from "react-router-dom";
import Navbar from "../organisme/navbar";
import Footer from "../organisme/footer";

/**
 * MainLayout component
 * 
 * This component represents the main layout structure of the application.
 * It includes a Navbar at the top, an Outlet for rendering child routes,
 * and a Footer at the bottom.
 * 
 * @returns {JSX.Element} The rendered MainLayout component
 */
const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default MainLayout
