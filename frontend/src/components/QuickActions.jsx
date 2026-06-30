export default function QuickActions(){

const actions=[

"New Lead",

"Create Report",

"Invite Team"

]

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

mb-6
"
>

Quick Actions

</h2>

<div
className="
grid

grid-cols-1

gap-4
"
>

{

actions.map(

(item)=>(

<button

key={item}

className="
bg-blue-700

text-white

p-4

rounded-xl

hover:scale-[1.02]

transition
"
>

{item}

</button>

)

)

}

</div>

</div>

)

}