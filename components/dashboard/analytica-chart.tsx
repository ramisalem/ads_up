"use client";
import { Card } from "@/components/ui/card";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Line,
    LineChart,
    ResponsiveContainer,
} from "recharts";
interface AnalyticalChartProps {
    data: { name: string; value: number; views: number }[];
}
export function AnalyticalChart({ data }: AnalyticalChartProps) {
    return (
        <ResponsiveContainer
            width="100%"
            minHeight={300}
            className="w-[100%] h-[300px] bg-transparent mt-2 mr-3 ml-2 mb-1.5"
        >
            <LineChart data={data}>
                <CartesianGrid stroke="hsl(var(--muted))" />
                <XAxis dataKey="name" />
                <YAxis stroke="hsl(var(--primary))" />
                <Tooltip />
                {/* </LineChart><Bar dataKey="value" fill="#82ca9d" />{' '} */}
                <Line type="monotone" dataKey="views" stroke="#82ca9d" name="total-sales" />
                <Line type="monotone" dataKey="value" stroke="#8884d8" />
            </LineChart>
        </ResponsiveContainer>
    );
}
