'use client';

import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Separator } from '@radix-ui/react-separator';

interface CardWrapperProps {
    children: React.ReactNode;
    headerLabel: string;
    Icon: React.ReactNode;
}

export const DashboardCardWrapper = ({ children, headerLabel, Icon }: CardWrapperProps) => {
    return (
        <Card className="flex-1 shadow-md">
            <CardHeader className="w-full flex flex-row gap-y-4 items-center justify-between">
                <span className="flex w-12 h-12 rounded-full bg-[#EEEEEE] text-blue-700 items-center justify-center">
                    {Icon}
                </span>
            </CardHeader>
            {/* <Separator className="bg-gray-50 w-full h-1" /> */}
            <CardContent className="p-4">
                <span className="text-2xl text-blue-700 font-semibold">{headerLabel}</span>
                {children}
            </CardContent>

            <CardFooter>
                <p>{headerLabel}</p>
            </CardFooter>
        </Card>
    );
};
