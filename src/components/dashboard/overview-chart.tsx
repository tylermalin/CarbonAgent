"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Jan', Scope1: 400, Scope2: 240, Scope3: 240 },
    { name: 'Feb', Scope1: 300, Scope2: 139, Scope3: 221 },
    { name: 'Mar', Scope1: 200, Scope2: 980, Scope3: 229 },
    { name: 'Apr', Scope1: 278, Scope2: 390, Scope3: 200 },
    { name: 'May', Scope1: 189, Scope2: 480, Scope3: 218 },
    { name: 'Jun', Scope1: 239, Scope2: 380, Scope3: 250 },
];

export function OverviewChart() {
    return (
        <Card className="col-span-2">
            <CardHeader>
                <CardTitle>Emissions Overview (tCO2e)</CardTitle>
            </CardHeader>
            <CardContent className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
                        <XAxis
                            dataKey="name"
                            stroke="hsl(var(--muted-foreground))"
                            fontSize={12}
                            tickLine={false}
                            axisLine={false}
                        />
                        <YAxis
                            stroke="hsl(var(--muted-foreground))"
                            fontSize={12}
                            tickLine={false}
                            axisLine={false}
                            tickFormatter={(value) => `${value}`}
                        />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: 'hsl(var(--card))',
                                borderColor: 'hsl(var(--border))',
                                color: 'hsl(var(--foreground))'
                            }}
                            cursor={{ fill: 'hsl(var(--muted))', opacity: 0.2 }}
                        />
                        <Legend />
                        <Bar dataKey="Scope1" stackId="a" fill="hsl(var(--primary))" radius={[0, 0, 4, 4]} />
                        <Bar dataKey="Scope2" stackId="a" fill="hsl(var(--secondary))" />
                        <Bar dataKey="Scope3" stackId="a" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
}
