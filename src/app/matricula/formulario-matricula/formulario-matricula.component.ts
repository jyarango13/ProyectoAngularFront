// import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { Curso } from '../curso';
// import { CommonModule } from '@angular/common';
// import { ListaCursosComponent } from '../../gestion/lista-cursos/lista-cursos.component';
// @Component({
//     selector: 'app-formulario-matricula',
//     standalone: true,
//     templateUrl: './formulario-matricula.component.html',
//     styleUrls: ['./formulario-matricula.component.css'],
//     imports: [CommonModule, FormsModule]
// })
// export class FormularioMatriculaComponent{
//   creditos = [0, 1, 2, 3, 4, 5];
//   categorias = ["software", "gestión", "otros"];
//   modelo = new Curso("Hola", "Jose",3, this.creditos[3],this.categorias[0]);
//   enviado = false;

//   ngOnInit(): void { }

//   onSubmit() {
//     this.enviado = true;
//   }
// }

import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DataService } from '../../data.service';
import { Alumno } from '../alumno';
import { Curso } from '../curso';
@Component({
  selector: 'app-formulario-matricula',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario-matricula.component.html',
  styleUrls: ['./formulario-matricula.component.css']
})
export class FormularioMatriculaComponent implements OnInit {
  alumnos: Alumno[] = [];
  cursos: Curso[] = [];
  matricula = {
    alumnoId: '',
    cursoId: ''
  };

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.alumnos = this.dataService.getAlumnos();
    this.cursos = this.dataService.getCursos();
  }

  onSubmit(): void {
    console.log('Alumno ID:', this.matricula.alumnoId);
    console.log('Curso ID:', this.matricula.cursoId);
    // Aquí puedes agregar la lógica para matricular al alumno en el curso
  }

}


