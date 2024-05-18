import { getI18n } from "@/locales/server";
import { DashboardCardWrapper } from "@/components/dashboard/dashboard-card";
import { CaretUpIcon, HomeIcon } from "@radix-ui/react-icons";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaMoneyBill } from "react-icons/fa";
export default async function Page() {
  const t = await getI18n();
  return (
    <>
      <div className="grid   p-2  overflow-hidden">
        <div className="flex flex-col space-y-2">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <DashboardCardWrapper
              headerLabel="Reports"
              Icon={<CaretUpIcon className="w-12 h-12" />}>
              <span>Dashboard</span>
            </DashboardCardWrapper>
            <DashboardCardWrapper
              headerLabel="Coupuns"
              Icon={<FaMoneyBill className="w-8 h-8" />}>
              <div className="flex flex-row justify-between items-center p-4">
                <span>Total Coupons</span>
                <span className="text-green-400 ">^%83,98</span>
              </div>
            </DashboardCardWrapper>
            <DashboardCardWrapper
              headerLabel="49$"
              Icon={<HomeIcon className="w-8 h-8" />}>
              <span>Tickets</span>
            </DashboardCardWrapper>
            <DashboardCardWrapper
              headerLabel="Tickets"
              Icon={<HomeIcon className="w-8 h-8" />}>
              <span>Tickets</span>
            </DashboardCardWrapper>
          </div>
          <div className="grid h-[500px] w-auto md:overflow-hidden gap-4 md:grid-cols-2 lg:grid-cols-7 shadow-lg">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Overview</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">bla bla</CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Analytical</CardTitle>
                <CardDescription>bla bla</CardDescription>
              </CardHeader>
              <CardContent>bla bla</CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
