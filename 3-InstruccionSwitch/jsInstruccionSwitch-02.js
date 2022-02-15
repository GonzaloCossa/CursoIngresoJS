function mostrar()
{
	//tomo el mes

	var mesDelAnio;

	mesDelAnio = document.getElementById("txtIdMes").value;

	switch(mesDelAnio)
	{
	case "Julio":
	case "Agosto":
		alert("Es " + mesDelAnio + " Abrigate que hace frio." );
		break;
	
	case "Enero":
	case "Febrero":
	case "Marzo":
	case "Abril":
	case "Mayo":
	case "Junio":
		alert("Es " + mesDelAnio + " Falta para el invierno." );
		break;
		
	default:
		alert("Ya pasamos el frio, ahora calor!!!.");
		break;
	}
}//FIN DE LA FUNCIÓN