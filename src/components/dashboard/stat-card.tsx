import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
    title: string;
    value: string | number;
    subtitle?: string;
    trend?: {
        value: number; // percentage
        isPositive: boolean; // positive means good (e.g., reduction in emissions is good)
    };
    icon?: LucideIcon;
}

export function StatCard({ title, value, subtitle, trend, icon: Icon }: StatCardProps) {
    return (
        <Card>
            <CardContent className="flex flex-col gap-2">
                <div className="flex justify-between items-start">
                    <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{title}</span>
                    {Icon && <Icon className="w-4 h-4 text-muted-foreground" />}
                </div>

                <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold">{value}</span>
                    {subtitle && <span className="text-sm text-muted-foreground">{subtitle}</span>}
                </div>

                {trend && (
                    <div className={`text-xs flex items-center gap-1 ${trend.isPositive ? 'text-primary' : 'text-destructive'}`}>
                        <span>{trend.value > 0 ? '▲' : '▼'} {Math.abs(trend.value)}%</span>
                        <span className="text-muted-foreground">vs last period</span>
                    </div>
                )}
            </CardContent>
        </Card>
    );
}
