import { Component, OnInit } from '@angular/core';
import { Iestudiante } from 'src/app/shared/interface/iestudiante';
import { EstudianteService } from 'src/app/shared/servicios/estudiante.service';

@Component({
  selector: 'app-listar-estudiante',
  templateUrl: './listar-estudiante.component.html',
  styleUrls: ['./listar-estudiante.component.css']
})
export class ListarEstudianteComponent implements OnInit {
  //Creando un arreglo del tipo Iestudiante
  datos: Iestudiante[] = [];

  constructor(
    //FORMA CORRECTDA
    private _servicio: EstudianteService
  ) { }

  ngOnInit(): void {
    this.getAllData();
  }

  async getAllData() {
    try {
      this.datos = await this._servicio.getData();
      //alert('Registros obtenidos exitosamente');
    } catch (error) {
      alert(error.value)
    }
  }

}
