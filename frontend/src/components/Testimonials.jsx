const testimonials = [
  {
    name: "Alex Morgan",
    role: "Founder, Nova Labs",
    text: "Minivel helped us organize leads faster and improve our customer workflow.",
    rating: "★★★★★",
    avatar: "AM",
  },

  {
    name: "Emma Wilson",
    role: "Marketing Manager",
    text: "The clean dashboard and simple workflow made managing our team effortless.",
    rating: "★★★★★",
    avatar: "EW",
  },

  {
    name: "Lucas Smith",
    role: "Startup Owner",
    text: "The analytics insights helped us make smarter business decisions.",
    rating: "★★★★★",
    avatar: "LS",
  },
];


export default function Testimonials(){

return(

<section
className="
py-24
bg-slate-50
dark:bg-zinc-950
"
>

<div
className="
max-w-7xl
mx-auto
px-6
"
>


{/* Header */}

<div
className="
text-center
max-w-3xl
mx-auto
"
>

<p
className="
text-blue-700
font-semibold
"
>
Testimonials
</p>


<h2
className="
mt-4
text-4xl
md:text-5xl
font-black
text-slate-900
dark:text-white
"
>

What Our Clients Say

</h2>


<p
className="
mt-6
text-lg
text-slate-600
dark:text-slate-400
"
>

Trusted by growing businesses that use Minivel
to manage customers, leads, and workflows.

</p>


</div>



{/* Cards */}

<div
className="
grid
md:grid-cols-2
lg:grid-cols-3
gap-8
mt-16
"
>

{

testimonials.map((item)=>(

<div
  key={item.name}
  className="
  group
  bg-white
  dark:bg-zinc-900
  rounded-3xl
  p-8
  border
  border-slate-200
  dark:border-zinc-800
  shadow-sm
  transition-all
  duration-300
  hover:-translate-y-2
  hover:shadow-2xl
  hover:border-blue-300
  "
>


{/* Rating */}

<div
className="
text-yellow-500
text-xl
mb-6
"
>
{item.rating}
</div>



{/* Quote */}

<p
className="
text-slate-600
dark:text-slate-400
leading-relaxed
"
>

"{item.text}"

</p>



{/* User */}

<div
className="
flex
items-center
gap-4
mt-8
"
>

<div
  className="
  flex
  h-14
  w-14
  items-center
  justify-center
  rounded-full
  bg-gradient-to-br
  from-blue-600
  to-indigo-700
  text-white
  text-lg
  font-bold
  shadow-lg
  ring-4
  ring-blue-100
  transition-all
  duration-300
  group-hover:scale-110
  "
>

{item.avatar}

</div>


<div>

<h3
className="
font-bold
text-slate-900
dark:text-white
"
>

{item.name}

</h3>


<p
className="
text-sm
text-slate-500
dark:text-slate-400
"
>

{item.role}

</p>


</div>


</div>


</div>

))

}


</div>


</div>

</section>

)

}