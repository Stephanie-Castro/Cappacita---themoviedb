import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { InserirApiRateModel } from 'src/app/models/inserir-api-rate-model';
import { TvseriesModel } from 'src/app/models/tvseries-model';
import { ConexaoBancoDadosService } from 'src/app/service/conexao-banco-dados.service';
import { TmdbApiService } from 'src/app/service/tmdb-api.service';

@Component({
  selector: 'app-tvseries-card',
  templateUrl: './tvseries-card.component.html',
  styleUrls: ['./tvseries-card.component.css']
})
export class TvseriesCardComponent implements OnInit {

  @Input() tvserie: TvseriesModel | undefined;
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
      "tvserie rate",
      "https://api.themoviedb.org/3/tv/" + this.tvserie?.id + "/rating?api_key=<<api_key>>&guest_session_id=<<guest_session>>",
      localStorage.getItem('guest_session_id'),
      this.tvserie?.id,
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

  avalia(){
    var rate_tvserie = {
      value: this.currentRate
    }
    this.tmdbApiService.avaliaTvserie(this.tvserie?.id, rate_tvserie).subscribe((resposta: any) => {
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

  getIdToUpdate(){
    this.conexaoBDService.checaSeGuestJaAvaliouFilmeOuTvserie("tvserie rate", this.tvserie?.id, localStorage.getItem('guest_session_id')).subscribe(retorno => {
      this.errorMsg = "";
      if(retorno != null){
        this.updateRateBD(retorno.id)
      }
    },
    error => {
      this.error = error;
      this.errorMsg = error.name + " - " + error.message;
    }
    );
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
