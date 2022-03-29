import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

interface Alumno {
  nombre: string;
  calificacion: number;
}

interface Dato {
  valor: number;
  fecha: Date;
}

@Component({
  selector: 'app-listview',
  templateUrl: './listview.component.html',
  styleUrls: ['./listview.component.css']
})
export class ListviewComponent implements OnInit {

  constructor() { }

  tamanoActual: string = "fs-4";
  nvoDato: number = 0;
  bufferDatos: Dato[] = [];
  textoDatos: String = "";

  alumnos: any[] = [
    { "nombre": "Juan", "calificacion": 9 },
    { "nombre": "Pedro", "calificacion": 8 },
    { "nombre": "Claudio", "calificacion": 5 },
    { "nombre": "Alejandro", "calificacion": 10 }
  ];


  ngOnInit(): void {
    console.log("Iniciado..");
  }

  PeqPresionado() {
    this.tamanoActual = 'fs-6';
    console.log("Peq Presionado");

  }

  MedPresionado() {
    this.tamanoActual = 'fs-5';
    console.log("Med Presionado");
  }

  GdePresionado() {
    this.tamanoActual = 'fs-4';
    console.log("Gde Presionado");
  }

  darDeBaja(alumno: Alumno) {
    this.alumnos = this.alumnos.filter(function (borrar) {
      return alumno.nombre != borrar.nombre;
    })
  }

  testDarDebaja() {
    this.darDeBaja(this.alumnos[2]);
  }

  AgregarDatoStream() {
    this.bufferDatos.push(
      {
        valor: this.nvoDato,
        fecha: new Date()
      });
  }

}
