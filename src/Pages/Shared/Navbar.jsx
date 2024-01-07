import { FaBars } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Navbar = ({ children }) => {

    return (
        <div id="navbar">
            <nav className="w-full bg-red-300 fixed z-10">
                <div className="navbar w-11/12 max-w-[1440px] mx-auto">
                    <div className="flex-1">
                        <Link to="/" className="btn btn-ghost text-xl">Shafin</Link>
                    </div>
                    <div className="flex-none hidden md:flex">
                        <ul className="menu menu-horizontal px-1">
                            {children}
                        </ul>
                    </div>
                    <label htmlFor="sideNav" className="btn bg-transparent border-none outline-none hover:bg-rose-400 active:bg-red-400 md:hidden">
                        <FaBars size="18px" />
                    </label>
                </div>
            </nav>
            <div className="drawer drawer-end md:hidden">
                <input id="sideNav" type="checkbox" className="drawer-toggle" />
                <div className="drawer-side z-10 mt-[4rem]">
                    <label htmlFor="sideNav" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-[70%] sm:w-80 min-h-full text-base-content bg-red-300">
                        {children}
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default Navbar