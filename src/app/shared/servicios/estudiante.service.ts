import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Iestudiante } from '../interface/iestudiante';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {
  url: string = "http://localhost:3000/"

  constructor(
    private _http: HttpClient
  ) { }

  /*========================================
  CRUD Methods for consuming RESTful API
=========================================*/

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  async getData() {
    return await this._http.get<Iestudiante[]>
      (this.url + "/estudiantes").toPromise();
  }

  async postData(objeto: Iestudiante) {
    await this._http.post(this.url + "/estudiantes", JSON.stringify(objeto), this.httpOptions).toPromise();
  }
}
