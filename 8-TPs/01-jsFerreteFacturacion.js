/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).

Gonzalo Cossa TP Ejercicio 1 
Div B

*/
function Sumar() {
    var precio1
    var precio2
    var precio3
    var sumaTotal

    precio1 = document.getElementById("txtIdPrecioUno").value;
    precio2 = document.getElementById("txtIdPrecioDos").value;
    precio3 = document.getElementById("txtIdPrecioTres").value;

    precio1 = parseInt(precio1);
    precio2 = parseInt(precio2);
    precio3 = parseInt(precio3);

    sumaTotal = precio1 + precio2 + precio3;

    alert("La suma total es " + sumaTotal);

}
function Promedio() {
    var precio1
    var precio2
    var precio3
    var promedio

    precio1 = document.getElementById("txtIdPrecioUno").value;
    precio2 = document.getElementById("txtIdPrecioDos").value;
    precio3 = document.getElementById("txtIdPrecioTres").value;

    precio1 = parseInt(precio1);
    precio2 = parseInt(precio2);
    precio3 = parseInt(precio3);

    promedio = ((precio1 + precio2 + precio3) / 3);

    alert("El promedio es " + promedio);
}
function PrecioFinal() {
    var precio1;
    var precio2;
    var precio3;
    var porcentajeIva;
    var precioFinal;

    precio1 = document.getElementById("txtIdPrecioUno").value;
    precio2 = document.getElementById("txtIdPrecioDos").value;
    precio3 = document.getElementById("txtIdPrecioTres").value;

    porcentajeIva = 0.21;

    precio1 = parseInt(precio1);
    precio2 = parseInt(precio2);
    precio3 = parseInt(precio3);

    sumaPrecios = (precio1 + precio2 + precio3);
    precioFinal = sumaPrecios + (sumaPrecios * porcentajeIva);

    alert("El precio final es " + precioFinal);
}