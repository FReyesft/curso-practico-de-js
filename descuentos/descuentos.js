function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    
    const precioNuevo = precioConDescuento;
    return precioNuevo;
}

var cuponesDescuento = [
    "FREYES",
    "FREYESFT",
    "BAGUIRA",
    "PEDRO"
];

function calcularDescuento(){
    var inputPrice = document.getElementById("input-price");
    var priceValue = inputPrice.value;

    var inputDiscount = document.getElementById("input-discount").value;
    const calculo = document.getElementById("descuento-calculado");
    switch (inputDiscount) {
        case cuponesDescuento[0]:
            inputDiscount = 30;
            break;
        case cuponesDescuento[1]:
            inputDiscount = 60;
            break;
        case cuponesDescuento[2]:
            inputDiscount = 10;
            break;
        case cuponesDescuento[3]:
            inputDiscount = 5;
            break;
        default:
            break;
    }
    const precioConDescuento = calcularPrecioConDescuento(priceValue, inputDiscount);
    calculo.innerText = `El precio con descuento es de: $${precioConDescuento}`;
    console.log(priceValue, inputDiscount);
}