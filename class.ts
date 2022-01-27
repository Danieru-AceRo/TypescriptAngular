class Transporte {
    private velocidad: number;
    private formaDeMovilidad: string;
    constructor(velocidad: number, formaDeMovilidad: string) {
        this.velocidad = velocidad;
        this.formaDeMovilidad = formaDeMovilidad
    }

    
    getVelocidad() {
        return this.velocidad;
    }

    setVelocidad(velocidad: number ) {
        this.velocidad = velocidad
    }

    getFormaDeMovilidad() {
        return this.formaDeMovilidad;
    }

    setFormaDeMovilidad(formaDeMovilidad: string ) {
        this.formaDeMovilidad = formaDeMovilidad
    }
    
}

const trasporte = new Transporte(9, 'suelo');

class Auto extends Transporte {
    private cantidadDepuertas: number;

    constructor(velocidad: number, formaDeMovilidad: string, cantidadDepuertas: number) {
        super(velocidad, formaDeMovilidad);
        this.cantidadDepuertas = cantidadDepuertas
    }

    getVelocidad() {
        return super.getVelocidad() + 10;
    }


    getCantidadDepuertas() {
        return this.cantidadDepuertas;
    }

    setCantidadDepuertas(cantidadDepuertas: number ) {
        this.cantidadDepuertas = cantidadDepuertas
    }
}

const auto = new Auto(4,'suelo', 5);