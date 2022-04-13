function calculaPrecioConDescuento(precio, descuento) {
    const porcentajePrecioCondescunto = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioCondescunto) / 100;
    
    return precioConDescuento;
}

function verificaCupon(){
    const selectCupo = document.getElementById("cupons");
    const valueCupo = parseInt(selectCupo.value);

    switch (valueCupo) {
        case 20:
          return 20
          break;
        case 15:
            return 15
          break;
        case 10:
            return 10
          break;
    }
}

function onClickButtonPriceDiscount() {
    const inputPrince = document.getElementById("InputPrince");
    const princeValue = inputPrince.value
    
    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;

    const precioConDescuento = calculaPrecioConDescuento(princeValue, discountValue);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
}