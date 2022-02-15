function mostrar()
{
	//tomo el mes
	var mesDelAño;

	mesDelAño = document.getElementById("txtIdMes").value;

	switch(mesDelAño)
	{
		case "Enero":
			alert("Es " + mesDelAño + " que comiences bien el año!!!." );
		break;

		case "Marzo":
			alert("Es " + mesDelAño + " a clases!!!." );
		break;
		
		case "Julio":
			alert("Es " + mesDelAño + " se vienen las vacaciones!!!.");
		break;
		
		case "Diciembre":
			alert("Es " + mesDelAño + " felices fiesta!!!." );
		break;
		
		default:
			alert("No pasa nada");
		break;
		
	}
}//FIN DE LA FUNCIÓN