"use client";

import Link from "next/link";
import styles from "./landing.module.css";
import { ArrowRight, CheckCircle2, Search, BarChart3, Globe, ShieldCheck, Zap, Users, Leaf, Lightbulb } from "lucide-react";

export default function LandingPage() {
    return (
        <main className={styles.main}>
            {/* Navigation */}
            <nav className={styles.nav}>
                <div className={styles.navContainer}>
                    <div className={styles.logo}>Mālama <span className="text-primary font-bold">carbon_agent</span></div>
                    <div className={styles.navLinks}>
                        <Link href="#what-we-do" className={styles.navLink}>What We Do</Link>
                        <Link href="#who-we-work-with" className={styles.navLink}>Who We Work With</Link>
                        <Link href="#who-we-are" className={styles.navLink}>Who We Are</Link>
                        <Link href="#insights" className={styles.navLink}>Insights</Link>
                    </div>
                    <div className={styles.navActions}>
                        <Link href="/dashboard">
                            <Button variant="outline" className="text-white border-white/20 hover:bg-white hover:text-black">
                                Customer Login
                            </Button>
                        </Link>
                        <Link href="/register">
                            <Button className="font-bold">
                                Get in touch <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroBackground} style={{ backgroundImage: 'url("/hawaiian_landscape_hero_1768087606192.png")' }}></div>
                <div className={styles.heroOverlay}></div>
                <div className={styles.heroContent}>
                    <span className="text-primary font-bold tracking-wider uppercase text-sm bg-primary/10 px-4 py-1 rounded-full backdrop-blur-sm border border-primary/20">Mālama Carbon Agent</span>
                    <h1 className={styles.heroTitle}>Agentic AI for sustainability—your data, <span className={styles.heroHighlight}>driving climate action in real time.</span></h1>
                    <p className="text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed">
                        Turn carbon complexity into clear, actionable decisions. Measure, verify, reduce, and remove carbon with confidence.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 mt-8">
                        <Link href="/register">
                            <Button size="lg" className="h-14 px-8 text-lg font-bold shadow-lg shadow-primary/25">
                                Start Your Journey <ArrowRight className="w-5 h-5 ml-2" />
                            </Button>
                        </Link>
                        <Link href="#what-we-do">
                            <Button size="lg" className="h-14 px-8 text-lg font-semibold bg-white/10 hover:bg-white/20 text-white border-white/20 backdrop-blur-sm">
                                Explore Solutions
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Curved Divider */}
                <div className={styles.curvedDivider}>
                    <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
                        <path d="M0,0 C240,100 480,120 720,100 C960,80 1200,40 1440,80 V120 H0 V0 Z"></path>
                    </svg>
                </div>
            </section>

            {/* What We Do Section */}
            <section id="what-we-do" className={styles.processSection}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <span className="text-primary font-bold text-sm uppercase tracking-wider mb-2 block">What We Do</span>
                        <h2 className={styles.sectionTitle}>Turn Carbon Complexity Into Action</h2>
                        <p className={styles.sectionDesc}>An intelligent system that helps organizations measure, verify, reduce, and remove carbon with confidence.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        <FeatureCard
                            icon={<Zap className="w-6 h-6 text-yellow-400" />}
                            title="Automated Carbon Intelligence"
                            features={[
                                "Emissions analysis and scenario modeling",
                                "Reduction and removal pathway recommendations",
                                "Real-time insights across operations and supply chains"
                            ]}
                        />
                        <FeatureCard
                            icon={<ShieldCheck className="w-6 h-6 text-green-400" />}
                            title="High-Integrity Carbon Integration"
                            features={[
                                "Connects to verified carbon removal projects (Biochar, Nature-based)",
                                "Built on transparent, auditable dMRV standards",
                                "Designed to meet compliance, ESG, and voluntary market needs"
                            ]}
                        />
                    </div>
                </div>
            </section>

            {/* Who We Work With Section - Darker Background */}
            <section id="who-we-work-with" className="py-24 bg-secondary/30 relative">
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <span className="text-primary font-bold text-sm uppercase tracking-wider mb-2 block">Who We Work With</span>
                        <h2 className={styles.sectionTitle}>Organizations Ready to Move from Targets to Action</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <PersonaCard
                            title="Enterprises & Growing Companies"
                            desc="Companies seeking credible net-zero or climate-positive strategies."
                            icon={<Globe className="w-8 h-8 text-primary" />}
                        />
                        <PersonaCard
                            title="Sustainability & ESG Teams"
                            desc="Teams that need faster insights, lower verification costs, and defensible reporting."
                            icon={<BarChart3 className="w-8 h-8 text-blue-400" />}
                        />
                        <PersonaCard
                            title="Operations & Supply Chain"
                            desc="Organizations tackling Scope 1–3 emissions and complex value chains."
                            icon={<Users className="w-8 h-8 text-orange-400" />}
                        />
                        <PersonaCard
                            title="Climate-Committed Partners"
                            desc="Project developers, platforms, and institutions aligned with high-integrity carbon."
                            icon={<Leaf className="w-8 h-8 text-green-400" />}
                        />
                    </div>
                </div>
            </section>

            {/* Who We Are Section */}
            <section id="who-we-are" className={styles.processSection}>
                <div className={styles.container}>
                    <div className="flex flex-col md:flex-row gap-16 items-center">
                        <div className="flex-1">
                            <span className="text-primary font-bold text-sm uppercase tracking-wider mb-2 block">Who We Are</span>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Carbon Integrity Meets Applied AI</h2>
                            <div className="space-y-6">
                                <ListItem title="Built by Mālama" desc="A climate infrastructure company focused on durable, transparent carbon removal." />
                                <ListItem title="Integrity-First by Design" desc="Science-backed methodologies, long-term permanence, and radical transparency." />
                                <ListItem title="Technology + Place" desc="Rooted in Hawai‘i, building solutions that respect ecosystems, communities, and global impact." />
                                <ListItem title="Infrastructure, Not Hype" desc="We build tools that hold up under scrutiny—from regulators, investors, and auditors." />
                            </div>
                        </div>
                        <div className="flex-1 relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                            {/* Placeholder for 'Who We Are' image - could use another Hawaiian landscape or technology abstract */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blue-900/40 mix-blend-overlay z-10"></div>
                            <div className="absolute inset-0 bg-[url('/uploaded_image_1768087489516.png')] bg-cover bg-center"></div>

                            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 to-transparent z-20">
                                <p className="text-white font-medium text-lg">"We adhere to the highest standards of dMRV."</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Insights Section */}
            <section id="insights" className="py-24 bg-secondary/10 mb-24">
                <div className={styles.container} style={{ borderBottomWidth: 'unset', paddingBottom: '50px' }}>
                    <div className="flex justify-between items-end mb-16">
                        <div>
                            <span className="text-primary font-bold text-sm uppercase tracking-wider mb-2 block">Insights</span>
                            <h2 className={styles.sectionTitle} style={{ marginBottom: 0 }}>Stay Ahead of Carbon Markets</h2>
                        </div>
                        <button
                            className="hidden md:flex"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: '9999px',
                                fontWeight: 500,
                                cursor: 'pointer',
                                transition: 'background-color 0.2s, color 0.2s',
                                border: '1px solid transparent',
                                backgroundColor: 'transparent',
                                borderColor: 'hsl(var(--border))',
                                color: 'hsl(var(--foreground))',
                                height: '2.5rem',
                                padding: '0 1.5rem',
                                fontSize: '1rem'
                            }}
                        >
                            View All Insights
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <InsightCard
                            category="Market Intelligence"
                            title="Trends in voluntary and compliance markets, pricing, and integrity standards."
                        />
                        <InsightCard
                            category="AI & Climate Analytics"
                            title="How AI is reshaping emissions tracking, verification, and decision-making."
                        />
                        <InsightCard
                            category="Regulatory Readiness"
                            title="Updates on global climate reporting requirements and best practices."
                        />
                        <InsightCard
                            category="Case Studies"
                            title="Real-world examples from projects, partners, and deployments."
                        />
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className={styles.footer}>
                <div className={styles.container}>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                        <div className="col-span-1 md:col-span-2">
                            <div className="text-2xl font-bold mb-4">Mālama <span className="text-primary">carbon_agent</span></div>
                            <p className="text-muted-foreground max-w-sm">Combining AI intelligence with high-integrity carbon removal to empower real-world climate action.</p>
                        </div>
                        <div>
                            <h4 className="font-bold mb-4">Platform</h4>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li><Link href="#what-we-do" className="hover:text-primary">What We Do</Link></li>
                                <li><Link href="#who-we-work-with" className="hover:text-primary">Who We Work With</Link></li>
                                <li><Link href="#insights" className="hover:text-primary">Insights</Link></li>
                                <li><Link href="/dashboard" className="hover:text-primary">Login</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold mb-4">Company</h4>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li><Link href="#who-we-are" className="hover:text-primary">Who We Are</Link></li>
                                <li><a href="#" className="hover:text-primary">Contact</a></li>
                                <li><a href="#" className="hover:text-primary">Privacy Policy</a></li>
                                <li><a href="#" className="hover:text-primary">Terms of Service</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.footerContent}>
                        <div>&copy; 2026 Mālama Carbon. All rights reserved.</div>
                        <div className="flex gap-6">
                            <span>Honolulu, HI</span>
                        </div>
                    </div>
                </div>
            </footer>
        </main>
    );
}

// Sub-components for cleaner code
function FeatureCard({ icon, title, features }: { icon: React.ReactNode, title: string, features: string[] }) {
    return (
        <div className="bg-card/50 border border-border/50 p-8 rounded-2xl hover:bg-card/80 transition-all hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5">
            <div className="bg-background/80 w-12 h-12 rounded-xl flex items-center justify-center mb-6 border border-white/5">
                {icon}
            </div>
            <h3 className="text-xl font-bold mb-4">{title}</h3>
            <ul className="space-y-3">
                {features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{feature}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function PersonaCard({ title, desc, icon }: { title: string, desc: string, icon: React.ReactNode }) {
    return (
        <div className="bg-background p-6 rounded-xl border border-border/50 hover:border-primary/30 transition-all text-center group">
            <div className="bg-secondary/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                {icon}
            </div>
            <h3 className="font-bold mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
        </div>
    )
}

function ListItem({ title, desc }: { title: string, desc: string }) {
    return (
        <div className="flex gap-4">
            <div className="mt-1">
                <div className="w-2 h-2 rounded-full bg-primary ring-4 ring-primary/10"></div>
            </div>
            <div>
                <h4 className="font-bold mb-1">{title}</h4>
                <p className="text-muted-foreground">{desc}</p>
            </div>
        </div>
    )
}

function InsightCard({ category, title }: { category: string, title: string }) {
    return (
        <div className="bg-card border border-border/50 p-6 rounded-xl hover:border-primary/30 transition-all cursor-pointer group">
            <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-2 py-1 rounded">{category}</span>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
            <h3 className="text-lg font-bold group-hover:text-primary transition-colors">{title}</h3>
        </div>
    )
}

import { Button } from "@/components/ui/button";
