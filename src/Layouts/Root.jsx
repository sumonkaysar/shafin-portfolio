import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar";
import Footer from "../Pages/Shared/Footer";
import MenuItems from "../Pages/Shared/MenuItems";

const Root = () => {

    return (
        <>
            <Navbar>
                <MenuItems />
            </Navbar>
            <Outlet />
            <Footer />
        </>
    )
};

export default Root