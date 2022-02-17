import { Outlet } from "react-router-dom";
import HeaderMain from "./HeaderMain";

const MainLayout = () => {
    return (
        <>
            <HeaderMain/>
            <h2>Main Layout</h2>

            <Outlet />
        </>
    )
}

export default MainLayout;