"use client";

import { useState } from "react";
import Link from "next/link";
import { StatCard } from "@/components/dashboard/stat-card";
import { OverviewChart } from "@/components/dashboard/overview-chart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ConnectSourceModal } from "@/components/dashboard/connect-source-modal";
import { RECOMMENDATIONS, ALERTS, CONNECTED_SOURCES } from "@/lib/mock-data";
import { Activity, Zap, Factory, AlertTriangle, ArrowRight, Database, Truck, CheckCircle2, AlertCircle, Play, FileText } from "lucide-react";
import { useProjectStore } from "@/lib/store";
import { useEffect } from "react";

export default function DashboardPage() {
    const [isConnectModalOpen, setIsConnectModalOpen] = useState(false);

    return (
        <main className="container py-8 flex flex-col gap-6 flex-1 text-foreground">

            {/* Header */}
            <header className="flex flex-col md:flex-row justify-between md:items-center gap-4 pb-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Overview</h1>
                    <p className="text-muted-foreground mt-1">Real-time emissions monitoring and optimization.</p>
                </div>
                <div className="flex gap-3">
                    <Button variant="outline" onClick={() => window.print()}>Download Report</Button>
                    <Button onClick={() => setIsConnectModalOpen(true)}>Connect Source +</Button>
                </div>
            </header>

            {/* Connect Source Modal */}
            <ConnectSourceModal open={isConnectModalOpen} onOpenChange={setIsConnectModalOpen} />

            {/* BENTO GRID LAYOUT */}
            <div className="lg:grid-cols-12 grid gap-6">

                {/* ROW 1: STATS */}
                <div className="lg:col-span-3">
                    <StatCard
                        title="Total Emissions"
                        value="1,240"
                        subtitle="tCO2e"
                        trend={{ value: 5, isPositive: true }}
                        icon={Activity}
                    />
                </div>
                <div className="lg:col-span-3">
                    <StatCard
                        title="Scope 1"
                        value="340"
                        subtitle="tCO2e"
                        trend={{ value: 2, isPositive: true }}
                        icon={Factory}
                    />
                </div>
                <div className="lg:col-span-3">
                    <StatCard
                        title="Scope 2"
                        value="810"
                        subtitle="tCO2e"
                        trend={{ value: 12, isPositive: false }}
                        icon={Zap}
                    />
                </div>
                <div className="lg:col-span-3">
                    <StatCard
                        title="Active Alerts"
                        value={ALERTS.length}
                        subtitle="Critical"
                        icon={AlertTriangle}
                    />
                </div>

                {/* ROW 2: MAIN CHART & SIDEBAR */}
                {/* Main Chart - Large Block at Top Left of Content */}
                <div className="lg:col-span-8 flex flex-col">
                    <OverviewChart />
                </div>

                {/* Connected Sources - Side Block similar to 'Integrations' in Bento */}
                <div className="lg:col-span-4 flex flex-col">
                    <Card className="h-full border-primary/20 bg-gradient-to-br from-card to-secondary/20">
                        <CardHeader><CardTitle>Connected Sources</CardTitle></CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <ConnectedSourcesList />
                                <Button variant="outline" className="w-full mt-4" onClick={() => setIsConnectModalOpen(true)}>Manage Integrations</Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* ROW 3: ACTIVE PROJECTS (Dynamic) */}
                <ActiveProjectsSection />

                {/* ROW 4: RECOMMENDATIONS & ALERTS */}
                {/* Recommendations - Wide Block */}
                <div className="lg:col-span-8">
                    <Card className="h-full border-primary/20 overflow-hidden">
                        <CardHeader className="bg-primary/5 border-b border-primary/10">
                            <div className="flex justify-between items-center">
                                <CardTitle className="text-primary flex items-center gap-2">
                                    Agent Opportunities
                                </CardTitle>
                                <div className="text-xs px-2 py-0.5 rounded-full bg-primary/20 text-primary font-medium animate-pulse">
                                    Live Analysis
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="p-0">
                            <div className="flex flex-col">
                                {RECOMMENDATIONS.slice(0, 3).map((rec) => (
                                    <div key={rec.id} className="group p-4 border-b last:border-0 hover:bg-accent/5 transition-colors cursor-pointer flex justify-between items-center">
                                        <div>
                                            <div className="flex items-center gap-2 mb-1">
                                                <h4 className="font-semibold group-hover:text-primary transition-colors">{rec.title}</h4>
                                                <span className={`text-[10px] px-1.5 py-0.5 rounded border ${rec.difficulty === 'Low' ? 'bg-green-500/10 text-green-500 border-green-500/20' :
                                                    rec.difficulty === 'Medium' ? 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20' :
                                                        'bg-red-500/10 text-red-500 border-red-500/20'
                                                    }`}>
                                                    {rec.difficulty}
                                                </span>
                                            </div>
                                            <p className="text-xs text-muted-foreground line-clamp-1 max-w-md">{rec.description}</p>
                                        </div>

                                        <div className="text-right">
                                            <div className="text-sm font-bold">{rec.potentialSavingsCO2e} tCO2e</div>
                                            <div className="text-xs text-muted-foreground">Est. Savings</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="p-4 bg-secondary/10">
                                <Link href="/recommendations" className="block w-full">
                                    <Button variant="secondary" className="w-full" size="sm">View Full Optimization Report <ArrowRight className="w-3 h-3 ml-2" /></Button>
                                </Link>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Alerts - Bottom Side Block */}
                <div className="lg:col-span-4">
                    <Card className="h-full">
                        <CardHeader><CardTitle className="flex items-center gap-2"><AlertTriangle className="w-4 h-4 text-destructive" /> Critical Alerts</CardTitle></CardHeader>
                        <CardContent>
                            <div className="flex flex-col gap-3">
                                {ALERTS.map((alert) => (
                                    <div key={alert.id} className="flex gap-3 p-3 rounded bg-destructive/5 border border-destructive/10">
                                        <div>
                                            <h4 className="font-semibold text-xs text-destructive">{alert.title}</h4>
                                            <p className="text-[11px] text-muted-foreground mt-0.5 mb-1 leading-snug">{alert.message}</p>
                                            <p className="text-[10px] text-muted-foreground opacity-70">{new Date(alert.timestamp).toLocaleTimeString()}</p>
                                        </div>
                                    </div>
                                ))}
                                {/* Mocking filler content to balance height if needed */}
                                {ALERTS.length < 2 && (
                                    <div className="p-4 text-center text-sm text-muted-foreground border border-dashed rounded opacity-50">
                                        System Monitor Active
                                    </div>
                                )}
                            </div>
                        </CardContent>
                    </Card>
                </div>

            </div>
        </main>
    );
}

function ConnectedSourcesList() {
    return (
        <div className="flex flex-col gap-4">
            {CONNECTED_SOURCES.map((source) => (
                <div key={source.id} className="flex justify-between items-center p-4 bg-background/50 rounded border transition-all hover:bg-background/80 hover:scale-[1.02]">
                    <div className="flex items-center gap-4 min-w-0">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-secondary to-background shadow-inner flex items-center justify-center shrink-0 border border-white/5">
                            {source.type === 'Utility' && <Zap className="w-5 h-5 text-yellow-400" />}
                            {source.type === 'ERP' && <Database className="w-5 h-5 text-blue-400" />}
                            {source.type === 'Transport' && <Truck className="w-5 h-5 text-orange-400" />}
                        </div>
                        <div className="min-w-0">
                            <div className="font-semibold text-sm truncate leading-none mb-1">{source.name}</div>
                            <div className="text-xs text-muted-foreground truncate flex items-center gap-1.5">
                                <span className={`w-1.5 h-1.5 rounded-full ${source.status === 'Active' ? 'bg-green-500' : 'bg-orange-500'}`}></span>
                                {source.status}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

function ActiveProjectsSection() {
    // Client-side only to avoid hydration mismatch with localStorage
    const [mounted, setMounted] = useState(false);
    const { projects } = useProjectStore();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted || projects.length === 0) return null;

    return (
        <div className="lg:col-span-12">
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Play className="w-4 h-4 text-primary fill-primary" /> Active Projects
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {projects.map((project) => (
                    <Card key={project.id} className="border-l-4 border-l-primary/50 relative overflow-hidden">
                        <CardHeader className="pb-2">
                            <CardTitle className="text-base font-medium flex justify-between">
                                {project.title}
                                <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20 h-fit">
                                    {project.status}
                                </span>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div>
                                    <div className="flex justify-between text-xs mb-1">
                                        <span className="text-muted-foreground">Progress</span>
                                        <span>{project.progress}%</span>
                                    </div>
                                    <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-primary transition-all duration-500"
                                            style={{ width: `${project.progress}%` }}
                                        />
                                    </div>
                                </div>
                                <div className="text-xs bg-muted/50 p-2 rounded border border-border/50">
                                    <span className="font-semibold text-foreground">Next Step:</span> <span className="text-muted-foreground">{project.nextStep}</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
