"use client";

import { useState } from 'react';
import { ChevronDown, ChevronUp, TrendingDown, DollarSign, Calendar, Award } from 'lucide-react';
import DashboardLayout from '@/app/dashboard/layout';
import { Button } from '@/components/ui/button';

// Enhanced Data from User Request
const OPPORTUNITIES = [
    {
        id: 1,
        title: "Switch DC-A to Solar",
        category: "Energy",
        difficulty: "Medium",
        summary: "Install 500kW solar array at Distribution Center A to offset Scope 2 emissions.",
        saved: 80,
        cost: 150000,
        roi: 4.3,
        payback: "12 mo",
        details: {
            overview: "This project involves installing a 500kW rooftop solar photovoltaic system at Distribution Center A, which currently relies entirely on grid electricity. The facility's energy consumption patterns and roof infrastructure make it an ideal candidate for solar installation.",
            currentState: {
                energySource: "100% grid electricity (coal/natural gas mix)",
                annualConsumption: "850 MWh",
                currentCost: "$102,000/year",
                emissions: "340 tCO2e/year"
            },
            proposedSolution: {
                system: "500kW rooftop solar array with 25-year warranty",
                coverage: "~60% of facility energy needs",
                technology: "Monocrystalline silicon panels with microinverters",
                installation: "Professional installation over 6-week period"
            },
            benefits: [
                "Reduce Scope 2 emissions by 80 tCO2e annually",
                "Lock in electricity costs for 25+ years",
                "Eligible for 30% federal tax credit ($45,000)",
                "Increase property value and corporate sustainability profile",
                "Potential to sell excess energy back to grid"
            ],
            implementation: {
                timeline: "4-6 months from approval to operation",
                phases: [
                    "Site assessment and engineering (4 weeks)",
                    "Permitting and approvals (6-8 weeks)",
                    "Equipment procurement (4 weeks)",
                    "Installation (6 weeks)",
                    "Inspection and commissioning (2 weeks)"
                ]
            },
            risks: [
                "Weather-related installation delays",
                "Permitting process may extend timeline",
                "Grid interconnection approval required",
                "Roof structural assessment may require reinforcement"
            ],
            financials: {
                breakdown: "Equipment: $120,000 | Installation: $25,000 | Permits: $5,000",
                incentives: "Federal tax credit: -$45,000 | State rebate: -$10,000",
                netCost: "$95,000",
                annualSavings: "$51,000 (energy) - $46,800 (maintenance) = $4,200",
                roi: "4.3% annually after incentives"
            }
        }
    },
    {
        id: 2,
        title: "Optimize Route 66 Logistics",
        category: "Logistics",
        difficulty: "Low",
        summary: "Consolidate shipments to reduce fleet mileage by 15%.",
        saved: 24,
        cost: 5000,
        roi: 38.4,
        payback: "12 mo",
        details: {
            overview: "Route 66 currently serves 47 delivery points across the western region with suboptimal routing that results in excessive mileage and fuel consumption. By implementing route optimization software and consolidating delivery windows, we can achieve significant efficiency gains.",
            currentState: {
                weeklyMiles: "4,200 miles",
                fuelConsumption: "600 gallons diesel/week",
                vehicles: "8 medium-duty trucks",
                avgLoadFactor: "62%",
                emissions: "160 tCO2e/year"
            },
            proposedSolution: {
                software: "AI-powered route optimization platform (OptiRoute Pro)",
                strategy: "Consolidate delivery windows and implement dynamic routing",
                approach: "Shift from daily to bi-weekly deliveries for low-volume customers",
                technology: "Real-time traffic integration and predictive analytics"
            },
            benefits: [
                "Reduce total mileage by 15% (630 miles/week)",
                "Save 90 gallons diesel/week (4,680 gallons/year)",
                "Reduce emissions by 24 tCO2e annually",
                "Lower vehicle maintenance costs by ~$8,000/year",
                "Improve on-time delivery rates",
                "Reduce driver overtime by 12 hours/week"
            ],
            implementation: {
                timeline: "6-8 weeks from approval to full deployment",
                phases: [
                    "Software procurement and setup (1 week)",
                    "Historical route data analysis (2 weeks)",
                    "Pilot program with 2 trucks (3 weeks)",
                    "Driver training (1 week)",
                    "Full fleet rollout (1 week)",
                    "Optimization and refinement (ongoing)"
                ]
            },
            risks: [
                "Customer pushback on delivery window changes",
                "Initial driver resistance to new system",
                "Learning curve may temporarily reduce efficiency",
                "Software integration with existing systems"
            ],
            financials: {
                breakdown: "Software license: $3,600/year | Implementation: $1,400",
                fuelSavings: "$14,040/year (at $3.00/gallon)",
                maintenanceSavings: "$8,000/year",
                laborSavings: "$4,000/year (reduced overtime)",
                totalAnnualSavings: "$26,040",
                netFirstYear: "$21,040 after costs",
                roi: "38.4% in year 1, higher in subsequent years"
            }
        }
    },
    {
        id: 3,
        title: "Switch Packaging Supplier to BioSafe",
        category: "Sourcing",
        difficulty: "Low",
        summary: "Current supplier 'PlastiCorp' has high embodied carbon. BioSafe offers a 40% reduction with only 5% cost increase.",
        saved: 120,
        cost: 12000,
        roi: 80.0,
        payback: "N/A",
        details: {
            overview: "Our current packaging supplier PlastiCorp provides petroleum-based plastic packaging with significant embodied carbon. BioSafe offers bio-based and recycled content alternatives that reduce carbon footprint by 40% while maintaining quality and protection standards.",
            currentState: {
                supplier: "PlastiCorp",
                material: "Virgin petroleum-based plastics",
                annualSpend: "$240,000",
                volume: "850,000 units",
                embodiedCarbon: "300 tCO2e/year",
                recyclability: "Limited (Type 4 plastic)"
            },
            proposedSolution: {
                supplier: "BioSafe Packaging Solutions",
                material: "60% recycled content + bio-based polymers",
                certification: "FSC-certified, carbon-neutral manufacturing",
                performance: "Meets or exceeds current specifications",
                options: "Multiple product lines matching all current SKUs"
            },
            benefits: [
                "Reduce embodied carbon by 120 tCO2e annually (40% reduction)",
                "Improve brand perception and sustainability credentials",
                "Better end-of-life options (widely recyclable)",
                "Meet growing retailer sustainability requirements",
                "Strengthen supply chain resilience with domestic supplier",
                "Qualify for green procurement credits"
            ],
            implementation: {
                timeline: "8-10 weeks transition period",
                phases: [
                    "Sample testing and quality validation (3 weeks)",
                    "Customer communication and marketing prep (2 weeks)",
                    "Parallel production run (2 weeks)",
                    "Inventory transition (2 weeks)",
                    "Full switchover (1 week)",
                    "PlastiCorp contract termination"
                ]
            },
            risks: [
                "Minimal risk - samples already tested successfully",
                "Customer perception of 'different' packaging (mitigated by marketing)",
                "5% cost increase impacts margin",
                "Potential PlastiCorp early termination fees"
            ],
            financials: {
                breakdown: "New annual cost: $252,000 (5% increase = $12,000/year)",
                carbonCredits: "Potential carbon credit value: $9,600/year",
                brandValue: "Estimated marketing value: $15,000/year",
                retailerRequirements: "Avoid potential delisting fees: $50,000+",
                roi: "80% when factoring carbon credits and brand value",
                note: "Payback N/A as this is an operational cost increase with strategic benefits"
            }
        }
    },
    {
        id: 4,
        title: "HVAC Optimization at HQ",
        category: "Energy",
        difficulty: "Low",
        summary: "Implement AI-driven schedule for HVAC based on occupancy sensors.",
        saved: 45,
        cost: 2500,
        roi: 144.0,
        payback: "6 months",
        details: {
            overview: "Headquarters currently operates HVAC systems on fixed schedules that don't account for actual occupancy patterns. Installing occupancy sensors and AI-driven controls will optimize heating and cooling based on real-time building usage, particularly during evenings, weekends, and holidays.",
            currentState: {
                system: "Traditional thermostat-based HVAC",
                schedule: "Fixed 6 AM - 8 PM weekdays, reduced weekends",
                avgOccupancy: "Only 65% during operating hours",
                energyUse: "285 MWh/year for HVAC",
                cost: "$34,200/year",
                waste: "~30% energy waste during low-occupancy periods"
            },
            proposedSolution: {
                sensors: "20 wireless occupancy sensors throughout building",
                controller: "Smart HVAC controller with AI optimization",
                features: "Zone-based control, predictive pre-cooling/heating",
                integration: "Connect to existing building management system",
                monitoring: "Real-time dashboard and mobile app"
            },
            benefits: [
                "Reduce HVAC energy consumption by 15-20%",
                "Save 45 tCO2e annually",
                "Lower energy costs by $6,840/year",
                "Improve comfort through zone-based control",
                "Extend HVAC equipment lifespan",
                "Detailed occupancy analytics for space planning",
                "Automatic adaptation to changing patterns"
            ],
            implementation: {
                timeline: "3-4 weeks total",
                phases: [
                    "Site survey and sensor placement planning (3 days)",
                    "Equipment procurement (1 week)",
                    "Sensor installation (3 days)",
                    "Controller installation and integration (2 days)",
                    "System calibration and testing (1 week)",
                    "Staff training (2 days)",
                    "Monitoring and optimization (ongoing)"
                ]
            },
            risks: [
                "Very low risk - proven technology",
                "Minimal disruption to operations",
                "May require HVAC contractor coordination",
                "Initial calibration period of 2-3 weeks for optimal performance"
            ],
            financials: {
                breakdown: "Sensors: $1,200 | Controller: $800 | Installation: $500",
                energySavings: "$6,840/year",
                maintenanceSavings: "$1,200/year (reduced wear)",
                totalAnnualSavings: "$8,040",
                simplePayback: "3.7 months",
                roi: "144% in first year, continuing annual savings",
                additionalValue: "Occupancy data worth ~$5,000 for space optimization"
            }
        }
    },
    {
        id: 5,
        title: "Electrify Last-Mile Fleet (Phase 1)",
        category: "Logistics",
        difficulty: "High",
        summary: "Replace 5 diesel vans with EV equivalents for urban delivery routes.",
        saved: 65,
        cost: 250000,
        roi: 2.1,
        payback: "4 years",
        details: {
            overview: "Phase 1 of fleet electrification focuses on replacing 5 diesel delivery vans operating on urban routes with electric vehicle (EV) equivalents. These routes average 80 miles/day, well within EV range capabilities, and benefit from overnight charging at the central depot.",
            currentState: {
                vehicles: "5 diesel Mercedes Sprinter vans (2018-2020)",
                dailyMiles: "80 miles/vehicle average",
                annualMiles: "100,000 miles total (all 5 vehicles)",
                fuelConsumption: "18 MPG average = 5,556 gallons/year",
                fuelCost: "$16,668/year (at $3.00/gallon)",
                maintenance: "$8,500/year",
                emissions: "165 tCO2e/year (including upstream)"
            },
            proposedSolution: {
                vehicles: "5 Ford E-Transit or equivalent electric vans",
                range: "126 miles per charge (exceeds daily needs)",
                charging: "Level 2 chargers at depot (overnight charging)",
                warranty: "8-year/100,000-mile battery warranty",
                incentives: "Federal tax credit + state/local rebates available"
            },
            benefits: [
                "Eliminate 65 tCO2e annually in Scope 1 emissions",
                "Reduce fuel costs by 70% ($11,668/year savings)",
                "Lower maintenance costs by 40% ($3,400/year savings)",
                "Zero tailpipe emissions in urban areas",
                "Quieter operation for residential deliveries",
                "Improved driver experience and recruitment",
                "Positive brand image and corporate sustainability leadership"
            ],
            implementation: {
                timeline: "6-9 months from approval to full deployment",
                phases: [
                    "Vehicle procurement and customization (12-16 weeks)",
                    "Charging infrastructure installation (6 weeks)",
                    "Electrical service upgrade if needed (4-8 weeks)",
                    "Driver training (1 week)",
                    "Phased vehicle deployment (4 weeks)",
                    "Route optimization for charging (ongoing)",
                    "Performance monitoring and adjustment (ongoing)"
                ]
            },
            risks: [
                "Higher upfront capital cost",
                "Charging infrastructure may require electrical upgrades ($20-40k)",
                "Range anxiety during extreme weather (cold reduces range ~30%)",
                "Limited service network for commercial EVs",
                "Residual value uncertainty",
                "Potential delivery delays for vehicles (12-16 week lead time)",
                "Need backup plan for depot charging failures"
            ],
            financials: {
                breakdown: "Vehicles: $220,000 ($44k each) | Chargers: $15,000 (5 units) | Installation: $15,000",
                incentives: "Federal tax credit: -$30,000 | State rebates: -$25,000 | Utility rebates: -$5,000",
                netCost: "$175,000 after incentives",
                dieselSales: "Sell existing vans: +$75,000",
                finalNetCost: "$100,000",
                annualSavings: "Fuel: $11,668 | Maintenance: $3,400 | Insurance: -$800 = $14,268/year",
                simplePayback: "4.3 years on net cost, 3.5 years including carbon value",
                roi: "2.1% initially, improves significantly in years 5-10",
                tcOwnership: "Lower total cost of ownership over 10-year lifespan"
            }
        }
    }
];

import { useProjectStore } from "@/lib/store";
import { useRouter } from "next/navigation";

// ... (KEEP DATA) ...

export default function RecommendationsPage() {
    const [expandedId, setExpandedId] = useState<number | null>(null);
    const { addProject } = useProjectStore();
    const router = useRouter();

    const toggleExpand = (id: number) => {
        setExpandedId(expandedId === id ? null : id);
    };

    const handleApprove = (opp: any) => {
        addProject({
            id: opp.id.toString(),
            title: opp.title,
            status: 'Planning',
            nextStep: opp.details.implementation.phases[0] || "Initial Planning",
            progress: 0,
            startDate: new Date().toISOString()
        });
        // Optional: Show toast here
        alert(`Project "${opp.title}" approved! Check the Dashboard.`);
        router.push('/dashboard');
    };

    const getDifficultyColor = (difficulty: string) => {
        if (difficulty.includes('Low')) return 'bg-green-500/10 text-green-500 border-green-500/20';
        if (difficulty.includes('Medium')) return 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20';
        return 'bg-red-500/10 text-red-500 border-red-500/20';
    };

    const getCategoryColor = (category: string) => {
        const colors: Record<string, string> = {
            Energy: 'bg-blue-500/10 text-blue-500',
            Logistics: 'bg-purple-500/10 text-purple-500',
            Sourcing: 'bg-orange-500/10 text-orange-500'
        };
        return colors[category] || 'bg-secondary text-foreground';
    };

    const DetailSection = ({ title, children }: { title: string, children: React.ReactNode }) => (
        <div className="mb-6">
            <h4 className="font-semibold text-foreground mb-3 text-lg">{title}</h4>
            {children}
        </div>
    );

    return (
        <DashboardLayout>
            <main className="container py-8 flex flex-col gap-8 flex-1">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold tracking-tight mb-2">Optimization Opportunities</h1>
                    <p className="text-muted-foreground">AI-identified actions to reduce carbon intensity and operational costs.</p>
                </div>

                <div className="space-y-4">
                    {OPPORTUNITIES.map((opp) => (
                        <div key={opp.id} className="bg-card rounded-lg border shadow-sm overflow-hidden transition-all hover:border-primary/20">
                            {/* Card Header */}
                            <div className="p-6">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-3">
                                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(opp.category)}`}>
                                                {opp.category}
                                            </span>
                                            <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getDifficultyColor(opp.difficulty)}`}>
                                                {opp.difficulty} Difficulty
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-bold text-foreground mb-2">{opp.title}</h3>
                                        <p className="text-muted-foreground">{opp.summary}</p>
                                    </div>
                                </div>

                                {/* Metrics */}
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                                    <div className="bg-green-500/10 p-4 rounded-lg border border-green-500/10">
                                        <div className="flex items-center gap-2 mb-1">
                                            <TrendingDown className="w-4 h-4 text-green-500" />
                                            <span className="text-xs text-muted-foreground">Saved</span>
                                        </div>
                                        <div className="text-2xl font-bold text-foreground">{opp.saved} t</div>
                                    </div>
                                    <div className="bg-blue-500/10 p-4 rounded-lg border border-blue-500/10">
                                        <div className="flex items-center gap-2 mb-1">
                                            <DollarSign className="w-4 h-4 text-blue-500" />
                                            <span className="text-xs text-muted-foreground">Cost</span>
                                        </div>
                                        <div className="text-2xl font-bold text-foreground">${(opp.cost / 1000).toFixed(0)}k</div>
                                    </div>
                                    <div className="bg-purple-500/10 p-4 rounded-lg border border-purple-500/10">
                                        <div className="flex items-center gap-2 mb-1">
                                            <Award className="w-4 h-4 text-purple-500" />
                                            <span className="text-xs text-muted-foreground">ROI</span>
                                        </div>
                                        <div className="text-2xl font-bold text-foreground">{opp.roi}%</div>
                                    </div>
                                    <div className="bg-orange-500/10 p-4 rounded-lg border border-orange-500/10">
                                        <div className="flex items-center gap-2 mb-1">
                                            <Calendar className="w-4 h-4 text-orange-500" />
                                            <span className="text-xs text-muted-foreground">Payback</span>
                                        </div>
                                        <div className="text-2xl font-bold text-foreground">{opp.payback}</div>
                                    </div>
                                </div>

                                {/* Evaluate Button */}
                                <Button
                                    onClick={() => toggleExpand(opp.id)}
                                    className={` w-full flex items-center justify-center gap-2 transition-colors ${expandedId === opp.id ? 'bg-secondary' : ''}`}
                                    variant={expandedId === opp.id ? "secondary" : "primary"}
                                >
                                    {expandedId === opp.id ? (
                                        <>
                                            <ChevronUp className="w-4 h-4" />
                                            Hide Full Report
                                        </>
                                    ) : (
                                        <>
                                            Evaluate Opportunity
                                            <ChevronDown className="w-4 h-4" />
                                        </>
                                    )}
                                </Button>
                            </div>

                            {/* Expanded Details */}
                            {expandedId === opp.id && (
                                <div className="border-t bg-secondary/10 p-6 animate-in fade-in slide-in-from-top-4 duration-300">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div>
                                            <DetailSection title="Overview">
                                                <p className="text-muted-foreground leading-relaxed">{opp.details.overview}</p>
                                            </DetailSection>

                                            <DetailSection title="Current State">
                                                <div className="bg-background/50 p-4 rounded-lg border">
                                                    {Object.entries(opp.details.currentState).map(([key, value]) => (
                                                        <div key={key} className="flex justify-between py-2 border-b border-border last:border-0">
                                                            <span className="text-muted-foreground capitalize text-sm">{key.replace(/([A-Z])/g, ' $1').trim()}:</span>
                                                            <span className="font-medium text-foreground text-sm">{value}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </DetailSection>

                                            <DetailSection title="Proposed Solution">
                                                <div className="bg-background/50 p-4 rounded-lg border">
                                                    {Object.entries(opp.details.proposedSolution).map(([key, value]) => (
                                                        <div key={key} className="flex justify-between py-2 border-b border-border last:border-0">
                                                            <span className="text-muted-foreground capitalize text-sm">{key.replace(/([A-Z])/g, ' $1').trim()}:</span>
                                                            <span className="font-medium text-foreground text-sm">{value}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </DetailSection>
                                        </div>

                                        <div>
                                            <DetailSection title="Key Benefits">
                                                <ul className="space-y-2">
                                                    {opp.details.benefits.map((benefit, idx) => (
                                                        <li key={idx} className="flex items-start gap-3">
                                                            <span className="text-green-500 mt-1">✓</span>
                                                            <span className="text-muted-foreground text-sm">{benefit}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </DetailSection>

                                            <DetailSection title="Implementation Timeline">
                                                <div className="bg-background/50 p-4 rounded-lg border">
                                                    <p className="font-medium text-foreground mb-3 text-sm">{opp.details.implementation.timeline}</p>
                                                    <div className="space-y-2">
                                                        {opp.details.implementation.phases.map((phase, idx) => (
                                                            <div key={idx} className="flex items-start gap-3">
                                                                <span className="bg-primary/20 text-primary rounded-full w-5 h-5 flex items-center justify-center text-xs flex-shrink-0">
                                                                    {idx + 1}
                                                                </span>
                                                                <span className="text-muted-foreground text-sm">{phase}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </DetailSection>

                                            <DetailSection title="Risks & Considerations">
                                                <ul className="space-y-2">
                                                    {opp.details.risks.map((risk, idx) => (
                                                        <li key={idx} className="flex items-start gap-3">
                                                            <span className="text-yellow-500 mt-1">⚠</span>
                                                            <span className="text-muted-foreground text-sm">{risk}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </DetailSection>

                                            <DetailSection title="Financial Analysis">
                                                <div className="bg-background/50 p-4 rounded-lg border">
                                                    {Object.entries(opp.details.financials).map(([key, value]) => (
                                                        <div key={key} className="flex justify-between py-2 border-b border-border last:border-0">
                                                            <span className="text-muted-foreground capitalize text-sm">{key.replace(/([A-Z])/g, ' $1').trim()}:</span>
                                                            <span className="font-medium text-foreground text-sm">{value}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </DetailSection>

                                            <div className="mt-8 flex gap-3">
                                                <Button
                                                    onClick={() => handleApprove(opp)}
                                                    className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                                                >
                                                    Approve Project
                                                </Button>
                                                <Button variant="outline" className="flex-1">
                                                    Request More Info
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </main>
        </DashboardLayout>
    );
}
