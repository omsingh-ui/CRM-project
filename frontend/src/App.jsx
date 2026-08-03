import { Suspense, lazy } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


/* ==========================
   PUBLIC PAGES
========================== */

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Features = lazy(() => import("./pages/Features"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Contact = lazy(() => import("./pages/Contact"));



/* ==========================
   AUTH PAGES
========================== */

const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));



/* ==========================
   DASHBOARD PAGES
========================== */

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Customers = lazy(() => import("./pages/Customers"));
const Leads = lazy(() => import("./pages/Leads"));
const Tasks = lazy(() => import("./pages/Tasks"));
const Settings = lazy(() => import("./pages/Settings"));



/* ==========================
   LAYOUTS
========================== */

import PublicLayout from "./layouts/PublicLayout";
import AuthLayout from "./layouts/AuthLayout";
import DashboardLayout from "./layouts/DashboardLayout";


/* ==========================
   COMPONENTS
========================== */

import ProtectedRoute from "./components/ProtectedRoute";
import ScrollToTop from "./components/ScrollToTop";



export default function App(){

return (

<BrowserRouter>

<ScrollToTop />


<Suspense

fallback={

<div
className="
min-h-screen
flex
items-center
justify-center
"
>

<div
className="
w-12
h-12
border-4
border-blue-600
border-t-transparent
rounded-full
animate-spin
"
/>

</div>

}

>


<Routes>


{/* ==========================
    PUBLIC WEBSITE
========================== */}

<Route element={<PublicLayout />}>

<Route
path="/"
element={<Home />}
/>


<Route
path="/about"
element={<About />}
/>


<Route
path="/features"
element={<Features />}
/>


<Route
path="/pricing"
element={<Pricing />}
/>


<Route
path="/contact"
element={<Contact />}
/>


</Route>





{/* ==========================
    AUTH ROUTES
========================== */}

<Route element={<AuthLayout />}>

<Route
path="/login"
element={<Login />}
/>


<Route
path="/register"
element={<Register />}
/>


</Route>





{/* ==========================
    PROTECTED CRM
========================== */}

<Route

element={

<ProtectedRoute>

<DashboardLayout />

</ProtectedRoute>

}

>


<Route
path="/dashboard"
element={<Dashboard />}
/>


<Route
path="/customers"
element={<Customers />}
/>


<Route
path="/leads"
element={<Leads />}
/>


<Route
path="/tasks"
element={<Tasks />}
/>


<Route
path="/settings"
element={<Settings />}
/>


</Route>



</Routes>


</Suspense>


</BrowserRouter>

);

}