import {
FaWhatsapp,
FaFileExport,
FaBolt,
FaMapMarkerAlt,
FaBell,
FaCamera
}
from "react-icons/fa"

const features=[

{
title:"Scan Cards",
icon:<FaCamera/>
},

{
title:"WhatsApp",
icon:<FaWhatsapp/>
},

{
title:"Export PDF",
icon:<FaFileExport/>
},

{
title:"Automation",
icon:<FaBolt/>
},

{
title:"GPS Tracking",
icon:<FaMapMarkerAlt/>
},

{
title:"Reminders",
icon:<FaBell/>
}

]

export default function Features(){

return(

<section className="py-20">

<div className="max-w-7xl mx-auto px-6">

<h2
className="
text-center
text-5xl
font-bold
"
>

Everything In One Place

</h2>

<div
className="
grid
md:grid-cols-2
lg:grid-cols-3
gap-8
mt-16
"
>

{
features.map((f)=>(

<div
key={f.title}
className="
bg-white
rounded-3xl
shadow-lg
p-10
hover:-translate-y-2
transition
"
>

<div
className="
w-16
h-16
rounded-2xl
bg-blue-100
text-blue-700
flex
items-center
justify-center
text-2xl
mb-6
"
>

{f.icon}

</div>

<h3
className="
text-2xl
font-bold
"
>

{f.title}

</h3>

<p className="mt-3 text-gray-500">

Manage business faster.

</p>

</div>

))
}

</div>

</div>

</section>

)

}