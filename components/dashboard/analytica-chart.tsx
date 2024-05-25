'use client';
import { Card } from '@/components/ui/card';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Line,
    LineChart
} from 'recharts';
interface AnalyticalChartProps {
    data: { name: string; value: number; views: number }[];
}
export function AnalyticalChart({ data }: AnalyticalChartProps) {
    return (
        <Card>
            <LineChart
                width={500}
                height={350}
                data={data}
                margin={{ top: 5, right: 10, left: 10, bottom: 5 }}
            >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip /> <Legend />
                {/* </LineChart><Bar dataKey="value" fill="#82ca9d" />{' '} */}
                <Line type="monotone" dataKey="views" stroke="#82ca9d" />
                <Line type="monotone" dataKey="value" stroke="#8884d8" />
            </LineChart>
        </Card>
    );
}
