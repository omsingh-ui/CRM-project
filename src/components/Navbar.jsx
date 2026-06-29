import { Link } from "react-router-dom"

export default function Navbar(){

return(

<nav
className="
sticky
top-0
z-50

bg-white/80
backdrop-blur-lg

border-b
"
>

<div
className="
max-w-7xl
mx-auto

px-6
py-5

flex
justify-between
items-center
"
>

<Link
to="/"

className="
text-3xl
font-black

text-blue-700
"
>

Minivel

</Link>

<div
className="
flex

gap-6

items-center

text-sm
md:text-base
"
>

<a href="#dashboard">

Dashboard

</a>

<a href="#features">

Features

</a>

<a href="#trusted">

Trusted

</a>

<a href="#cta">

Start

</a>

<Link
to="/login"

className="
bg-blue-700

text-white

px-5
py-3

rounded-xl
"
>

Login

</Link>

</div>

</div>

</nav>

)

}