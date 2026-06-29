export default function Settings(){

return(

<div
className="
min-h-screen
p-10

bg-slate-100

dark:bg-slate-950
dark:text-white
"
>

<h1
className="
text-5xl
font-bold
"
>

Settings

</h1>

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

<label>

Company Name

</label>

<input
placeholder="Minivel"

className="
w-full
mt-4
p-4

rounded-xl
border
text-black
"
/>

<button
className="
mt-8

bg-blue-700
text-white

px-6
py-3

rounded-xl
"
>

Save

</button>

</div>

</div>

)

}