import { TvseriesModel } from "./tvseries-model";

export class PesquisaTvserieModel {
    constructor(page: number, total_pages: number, total_results: number, results: TvseriesModel[]
        ) {
        this.page = page;
        this.total_pages = total_pages;
        this.total_results = total_results;
        this.results = results
      }
      page: number;
      results: TvseriesModel[];
      total_pages: number;
      total_results: number;
    }
    