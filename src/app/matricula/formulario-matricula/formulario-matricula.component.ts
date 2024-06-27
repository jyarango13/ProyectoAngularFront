
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DataService } from '../../data.service';
import { Alumno } from '../alumno';
import { Curso } from '../curso';
import { Matricula } from '../matricula';

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
  matriculas: Matricula[] = [];

  //Para crear matricula
  matricula = {
    alumnoId: '',
    cursoId: '',
    creditos: 0,
    precioPorCredito: 50,
    montoAPagar: 0,
    estado: false
  };
  showForm = false;
  newMatricula: Matricula = new Matricula('0', { nombres: 'Yarango' }, { nombre: 'Frontes' }, 5, 50, 250, false);





  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.alumnos = this.dataService.getAlumnos();
    this.cursos = this.dataService.getCursos();
    this.matriculas = this.dataService.getMatriculas();
  }
  toggleForm(): void {
    this.showForm = !this.showForm;
  }

  onSubmit(): void {
    // console.log('Alumno ID:', this.matricula.alumnoId);
    // console.log('Curso ID:', this.matricula.cursoId);
    const alumno = this.alumnos.find(a => Number(a.id) === +this.matricula.alumnoId);
    const curso = this.cursos.find(c => Number(c.id) === +this.matricula.cursoId);
    if (alumno && curso) {
      const creditos = curso.creditos || 0;
      const montoAPagar = creditos * this.matricula.precioPorCredito;
      const nuevaMatricula = new Matricula(
        '0',
        alumno,
        curso,
        creditos,
        this.matricula.precioPorCredito,
        montoAPagar,
        this.matricula.estado
      );
      this.dataService.addMatricula(nuevaMatricula);
      this.matriculas = this.dataService.getMatriculas();
      console.log('Matrícula realizada:', nuevaMatricula);
      this.resetForm();
    }

    // this.dataService.addCurso(this.newCurso);
    // this.cursos = this.dataService.getCursos();  // Refresh the list after adding
    // this.newCurso = new Curso();
    // this.showForm = false;




  }
  private resetForm() {
    this.matricula = {
      alumnoId: '',
      cursoId: '',
      creditos: 0,
      precioPorCredito: 50,
      montoAPagar: 0,
      estado: false
    };
  }

  // addMatricula(): void {

  //   // const alumno = this.alumnos.find(a => Number(a.id) === +this.matriculas.alumnoId);
  //   // const curso = this.cursos.find(c => Number(c.id) === +this.matricula.cursoId);
  //   // if (alumno && curso) {
  //   //   const creditos = curso.creditos || 0;
  //   //   const montoAPagar = creditos * this.matricula.precioPorCredito;
  //   //   const newMatricula = new Matricula(
  //   //     '0',
  //   //     alumno,
  //   //     curso,
  //   //     creditos,
  //   //     this.matricula.precioPorCredito,
  //   //     montoAPagar,
  //   //     this.matricula.estado
  //   //   );
  //   //   this.dataService.addMatricula(newMatricula);
  //   //   console.log('Matrícula realizada:', newMatricula);
  //   //   this.resetForm();
  //   // }    



  //   this.dataService.addMatricula(this.newMatricula);
  //   this.matriculas = this.dataService.getMatriculas(); // Update the list after adding
  //   this.newMatricula = new Matricula('0',{nombres:'Yarango'},{nombre:'Frontes'},5,50,250,false);
  //   this.showForm = false;
  // }





}




//antiguo
// import { Component, OnInit } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common';

// import { DataService } from '../../data.service';
// import { Alumno } from '../alumno';
// import { Curso } from '../curso';
// @Component({
//   selector: 'app-formulario-matricula',
//   standalone: true,
//   imports: [CommonModule, FormsModule],
//   templateUrl: './formulario-matricula.component.html',
//   styleUrls: ['./formulario-matricula.component.css']
// })
// export class FormularioMatriculaComponent implements OnInit {
//   alumnos: Alumno[] = [];
//   cursos: Curso[] = [];
//   matricula = {
//     alumnoId: '',
//     cursoId: ''
//   };

//   constructor(private dataService: DataService) { }

//   ngOnInit(): void {
//     this.alumnos = this.dataService.getAlumnos();
//     this.cursos = this.dataService.getCursos();
//   }

//   onSubmit(): void {
//     console.log('Alumno ID:', this.matricula.alumnoId);
//     console.log('Curso ID:', this.matricula.cursoId);
//     // Aquí puedes agregar la lógica para matricular al alumno en el curso
//   }

// }










