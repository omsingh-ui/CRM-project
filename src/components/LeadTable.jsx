import { useState } from "react"

export default function LeadTable({

data=[]

}){

const[
search,
setSearch

]=useState("")

const filtered=
data.filter(

(item)=>

item.name
.toLowerCase()
.includes(
search.toLowerCase()
)

)

return(

<div
className="
bg-white
dark:bg-slate-800

rounded-3xl
shadow

mt-10
p-8
"
>

<div
className="
flex
justify-between
mb-8
"
>

<h2
className="
text-2xl
font-bold
"
>

Leads

</h2>

<input
placeholder="Search Lead"

value={search}

onChange={(e)=>

setSearch(
e.target.value
)

}

className="
border
rounded-xl
px-4
py-3
text-black
"
/>

</div>

{

filtered.length===0

?

<p>

No results

</p>

:

<table className="w-full">

<tbody>

{

filtered.map(

(item)=>(

<tr
key={item.name}
className="
border-b
"
>

<td
className="
py-5
"
>

{item.name}

</td>

<td>

{item.status}

</td>

</tr>

)

)

}

</tbody>

</table>

}

</div>

)

}