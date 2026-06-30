export function login(){

localStorage.setItem(
"auth",
"true"
)

}

export function logout(){

localStorage.removeItem(
"auth"
)

}

export function isLoggedIn(){

return(

localStorage.getItem(
"auth"
)==="true"

)

}