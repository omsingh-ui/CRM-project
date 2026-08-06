import { Link, NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import Logo from "../components/Logo";


const navItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Features",
    href: "/features",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Pricing",
    href: "/pricing",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];


export default function Navbar() {

return (

<nav
className="
fixed
top-0
left-0
right-0
z-50
border-b
border-slate-200/70
bg-white/80
dark:bg-zinc-950/80
backdrop-blur-xl
shadow-sm
"
>

<div
className="
max-w-7xl
mx-auto
px-6
py-4
flex
items-center
justify-between
"
>



{/* Logo */}

<Link
  to="/"
  className="
  group
  flex
  items-center
  gap-3
  transition-all
  duration-300
  "
>
  {/* Logo Icon */}
  <div
    className="
    relative
    flex
    h-12
    w-12
    items-center
    justify-center
    rounded-2xl
    bg-gradient-to-br
    from-blue-600
    to-indigo-700
    text-white
    shadow-lg
    shadow-blue-500/30
    transition-all
    duration-300
    group-hover:-translate-y-1
    group-hover:shadow-2xl
    group-hover:shadow-blue-500/40
    "
  >
    {/* Glow */}
    <div
      className="
      absolute
      inset-0
      rounded-2xl
      bg-white/20
      opacity-0
      blur-md
      transition-opacity
      duration-300
      group-hover:opacity-100
      "
    />

    <span className="relative text-xl font-black tracking-tight">
      M
    </span>
  </div>

  {/* Logo Text */}
  
  

<div className="leading-none">
  <h1
    className="
    text-2xl
    md:text-3xl
    font-black
    tracking-tight
    text-slate-900
    dark:text-white
    transition-colors
    duration-300
    "
  >
    Mini
    <span
      className="
      bg-gradient-to-r
      from-blue-600
      to-indigo-600
      bg-clip-text
      text-transparent
      "
    >
      vel
    </span>
  </h1>

 <p
  className="
  mt-1
  text-[10px]
  font-medium
  uppercase
  tracking-[0.4em]
  text-slate-800/70
  dark:text-slate-500/70
  "
>
  SMART CRM

</p>
</div>
</Link>






{/* Navigation */}

<div
  className="
  hidden
  md:flex
  items-center
  gap-10
  "
>
  {navItems.map((item) => (
    <Link
      key={item.name}
      to={item.href}
      className="
      relative
      py-2
      text-[15px]
      font-semibold
      text-slate-600
      dark:text-slate-300
      transition-all
      duration-300
      hover:text-blue-600

      after:absolute
      after:left-0
      after:bottom-0
      after:h-[2px]
      after:w-0
      after:rounded-full
      after:bg-blue-600
      after:transition-all
      after:duration-300

      hover:after:w-full
      "
    >
      {item.name}
    </Link>
  ))}
</div>



{/* Actions */}

<div
className="
flex
items-center
gap-3
"
>


<Link

to="/login"

className="
hidden
sm:block
rounded-xl
px-5
py-3
font-medium
text-slate-700
dark:text-white
transition-all
duration-300
hover:bg-slate-100
dark:hover:bg-zinc-800
"

>

Login

</Link>



<Link

to="/register"

className="
flex
items-center
gap-2
rounded-xl
bg-blue-700
px-5
py-3
font-semibold
text-white
shadow-lg
transition-all
duration-300
hover:-translate-y-0.5
hover:bg-blue-800
"

>

Get Started

<FaArrowRight size={12}/>

</Link>


</div>


</div>

</nav>

);

}