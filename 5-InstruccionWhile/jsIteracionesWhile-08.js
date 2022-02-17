/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.
Gonzalo Cossa
Div B Ej N°8 WHILE
*/
function mostrar()
{
	var numeroIngresado;
	var contador;
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;

	contador = 0;
	sumaPositivos = 0;
	multiplicacionNegativos = 1;
	respuesta = "si";

	while(respuesta == "si")
	{
		numeroIngresado = prompt("Ingrese un número.");
		numeroIngresado = parseFloat(numeroIngresado);
		contador++;

		if(numeroIngresado < 0)
		{
			multiplicacionNegativos = multiplicacionNegativos * numeroIngresado;
			multiplicacionNegativos = parseFloat(multiplicacionNegativos);
		}
		else
		{
			sumaPositivos = numeroIngresado + sumaPositivos;
		}

		respuesta = prompt("¿Quiere seguir ingresando números?","si");
	}

	txtIdSuma.value = sumaPositivos;
	txtIdProducto.value = multiplicacionNegativos;

}//FIN DE LA FUNCIÓN