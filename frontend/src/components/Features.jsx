import {
FaChartLine,
FaUsers,
FaRocket,
FaBolt,
FaShieldAlt,
FaDatabase
}
from "react-icons/fa"

const items=[

{
title:"Dashboard",
icon:<FaChartLine/>,
desc:"Track business performance."
},

{
title:"Customers",
icon:<FaUsers/>,
desc:"Manage relationships."
},

{
title:"Growth",
icon:<FaRocket/>,
desc:"Scale faster."
},

{
title:"Automation",
icon:<FaBolt/>,
desc:"Reduce repetitive work."
},

{
title:"Security",
icon:<FaShieldAlt/>,
desc:"Protect business data."
},

{
title:"Reports",
icon:<FaDatabase/>,
desc:"Instant insights."
}

]

export default function Features(){

return(

<section

id="features"

className="
py-24
"
>

<div
className="
max-w-7xl
mx-auto
px-6
"
>

<h2
className="
text-5xl
font-bold

text-center
"
>

Features

</h2>

<div
className="
grid

md:grid-cols-2

lg:grid-cols-3

gap-8

mt-14
"
>

{

items.map(

(item)=>(

<div

key={item.title}

className="
bg-white

rounded-3xl

p-8

shadow

hover:-translate-y-2

hover:shadow-2xl

transition
"
>

<div
className="
text-blue-700

text-4xl

mb-6
"
>

{item.icon}

</div>

<h3
className="
text-2xl
font-bold
"
>

{item.title}

</h3>

<p
className="
mt-4

text-gray-500
"
>

{item.desc}

</p>

</div>

)

)

}

</div>

</div>

</section>

)

}