import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core'; //OnInit solo es el diferente
import { FormsModule } from '@angular/forms';
import { Curso } from '../../matricula/curso';

@Component({
  selector: 'app-lista-cursos',
  standalone: true,
  imports: [CommonModule, FormsModule], //NgForm para que funcione
  templateUrl: './lista-cursos.component.html',
  styleUrl: './lista-cursos.component.css'
})
export class ListaCursosComponent implements OnInit {
  cursos = [
    { id: 1, nombre: 'Angular', horas: 10, creditos: 3, categoria: 'software' },
    { id: 2, nombre: 'React', horas: 12, creditos: 4, categoria: 'software' }
    // Agrega más cursos según sea necesario
  ];

  showForm = false;

  newCurso = {
    id: 0,
    nombre: '',
    horas: 0,
    creditos: 0,
    categoria: '',
  };

  constructor() { }

  ngOnInit(): void { }

  toggleForm(): void {
    this.showForm = !this.showForm;
  }

  addCurso(): void {
    const newId = this.cursos.length > 0 ? Math.max(...this.cursos.map(curso => curso.id)) + 1 : 1;
    this.newCurso.id = newId;
    this.cursos.push({ ...this.newCurso });
    this.resetForm();
  }

  resetForm(): void {
    this.newCurso = {
      id: 0,
      nombre: '',
      horas: 0,
      creditos: 0,
      categoria: '',
    };
    this.showForm = false;
  }
}


//nuevo




