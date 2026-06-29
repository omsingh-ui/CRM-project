import {
Link
}
from "react-router-dom"

export default function DashboardHeader(){

return(

<div
className="
flex

flex-col
md:flex-row

justify-between

gap-6

mb-10
"
>

<div>

<h1
className="
text-3xl
md:text-5xl

font-bold
"
>

Dashboard

</h1>

<p
className="
text-gray-500
mt-2
"
>

Welcome Back

</p>

</div>

<div
className="
flex

flex-wrap

gap-3
"
>

<Link
to="/"

className="
bg-blue-700

text-white

px-5
py-3

rounded-xl
"
>

Home

</Link>

<input

placeholder="Search"

className="
border

px-5
py-3

rounded-xl

w-full
md:w-[240px]
"
/>

</div>

</div>

)

}