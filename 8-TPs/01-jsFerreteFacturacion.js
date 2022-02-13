/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).

Gonzalo Cossa TP N° 1 
Div B
*/
function Sumar() { 
var preciouno;
var preciodos;
var preciotres;
var resultado;

preciouno = document.getElementById("txtIdPrecioUno").value;
preciouno = parseInt(preciouno);

preciodos= document.getElementById("txtIdPrecioDos").value;
preciodos = parseInt(preciodos);

preciotres = document.getElementById("txtIdPrecioTres").value;
preciotres = parseInt(preciotres);

resultado = preciouno + preciodos + preciotres;

alert(resultado);

}
    
function Promedio() {

var preciouno;
var preciodos;
var preciotres;
var resultado;

preciouno = document.getElementById("txtIdPrecioUno").value;
preciouno = parseInt(preciouno);

preciodos= document.getElementById("txtIdPrecioDos").value;
preciodos = parseInt(preciodos);

preciotres = document.getElementById("txtIdPrecioTres").value;
preciotres = parseInt(preciotres);

resultado = (preciouno + preciodos + preciotres) / 3;

alert(resultado);

}
    
function PrecioFinal() {
    var preciouno;
    var preciodos;
    var preciotres;
    var resultado;
    
    preciouno = document.getElementById("txtIdPrecioUno").value;
    preciouno = parseInt(preciouno);
    
    preciodos= document.getElementById("txtIdPrecioDos").value;
    preciodos = parseInt(preciodos);
    
    preciotres = document.getElementById("txtIdPrecioTres").value;
    preciotres = parseInt(preciotres);
    
    resultado = (preciouno + preciodos + preciotres) * 0.21;
    
    alert(resultado);

}