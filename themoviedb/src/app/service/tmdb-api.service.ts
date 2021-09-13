import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { FilmeModel } from '../models/filme-model';
import { Filme } from '../interfaces/filme';
import { PesquisaFilmeModel } from '../models/pesquisa-filme-model';
import { PesquisaFilme } from '../interfaces/pesquisa-filme';
import { PesquisaTvserieModel } from '../models/pesquisa-tvserie-model';
import { PesquisaTvserie } from '../interfaces/pesquisa-tvserie';
import { TvseriesModel } from '../models/tvseries-model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TmdbApiService {

  constructor(private http: HttpClient) { }

  private _url_search_movie: string ="https://api.themoviedb.org/3/search/movie?api_key=";
  private _url_topRated_movie: string ="https://api.themoviedb.org/3/movie/top_rated?api_key=";
  private _url_rate_movie: string ="https://api.themoviedb.org/3/movie/top_rated?api_key=";

  private _url_search_tv: string ="https://api.themoviedb.org/3/search/tv?api_key=";
  private _url_topRated_tv: string ="https://api.themoviedb.org/3/tv/top_rated?api_key=";

  private api_key: string = environment.api_key;

  private guest_session_url: string ="https://api.themoviedb.org/3/authentication/guest_session/new?api_key=";


  pesquisarFilme(filme : String)
  {
    return this.http.get<PesquisaFilme>(this._url_search_movie + this.api_key + "&query=" + filme).pipe(
      map(retorno => new PesquisaFilmeModel(
        retorno.page,
        retorno.total_pages,
        retorno.total_results,
        retorno.results.map(filme => new FilmeModel(
          filme.id,
          filme.original_title,
          filme.title,
          filme.original_language,
          filme.overview,
          "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/" + filme.poster_path,
          filme.vote_average
        ))
      )), catchError(error => {
        console.log(error)
        return throwError(error);
    }
    )
    );
  }

  topRatedFilmes()
  {
    return this.http.get<PesquisaFilme>(this._url_topRated_movie + this.api_key).pipe(
      map(retorno => new PesquisaFilmeModel(
        retorno.page,
        retorno.total_pages,
        retorno.total_results,
        retorno.results.map(filme => new FilmeModel(
          filme.id,
          filme.original_title,
          filme.title,
          filme.original_language,
          filme.overview,
          "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/" + filme.poster_path,
          filme.vote_average
        ))
      )
      ), catchError(error => {
        console.log(error)
        return throwError(error);
    }
    )
    );
  }

  pesquisarTvserie(tvserie : String)
  {
    return this.http.get<PesquisaTvserie>(this._url_search_tv + this.api_key + "&query=" + tvserie).pipe(
      map(retorno => new PesquisaTvserieModel(
        retorno.page,
        retorno.total_pages,
        retorno.total_results,
        retorno.results.map(tvserie => new TvseriesModel(
          tvserie.id,
          tvserie.name,
          tvserie.original_name,
          tvserie.original_language,
          tvserie.overview,
          "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/" + tvserie.poster_path,
          tvserie.vote_average
        ))
      )), catchError(error => {
        console.log(error)
        return throwError(error);
    }
    )
    );
  }

  topRatedTvseries()
  {
    return this.http.get<PesquisaTvserie>(this._url_topRated_tv + this.api_key).pipe(
      map(retorno => new PesquisaTvserieModel(
        retorno.page,
        retorno.total_pages,
        retorno.total_results,
        retorno.results.map(tvserie => new TvseriesModel(
          tvserie.id,
          tvserie.name,
          tvserie.original_name,
          tvserie.original_language,
          tvserie.overview,
          "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/" + tvserie.poster_path,
          tvserie.vote_average
        ))
      )), catchError(error => {
        console.log(error)
        return throwError(error);
    }
    )
    );
  }

  createGuestSession()
  {
    return this.http.get<any>(this.guest_session_url + this.api_key).pipe(
      map(retorno => {
        localStorage.setItem('guest_session_id', retorno.guest_session_id)
      }), catchError(error => {
        console.log(error)
        return throwError(error);
    }
    )
    );
  }

  avaliaFilme(movie_id: number | undefined, rate_movie: any){
    //console.log(rate_movie);
    return this.http.post<any>("https://api.themoviedb.org/3/movie/" + movie_id + "/rating?api_key=" + this.api_key + "&guest_session_id=" + localStorage.getItem('guest_session_id'), { ...rate_movie }).pipe(
      map(data => data), 
      catchError(error => {
        console.log(error)
        return throwError(error);
    }
    )
    );
  }

  avaliaTvserie(tvserie_id: number | undefined, rate_tvserie: any){;
    return this.http.post<any>("https://api.themoviedb.org/3/tv/" + tvserie_id + "/rating?api_key=" + this.api_key + "&guest_session_id=" + localStorage.getItem('guest_session_id'), { ...rate_tvserie }).pipe(
      map(data => data), 
      catchError(error => {
        console.log(error)
        return throwError(error);
    }
    )
    );
  }

}

