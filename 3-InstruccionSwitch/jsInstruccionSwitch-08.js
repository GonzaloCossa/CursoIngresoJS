/* Gonzalo Cossa 
Ejercicio SWITCH 08
Div B */
function mostrar()
{
	var destinoIngresado;

	destinoIngresado = document.getElementById("txtIdDestino").value;

	switch(destinoIngresado)
		{
			case "Cataratas":
			case "Mar del plata":
				alert("En " + destinoIngresado + " hace calor.");
			break;

			case "Bariloche":
			case "Ushuaia":
				alert("En " + destinoIngresado + " hace frio.");
			break;

			default:
			break;
		}
}//FIN DE LA FUNCIÓN