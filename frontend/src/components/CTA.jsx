import { Link }
from "react-router-dom"

export default function CTA(){

return(

<section

id="cta"

className="
py-24
"
>
<div
className="
max-w-5xl

mx-auto

bg-blue-700

rounded-[40px]

text-white

p-12

text-center
"
>

<h2
className="
text-5xl

font-bold
"
>

Start Building Faster

</h2>

<p
className="
mt-6

text-blue-100
"
>

Grow your business with Minivel.

</p>

<Link

to="/login"

className="
inline-block

mt-10

bg-white

text-blue-700

px-8
py-4

rounded-xl
"
>

Get Started

</Link>

</div>

</section>

)

}