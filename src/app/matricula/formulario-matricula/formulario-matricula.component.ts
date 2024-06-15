import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Curso } from '../curso';
import { CommonModule } from '@angular/common';
@Component({
    selector: 'app-formulario-matricula',
    standalone: true,
    templateUrl: './formulario-matricula.component.html',
    styleUrls: ['./formulario-matricula.component.css'],
    imports: [CommonModule, FormsModule]
})
export class FormularioMatriculaComponent{
  creditos = [0, 1, 2, 3, 4, 5];
  categorias = ["software", "gestión", "otros"];
  modelo = new Curso("Hola", "Jose",3, this.creditos[3],this.categorias[0]);
  enviado = false;

  ngOnInit(): void { }

  onSubmit() {
    this.enviado = true;
  }
}

// public id?: string,
// public nombre?: string,
// public horas?: number,
// public creditos?: number,
// public categoria?: string,


