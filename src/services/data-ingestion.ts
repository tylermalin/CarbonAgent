import { EmissionRecord, EmissionSource } from "@/lib/types";
import { IDataIngestionService } from "./interfaces";
import { EMISSIONS_DATA } from "@/lib/mock-data";

export class DataIngestionService implements IDataIngestionService {
    private isMockMode: boolean = true;

    constructor() {
        this.isMockMode = process.env.NEXT_PUBLIC_USE_MOCK_DATA !== 'false';
    }

    async fetchFacilitiesData(facilityId: string): Promise<EmissionRecord[]> {
        if (this.isMockMode) {
            await new Promise(resolve => setTimeout(resolve, 500));
            return EMISSIONS_DATA.filter(e => e.sourceId === facilityId);
        }
        // TODO: Connect to Smart Meter / IoT Glue Code
        return [];
    }

    async fetchFleetTelemetry(fleetId: string): Promise<EmissionRecord[]> {
        if (this.isMockMode) {
            // Return mock transport data
            return EMISSIONS_DATA.filter(e => e.sourceId === fleetId);
        }
        // TODO: Connect to Telematics API
        return [];
    }
}

export const ingestionClient = new DataIngestionService();
