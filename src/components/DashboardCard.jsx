export default function DashboardCard({

title,
value

}){

return(

<div
className="
bg-white
rounded-3xl
p-8
shadow
"
>

<p className="text-gray-500">

{title}

</p>

<h2
className="
text-4xl
font-bold
mt-4
"
>

{value}

</h2>

</div>

)

}