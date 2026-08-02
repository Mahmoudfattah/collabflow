import { createHashRouter , RouterProvider } from "react-router-dom";
// import AuthLayout from "../layouts/AuthLayout";
// import Login from "../pages/auth/Login";
// import Register from "../pages/auth/Register";
// import Sidebar from "../layouts/Sidebar";
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../pages/dashboard/Dashboard";
import Board from "../pages/dashboard/Board";
import SprintBoard from "../pages/dashboard/Sprintboard";

import Tasks from "../pages/dashboard/tasks/Tasks";
import Inbox from "../pages/dashboard/inbox/Inbox";



const router = createHashRouter ([
   //Auth router 
    // {

    //   element : <AuthLayout/>,
    //   children : [
    //     {
    //         path : "/login",
    //         element : <Login/>
    //     },
    //     {
    //         path : '/',
    //         element : <Sidebar/>
    //     }
        
    // ]
    // },
    {

      element : <DashboardLayout/>,
      children : [
        {
            path : "/",
            element : <Dashboard/>
        },
        {
            path : "/board",
            element : <Board/>
        },
        {
            path : "/sprint-board",
            element : <SprintBoard/>
        },
       
        {
            path : "/inbox",
            element : <Inbox/>
        },
       
        {
            path : "/my-tasks",
            element : <Tasks/>
        },
       
        
    ]
    }



])

 export default function AppRouter(){
    return(
        <RouterProvider router={router}>
        </RouterProvider>
    )
}