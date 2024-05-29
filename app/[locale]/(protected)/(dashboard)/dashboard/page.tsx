"use client";
//import { getI18n } from '@/locales/server';
import { DashboardCardWrapper } from "@/components/dashboard/dashboard-card";
import { CaretUpIcon } from "@radix-ui/react-icons";
import { AnalyticalChart } from "@/components/dashboard/analytica-chart";
import { FcAnswers } from "react-icons/fc";
import { FaUsers } from "react-icons/fa";
import { useI18n } from "@/locales/client";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { FaMoneyBill, FaChartBar } from "react-icons/fa";

export default function Page() {
    const t = useI18n();

    const analyticsData = [
        { name: "ads 1", value: 300, views: 200 },
        { name: "ads 2", value: 500, views: 300 },
        { name: "ads 3", value: 400, views: 240 },
        { name: "ads 4", value: 200, views: 290 },
        { name: "ads 5", value: 170, views: 400 },
        { name: "ads 6", value: 300, views: 200 },
        { name: "ads 7", value: 500, views: 120 },
        { name: "ads 8", value: 400, views: 280 },
        { name: "ads 9", value: 200, views: 500 },
        { name: "ads 10", value: 170, views: 350 },
    ];
    return (
        <div className="grid   p-2  overflow-hidden">
            <div className="flex flex-col space-y-2">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <DashboardCardWrapper
                        headerLabel="Tickets"
                        Icon={<CaretUpIcon className="w-12 h-12" />}
                    >
                        <div className="flex flex-row justify-between items-center p-4">
                            <span>Total Tickets</span>
                            <span className="text-green-400 ">^%83.98</span>
                        </div>
                    </DashboardCardWrapper>
                    <DashboardCardWrapper
                        headerLabel="Coupuns"
                        Icon={<FaMoneyBill className="w-8 h-8" />}
                    >
                        <div className="flex flex-row justify-between items-center p-4">
                            <span>Total Coupons</span>
                            <span className="text-green-400 ">^%83.98</span>
                        </div>
                    </DashboardCardWrapper>
                    <DashboardCardWrapper
                        headerLabel="Report"
                        Icon={<FcAnswers className="w-8 h-8" />}
                    >
                        <div className="flex flex-row justify-between items-center p-4">
                            <span>Total Reports</span>
                            <span className="text-red-600 ">%23.9</span>
                        </div>
                    </DashboardCardWrapper>
                    <DashboardCardWrapper
                        headerLabel="Users"
                        Icon={<FaUsers className="w-8 h-8" />}
                    >
                        <div className="flex flex-row justify-between items-center p-4">
                            <span>Total Users</span>
                            <span className="text-green-600 ">^%93.9</span>
                        </div>
                    </DashboardCardWrapper>
                </div>
                <div className="grid h-auto w-auto md:overflow-hidden gap-4 md:grid-cols-2 lg:grid-cols-7 shadow-lg">
                    <Card className="col-span-4">
                        <CardHeader>
                            <CardTitle className="flex flex-row items-center justify-start ">
                                <span className="flex w-12 h-12 rounded-full bg-[#EEEEEE] text-blue-700 items-center justify-center">
                                    <FaChartBar className=" w-8 h-8" />
                                </span>
                                <span className="text-2xl text-blue-700 font-semibold">
                                    Overview
                                </span>
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="pl-2">
                            <AnalyticalChart data={analyticsData} />
                        </CardContent>
                    </Card>
                    <Card className="col-span-3">
                        <CardHeader>
                            <CardTitle>Analytical</CardTitle>
                            <CardDescription>we will see what we can add here</CardDescription>
                        </CardHeader>
                    </Card>
                </div>
            </div>
        </div>
    );
}
