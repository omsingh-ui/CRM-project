import { Link } from "react-router-dom"

export default function Hero(){

return(

<section
className="
bg-gradient-to-br
from-blue-700
to-indigo-900

text-white

overflow-hidden
"
>

<div
className="
max-w-7xl
mx-auto

px-6
py-28

grid

lg:grid-cols-2

gap-16

items-center
"
>

<div>

<div
className="
inline-block

bg-white/10

px-5
py-2

rounded-full

mb-8
"
>

✨ CRM Platform

</div>

<h1
className="
text-5xl
md:text-7xl

font-black

leading-tight
"
>

Grow Faster

With

Minivel

</h1>

<p
className="
mt-8

text-lg

text-blue-100

max-w-[600px]
"
>

Manage customers, leads,
analytics and growth in one place.

</p>

<div
className="
flex

flex-wrap

gap-4

mt-10
"
>

<Link
to="/login"

className="
bg-white

text-blue-800

px-8
py-4

rounded-2xl

font-semibold
"
>

Get Started

</Link>

<Link
to="/dashboard"

className="
border

px-8
py-4

rounded-2xl
"
>

Live Demo

</Link>

</div>

</div>

<div>

<div
className="
bg-white

rounded-[40px]

p-8

shadow-2xl
"
>

<div
className="
grid

grid-cols-2

gap-5
"
>

<div
className="
bg-blue-100

rounded-3xl

h-[180px]
"
/>

<div
className="
bg-indigo-100

rounded-3xl

h-[180px]
"
/>

<div
className="
bg-slate-100

rounded-3xl

h-[180px]
"
/>

<div
className="
bg-blue-50

rounded-3xl

h-[180px]
"
/>

</div>

</div>

</div>

</div>

</section>

)

}