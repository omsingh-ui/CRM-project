export default function Navbar() {
  return (

<header
className="
sticky
top-0
z-50
bg-white
shadow-sm
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

<h1
className="
text-3xl
font-bold
text-blue-700
"
>
Minivel
</h1>

<nav className="hidden md:flex gap-8">

<a href="#">Home</a>

<a href="#">Features</a>

<a href="#">Pricing</a>

<a href="#">Contact</a>

</nav>

<button
className="
bg-blue-700
text-white
px-6
py-3
rounded-xl
"
>

Get Started

</button>

</div>

</header>

)
}