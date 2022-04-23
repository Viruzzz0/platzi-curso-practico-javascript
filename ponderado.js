const examenParcial = 2;
const examenFinal= 4;

function calculaPonderado(nota1, nota2, nota3, notaFinal) {
    const sumaPonderada = (nota1 * examenParcial) + (nota2 * examenParcial) + (nota3 * examenParcial) + (notaFinal * examenFinal);

    const result = sumaPonderada / 10;
    console.log(result);
}