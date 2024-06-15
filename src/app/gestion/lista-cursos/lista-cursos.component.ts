import { CommonModule } from '@angular/common';
import { Component, OnInit} from '@angular/core'; //OnInit solo es el diferente

@Component({
  selector: 'app-lista-cursos',
  standalone: true,
  imports: [CommonModule], //NgForm para que funcione
  templateUrl: './lista-cursos.component.html',
  styleUrl: './lista-cursos.component.css'
})
export class ListaCursosComponent implements OnInit{
  cursos = [
    { id: 1, nombre: 'Angular', horas: 10, creditos: 3, categoria: 'software' },
    { id: 2, nombre: 'React', horas: 12, creditos: 4, categoria: 'software' }
    // Agrega más cursos según sea necesario
  ];

  constructor() { }

  ngOnInit(): void {
  }

  addCurso(): void {
    // Lógica para agregar un nuevo curso
  }
}



