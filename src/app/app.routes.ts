import { Routes } from '@angular/router';
import { ListaCursosComponent } from './gestion/lista-cursos/lista-cursos.component';
import { ListaAlumnosComponent } from './gestion/lista-alumnos/lista-alumnos.component';
import { FormularioMatriculaComponent } from './matricula/formulario-matricula/formulario-matricula.component';
import { FormularioPagoComponent } from './matricula/formulario-pago/formulario-pago.component';
import { CarruselAppComponent } from './utiles/carrusel-app/carrusel-app.component';

export const routes: Routes = [

    { path: '', component:CarruselAppComponent},
    { path: 'cursos', component: ListaCursosComponent },
    { path: 'alumnos', component: ListaAlumnosComponent },
    //Modulo matricula
    { path: 'matricula', component: FormularioMatriculaComponent },

    { path: 'pago', component: FormularioPagoComponent }
];
