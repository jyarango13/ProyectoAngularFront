import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Curso } from '../../matricula/curso';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-lista-cursos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css']
})
export class ListaCursosComponent implements OnInit {
  cursos: Curso[] = [];
  categorias: string[] = ['software', 'gestión', 'otros'];
  creditos: number[] = [0, 1, 2, 3, 4, 5];
  showForm = false;
  newCurso: Curso = new Curso();

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.cursos = this.dataService.getCursos();
  }

  toggleForm(): void {
    this.showForm = !this.showForm;
  }

  addCurso(): void {
    this.dataService.addCurso(this.newCurso);
    this.cursos = this.dataService.getCursos();  // Refresh the list after adding
    this.newCurso = new Curso();
    this.showForm = false;
  }
}

//nuevo

