import { Component } from '@angular/core';
import { RouterOutlet,Router } from '@angular/router';
import { CabeceraAppComponent } from './utiles/cabecera-app/cabecera-app.component';
import { PieAppComponent } from './utiles/pie-app/pie-app.component';
import { CarruselAppComponent } from './utiles/carrusel-app/carrusel-app.component';
import { FormularioMatriculaComponent } from './matricula/formulario-matricula/formulario-matricula.component';
import { ListaAlumnosComponent } from "./gestion/lista-alumnos/lista-alumnos.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, CabeceraAppComponent, PieAppComponent, CarruselAppComponent, FormularioMatriculaComponent, ListaAlumnosComponent]
})
export class AppComponent {
  title = 'cjavapc-app';
  
}

