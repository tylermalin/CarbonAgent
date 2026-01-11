import { EmissionRecord, Recommendation, AgentAlert, EmissionSource } from './types';

export const SOURCES: EmissionSource[] = [
    { id: 'src-001', name: 'Distribution Center A', type: 'Facility', location: 'Los Angeles, CA' },
    { id: 'src-002', name: 'Fleet Truck #42', type: 'Transport', location: 'Route 66' },
    { id: 'src-003', name: 'Supplier X', type: 'Supplier', location: 'Shenzhen, CN' },
];

export const CONNECTED_SOURCES = [
    { id: 'cs-1', name: 'PG&E Utility Data', type: 'Utility', connectedAt: '2024-11-15', status: 'Active' },
    { id: 'cs-2', name: 'SAP ERP Integration', type: 'ERP', connectedAt: '2024-11-20', status: 'Active' },
    { id: 'cs-3', name: 'Samsara Fleet Telematics', type: 'Transport', connectedAt: '2024-12-05', status: 'Warning' },
];

export const EMISSIONS_DATA: EmissionRecord[] = [
    { id: 'em-001', sourceId: 'src-001', scope: 'Scope 2', timestamp: '2025-01-01', amountCO2e: 120, unit: 't' },
    { id: 'em-002', sourceId: 'src-001', scope: 'Scope 1', timestamp: '2025-01-01', amountCO2e: 45, unit: 't' },
    { id: 'em-003', sourceId: 'src-002', scope: 'Scope 1', timestamp: '2025-01-02', amountCO2e: 12, unit: 't' },
    { id: 'em-004', sourceId: 'src-003', scope: 'Scope 3', timestamp: '2025-01-03', amountCO2e: 300, unit: 't' },
];

export const RECOMMENDATIONS: Recommendation[] = [
    {
        id: 'rec-001',
        title: 'Switch DC-A to Solar',
        description: 'Install 500kW solar array at Distribution Center A to offset Scope 2 emissions.',
        category: 'Energy',
        potentialSavingsCO2e: 80,
        estimatedCost: 150000,
        difficulty: 'Medium',
        status: 'New'
    },
    {
        id: 'rec-002',
        title: 'Optimize Route 66 Logistics',
        description: 'Consolidate shipments to reduce fleet mileage by 15%.',
        category: 'Logistics',
        potentialSavingsCO2e: 24,
        estimatedCost: 5000,
        difficulty: 'Low',
        status: 'In Progress'
    }
];

export const ALERTS: AgentAlert[] = [
    {
        id: 'alt-001',
        timestamp: '2025-01-10T08:30:00Z',
        severity: 'Critical',
        title: 'Spike in Supplier Emissions',
        message: 'Supplier X reported 40% higher emissions than baseline for Lot #99.',
        relatedSourceId: 'src-003'
    }
];
