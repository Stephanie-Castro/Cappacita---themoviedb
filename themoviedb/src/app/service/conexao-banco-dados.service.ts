import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { InserirApiModel } from '../models/inserir-api-model';
import { InserirApiRateModel } from '../models/inserir-api-rate-model';

@Injectable({
  providedIn: 'root'
})
export class ConexaoBancoDadosService {

  constructor(private http: HttpClient) { }

  private _url_connection_bd: string =environment.database_url;
  private _port:string = environment._port;

  inserirBD(api_info: InserirApiModel) {
    console.log(api_info);
    return this.http.post<InserirApiModel>(this._url_connection_bd + this._port + "/infoApi", { ...api_info }).pipe(
      map(retorno => retorno),
      catchError(error => {
        //console.log(error)
        return throwError(error);
    }
    ));
  }

  inserirBDRate(api_rate_info: InserirApiRateModel) {
    console.log(api_rate_info);
    return this.http.post<InserirApiRateModel>(this._url_connection_bd + this._port + "/infoRateApi", { ...api_rate_info }).pipe(
      map(retorno => retorno),
      catchError(error => {
        //console.log(error)
        return throwError(error);
    }
    )
    );
  }

  updateBDRate(id: number, api_rate_update_info: any) {
    return this.http.put<any>(this._url_connection_bd + this._port + "/infoRateApi/" + id, { ...api_rate_update_info }).pipe(
      map(retorno => retorno),
      catchError(error => {
        //console.log(error)
        return throwError(error);
    }
    )
    );
  }

  checaSeGuestJaAvaliouFilmeOuTvserie(api_rated_type: string, movie_or_tv_serie_id: number | undefined, guest_session_id: string | null){
    var aux_guest_session_id = "";
    if(guest_session_id != null){
      aux_guest_session_id = guest_session_id;
    }

    return this.http.get<any>(this._url_connection_bd + this._port + "/infoRateApi/" + api_rated_type + "/" + movie_or_tv_serie_id + "/" + aux_guest_session_id).pipe(
      map(retorno => retorno),
      catchError(error => {
        //console.log(error)
        return throwError(error);
    }
    )
    );
  }
  


}
