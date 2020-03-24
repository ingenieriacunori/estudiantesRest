import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PruebaService {

  constructor() { }

  saludo(): string {
    return "Hola mundo!!!";
  }
}
