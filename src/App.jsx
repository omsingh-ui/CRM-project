import {

BrowserRouter,
Routes,
Route

}
from
"react-router-dom"

import Home
from
"./pages/Home"

import Dashboard
from
"./pages/Dashboard"

import DashboardLayout
from
"./layouts/DashboardLayout"

export default function App(){

return(

<BrowserRouter>

<Routes>

<Route
path="/"
element={<Home/>}
/>

<Route
element={
<DashboardLayout/>
}
>

<Route
path="/dashboard"
element={
<Dashboard/>
}
/>

</Route>

</Routes>

</BrowserRouter>

)

}