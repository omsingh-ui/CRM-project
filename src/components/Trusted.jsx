export default function Trusted(){

const logos=[
"Google",
"Shopify",
"Stripe",
"Hubspot"
]

return(

<section id="trusted" className="py-20">

<div className="text-center">

<p
className="
text-gray-500
mb-12
"
>

Trusted By Growing Companies

</p>

<div
className="
flex
justify-center
gap-10
flex-wrap
"
>

{
logos.map((logo)=>(

<div
key={logo}
className="
bg-white
shadow
rounded-xl
px-10
py-6
font-bold
"
>

{logo}

</div>

))
}

</div>

</div>

</section>

)

}