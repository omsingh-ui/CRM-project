import { Outlet } from "react-router-dom";


export default function AuthLayout(){

return (

<div
className="
min-h-screen
bg-gradient-to-br
from-slate-100
to-white
dark:from-zinc-950
dark:to-zinc-900
"
>

<Outlet />

</div>

);

}