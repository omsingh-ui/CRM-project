import DashboardCard
from
"../components/DashboardCard"

import DashboardHeader
from
"../components/DashboardHeader"

import LeadTable
from
"../components/LeadTable"

export default function Dashboard(){

return(

<div
className="
min-h-screen
bg-slate-100
p-10
"
>

<DashboardHeader/>

<div
className="
grid
md:grid-cols-2
lg:grid-cols-4
gap-6
"
>

<DashboardCard
title="Revenue"
value="$48K"
/>

<DashboardCard
title="Customers"
value="824"
/>

<DashboardCard
title="Growth"
value="+26%"
/>

<DashboardCard
title="Leads"
value="340"
/>

</div>

<LeadTable/>

</div>

)

}