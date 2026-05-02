// import {Outlet} from 'react-router-dom'
// import Navbar from './Navbar'

import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"

// import Sidebar from './Sidebar'
export default function DashboardLayout(){


    return (
        <>
        <div className='min-h-screen  '>
        <Navbar/>
        <Sidebar/>
        <main className=' pt-14 p-6 mt-5 min-h-screen ml-[230px] '>
        <Outlet/>
        </main>
        
        </div>
        </>
    )



}