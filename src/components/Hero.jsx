export default function Hero() {

return (

<section
className="
bg-blue-700
text-white
"
>

<div
className="
max-w-7xl
mx-auto
px-6
py-20
grid
lg:grid-cols-2
gap-12
items-center
"
>

<div>

<div
className="
bg-blue-500
inline-block
px-4
py-2
rounded-full
mb-6
"
>

Smart CRM

</div>

<h1
className="
text-6xl
font-bold
leading-tight
"
>

Grow Your Business
With Minivel

</h1>

<p
className="
mt-6
text-xl
text-blue-100
"
>

Track leads, manage clients,
automate follow-ups.

</p>

<div className="flex gap-4 mt-10">

<a
href="/dashboard"
className="
inline-block
bg-white
text-blue-700
px-8
py-4
rounded-xl
font-semibold
hover:scale-105
transition
"
>

Open Dashboard

</a>

<button
className="
border
px-8
py-4
rounded-xl
"
>

See Demo

</button>

</div>

</div>

<div>

<div
className="
bg-white
rounded-3xl
p-8
shadow-2xl
"
>

<div className="space-y-4">

<div className="h-6 bg-gray-200 rounded"/>

<div className="h-32 bg-blue-100 rounded"/>

<div className="grid grid-cols-3 gap-4">

<div className="h-20 bg-gray-100 rounded"/>

<div className="h-20 bg-gray-100 rounded"/>

<div className="h-20 bg-gray-100 rounded"/>

</div>

</div>

</div>

</div>

</div>

</section>

)

}