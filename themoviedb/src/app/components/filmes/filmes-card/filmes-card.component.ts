import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FilmeModel } from 'src/app/models/filme-model';
import { InserirApiRateModel } from 'src/app/models/inserir-api-rate-model';
import { ConexaoBancoDadosService } from 'src/app/service/conexao-banco-dados.service';
import { TmdbApiService } from 'src/app/service/tmdb-api.service';


@Component({
  selector: 'app-filmes-card',
  templateUrl: './filmes-card.component.html',
  styleUrls: ['./filmes-card.component.css']
})
export class FilmesCardComponent implements OnInit {

  @Input() filme: FilmeModel | undefined;
  public error: HttpErrorResponse | undefined;
  public errorMsg: string = "";
  currentRate = 6;

  constructor(public tmdbApiService : TmdbApiService, public conexaoBDService : ConexaoBancoDadosService) { }

  ngOnInit(): void {
  }

  checaAvalia(){
    if(localStorage.getItem('guest_session_id') == ""){
      this.criaGuestSession()
    } else{
      this.avalia(); 
    }
  }

  avalia(){
    var rate_movie = {
      value: this.currentRate
    }
    this.tmdbApiService.avaliaFilme(this.filme?.id, rate_movie).subscribe((resposta: any) => {
      this.errorMsg = "";
      if(resposta.success) {
        if(resposta.status_message == "The item/record was updated successfully."){
          this.getIdToUpdate();
        } else{
          this.salvaRateBD();
        }
      }
    },
    error => {
      //console.log(error)
      this.error = error;
      this.errorMsg = error.error.status_message;
      //console.log(this.errorMsg)
    }
    );
  }

  criaGuestSession(){
    this.tmdbApiService.createGuestSession().subscribe((resposta: any) => {
      //console.log(localStorage.getItem('guest_session_id'))
      this.errorMsg = "";
      this.avalia(); 
    },
    error => {
      //console.log(error)
      this.error = error;
      this.errorMsg = error.error.status_message;
      //console.log(this.errorMsg)
    });
  }

  salvaRateBD(){
    var api_info_rate_insert = new InserirApiRateModel
    (
      "movie rate",
      "https://api.themoviedb.org/3/movie/" + this.filme?.id + "/rating?api_key=<<api_key>>&guest_session_id=<<guest_session>>",
      localStorage.getItem('guest_session_id'),
      this.filme?.id,
      this.currentRate,
      "success"
      )

    this.conexaoBDService.inserirBDRate(api_info_rate_insert).subscribe(
      data => this.errorMsg = "",
      error => {
      this.error = error;
      this.errorMsg = error.name + " - " + error.message;
    }
    );
  }

  getIdToUpdate(){
    this.conexaoBDService.checaSeGuestJaAvaliouFilmeOuTvserie("movie rate", this.filme?.id, localStorage.getItem('guest_session_id')).subscribe(retorno => {
      this.errorMsg = "";
      if(retorno != null){
        this.updateRateBD(retorno.id)
      }
    },
    error => {
      this.error = error;
      this.errorMsg = error.name + " - " + error.message;
    });
    
  }

  updateRateBD(id: number){
    var api_info_rate_update = 
    {
      rate: this.currentRate
    }
    this.conexaoBDService.updateBDRate(id, api_info_rate_update).subscribe(
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
