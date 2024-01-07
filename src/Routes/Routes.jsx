import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import Projects from "../Pages/Projects/Projects";
import ProjectsLayout from "../Layouts/ProjectsLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
        ]
    },
    {
        path: "/projects",
        element: <ProjectsLayout />,
        children: [
            {
                path: "/projects",
                element: <Projects />,
            },
        ]
    },
]);

export default router;