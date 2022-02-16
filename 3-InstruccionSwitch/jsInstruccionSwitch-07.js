/* Gonzalo Cossa 
Ejercicio SWITCH 07
Div B */
function mostrar()
{
	var destinoIngresado;

	destinoIngresado = document.getElementById("txtIdDestino").value;

	switch(destinoIngresado)
		{
			case "Bariloche":
				alert(destinoIngresado + " se encuentra al Oeste.")
			break;

			case "Cataratas":
				alert(destinoIngresado + " se encuentra al Norte.")
			break;

			case "Mar del plata":
				alert(destinoIngresado + " se encuentra al Este.")
			break;

			case "Ushuaia":
				alert(destinoIngresado + " se encuentra al Sur.")
			break;

			default:
			break;
		}
}//FIN DE LA FUNCIÓN