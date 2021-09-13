import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { InserirApiModel } from 'src/app/models/inserir-api-model';
import { TvseriesModel } from 'src/app/models/tvseries-model';
import { ConexaoBancoDadosService } from 'src/app/service/conexao-banco-dados.service';
import { TmdbApiService } from 'src/app/service/tmdb-api.service';

@Component({
  selector: 'app-pesquisar-tvseries',
  templateUrl: './pesquisar-tvseries.component.html',
  styleUrls: ['./pesquisar-tvseries.component.css']
})
export class PesquisarTvseriesComponent implements OnInit {

  constructor(public tmdbApiService : TmdbApiService,  public conexaoBDService : ConexaoBancoDadosService) { }

  public listaPesquisaTvserie: Array<TvseriesModel>|undefined;
  public error: HttpErrorResponse | undefined;
  public errorMsg: string = "";

  ngOnInit(): void {
  }

  private buscarTvserie(tvserie: string) {
    this.tmdbApiService.pesquisarTvserie(tvserie).subscribe(series => {
      this.errorMsg = "";
      this.listaPesquisaTvserie = series.results;
      //console.log(this.listaPesquisaTvserie);
      this.inserirBD(tvserie);
    }, 
    error => {
      //console.log(error)
      this.error = error;
      this.errorMsg = error.error.status_message;
      //console.log(this.errorMsg)
    });
  }

  nomeDaTvserieAPesquisar(nomeTvserie: string){
    var nomeTvserie = nomeTvserie;
    this.buscarTvserie(nomeTvserie);
  }

  inserirBD(tvserie: string){
    var api_info_insert = new InserirApiModel("tv series search", "https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&query=" + tvserie, this.listaPesquisaTvserie?.length, "success")

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
