import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import HeaderMain from "./HeaderMain";

const MainLayout = () => {
    return (
        <>
            <h2>Cookie Consent</h2>
            <HeaderMain/>

            <div className="site_content">
                <h2>Main Layout</h2>
                <Outlet />
            </div>

            <Footer />
        </>
    )
}

export default MainLayout;