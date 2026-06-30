import {
Link,
useNavigate
}
from "react-router-dom"

import {
logout
}
from "../utils/auth"

export default function Sidebar(){

const navigate=
useNavigate()

function exit(){

logout()

navigate(
"/login"
)

}

return(

<div
className="
w-full
md:w-[260px]

bg-slate-900

text-white

p-6

min-h-screen
"
>

<h1
className="
text-3xl
font-bold

mb-10
"
>

Minivel

</h1>

<div
className="
space-y-3
"
>

<Link
to="/dashboard"
className="
block

p-4

rounded-xl

hover:bg-slate-800
"
>

Dashboard

</Link>

<Link
to="/settings"
className="
block

p-4

rounded-xl

hover:bg-slate-800
"
>

Settings

</Link>

<button

onClick={
exit
}

className="
w-full

bg-red-600

p-4

rounded-xl
"
>

Logout

</button>

</div>

</div>

)

}