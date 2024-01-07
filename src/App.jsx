import { RouterProvider } from "react-router-dom"
import router from "./Routes/Routes"
import AOS from "aos";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      // Global settings and customization options here
    });
  }, []);

  return (
    <RouterProvider router={router} />
  )
}

export default App
