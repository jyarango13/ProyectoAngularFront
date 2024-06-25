import { Alumno } from "./alumno";
import { Curso } from "./curso";

export class Matricula {
    constructor(
      public id: string,
      public alumno: Alumno,
      public curso: Curso,
      public creditos: number,
      public precioPorCredito: number,
      public montoAPagar: number,
      public estado: boolean
    ) {}
  }