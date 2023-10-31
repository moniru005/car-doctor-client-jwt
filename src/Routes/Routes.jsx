import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import About from "../Components/About/About";
import Services from "../Components/Services/Services";
import Blogs from "../Pages/Blogs";
import Contact from "../Pages/Contact";
import Login from "../Auth/Login/Login";
import SignUp from "../Auth/SignUp/SignUp";
import BookService from "../Pages/BookService";
import Bookings from "../Pages/Bookings";
import PrivateRoute from "./PrivateRoute";





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
            {
                path:'/book/:id',
                element: <PrivateRoute><BookService></BookService></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
            },
          
            {
                path:'/bookings',
                element: <PrivateRoute><Bookings></Bookings></PrivateRoute>
            },
          

        ]
    }
])


export default router;