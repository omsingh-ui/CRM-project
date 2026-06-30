import { useState,useEffect } from "react"

export default function ThemeToggle(){

const[
dark,
setDark

]=useState(false)

useEffect(()=>{

if(dark){

document.documentElement.classList.add(
"dark"
)

}else{

document.documentElement.classList.remove(
"dark"
)

}

},[dark])

return(

<button

onClick={()=>

setDark(!dark)

}

className="
bg-slate-900

text-white

px-5
py-3

rounded-xl
"
>

{
dark
?
"☀ Light"
:
"🌙 Dark"
}

</button>

)

}