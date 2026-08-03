import { 
  FiZap,
  FiShield,
  FiBarChart2,
  FiTrendingUp
} from "react-icons/fi";

import { motion } from "framer-motion";


export default function Trusted(){

const trustItems=[
{
icon:<FiZap />,
title:"Fast Setup",
description:"Start managing customers quickly"
},
{
icon:<FiShield />,
title:"Secure Platform",
description:"JWT authentication and protected data"
},
{
icon:<FiBarChart2 />,
title:"Smart Analytics",
description:"Track growth with meaningful insights"
},
{
icon:<FiTrendingUp />,
title:"Built To Scale",
description:"Designed for growing businesses"
}
];


return(

<section 
id="trusted" 
className="
py-20
bg-gray-50
dark:bg-gray-950
"
>

<div
className="
max-w-6xl
mx-auto
px-6
"
>

<motion.div
initial={{opacity:0,y:20}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}
transition={{duration:0.5}}
className="text-center mb-12"
>

<p
className="
text-sm
uppercase
tracking-widest
text-indigo-600
dark:text-indigo-400
font-semibold
mb-4
"
>
Why Teams Choose Minivel
</p>


<h2
className="
text-3xl
md:text-4xl
font-bold
text-gray-900
dark:text-white
"
>

Everything needed to manage
customer relationships

</h2>


<p
className="
mt-4
text-gray-600
dark:text-gray-400
max-w-2xl
mx-auto
"
>

A modern CRM experience built with secure architecture,
analytics, and scalable workflows.

</p>

</motion.div>



<div
className="
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-4
gap-6
"
>


{
trustItems.map((item,index)=>(

<motion.div

key={item.title}

initial={{
opacity:0,
y:20
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

transition={{
duration:0.4,
delay:index*0.05
}}

className="
group
p-6
rounded-2xl
bg-white
dark:bg-gray-900
border
border-gray-200
dark:border-gray-800
shadow-sm
hover:shadow-xl
transition
"

>


<div
className="
w-12
h-12
rounded-xl
flex
items-center
justify-center
text-xl
bg-gradient-to-br
from-blue-600
to-purple-600
text-white
mb-5
group-hover:scale-110
transition
"
>

{item.icon}

</div>


<h3
className="
font-semibold
text-lg
text-gray-900
dark:text-white
"
>

{item.title}

</h3>


<p
className="
mt-2
text-sm
text-gray-600
dark:text-gray-400
"
>

{item.description}

</p>


</motion.div>

))
}


</div>


</div>

</section>

)

}