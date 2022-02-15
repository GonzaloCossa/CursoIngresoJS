/* Gonzalo Cossa 
Ejercicio SWITCH 01
Div B */
function mostrar()
{
	//tomo el mes
	var mesDelAnio;

	mesDelAnio = document.getElementById("txtIdMes").value;

	switch(mesDelAnio)
	{
		case "Enero":
			alert("Es " + mesDelAnio + " que comiences bien el año!!!." );
		break;

		case "Marzo":
			alert("Es " + mesDelAnio + " a clases!!!." );
		break;
		
		case "Julio":
			alert("Es " + mesDelAnio + " se vienen las vacaciones!!!.");
		break;
		
		case "Diciembre":
			alert("Es " + mesDelAnio + " felices fiesta!!!." );
		break;
		
		default:
			alert("No pasa nada");
		break;
	}
}//FIN DE LA FUNCIÓN