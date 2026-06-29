import { useNavigate, Link } from "react-router-dom"
import { login } from "../utils/auth"

export default function Login(){

const navigate = useNavigate()

function handleLogin(){

login()

navigate("/dashboard")
}

return(

<div
className="
min-h-screen

flex

items-center
justify-center

bg-slate-100

px-6
"
>

<div
className="
bg-white

w-full
max-w-[450px]

rounded-3xl

shadow

p-10
"
>

<div
className="
flex
justify-between
items-center

mb-8
"
>

<h1
className="
text-4xl
font-bold
"
>

Login

</h1>

<Link
to="/"
className="
text-blue-700
font-medium
"
>

← Home

</Link>

</div>

<input
placeholder="Email"

className="
w-full

border

p-4

rounded-xl

mb-5
"
/>

<input

type="password"

placeholder="Password"

className="
w-full

border

p-4

rounded-xl
"
/>

<button

onClick={
handleLogin
}

className="
w-full

mt-8

bg-blue-700

text-white

p-4

rounded-xl

hover:bg-blue-800
"
>

Login

</button>

<p
className="
mt-6

text-center

text-gray-500
"
>

Demo mode enabled

</p>

</div>

</div>

)

}