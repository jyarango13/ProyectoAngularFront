export class Curso{
    constructor (
        public id?: string,
        public nombre?: string,
        public horas?: number,
        public creditos?: number,
        public categoria?: string,

    
    ){}
}

//horas [de 1 a 24], créditos[de 0 a 5], 
//categoría[software, gestión, otros]). 