export interface IPersona{
    nombre: string;
    edad: number;
    fechaNacimiento: Date;
}

export class Persona implements IPersona{
    nombre: string;
    edad: number;
    fechaNacimiento: Date;

    constructor() {
        
    }
}
