function mostrar()
{
    var precio;
    var porcentaje;
    var precioFinal;

    precio = prompt("Ingrese un precio.");
    precio = parseInt(precio);

    porcentaje = prompt("Ingrese un porcentaje.");
    porcentaje  = parseInt(porcentaje);

    precioFinal = precio - (precio * porcentaje) / 100;

    document.getElementById("elPrecioFinal").value = precioFinal;
}
