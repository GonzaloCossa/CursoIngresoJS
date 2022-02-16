function mostrar()
{
	var estacionDeAnio;
	var destinoIngresado;
	var precioBase;
	var ajusteDePrecio;
	var precioFinal;

	estacionDeAnio = document.getElementById("txtIdEstacion").value;
	destinoIngresado = document.getElementById("txtIdDestino").value;

	precioBase = 15000;

	switch(estacionDeAnio)
		{
			case "Invierno":
				switch(destinoIngresado)
				{
					case "Bariloche":
						ajusteDePrecio = 1.20;
					break;

					case "Cataratas":
					case "Cordoba":
						ajusteDePrecio = 0.9;
					break;

					default:
						ajusteDePrecio = 0.8;
					break;
				}
			break;

			case "Verano":
				switch(destinoIngresado)
				{
					case "Bariloche":
						ajusteDePrecio = 0.8;
					break;

					case "Cataratas":
					case "Cordoba":
						ajusteDePrecio = 1.1;
					break;

					default:
						ajusteDePrecio = 1.2;
					break;
				}
			break;

			case "Otoño":
			case "Primavera":
				switch(destinoIngresado)
				{
					case "Bariloche":
					case "Cataratas":
					case "Mar del plata":
						ajusteDePrecio = 1.1;
					break;

					default:
						ajusteDePrecio = 1;
					break;
				}
			break
			default:
			break;
		}

		precioFinal = precioBase * ajusteDePrecio;
		alert("El precio final es: $"+ precioFinal);

}//FIN DE LA FUNCIÓN