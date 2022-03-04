/*Ejercicio 3
Gonzalo Agustín Cossa Div
DNI 45889664
UTN airlines nos pide desarrollar una app para registrar el ingreso de pasajeros a distintos vuelos, 
se le pide a los pasajeros: nombre, edad (validar 13-85), cantidad de asientos que desea reservar 
(validar minimo 1 maximo 5 asientos), cantidad de kilómetros del viaje (validar 3000 kilómetros el 
mínimo - 18000 kilómetros máximo) y el destino (validar río de janeiro, italia, cancún, japón), el 
precio por asiento es 1500 pesos, informar:
A) La cantidad total asientos ocupados
Dependiendo el destino seleccionado se aplican aumentos o descuentos según corresponda:
japón 40% de aumento
rio 10% descuento
italia 25% aumento
cancún 5% descuento
Según la cantidad de asientos reservados se aplican ciertos descuentos sobre el PRECIO FINAL:
1 pasajero 10% descuento
2-3 pasajeros 15% descuento
4-5 pasajeros 20% descuento
B) La recaudación total del vuelo
*/
function mostrar() {
    var nombre;
    var edad;
    var cantidadAsientos;
    var cantidadKmViaje;
    var destino;
    var precio;

    var precioSinDescuento;
    var precioFinal;
    var porcentaje;
    var recaudacionFinal;
    var cantidadAsientosOcupados;

    var respuesta;

    precio = 1500;
    recaudacionFinal = 0;
    cantidadAsientosOcupados = 0;
    respuesta = "si";

    while (respuesta == "si") {
        nombre = prompt("Ingrese su nombre.");
        while (!nombre) {
            nombre = prompt("Ingrese un nombre valido.");
        }

        edad = prompt("Ingrese su edad. 13 - 85");
        edad = parseInt(edad);
        while (edad < 13 || edad > 85 || !edad) {
            edad = prompt("Ingrese una edad valida.");
        }

        cantidadAsientos = prompt("Ingrese la cantidad de asientos. 0 - 5");
        cantidadAsientos = parseInt(cantidadAsientos);
        while (cantidadAsientos < 0 || cantidadAsientos > 5 || !cantidadAsientos) {
            cantidadAsientos = prompt("Ingrese una cantidad valida");
        }

        cantidadKmViaje = prompt("Ingrese la cantidad de km del viaje. 3000 - 18000");
        cantidadKmViaje = parseInt(cantidadKmViaje);
        while (cantidadKmViaje < 3000 || cantidadKmViaje > 18000 || !cantidadKmViaje) {
            cantidadKmViaje = prompt("Ingrese una cantidad valida");
        }

        destino = prompt("Ingrese su destino.");
        while (destino != "rio de janeiro" && destino != "italia" && destino != "cancun" && destino != "japon") {
            destino = prompt("Error, ingrese un destino valido. rio de janeiro, italia, cancún, japon.");
        }

        switch (destino) {
            case "rio de janeiro":
                porcentaje = 0.9;
                break;

            case "italia":
                porcentaje = 1.75;
                break;

            case "cancun":
                porcentaje = 0.95;
                break;

            default:
                porcentaje = 1.4;
                break;
        }

        switch (cantidadAsientos) {
            case 1:
                porcentaje = 0.9
                break;

            case 2:
            case 3:
                porcentaje = 0, 85
                break;

            case 4:
            case 5:
                porcentaje = 0.8
                break;

            default:
                break;
        }
        cantidadAsientosOcupados += cantidadAsientos;

        precioSinDescuento = cantidadAsientos * precio;
        precioFinal = precioSinDescuento * porcentaje;
        recaudacionFinal += precioFinal;

        respuesta = prompt("Quieres seguir ingresando datos?", "si");
    }

    document.write("<br> La cantidad de asientos ocupados es: $" + cantidadAsientosOcupados)
    document.write("<br> La recuadación total del vuelo es: $" + recaudacionFinal)
}

