const testimonials=[

{
name:"Alex",
role:"Founder",
text:"Minivel helped us organize our leads faster."
},

{
name:"Emma",
role:"Marketing",
text:"Clean dashboard and simple workflow."
},

{
name:"Lucas",
role:"Startup Owner",
text:"The analytics improved our decisions."
}

]

export default function Testimonials(){

return(

<section
className="
py-24
"
>

<div
className="
max-w-7xl
mx-auto
px-6
"
>

<h2
className="
text-5xl
font-bold
text-center
"
>

What Our Clients Say 

</h2>

<div
className="
grid

md:grid-cols-2

lg:grid-cols-3

gap-8

mt-14
"
>

{

testimonials.map(

(item)=>(

<div

key={item.name}

className="
bg-white

rounded-3xl

p-8

shadow

hover:shadow-2xl

transition
"
>

<div
className="
w-14
h-14

rounded-full

bg-blue-700

mb-6
"
/>

<p
className="
text-gray-600
"
>

"{item.text}"

</p>

<h3
className="
font-bold

mt-6
"
>

{item.name}

</h3>

<p
className="
text-gray-400
"
>

{item.role}

</p>

</div>

)

)

}

</div>

</div>

</section>

)

}