/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.

Gonzalo Cossa TP N°2

*/

function Rectangulo() {
    var largoDelTerreno;
    var anchoDelTerreno;
    var cantidadDeAlambre;
    var perimetroDelTerreno;
    var vueltasDeAlambre;

    largoDelTerreno = document.getElementById("txtIdLargo").value;
    anchoDelTerreno = document.getElementById("txtIdAncho").value;

    largoDelTerreno = parseFloat(largoDelTerreno);
    anchoDelTerreno = parseFloat(anchoDelTerreno);

    vueltasDeAlambre = 3
    perimetroDelTerreno = (2 * largoDelTerreno) + (2 * anchoDelTerreno);
    cantidadDeAlambre = perimetroDelTerreno * cantidadDeAlambre;

    alert("La cantidad de alambre a comprar es " + cantidadDeAlambre);
}
function Circulo() {
    var vantidadDeAlambre
    var radioDelTerreno


}
function Materiales() {

}