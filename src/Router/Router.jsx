import { createBrowserRouter } from "react-router-dom";
import Main from '../layout/Main.jsx'
import Home from "../Pages/Home/Home.jsx";
import Login from "../Components/Login/Login.jsx";
import SignUp from "../Components/SignUp/SignUp.jsx";


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
            }
        ]
    
    },
]);

export default router