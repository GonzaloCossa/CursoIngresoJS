/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).

Gonzalo Cossa TP Ejercicio 1 
Div B
*/
function Sumar() {
    var precioUno
    var precioDos
    var precioTres
    var sumaTotal

    precioUno = document.getElementById("txtIdPrecioUno").value;
    precioDos = document.getElementById("txtIdPrecioDos").value;
    precioTres = document.getElementById("txtIdPrecioTres").value;

    precioUno = parseInt(precioUno);
    precioDos = parseInt(precioDos);
    precioTres = parseInt(precioTres);

    sumaTotal = precioUno + precioDos + precioTres;

    alert("La suma total es " + sumaTotal);

}
function Promedio() {
    var precioUno
    var precioDos
    var precioTres
    var promedio

    precioUno = document.getElementById("txtIdPrecioUno").value;
    precioDos = document.getElementById("txtIdPrecioDos").value;
    precioTres = document.getElementById("txtIdPrecioTres").value;

    precioUno = parseInt(precioUno);
    precioDos = parseInt(precioDos);
    precioTres = parseInt(precioTres);

    promedio = ((precioUno + precioDos + precioTres) / 3);

    alert("El promedio es " + promedio);
}
function PrecioFinal() {
    var precioUno;
    var precioDos;
    var precioTres;
    var porcentajeIva;
    var precioFinal;

    precioUno = document.getElementById("txtIdPrecioUno").value;
    precioDos = document.getElementById("txtIdPrecioDos").value;
    precioTres = document.getElementById("txtIdPrecioTres").value;
    porcentajeIva = 0.21;

    precioUno = parseInt(precioUno);
    precioDos = parseInt(precioDos);
    precioTres = parseInt(precioTres);

    sumaPrecios = (precioUno + precioDos + precioTres);
    precioFinal = sumaPrecios + (sumaPrecios * porcentajeIva);

    alert("El precio final es " + precioFinal);
}