import { createBrowserRouter } from "react-router";
import Login from "../pages/Auth/Login";
import MainLayout from "../Layout/MainLayout";
import Dashboard from "../pages/Dashboard/Dashboard";




export const router = createBrowserRouter([
    {
        path:"/",
        Component : Login
    },{
        path:"/dashbaord",
        Component : MainLayout,
        children : [
            {
                path:"/dashbaord",
                Component : Dashboard
            }
        ]
    }
])