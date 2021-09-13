import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { InserirApiModel } from 'src/app/models/inserir-api-model';
import { TvseriesModel } from 'src/app/models/tvseries-model';
import { ConexaoBancoDadosService } from 'src/app/service/conexao-banco-dados.service';
import { TmdbApiService } from 'src/app/service/tmdb-api.service';

@Component({
  selector: 'app-top-rated-tvseries',
  templateUrl: './top-rated-tvseries.component.html',
  styleUrls: ['./top-rated-tvseries.component.css']
})
export class TopRatedTvseriesComponent implements OnInit {

  constructor(public tmdbApiService : TmdbApiService,  public conexaoBDService : ConexaoBancoDadosService) { }

  ngOnInit(): void {
    this.topRatedTvseries();
  }

  public listaTopRatedTvseries: Array<TvseriesModel>|undefined;
  public error: HttpErrorResponse | undefined;
  public errorMsg: string = "";

  private topRatedTvseries() {
    this.tmdbApiService.topRatedTvseries().subscribe(tvseries => {
      this.errorMsg = "";
      this.listaTopRatedTvseries = tvseries.results;
      //console.log(this.listaTopRatedTvseries);
      this.inserirBD();
    }, 
    error => {
      //console.log(error)
      this.error = error;
      this.errorMsg = error.error.status_message;
      //console.log(this.errorMsg)
    });
  }

  inserirBD(){
    var api_info_insert = new InserirApiModel("tv series top_rated", "https://api.themoviedb.org/3/tv/top_rated?api_key=<<api_key>>", this.listaTopRatedTvseries?.length, "success")

    this.conexaoBDService.inserirBD(api_info_insert).subscribe(
      data => this.errorMsg = "",
      error => {
      this.error = error;
      this.errorMsg = error.name + " - " + error.message;
      }
    );
  }

  checaExisteErro(){
    if(this.errorMsg != ""){
      return false;
    } else{
      return true;
    }
  }


}
