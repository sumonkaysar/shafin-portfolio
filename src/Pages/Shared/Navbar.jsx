import { FaAddressBook, FaBars, FaHouse, FaNoteSticky, FaScrewdriverWrench, FaUser } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Navbar = () => {
    const menuItem = <>
        <li>
            <a href="#">
                <FaHouse size="18px" />
                <span>Home</span>
            </a>
        </li>
        <li>
            <a href="#about">
                <FaUser size="18px" />
                <span>About</span>
            </a>
        </li>
        <li>
            <a href="#tools">
                <FaScrewdriverWrench size="18px" />
                <span>Tools</span>
            </a>
        </li>
        <li>
            <a href="#contact">
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

    return (
        <div>
            <nav className="w-full bg-red-300 fixed z-10">
                <div className="navbar w-11/12 max-w-[1440px] mx-auto">
                    <div className="flex-1">
                        <a href="#" className="btn btn-ghost text-xl">Shafin</a>
                    </div>
                    <div className="flex-none hidden md:flex">
                        <ul className="menu menu-horizontal px-1">
                            {menuItem}
                        </ul>
                    </div>

                    <label htmlFor="sideNav"
                        className="btn bg-transparent border-none outline-none hover:bg-rose-400 active:bg-red-400 md:hidden">
                        <FaBars size="18px" />
                    </label>
                </div>
            </nav>
            <div className="drawer drawer-end md:hidden">
                <input id="sideNav" type="checkbox" className="drawer-toggle" />
                <div className="drawer-side z-10 mt-[80px]">
                    <label htmlFor="sideNav" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-[70%] sm:w-80 min-h-full text-base-content bg-red-300">
                        {
                            menuItem
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default Navbar