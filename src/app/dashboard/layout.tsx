"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AuthGuard } from "@/components/auth-guard";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <AuthGuard>
            <div className="min-h-screen flex flex-col bg-background">
                {/* Persistent Top Nav - Matching Landing Page Style */}
                <nav className="border-b bg-background sticky top-0 z-50">
                    <div className="container flex items-center justify-between py-4">
                        {/* Logo */}
                        <div className="text-xl tracking-tight font-bold">
                            <Link href="/dashboard" className="flex items-center gap-2">
                                Mālama <span className="text-primary font-bold">carbon_agent</span>
                            </Link>
                        </div>

                        {/* Nav Links - Center (Desktop) */}
                        <div className="hidden md:flex items-center gap-10 text-sm font-medium">
                            <NavLink
                                href="/dashboard"
                                style={{
                                    paddingRight: '5px',
                                    paddingLeft: '5px',
                                    borderLeftWidth: '5px',
                                    borderRightWidth: '5px',
                                    marginRight: '5px',
                                    marginLeft: '5px'
                                }}
                            >
                                Dashboard
                            </NavLink>
                            <NavLink
                                href="/recommendations"
                                style={{
                                    marginLeft: '5px',
                                    borderLeftWidth: '5px',
                                    paddingLeft: '5px',
                                    paddingRight: '5px',
                                    borderRightWidth: '5px',
                                    marginRight: '8px'
                                }}
                            >
                                Opportunities
                            </NavLink>
                            <NavLink href="#">Insights</NavLink>
                            {/* Search icon removed per user request */}
                        </div>

                        {/* Nav Actions - Right */}
                        <div className="flex items-center gap-4">
                            <Link href="/">
                                <Button variant="outline" className="rounded-full px-6 border-foreground/20 hover:bg-foreground hover:text-background transition-colors">
                                    Log Out
                                </Button>
                            </Link>
                            <Link href="/recommendations">
                                <Button className="rounded-full px-6 font-bold">
                                    New Project +
                                </Button>
                            </Link>
                        </div>
                    </div>
                </nav>

                {children}
            </div>
        </AuthGuard>
    );
}

function NavLink({ href, children, style, className }: { href: string; children: React.ReactNode; style?: React.CSSProperties; className?: string }) {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link
            href={href}
            style={style}
            className={cn(
                "transition-colors hover:text-primary",
                isActive ? "text-primary font-bold" : "text-muted-foreground",
                className
            )}
        >
            {children}
        </Link>
    );
}
