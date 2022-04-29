// Helpers
function esPar(numero) {
    return (numero % 2 === 0);
}

function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcomulado = 0, nuevoElemento) {
            return valorAcomulado + nuevoElemento;
        }
    )
    const promedioLista = sumaLista / lista.length;
    return promedioLista
}

// Calculkladora de mediana
function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personaMitad1, personaMitad2]);
        return mediana;

    } else {
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}

// Mediana general
const salariosArg = argentina.map(
    function (persona) {
        return persona.salary;
    }
);

const salariosArgSorted = salariosArg.sort(
    function (salaryA, salaryB) {
        return salaryA - salaryB;
    }
);

const medianaGeneralArg = medianaSalarios(salariosArgSorted);

// Mediana del top 10%
const spliceStart = (salariosArgSorted.length * 90) / 100;
const spliceCount = salariosArgSorted.length - spliceStart;

const salariosArgTop10 = salariosArgSorted.slice(
    spliceStart, salariosArgSorted.length
);

const medianaTop10Arg = medianaSalarios(salariosArgTop10);

console.log({
    medianaGeneralArg,
    medianaTop10Arg,
});


// Crear una funcion que aumento el salario por porcentaje

function calcularPorcentaje(descuento) {
    const decimalesDescuento = descuento / 100;

    return decimalesDescuento
}

function calculaSalarioConIva(salarioArg, porcentaje) {
    const iva = calcularPorcentaje(porcentaje);
    const salariosArgConIva = salarioArg * (1 - iva);

    return salariosArgConIva;
}

// Busqueda en el array de la persona

function finDeMes(personaName) {
    const name = personaName;

    const p1 = argentina.find(function (persona) {
        if (persona.name === name) {
            return 1
        }
    })
    const salarioConIva = calculaSalarioConIva(p1.salary, 10)
    return salarioConIva
}