import { Filme } from "./filme";

export interface PesquisaFilme {
    page: number;
    results: Filme[];
    total_pages: number;
    total_results: number;
}
