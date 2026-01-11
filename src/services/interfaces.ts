import { AgentAlert, EmissionRecord, Recommendation } from "@/lib/types";

export interface IVertexAIService {
    detectAnomalies(data: EmissionRecord[]): Promise<AgentAlert[]>;
    generateRecommendations(context: any): Promise<Recommendation[]>;
    forecastEmissions(historicalData: EmissionRecord[]): Promise<EmissionRecord[]>;
}

export interface IDataIngestionService {
    fetchFacilitiesData(facilityId: string): Promise<EmissionRecord[]>;
    fetchFleetTelemetry(fleetId: string): Promise<EmissionRecord[]>;
}

export interface IDkVService {
    verifyData(dataHash: string): Promise<{ verified: boolean; signature: string }>;
}
