import { Metadata } from "next"

import { Button } from "@/components/ui/button"
import HeaderTitle from "@/components/shared/Title"
import DashboardTabs from "@/components/dashboard"

export const metadata: Metadata = {
    title: "Dashboard",
    description: "Example dashboard app built using the components.",
}

export default function DashboardPage() {
    return (
        <>
            <HeaderTitle title="Dashbaord" />
            <div className="flex-col md:flex">
                <div className="flex-1">
                    <div className="flex items-center justify-between space-y-2">
                        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
                        <div className="flex items-center space-x-2">
                            {/* <CalendarDateRangePicker /> */}
                            <Button>Download</Button>
                        </div>
                    </div>
                    <DashboardTabs />
                </div>
            </div>
        </>
    )
}
