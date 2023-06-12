import { createBrowserRouter } from "react-router-dom";
import Main from '../layout/Main.jsx'
import Home from "../Pages/Home/Home.jsx";
import Login from "../Components/Login/Login.jsx";
import SignUp from "../Components/SignUp/SignUp.jsx";
import Classes from "../Components/Classes/Classes.jsx";
import Dashboard from "../Pages/Dashboard/Dashboard.jsx";
import AllClass from "../Components/AllClass/AllClass.jsx";
import ManageUser from "../Components/ManageUser/ManageUser.jsx";
import Addclass from "../Components/AddClass/Addclass.jsx";
import MyClass from "../Components/MyClass/MyClass.jsx";
import MySelectedClasses from "../Components/MySelectedClasses/MySelectedClasses.jsx";
import MyEnrolledClasses from "../Components/MyEnrolledClasses/MyEnrolledClasses.jsx";

import ErrorPase from "../Components/ErrorPase/ErrorPase.jsx";
import Instructors from "../Components/Instructors/Instructors.jsx";
import PrivetRoute from "../privetRoute/PrivetRoute.jsx";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'signup',
                element: <SignUp></SignUp>
            },
            {
                path: 'classes',
                element: <Classes></Classes>
            },
            {
                path: 'instructors',
                element: <Instructors></Instructors>
            }

        ]

    },
    {
        path: 'dashboard',
        element: <PrivetRoute><Dashboard></Dashboard></PrivetRoute>,
        children: [
            {

            },
            {
                path: 'allClass',
                element: <AllClass></AllClass>
            },
            {
                path: 'manageUsers',
                element: <ManageUser></ManageUser>
            },
            {
                path: 'addClass',
                element: <Addclass></Addclass>
            },
            {
                path: 'myClass',
                element: <MyClass></MyClass>
            },
            {
                path: 'mySelectedClasses',
                element: <MySelectedClasses></MySelectedClasses>
            },
            {
                path: 'myEnrolledClass',
                element: <MyEnrolledClasses></MyEnrolledClasses>
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPase></ErrorPase>
    }

]);

export default router