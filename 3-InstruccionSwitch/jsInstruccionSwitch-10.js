function mostrar()
{
	var estacionDeAnio;
	var destinoIngresado;

	estacionDeAnio = document.getElementById("txtIdEstacion").value;
	destinoIngresado = document.getElementById("txtIdDestino").value;

	switch(estacionDeAnio)
	{	
		case "Invierno":
			switch(destinoIngresado)
			{
				case "Bariloche":
					alert("Se viaja.");
				break;

				default:
					alert("No se viaja.");
				break;
			}
		break;
		
		case "Verano":
			switch(destinoIngresado)
			{
				case "Mar del plata":
				case "Cataratas":
					alert("Se viaja.")
				break;
				
				default:
					alert("No se viaja.");
				break;
			}
		break;

		case "Otoño":
			switch(destinoIngresado)
			{

				case "":
					alert("No se viaja.");
				break;

				default:
					alert("Se viaja.");
				break;
				/* case "Bariloche":
				case "Mar del plata":	
				case "Cataratas":
				case "Cordoba":
					alert("Se viaja.");
				break;

				default:
				break; */
			}
		break;

		case "Primavera":
			switch(destinoIngresado)
			{
				case "Bariloche":
					alert("No se viaja.");
				break;

				default:
					alert("Se viaja.");
				break;
			}
		break;

		default:
		break;
	}
}//FIN DE LA FUNCIÓN