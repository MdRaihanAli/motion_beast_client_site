import { createBrowserRouter } from "react-router-dom";
import Main from '../layout/Main.jsx'
import Home from "../Pages/Home/Home.jsx";
import Login from "../Components/Login/Login.jsx";
import SignUp from "../Components/SignUp/SignUp.jsx";
import Classes from "../Components/Classes/Classes.jsx";
import Dashboard from "../Pages/Dashboard/Dashboard.jsx";
import AllClass from "../Components/AllClass/AllClass.jsx";
import ManageUser from "../Components/ManageUser/ManageUser.jsx";


const router = createBrowserRouter([
    {
        path: "/",
        element:<Main></Main>,
        children: [
            {
                path:'/',
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
                path:'classes',
                element: <Classes></Classes>
            },

        ]
    
    },
    {
        path:'dashboard',
        element: <Dashboard></Dashboard>,
        children:[
            {
                path:'allClass',
                element: <AllClass></AllClass>
            },
            {
                path:'manageUsers',
                element: <ManageUser></ManageUser>
            }
        ]
    }
]);

export default router