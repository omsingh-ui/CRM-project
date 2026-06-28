import {
FaHome,
FaChartBar,
FaUsers,
FaCog
}
from "react-icons/fa"

const items=[

{
title:"Overview",
icon:<FaHome/>
},

{
title:"Analytics",
icon:<FaChartBar/>
},

{
title:"Customers",
icon:<FaUsers/>
},

{
title:"Settings",
icon:<FaCog/>
}

]

export default function Sidebar(){

return(

<div
className="
w-[260px]
bg-slate-900
text-white
h-screen
p-8
"
>

<h2
className="
text-3xl
font-bold
mb-10
"
>

Minivel

</h2>

<div className="space-y-4">

{
items.map((item)=>(

<button
key={item.title}
className="
w-full
flex
gap-4
items-center
p-4
rounded-xl
hover:bg-slate-800
"
>

{item.icon}

{item.title}

</button>

))
}

</div>

</div>

)

}