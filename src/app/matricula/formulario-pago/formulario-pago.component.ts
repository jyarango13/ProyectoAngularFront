import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../data.service';
import { Matricula } from '../matricula';

@Component({
  selector: 'app-formulario-pago',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './formulario-pago.component.html',
  styleUrls: ['./formulario-pago.component.css']
})
export class FormularioPagoComponent implements OnInit {
  matriculas: Matricula[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.matriculas = this.dataService.getMatriculas();
  }

  realizarPago(matricula: Matricula): void {
    matricula.estado = true;
    this.dataService.updateMatricula(matricula);
  }
}


