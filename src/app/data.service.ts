

import { Injectable } from '@angular/core';
import { Alumno } from './matricula/alumno';
import { Curso } from './matricula/curso';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private ALUMNOS_KEY = 'alumnos';
  private CURSOS_KEY = 'cursos';

  constructor() {
    this.loadInitialData();
  }

  private loadInitialData() {
    if (!localStorage.getItem(this.ALUMNOS_KEY)) {
      const initialAlumnos: Alumno[] = [
        { id: '1', nombres: 'Juan', apellidos: 'Perez', fecNac: '1990-01-01', direccion: 'Calle 123', correo: 'juan@example.com', telefono: '123456789' },
        { id: '2', nombres: 'Maria', apellidos: 'Lopez', fecNac: '1992-02-02', direccion: 'Avenida 456', correo: 'maria@example.com', telefono: '987654321' }
      ];
      localStorage.setItem(this.ALUMNOS_KEY, JSON.stringify(initialAlumnos));
    }

    if (!localStorage.getItem(this.CURSOS_KEY)) {
      const initialCursos: Curso[] = [
        { id: '1', nombre: 'Curso de Angular', horas: 10, creditos: 3, categorias: 'Software' },
        { id: '2', nombre: 'Curso de Gestión', horas: 8, creditos: 2, categorias: 'Gestión' }
      ];
      localStorage.setItem(this.CURSOS_KEY, JSON.stringify(initialCursos));
    }
  }

  getAlumnos(): Alumno[] {
    return JSON.parse(localStorage.getItem(this.ALUMNOS_KEY) || '[]');
  }

  getCursos(): Curso[] {
    return JSON.parse(localStorage.getItem(this.CURSOS_KEY) || '[]');
  }

  addAlumno(alumno: Alumno): void {
    const alumnos = this.getAlumnos();
    const newId = alumnos.length > 0 ? Math.max(...alumnos.map(a => Number(a.id))) + 1 : 1;
    alumno.id = String(newId);
    alumnos.push(alumno);
    localStorage.setItem(this.ALUMNOS_KEY, JSON.stringify(alumnos));
  }




addCurso(curso: Curso): void {
  const cursos = this.getCursos();
  const newId = cursos.length > 0 ? Math.max(...cursos.map(c => Number(c.id))) + 1 : 1;
  curso.id = String(newId);
  cursos.push(curso);
  localStorage.setItem(this.CURSOS_KEY, JSON.stringify(cursos));

}
}





// export class DataService {

//   addAlumno(alumno: Alumno): void {
//     const alumnos = this.getAlumnos();
//     const newId = alumnos.length > 0 ? Math.max(...alumnos.map(a => a.id)) + 1 : 1;
//     alumno.id = newId;
//     alumnos.push(alumno);
//     localStorage.setItem(this.ALUMNOS_KEY, JSON.stringify(alumnos));
//   }

//   addCurso(curso: Curso): void {
//     const cursos = this.getCursos();
//     const newId = cursos.length > 0 ? Math.max(...cursos.map(c => c.id)) + 1 : 1;
//     curso.id = newId;
//     cursos.push(curso);
//     localStorage.setItem(this.CURSOS_KEY, JSON.stringify(cursos));
//   }
// }
