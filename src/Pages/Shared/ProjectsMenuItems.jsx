import { FaHouse, FaNoteSticky } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";

const ProjectsMenuItems = () => {

    return (
        <>
            <li>
                <Link to="/">
                    <FaHouse size="18px" />
                    <span>Home</span>
                </Link>
            </li>
            <li>
                <NavLink
                    to="/projects"
                    className={({ isActive }) => isActive ? "bg-gradient-to-tr from-purple-600 to-rose-600 text-white" : " text-white"}
                    style={({ isActive }) => ({ color: isActive ? "white" : "" })}
                >
                    <FaNoteSticky size="18px" />
                    <span>Projects</span>
                </NavLink>
            </li>
        </>
    )
};

export default ProjectsMenuItems