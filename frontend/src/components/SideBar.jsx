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
transition
"
>
📊 Dashboard
</Link>

<Link
to="/customers"
className="
block
p-4
rounded-xl
hover:bg-slate-800
transition
"
>
👥 Customers
</Link>

<Link
to="/leads"
className="
block
p-4
rounded-xl
hover:bg-slate-800
transition
"
>
🎯 Leads
</Link>

<Link
to="/tasks"
className="
block
p-4
rounded-xl
hover:bg-slate-800
transition
"
>
📋 Tasks
</Link>

<Link
to="/settings"
className="
block
p-4
rounded-xl
hover:bg-slate-800
transition
"
>
⚙️ Settings
</Link>

<button
onClick={exit}
className="
w-full
bg-red-600
hover:bg-red-700
transition
p-4
rounded-xl
mt-6
"
>
Logout
</button>

</div>



)

}