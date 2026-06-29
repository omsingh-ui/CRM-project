import {
ResponsiveContainer,
LineChart,
Line,
XAxis,
YAxis,
Tooltip
}
from "recharts"

const data=[

{month:"Jan",sales:12},

{month:"Feb",sales:20},

{month:"Mar",sales:18},

{month:"Apr",sales:34},

{month:"May",sales:42}

]

export default function AnalyticsChart(){

return(

<div
className="
bg-white
rounded-3xl
shadow
p-8
mt-10
h-[400px]
"
>

<h2
className="
text-2xl
font-bold
mb-8
"
>

Sales Analytics

</h2>

<ResponsiveContainer>

<LineChart data={data}>

<XAxis dataKey="month"/>

<YAxis/>

<Tooltip/>

<Line
dataKey="sales"
stroke="#2563eb"
strokeWidth={4}
/>

</LineChart>

</ResponsiveContainer>

</div>

)

}