import DashboardHeader from "../components/DashboardHeader"
import DashboardCard from "../components/DashboardCard"
import AnalyticsChart from "../components/AnalyticsChart"
import LeadTable from "../components/LeadTable"

import QuickActions from "../components/QuickActions"
import ProgressCard from "../components/ProgressCard"

import {
stats,
leads
}
from "../data/dashboardData"

export default function Dashboard(){

return(

<div
className="
p-5
md:p-10
"
>

<DashboardHeader/>

<div
className="
grid

grid-cols-1

sm:grid-cols-2

xl:grid-cols-4

gap-5
"
>

{

stats.map(

(item)=>(

<DashboardCard

key={item.title}

title={item.title}

value={item.value}

/>

)

)

}

</div>

<div
className="
grid

lg:grid-cols-3

gap-6

mt-10
"
>

<div
className="
lg:col-span-2
"
>

<AnalyticsChart/>

<LeadTable
data={leads}
/>

</div>

<div
className="
space-y-6
"
>

<QuickActions/>

<ProgressCard/>

</div>

</div>

</div>

)

}