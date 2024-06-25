
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Alumno } from '../../matricula/alumno';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-lista-alumnos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})


export class ListaAlumnosComponent implements OnInit {
  // //alumnos: Alumno[] =[];
  // alumnos = this.dataService.getAlumnos();;
  // showForm = false;
  // newAlumno: Alumno = new Alumno();

  // constructor(private dataService: DataService) { }

  // ngOnInit(): void {
  //   this.alumnos = this.dataService.getAlumnos();
  // }

  // toggleForm(): void {
  //   this.showForm = !this.showForm;
  // }


  alumnos: Alumno[] = [];
  showForm = false;
  newAlumno: Alumno = new Alumno();

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.alumnos = this.dataService.getAlumnos();
  }

  toggleForm(): void {
    this.showForm = !this.showForm;
  }
  addAlumno(): void {
    this.dataService.addAlumno(this.newAlumno);
    this.alumnos = this.dataService.getAlumnos(); // Update the list after adding
    this.newAlumno = new Alumno();
    this.showForm = false;
  }

}


