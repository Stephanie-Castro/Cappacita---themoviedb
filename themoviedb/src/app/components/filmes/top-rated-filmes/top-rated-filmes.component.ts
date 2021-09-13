import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FilmeModel } from 'src/app/models/filme-model';
import { InserirApiModel } from 'src/app/models/inserir-api-model';
import { ConexaoBancoDadosService } from 'src/app/service/conexao-banco-dados.service';
import { TmdbApiService } from 'src/app/service/tmdb-api.service';

@Component({
  selector: 'app-top-rated-filmes',
  templateUrl: './top-rated-filmes.component.html',
  styleUrls: ['./top-rated-filmes.component.css']
})
export class TopRatedFilmesComponent implements OnInit {

  constructor(public tmdbApiService : TmdbApiService,  public conexaoBDService : ConexaoBancoDadosService) { }

  ngOnInit(): void {
    this.topRatedFilmes();
  }

  public listaTopRatedFilmes: Array<FilmeModel>|undefined;
  public error: HttpErrorResponse | undefined;
  public errorMsg: string = "";

  private topRatedFilmes() {
    this.tmdbApiService.topRatedFilmes().pipe().subscribe(filmes => {
      this.errorMsg = "";
      this.listaTopRatedFilmes = filmes.results;
      //console.log(this.listaTopRatedFilmes);
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
    var api_info_insert = new InserirApiModel("movie top_rated", "https://api.themoviedb.org/3/movie/top_rated?api_key=<<api_key>>", this.listaTopRatedFilmes?.length, "success")

    this.conexaoBDService.inserirBD(api_info_insert).pipe().subscribe(
      data => this.errorMsg = "",
      error => {
      this.error = error;
      this.errorMsg = error.name + " - " + error.message;
    });
  }

  checaExisteErro(){
    if(this.errorMsg != ""){
      return false;
    } else{
      return true;
    }
  }


}
