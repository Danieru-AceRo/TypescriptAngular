type sumaParameter =  string | number
type sumaReturnType = string | number 

function Suma(num1: sumaParameter, num2: sumaParameter) {
    return String(num1) + num2
}

interface one {
    prop1: number
};

interface two {
    prop2: number
}

type Mix = one | two

const mix: Mix  = {
    prop1: 2,
    prop2: 4
}