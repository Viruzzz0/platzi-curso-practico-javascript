// const examenParcial = 2;
// const examenFinal= 4;

// function calculaPonderado(nota1, nota2, nota3, notaFinal) {
//     const sumaPonderada = (nota1 * examenParcial) + (nota2 * examenParcial) + (nota3 * examenParcial) + (notaFinal * examenFinal);

//     const result = sumaPonderada / 10;
//     console.log(result);
// }

const examenParcial = 2;
const examenFinal = 4;

function calculaPonderado(notasParcial, notaFinal) {
    // Se optiene la nota maxima posible segun la catidad de parciales
    const canditadParcial = notasParcial.length;
    const notaMax = (canditadParcial * examenParcial) + examenFinal;

    // Sumamos el total de las notas parciales mas la nota final
    const notasParcialOpacion1 = notasParcial.map(function (a) {
        return a * examenParcial;
    })

    const sumaTotal = notasParcialOpacion1.reduce((ele1, ele2) => ele1 + ele2, 0) + (notaFinal * examenFinal);

    // Division de la suma de las notas entre la nota maxima
    const result = sumaTotal / notaMax;
    return result
}