/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador;
	var acumulador;
	var numeroIngresado;
	var promedio;
	var respuesta;
	var

	contador = 0;
	acumulador = 0;
	respuesta = "si";

	while(respuesta == "si")
	{
		numeroIngresado = prompt("Ingrese un número.");
		numeroIngresado = parseFloat(numeroIngresado);
		acumulador = numeroIngresado + acumulador;
		contador++;
		respuesta = prompt("¿Quiere seguir ingresando números?","si");
	}	
		promedio = acumulador / contador;
	
	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio
}//FIN DE LA FUNCIÓN