type Dni = number

interface Persona {
    altura: number;
    edad: number;
    nombre: string;
    apellido: string;
    dni?: Dni;
}

const persona: Persona = {
    altura: 1.69,
    edad: 25,
    nombre: 'Daniel',
    apellido: 'Acevedo',
}