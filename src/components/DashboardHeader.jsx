import { FaBell } from "react-icons/fa"

export default function DashboardHeader(){

return(

<div
className="
flex
justify-between
items-center
mb-10
"
>

<div>

<h1
className="
text-5xl
font-bold
"
>

Dashboard

</h1>

<p className="text-gray-500">

Welcome back.

</p>

</div>

<div
className="
flex
gap-4
items-center
"
>

<input
placeholder="Search"
className="
px-5
py-3
rounded-xl
border
outline-none
"
/>

<button
className="
w-12
h-12
rounded-full
bg-white
shadow
flex
items-center
justify-center
"
>

<FaBell/>

</button>

</div>

</div>

)

}