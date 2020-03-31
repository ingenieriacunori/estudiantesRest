import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EstudianteService } from 'src/app/shared/servicios/estudiante.service';

@Component({
  selector: 'app-crear-estudiante',
  templateUrl: './crear-estudiante.component.html',
  styleUrls: ['./crear-estudiante.component.css']
})
export class CrearEstudianteComponent implements OnInit {

  datos: any;

  constructor(
    //Inyectando el FormBuilder
    private fb: FormBuilder,
    private _api: EstudianteService
  ) {
    this.datos = this.fb.group({
      nombreestudiante: ['', Validators.required],
      direccionestudiante: ['', Validators.required],
      carreraestudiante: ['', Validators.required]
    })

  }

  ngOnInit(): void {
  }

  nuevoRegistro(): void {
    //console.log(this.datos.valid);
    if (this.datos.valid) {
      try {
        this._api.postData(this.datos.value);
        alert('Almacenado');
      } catch (e) {

      }
    }
  }

}
