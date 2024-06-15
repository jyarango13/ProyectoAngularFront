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
  modelo = new Curso("Hola", "1", this.creditos[3]);
  enviado = false;

  ngOnInit(): void { }

  onSubmit() {
    this.enviado = true;
  }
}


