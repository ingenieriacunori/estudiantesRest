import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Iestudiante } from '../interface/iestudiante';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {
  url: string = "http://localhost:3000/"

  constructor(
    private _http: HttpClient
  ) { }


  async getData() {
    return await this._http.get<Iestudiante[]>
      (this.url + "/estudiantes").toPromise();
  }

  getSaludo():string{
    return "Hola";
  }
}
