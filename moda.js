const lista1 = [
    1,
    2,
    9,
    9,
    3,
    1,
    3,
    3,
    // 4,
    // 2,
    // 2,
    // 2,
    // 1
];



function moda(aray) {
    
    const lista1Count = {};
    
    aray.map(
        function (elemento){
            if (lista1Count[elemento]) {
                lista1Count[elemento] += 1;
            }else{
                lista1Count[elemento] = 1;
            }
        }
    );
    
    const lista1Array = Object.entries(lista1Count).sort(
        function(elementA, elementB){
            return elementA[1] - elementB[1];
        }
    )
    
    const moda = lista1Array[lista1Array.length - 1]
    console.log(moda);
}