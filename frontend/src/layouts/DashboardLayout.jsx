import Sidebar
from "../components/Sidebar"

import {
Outlet
}
from "react-router-dom"

export default function DashboardLayout(){

return(

<div
className="
flex

flex-col

md:flex-row
"
>

<Sidebar/>

<div
className="
flex-1
"
>

<Outlet/>

</div>

</div>

)

}