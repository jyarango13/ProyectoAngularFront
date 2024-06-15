
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lista-alumnos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent implements OnInit {
  alumnos = [
    { id: 1, nombres: 'Juan', apellidos: 'Perez', fechaNacimiento: '1990-01-01', direccion: 'Calle 123', correo: 'juan@example.com', telefono: '123456789' },
    { id: 2, nombres: 'Maria', apellidos: 'Lopez', fechaNacimiento: '1992-02-02', direccion: 'Avenida 456', correo: 'maria@example.com', telefono: '987654321' }
    // Agrega más alumnos según sea necesario
  ];

  showForm = false;

  newAlumno = {
    id: 0,
    nombres: '',
    apellidos: '',
    fechaNacimiento: '',
    direccion: '',
    correo: '',
    telefono: ''
  };

  constructor() { }

  ngOnInit(): void { }

  toggleForm(): void {
    this.showForm = !this.showForm;
  }

  addAlumno(): void {
    const newId = this.alumnos.length > 0 ? Math.max(...this.alumnos.map(alumno => alumno.id)) + 1 : 1;
    this.newAlumno.id = newId;
    this.alumnos.push({ ...this.newAlumno });
    this.resetForm();
  }

  resetForm(): void {
    this.newAlumno = {
      id: 0,
      nombres: '',
      apellidos: '',
      fechaNacimiento: '',
      direccion: '',
      correo: '',
      telefono: ''
    };
    this.showForm = false;
  }
}


