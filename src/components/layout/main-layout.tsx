import { Outlet } from "react-router-dom";
import Navbar from "../organisme/navbar";
import Footer from "../organisme/footer";

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