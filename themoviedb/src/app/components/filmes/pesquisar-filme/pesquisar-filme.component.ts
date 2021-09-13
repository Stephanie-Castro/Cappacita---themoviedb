import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FilmeModel } from 'src/app/models/filme-model';
import { InserirApiModel } from 'src/app/models/inserir-api-model';
import { ConexaoBancoDadosService } from 'src/app/service/conexao-banco-dados.service';
import { TmdbApiService } from 'src/app/service/tmdb-api.service';

@Component({
  selector: 'app-pesquisar-filme',
  templateUrl: './pesquisar-filme.component.html',
  styleUrls: ['./pesquisar-filme.component.css']
})
export class PesquisarFilmeComponent implements OnInit {

  constructor(public tmdbApiService : TmdbApiService, public conexaoBDService : ConexaoBancoDadosService) { }

  public listaPesquisaFilme: Array<FilmeModel>|undefined;
  public error: HttpErrorResponse | undefined;
  public errorMsg: string = "";

  ngOnInit(): void {
    
  }

  private buscarFilme(filme: string) {
    this.tmdbApiService.pesquisarFilme(filme).subscribe(filmes => {
      this.errorMsg = "";
      this.listaPesquisaFilme = filmes.results;
      //console.log(this.listaPesquisaFilme);
      this.inserirBD(filme);

    }, 
    error => {
      //console.log(error)
      this.error = error;
      this.errorMsg = error.error.status_message;
      //console.log(this.errorMsg)
    });
  }

  nomeDoFilmeAPesquisar(nomeFilme: string){
    var nomeFilme = nomeFilme;
    this.buscarFilme(nomeFilme);
  }

  inserirBD(filme: string){
    var api_info_insert = new InserirApiModel("movie search", "https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&query=" + filme, this.listaPesquisaFilme?.length, "success")

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
