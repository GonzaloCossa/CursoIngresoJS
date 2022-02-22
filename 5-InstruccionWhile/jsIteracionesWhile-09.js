/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	var bandera;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;

	//iniciar variables
	respuesta = "si";
	bandera = "Es el primer número.";

	while(respuesta == "si")
	{
		numeroIngresado = prompt("Ingrese un número.");
		numeroIngresado = parseInt(numeroIngresado);

		if(bandera == "Es el primer número.")
		{
			bandera = "No es el primer número.";
			numeroMaximo = numeroIngresado;
			numeroMinimo = numeroIngresado;
		}

		else
		{
			if(numeroIngresado > numeroMaximo)
			{
				numeroMaximo = numeroIngresado;
			}
			else
				if (numeroIngresado < numeroMinimo)
				{	
					numeroMinimo = numeroIngresado;
				}
		}
		respuesta = prompt("¿Quiere seguir ingresando números?","si");
	}
	document.getElementById("txtIdMaximo").value = numeroMaximo;
	document.getElementById("txtIdMinimo").value = numeroMinimo;
}//FIN DE LA FUNCIÓN