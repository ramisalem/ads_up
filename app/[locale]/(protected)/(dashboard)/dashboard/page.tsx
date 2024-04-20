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
export default async function Page() {
  const t = await getI18n();
  return (
    <>
      <div className="grid   p-2  overflow-hidden">
        <div className="flex flex-col space-y-2">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <DashboardCardWrapper headerLabel="Reports" Icon={<CaretUpIcon />}>
              <span>Dashboard</span>
            </DashboardCardWrapper>
            <DashboardCardWrapper headerLabel="Coupuns" Icon={<HomeIcon />}>
              <span>Coupons</span>
            </DashboardCardWrapper>
            <DashboardCardWrapper headerLabel="Tickets" Icon={<HomeIcon />}>
              <span>Tickets</span>
            </DashboardCardWrapper>
            <DashboardCardWrapper headerLabel="Tickets" Icon={<HomeIcon />}>
              <span>Tickets</span>
            </DashboardCardWrapper>
          </div>
          <div className="grid h-[500px] w-auto md:overflow-hidden gap-4 md:grid-cols-2 lg:grid-cols-7">
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
