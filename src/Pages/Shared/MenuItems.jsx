import { useEffect } from "react";
import { FaAddressBook, FaHouse, FaNoteSticky, FaScrewdriverWrench, FaUser } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";

const MenuItems = () => {
    const location = useLocation();
    const { hash } = location;

    return (
        <>
            <li>
                <a href="#" className={hash === "" ? "bg-gradient-to-tr from-purple-600 to-rose-600 text-white" : ""} style={{ color: hash === "" && "white" }}>
                    <FaHouse size="18px" />
                    <span>Home</span>
                </a>
            </li>
            <li>
                <a href="#about" className={hash === "#about" ? "bg-gradient-to-tr from-purple-600 to-rose-600 text-white" : ""}>
                    <FaUser size="18px" />
                    <span>About</span>
                </a>
            </li>
            <li>
                <a href="#tools" className={hash === "#tools" ? "bg-gradient-to-tr from-purple-600 to-rose-600 text-white" : ""}>
                    <FaScrewdriverWrench size="18px" />
                    <span>Tools</span>
                </a>
            </li>
            <li>
                <a href="#contact" className={hash === "#contact" ? "bg-gradient-to-tr from-purple-600 to-rose-600 text-white" : ""}>
                    <FaAddressBook size="18px" />
                    <span>Contact</span>
                </a>
            </li>
            <li>
                <Link to="/projects">
                    <FaNoteSticky size="18px" />
                    <span>Projects</span>
                </Link>
            </li>
        </>
    )
};

export default MenuItems