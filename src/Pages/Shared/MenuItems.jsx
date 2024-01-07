import { FaAddressBook, FaHouse, FaNoteSticky, FaScrewdriverWrench, FaUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { ScrollingContext } from "../../Contexts/ScrollingContext";
import { useContext } from "react";

const MenuItems = () => {
    const { currentSection } = useContext(ScrollingContext);

    return (
        <>
            <li>
                <a href="#" className={currentSection === "" ? "bg-gradient-to-tr from-purple-600 to-rose-600 text-white" : ""} style={{ color: currentSection === "" && "white" }}>
                    <FaHouse size="18px" />
                    <span>Home</span>
                </a>
            </li>
            <li>
                <a href="#about" className={currentSection === "#about" ? "bg-gradient-to-tr from-purple-600 to-rose-600 text-white" : ""}>
                    <FaUser size="18px" />
                    <span>About</span>
                </a>
            </li>
            <li>
                <a href="#tools" className={currentSection === "#tools" ? "bg-gradient-to-tr from-purple-600 to-rose-600 text-white" : ""}>
                    <FaScrewdriverWrench size="18px" />
                    <span>Tools</span>
                </a>
            </li>
            <li>
                <a href="#contact" className={currentSection === "#contact" ? "bg-gradient-to-tr from-purple-600 to-rose-600 text-white" : ""}>
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