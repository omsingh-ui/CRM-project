const notifications = [
"3 new leads",
"Revenue updated",
"New dashboard visit"
]

export default function Notifications(){

return(

<div
className="
bg-white
rounded-3xl
shadow
p-6
"
>

<h2
className="
text-2xl
font-bold
mb-5
"
>

Notifications

</h2>

<div className="space-y-3">

{

notifications.map(

(item)=>(

<div
key={item}

className="
bg-slate-100
rounded-xl
p-4
"
>

{item}

</div>

)

)

}

</div>

</div>

)

}