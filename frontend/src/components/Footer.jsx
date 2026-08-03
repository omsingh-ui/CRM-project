import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaArrowUp,
} from "react-icons/fa";


export default function Footer(){

const productLinks = [
  {name:"Features", path:"/features"},
  {name:"Pricing", path:"/pricing"},
  {name:"Dashboard", path:"/"},
];


const companyLinks = [
  {name:"About", path:"/about"},
  {name:"Contact", path:"/contact"},
  {name:"Privacy", path:"/privacy"},
];


return(

<footer
className="
relative
mt-24
overflow-hidden
bg-gradient-to-br
from-slate-950
via-blue-950
to-indigo-950
text-white
"
>


{/* Glow */}

<div
className="
absolute
top-0
left-1/4
w-72
h-72
bg-blue-500/20
blur-3xl
rounded-full
"
/>


<div
className="
absolute
bottom-0
right-1/4
w-72
h-72
bg-purple-500/20
blur-3xl
rounded-full
"
/>



<div
className="
relative
max-w-7xl
mx-auto
px-6
py-16
"
>



{/* Main */}

<div
className="
grid
gap-12
md:grid-cols-4
"
>



{/* Brand */}


<div
className="
md:col-span-2
"
>


<div
className="
flex
items-center
gap-3
"
>


<div
className="
h-12
w-12
rounded-2xl
bg-gradient-to-br
from-blue-500
to-purple-600
flex
items-center
justify-center
text-2xl
font-black
shadow-lg
"
>
M
</div>


<h2
className="
text-4xl
font-black
"
>
Mini<span className="text-blue-400">vel</span>
</h2>


</div>



<p
className="
mt-6
max-w-md
text-slate-300
leading-relaxed
"
>
A modern CRM platform designed to help
businesses manage customers, track leads,
and grow smarter.
</p>



<div
className="
mt-6
inline-flex
items-center
gap-3
rounded-full
border
border-white/10
bg-white/10
px-4
py-2
backdrop-blur-md
"
>

<span
className="
h-2
w-2
rounded-full
bg-green-400
animate-pulse
"
/>


<span
className="
text-sm
text-slate-200
"
>
All systems operational
</span>


</div>



<div
className="
flex
gap-5
mt-8
text-xl
text-slate-300
"
>

<FaGithub
className="
hover:text-white
cursor-pointer
transition
"
/>

<FaLinkedin
className="
hover:text-white
cursor-pointer
transition
"
/>

<FaTwitter
className="
hover:text-white
cursor-pointer
transition
"
/>


</div>


</div>





{/* Product */}


<div>

<h3
className="
font-bold
text-lg
mb-6
"
>
Product
</h3>


<div className="space-y-4">

{
productLinks.map((item)=>(

<Link
key={item.name}
to={item.path}
className="
block
text-slate-300
hover:text-white
transition
"
>

{item.name}

</Link>

))
}


</div>

</div>





{/* Company */}


<div>

<h3
className="
font-bold
text-lg
mb-6
"
>
Company
</h3>


<div className="space-y-4">


{
companyLinks.map((item)=>(

<Link
key={item.name}
to={item.path}
className="
block
text-slate-300
hover:text-white
transition
"
>

{item.name}

</Link>

))
}


</div>


</div>



</div>





{/* Bottom */}

<div
className="
mt-14
pt-6
border-t
border-white/10
flex
flex-col
sm:flex-row
items-center
justify-between
gap-4
"
>


<p
className="
text-sm
text-slate-400
text-center
"
>
© 2026 Minivel. All rights reserved.
</p>



<button
className="
h-10
w-10
rounded-full
bg-white/10
flex
items-center
justify-center
hover:bg-white/20
transition
"
>

<FaArrowUp/>

</button>



</div>


</div>


</footer>

)

}