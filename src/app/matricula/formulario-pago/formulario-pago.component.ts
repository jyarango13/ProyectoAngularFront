import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Curso } from '../curso';
import { CommonModule } from '@angular/common';
import { Alumno } from '../alumno';

@Component({
  selector: 'app-formulario-pago',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario-pago.component.html',
  styleUrl: './formulario-pago.component.css'
})
export class FormularioPagoComponent {
 
  modelo = new Alumno("cod", "Jose","Apellido",'2024/01/12','Los girasoles 325', 'correo','+52 989898');
  enviado = false;

  ngOnInit(): void { }

  onSubmit() {
    this.enviado = true;
  }
}


// <!-- public id?: string,
// public nombres?: string,
// public apellidos?: string,
// public fecNac?:string,
// public direccion?: string,
// public correo?: string,
// public telefono?: string,
//Estructura de Alumno (id, nombres, apellidos, fecha de nacimiento, 
//dirección, correo, teléfono).  Cantidad para la lista: 15. -->
