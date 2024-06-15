import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-alumnos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-alumnos.component.html',
  styleUrl: './lista-alumnos.component.css'
})
export class ListaAlumnosComponent implements OnInit {
  alumnos = [
    { id: 1, nombres: 'Juan', apellidos: 'Perez', fechaNacimiento: '1990-01-01', direccion: 'Calle 123', correo: 'juan@example.com', telefono: '123456789' },
    { id: 2, nombres: 'Maria', apellidos: 'Lopez', fechaNacimiento: '1992-02-02', direccion: 'Avenida 456', correo: 'maria@example.com', telefono: '987654321' }
    // Agrega más alumnos según sea necesario
  ];

  constructor() { }

  ngOnInit(): void {
  }

  addAlumno(): void {
    // Lógica para agregar un nuevo alumno
  }
}



