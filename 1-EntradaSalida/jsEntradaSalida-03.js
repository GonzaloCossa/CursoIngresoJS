/*Ejercicio 2
Gonzalo Agustín Cossa Div B
DNI 45889664
Un aficionado a las cartas coleccionables desea organizar su colección, 
para esto necesita ingresar en un programa:
nombre, tipo de carta (validar monstruo, arma, mágica) y su cantidad. Además deberá Especificar su rareza 
(validar común, rara, legendaria), precio (validar entre $250 y $5000). 
dejar ingresar hasta que el usuario quiera e informar lo siguiente:
La cantidad de cartas de cada tipo.
De las cartas raras la que menos precio tiene y su nombre
El valor de la colección entera
Informar el porcentaje de cartas según su rareza. (Sobre el total de cartas, no de ingresos)
*/

function mostrar() {

	var nombre;
	var tipoDeCarta;
	var cantidadCartas;
	var rareza;
	var precio;

	var totalCantidadMonstruo;
	var totalCantidadArma;
	var totalCantidadMagica;
	var totalCantidadComun;
	var totalCantidadRara;
	var totalCantidadLegendaria;
	var totalCantidadCartas;
	var valorEntero;

	var porcentajeComun;
	var porcentajeRara;
	var porcentajeLegendaria;

	var banderaCartaRara;
	var precioCartaRaraBarata;
	var nombreCartaRaraBarata;

	var contadorIngresos;
	var respuesta;

	totalCantidadMonstruo = 0;
	totalCantidadArma = 0;
	totalCantidadMagica = 0;
	totalCantidadComun = 0;
	totalCantidadRara = 0;
	totalCantidadLegendaria = 0;
	totalCantidadCartas = 0;
	valorEntero = 0;

	banderaCartaRara = false;

	contadorIngresos = 0;
	respuesta = "si";

	while (respuesta == "si") {
		nombre = prompt("Ingrese el nombre.");
		while (!nombre) {
			nombre = prompt("Ingrese un nombre valido.");
		}

		tipoDeCarta = prompt("Ingrese el tipo de carta.");
		while (tipoDeCarta != "monstruo" && tipoDeCarta != "arma" && tipoDeCarta != "magica" && !tipoDeCarta) {
			tipoDeCarta = prompt("Ingrese un tipo de carta valida.");
		}

		cantidadCartas = prompt("Ingrese la cantidad de cartas.");
		cantidadCartas = parseInt(cantidadCartas);
		while (cantidadCartas < 0 || !cantidadCartas) {
			cantidadCartas = prompt("Ingrese una cantidad valida");
		}

		rareza = prompt("Ingrese la rareza de la carta.");
		while (rareza != "comun" && rareza != "rara" && rareza != "legendaria" && !rareza) {
			rareza = prompt("Ingrese una rareza valida.");
		}

		precio = prompt("Ingrese el precio.");
		precio = parseInt(precio);
		while (precio < 250 || precio > 5000 || !precio) {
			precio = prompt("Ingrese un precio valido");
		}

		if (banderaCartaRara == false || (rareza == "rara" && precio < precioCartaRaraBarata)) {
			banderaCartaRara = true;
			precioCartaRaraBarata = precio;
			nombreCartaRaraBarata = nombre;
		}

		if (tipoDeCarta == "monstruo") {
			totalCantidadMonstruo += cantidadCartas;
		}
		else {
			if (tipoDeCarta == "arma") {
				totalCantidadArma += cantidadCartas;
			}
			else {
				totalCantidadMagica += cantidadCartas;
			}
		}

		switch (rareza) {
			case "comun":
				totalCantidadComun += cantidadCartas;
				break;

			case "rara":
				totalCantidadRara += cantidadCartas;
				break;

			default:
				totalCantidadLegendaria += cantidadCartas;
				break;
		}

		valorEntero += precio;
		valorEntero = parseInt(valorEntero);

		contadorIngresos++;
		totalCantidadCartas += cantidadCartas;

		respuesta = prompt("Quiere seguir ingresando datos?", "si");
	}

	porcentajeComun = totalCantidadComun / totalCantidadCartas;
	porcentajeRara = totalCantidadRara / totalCantidadCartas;
	porcentajeLegendaria = totalCantidadLegendaria / totalCantidadCartas;

	porcentajeComun = parseFloat(porcentajeComun).toFixed(2);
	porcentajeRara = parseFloat(porcentajeRara).toFixed(2);
	porcentajeLegendaria = parseFloat(porcentajeLegendaria).toFixed(2);


	document.write("<br> La cantidad de cartas de cada tipo es: Monstruo: " + totalCantidadMonstruo + ", de Arma: " + totalCantidadArma + ", de Mágica: " + totalCantidadMagica);
	document.write("<br> El nombre de la carta rara con menor precio es: " + nombreCartaRaraBarata);
	document.write("<br> El valor de la colección entera es: $" + valorEntero);
	document.write("<br> El porcentaje de cada rareza de cartas es: Común: " + porcentajeComun + "Rara: " + porcentajeRara + "Legendaria: " + porcentajeLegendaria);
}
