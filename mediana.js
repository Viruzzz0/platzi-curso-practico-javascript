
function calcularMediaAritmetica(lista) {

    const sumaLista = lista.reduce(
        function (valorAcomulado = 0, nuevoElemento) {
            return valorAcomulado + nuevoElemento;
        }
    )
    const promedioLista = sumaLista / lista.length;
    return promedioLista
}

// recibe un array para ver si es par o no 
function esPar(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}


function calcularMediana(arreglo) {
    // ordena de menor mayor
    const comparacion = (a, b) => a + b;
    arreglo.sort(comparacion);


    const mitadLista = parseInt(arreglo.length / 2);

    let mediana;

    if (esPar(arreglo.length)) {
        const elemento1 = arreglo[mitadLista - 1]
        const elemento2 = arreglo[mitadLista]

        const promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2])

        mediana = promedioElemento1y2;
        return mediana;

    } else {
        mediana = arreglo[mitadLista];
        return mediana;
    }
}

const lista1 = [
    100,
    200,
    500,
    40000000
];

calcularMediana(lista1)















//


// const nume = [5,2,3,8]

// nume.sort(comparacion)

// console.log(nume);

