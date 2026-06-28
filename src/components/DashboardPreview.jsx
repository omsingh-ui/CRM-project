import {
FaChartLine,
FaUsers,
FaEnvelope,
FaMoneyBill
}
from "react-icons/fa"

export default function DashboardPreview() {

const cards = [
{
icon:<FaUsers/>,
title:"Leads",
value:"4,280"
},
{
icon:<FaEnvelope/>,
title:"Emails",
value:"980"
},
{
icon:<FaMoneyBill/>,
title:"Revenue",
value:"$48K"
},
{
icon:<FaChartLine/>,
title:"Growth",
value:"+23%"
}
]

return (

<section className="py-20">

<div className="max-w-7xl mx-auto px-6">

<div
className="
bg-white
rounded-[40px]
shadow-2xl
p-10
"
>

<h2
className="
text-4xl
font-bold
mb-10
"
>

Dashboard

</h2>

<div
className="
grid
md:grid-cols-2
lg:grid-cols-4
gap-6
"
>

{
cards.map((card)=>(

<div
key={card.title}
className="
bg-blue-50
rounded-3xl
p-8
"
>

<div
className="
text-blue-700
text-3xl
mb-6
"
>
{card.icon}
</div>

<p className="text-gray-500">

{card.title}

</p>

<h3
className="
text-4xl
font-bold
"
>

{card.value}

</h3>

</div>

))
}

</div>

<div
className="
mt-10
h-[220px]
rounded-3xl
bg-gradient-to-r
from-blue-500
to-indigo-600
"
>

<div className="p-10 text-white">

<h3 className="text-3xl font-bold">

Sales Analytics

</h3>

<p className="mt-4">

Monthly performance overview

</p>

</div>

</div>

</div>

</div>

</section>

)

}