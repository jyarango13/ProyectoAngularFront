import { Routes } from '@angular/router';
import { ListaCursosComponent } from './gestion/lista-cursos/lista-cursos.component';
import { ListaAlumnosComponent } from './gestion/lista-alumnos/lista-alumnos.component';
import { FormularioMatriculaComponent } from './matricula/formulario-matricula/formulario-matricula.component';
import { FormularioPagoComponent } from './matricula/formulario-pago/formulario-pago.component';

export const routes: Routes = [
    { path: '', redirectTo:'/home',pathMatch:'full' },
    { path: 'cursos', component: ListaCursosComponent },
    { path: 'alumnos', component: ListaAlumnosComponent },
    //Modulo matricula
    { path: 'matricula', component: FormularioMatriculaComponent },
    { path: 'pago', component: FormularioPagoComponent },
];
