import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar";
import ProjectsMenuItems from "../Pages/Shared/ProjectsMenuItems";

const ProjectsLayout = () => {

    return (
        <>
            <Navbar>
                <ProjectsMenuItems />
            </Navbar>
            <Outlet />
        </>
    )
};

export default ProjectsLayout