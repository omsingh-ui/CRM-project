const rows=[

["Alex","Active"],

["Emma","Pending"],

["Lucas","Closed"],

["Olivia","Active"]

]

export default function LeadTable(){

return(

<div
className="
bg-white
rounded-3xl
p-8
shadow
mt-10
overflow-x-auto
"
>

<h2
className="
text-2xl
font-bold
mb-6
"
>

Recent Leads

</h2>

<table className="w-full">

<thead>

<tr>

<th className="text-left">

Name

</th>

<th className="text-left">

Status

</th>

</tr>

</thead>

<tbody>

{
rows.map((r)=>(

<tr
key={r[0]}
className="
border-t
"
>

<td className="py-5">

{r[0]}

</td>

<td>

{r[1]}

</td>

</tr>

))
}

</tbody>

</table>

</div>

)

}