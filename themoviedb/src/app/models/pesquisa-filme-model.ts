import { FilmeModel } from "./filme-model";

export class PesquisaFilmeModel {
    constructor(page: number, total_pages: number, total_results: number, results: FilmeModel[]
      ) {
      this.page = page;
      this.total_pages = total_pages;
      this.total_results = total_results;
      this.results = results
    }
    page: number;
    results: FilmeModel[];
    total_pages: number;
    total_results: number;
  }
  