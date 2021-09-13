export class TvseriesModel {
    constructor(id: number,  name: string, original_name: string, original_language: string, overview: string, poster_path: string, vote_average: number
        ) {
        this.id = id;
        this.name = name;
        this.original_name = original_name;
        this.original_language = original_language,
        this.overview = overview;
        this.poster_path = poster_path;
        this.vote_average = vote_average;
      }
    id: number;
    name: string;
    original_name: string;
    original_language: string
    overview: string;
    poster_path: string;
    vote_average: number;
}
