import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../component/Home";
import Service from "../component/Service";
import About from "../component/About";
import Contact from "../component/Contact";



const Router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element:<Home/>
            },
            {
                path: "/service",
                element: <Service/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/team",
                element: <Contact/>
            }
        ]
    }
])

export default Router
