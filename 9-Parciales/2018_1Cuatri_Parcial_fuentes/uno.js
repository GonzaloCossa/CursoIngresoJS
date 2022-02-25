
function mostrar()
{
    var anchoRectangulo;
    var largoRectangulo;
    var perimetro;

    anchoRectangulo = prompt("Ingrese el ancho del rectángulo.");
    largoRectangulo = prompt("Ingrese el largo del rectángulo.");

    anchoRectangulo = parseInt(anchoRectangulo);
    largoRectangulo = parseInt(largoRectangulo);

    perimetro = anchoRectangulo * 2 + largoRectangulo * 2;

    alert("El perimetro del rectangulo es: " + perimetro);

}
