import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../component/Home";
import Service from "../component/Service";
import About from "../component/About";
import Team from "../component/Team"
import Login from "../component/Login";
import Signup from "../component/SignUp";
import Feature1 from "../component/Feature1";
import Feature2 from "../component/Feature2";
import Feature3 from "../component/Feature3";



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
                element: <Team/>
            },
            {
                path:"/login",
                element:<Login/>
            },
            {
                path:"/signup",
                element:<Signup/>
            },
            {
                path:"/feature1",
                element:<Feature1/>
            },
            {
                path:"/feature2",
                element:<Feature2/>
            },
            {
                path:"/feature3",
                element:<Feature3/>
            },
        ]
    }
])

export default Router
