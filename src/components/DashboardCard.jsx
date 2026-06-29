import {
FaDollarSign,
FaUsers,
FaArrowUp,
FaChartLine
}
from "react-icons/fa"

const icons={

Revenue:<FaDollarSign/>,

Customers:<FaUsers/>,

Growth:<FaArrowUp/>,

Leads:<FaChartLine/>

}

export default function DashboardCard({

title,
value

}){

return(

<div
className="
bg-white

rounded-3xl

p-6

shadow-lg

hover:shadow-2xl

transition

flex

justify-between

items-start
"
>

<div>

<p
className="
text-gray-500
text-sm
"
>

{title}

</p>

<h2
className="
text-3xl
md:text-5xl

font-bold

mt-4
"
>

{value}

</h2>

</div>

<div
className="
text-2xl

bg-blue-100

text-blue-700

p-4

rounded-2xl
"
>

{
icons[title]
}

</div>

</div>

)

}