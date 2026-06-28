import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import DashboardPreview from "../components/DashboardPreview"
import Features from "../components/Features"
import Trusted from "../components/Trusted"
import CTA from "../components/CTA"
import Footer from "../components/Footer"

export default function Home(){

return(

<div
className="
bg-gradient-to-b
from-blue-50
to-white
"
>

<Navbar/>

<Hero/>

<DashboardPreview/>

<Features/>

<Trusted/>

<CTA/>

<Footer/>

</div>

)

}