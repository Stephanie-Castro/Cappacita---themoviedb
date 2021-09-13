import { Tvseries } from "./tvseries";

export interface PesquisaTvserie {
    page: number;
    results: Tvseries[];
    total_pages: number;
    total_results: number;
}
