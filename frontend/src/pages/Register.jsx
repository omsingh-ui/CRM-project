import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../api/authApi";


export default function Register(){

const navigate = useNavigate();


const [name,setName] = useState("");
const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

const [loading,setLoading] = useState(false);
const [error,setError] = useState("");



const handleRegister = async()=>{

try{

setLoading(true);
setError("");


await register({
name,
email,
password,
});


navigate("/login");


}catch(err){

setError(
err.response?.data?.message ||
"Something went wrong. Please try again."
);

}
finally{

setLoading(false);

}

};



return(

<div
className="
min-h-screen
flex
items-center
justify-center
px-6
"
>


<div

className="
bg-white
dark:bg-zinc-900
w-full
max-w-[450px]
rounded-3xl
shadow-sm
border
border-slate-100
dark:border-zinc-800
p-10
"

>


{/* Header */}

<div className="flex justify-between items-center mb-8">


<h1
className="
text-4xl
font-bold
text-slate-900
dark:text-white
"
>
Create Account
</h1>


<Link

to="/"

className="
text-blue-700
hover:text-blue-800
font-medium
"

>
← Home
</Link>


</div>




{/* Name */}

<input

type="text"

placeholder="Full Name"

value={name}

onChange={(e)=>setName(e.target.value)}

className="
w-full
border
border-slate-200
dark:border-zinc-700
bg-white
dark:bg-zinc-800
text-slate-900
dark:text-white
p-4
rounded-xl
mb-5
outline-none
focus:ring-2
focus:ring-blue-500
"

/>




{/* Email */}

<input

type="email"

placeholder="Email"

value={email}

onChange={(e)=>setEmail(e.target.value)}

className="
w-full
border
border-slate-200
dark:border-zinc-700
bg-white
dark:bg-zinc-800
text-slate-900
dark:text-white
p-4
rounded-xl
mb-5
outline-none
focus:ring-2
focus:ring-blue-500
"

/>




{/* Password */}

<input

type="password"

placeholder="Password"

value={password}

onChange={(e)=>setPassword(e.target.value)}

className="
w-full
border
border-slate-200
dark:border-zinc-700
bg-white
dark:bg-zinc-800
text-slate-900
dark:text-white
p-4
rounded-xl
outline-none
focus:ring-2
focus:ring-blue-500
"

/>




{/* Error */}

{
error &&

<div

className="
mt-4
p-3
rounded-lg
bg-red-100
text-red-700
text-sm
"

>

{error}

</div>

}




{/* Button */}

<button

onClick={handleRegister}

disabled={loading}

className="
w-full
mt-8
bg-blue-700
text-white
p-4
rounded-xl
font-medium
hover:bg-blue-800
transition
disabled:opacity-60
"

>

{
loading
?
"Creating Account..."
:
"Create Account"
}

</button>




<p
className="
mt-6
text-center
text-gray-500
text-sm
"
>

Already have an account?

{" "}

<Link

to="/login"

className="text-blue-700 font-medium"

>

Login

</Link>


</p>



</div>


</div>


);

}