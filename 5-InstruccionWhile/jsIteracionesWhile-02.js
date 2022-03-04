/*
Realizar el desarrollo de una plataforma web que permita organizar recorridos para 
recoletar aceites en restaurantes.El ingreso sera hasta que el usuario quiera. 

La solución será planteada sobre una arquitectura flexible que permita
a futuro realizar cambios, mejoras y sumar nuevas funcionalidades que 
potencien las plataformas.

se deben realizar  ingresos:
	Zonas(CABA-BuenosAires-GBA)
	Nombre de Choferes
	Edad del chofer(mayor a 18 años)
	Clientes(McDonals-Rodicio-SigaALaVaca)
	CantidadDeAceite(entre 800 y 1500 Litros)
debemos informar:
a)La zona mas visitada 
B)El nombre del chofer mas joven
C)La mayor cantidad de aceite recolectada en Rodicio
*/

function mostrar()
{

	var zona;
	var nombreChofer;
	var edadChofer;
	var cliente;
	var cantidadAceite;
	var respuesta;

	var contadorCaba;
	var contadorBsAs;
	var contadorGba;
	var totalAceiteRodicio;

	var primerChoferJoven;
	var edadChoferMasJoven;
	var nombreChoferMasJoven;

	contadorCaba = 0;
	contadorBsAs = 0;
	contadorGba = 0;
	totalAceiteRodicio = 0;
	
	primerChoferJoven = false;
	respuesta = "si";

	while(respuesta == "si")
	{
		zona = prompt("Ingrese una zona.");
		while(zona != "caba" && zona != "buenos aires" && zona != "gba")
		{
			zona = prompt("Ingrese una zona valida.");
		}

		nombreChofer = prompt("Ingrese el nombre del chofer.");
		while(!nombreChofer)
		{
			nombreChofer = prompt("Ingrese un nombre valido.");
		}
		
		edadChofer = prompt("Ingrese la edad del chofer.");
		edadChofer = parseInt(edadChofer);

		while(edadChofer < 19 || !edadChofer)
		{
			edadChofer = prompt("Ingrese una edad valida.");
		}

		cliente = prompt("Ingrese el cliente.");
		while(cliente != "mcdonalds" && cliente != "rodicio" && cliente != "sigaalavaca")
		{
			cliente = prompt("Ingrese un cliente valido.");
		}

		cantidadAceite = prompt("Ingrese la cantidad de aceite entre 800 y 1500 Litros");
		cantidadAceite = parseInt(cantidadAceite);
		while(cantidadAceite < 800 || cantidadAceite > 1500 || !cantidadAceite)
		{
			cantidadAceite = prompt("Ingrese una cantidad valida.");
		}

		switch(zona)
		{
			case "caba":
				contadorCaba ++;
			break;

			case "buenos aires":
				contadorBsAs ++;
			break;

			default:
				contadorGba ++;
			break;	
		}

		while(primerChoferJoven == false || edadChofer < edadChoferMasJoven)
		{
			edadChoferMasJoven = edadChofer;
			nombreChoferMasJoven = nombreChofer;
			primerChoferJoven = true;
		}

		if(cliente == "rodicio")
		{
			totalAceiteRodicio += cantidadAceite;
		}

		respuesta = prompt("Quiere añadir más datos?","si");
	}

	if(contadorBsAs > contadorCaba && contadorBsAs > contadorGba)
	{
		zonaMasVisitada = "Buenos Aires";
	}
	else
	{
		if(contadorCaba > contadorBsAs && contadorCaba > contadorGba)
		{
			zonaMasVisitada = "CABA";
		}

		else
			zonaMasVisitada = "GBA";
	}
	
	document.write("<br> La zona más visitada es " + zonaMasVisitada);
	document.write("<br> El nombre del chofer más joven es " + nombreChoferMasJoven);
	document.write("<br> La cantidad de aceite de Rodicio es " + cantidadAceite + "Lts");

}//FIN DE LA FUNCIÓN