export class FilmeModel {
    constructor(id: number,  original_title: string, title: string, original_language: string, overview: string, poster_path: string, vote_average: number
      ) {
      this.id = id;
      this.original_title = original_title;
      this.title = title,
      this.original_language = original_language,
      this.overview = overview;
      this.poster_path = poster_path;
      this.vote_average = vote_average;
    }
    id: number;
    original_title: string;
    title: string;
    original_language: string
    overview: string;
    poster_path: string;
    vote_average: number;
  }
  