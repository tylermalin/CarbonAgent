export type Scope = 'Scope 1' | 'Scope 2' | 'Scope 3';

export interface EmissionSource {
    id: string;
    name: string;
    type: 'Facility' | 'Transport' | 'Supplier';
    location: string;
}

export interface EmissionRecord {
    id: string;
    sourceId: string;
    scope: Scope;
    timestamp: string; // ISO date
    amountCO2e: number; // Tonnes
    unit: string;
    activityData?: number;
}

export interface Recommendation {
    id: string;
    title: string;
    description: string;
    category: 'Logistics' | 'Energy' | 'Sourcing';
    potentialSavingsCO2e: number;
    estimatedCost: number; // Currency
    difficulty: 'Low' | 'Medium' | 'High';
    status: 'New' | 'In Progress' | 'Implemented';
    paybackPeriod?: string;
}

export interface AgentAlert {
    id: string;
    timestamp: string;
    severity: 'Info' | 'Warning' | 'Critical';
    title: string;
    message: string;
    relatedSourceId?: string;
}
