import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import About from "../Components/About/About";
import Services from "../Components/Services/Services";
import Blogs from "../Pages/Blogs";
import Contact from "../Pages/Contact";
import Login from "../Auth/Login/Login";
import SignUp from "../Auth/SignUp/SignUp";




const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path:'/about',
                element: <About></About>
            },
            {
                path:'/services',
                element: <Services></Services>
            },
            {
                path:'/blogs',
                element: <Blogs></Blogs>
            },
            {
                path:'/contact',
                element: <Contact></Contact>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/signup',
                element: <SignUp></SignUp>
            },

        ]
    }
])


export default router;