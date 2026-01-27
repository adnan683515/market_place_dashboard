import { createBrowserRouter } from "react-router";
import Login from "../pages/Auth/Login";
import MainLayout from "../Layout/MainLayout";
import Dashboard from "../pages/Dashboard/Dashboard";
import UserManagement from "../pages/UserManagement/UserManagement";
import Listing from "../pages/Listing/Listing";
import Verification from "../pages/Verification/Verification";
import ContentMod from "../pages/Content/ContentMod";
import BoostedListing from "../pages/Boosted/BoostedListing";
import Notification from "../pages/Notification/Notification";
import Analytics from "../pages/AnaLytics/Analytics";
import SettginsPage from "../pages/SettingsPage/SettginsPage";




export const router = createBrowserRouter([
    {
        path: "/",
        Component: Login,
    },
    {
        path: "/dashboard",
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: Dashboard,
            },
            {
                path: "user",
                Component: UserManagement,
            }, {
                path: "listing",
                Component: Listing
            }, {
                path: "verification",
                Component: Verification
            },{
                path:"content",
                Component:ContentMod
            },{
                path : "boosted",
                Component : BoostedListing
            },{
                path:"notification",
                Component : Notification
            },{
                path:"analytics",
                Component : Analytics
            },{
                path:"settings",
                Component : SettginsPage
            }
        ],
    },
]);
