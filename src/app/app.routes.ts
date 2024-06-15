import { Routes } from '@angular/router';
import { ListaCursosComponent } from './gestion/lista-cursos/lista-cursos.component';

export const routes: Routes = [
    { path: '', redirectTo:'/home',pathMatch:'full' },
    { path: 'cursos', component: ListaCursosComponent }
];
