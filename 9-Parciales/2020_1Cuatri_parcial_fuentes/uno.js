/*
Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total 
*/

function mostrar() {

	var tipoDeProducto;
	var precio;
	var cantidadDeUnidades;
	var marca;
	var fabricante;
	var repeticion = 0;
	var alcoholMasBarato;
	var fabricanteAlcoholMasBarato; 
	var cantidadAlcoholMasBarato;
	var totalUnidadAlcohol = 0;
	var totalUnidadBarbijo = 0;
	var totalUnidadJabon = 0;

	while (repeticion < 5) 
	{
		tipoDeProducto = prompt("Ingrese un tipo de producto: Barbijo, Jabón o Alcohol.");

		while (tipoDeProducto != "barbijo" && tipoDeProducto != "jabón" && tipoDeProducto != "alcohol") 
		{
			tipoDeProducto = prompt("Ingrese un producto valido.");
		}

		precio = prompt("Ingrese un precio.");
		precio = parseInt(precio);

		while (precio < 100 || precio > 300) 
		{
			precio = prompt("Ingrese un precio valido.");
		}

		cantidadDeUnidades = prompt("Ingrese la cantidad de unidades.");
		cantidadDeUnidades = parseInt(cantidadDeUnidades);

		while (cantidadDeUnidades < 0 || cantidadDeUnidades > 1000) 
		{
			cantidadDeUnidades = prompt("Ingrese una cantidad valida.");
		}

		marca = prompt("Ingrese una marca.");
		fabricante = prompt("Ingrese un fabricante.");

		//A
		if (tipoDeProducto == "alcohol") 
		{
			if (repeticion == 0) 
			{
				alcoholMasBarato = precio;
				fabricanteAlcoholMasBarato = fabricante;
				cantidadAlcoholMasBarato = cantidadDeUnidades;
			}
			else
			{
				if (precio < alcoholMasBarato) 
				{
					alcoholMasBarato = precio;
					fabricanteAlcoholMasBarato = fabricante;
					cantidadAlcoholMasBarato = cantidadDeUnidades;
				}
			}
		}
		//B
		switch(tipoDeProducto)
		{
			case"alcohol":
			{
				totalUnidadAlcohol = totalUnidadAlcohol + cantidadDeUnidades;
			}
			break;

			case"barbijo":
			{
				totalUnidadBarbijo = totalUnidadBarbijo + cantidadDeUnidades;
			}
			break;

			case"jabón":
			{
				totalUnidadJabon = totalUnidadJabon + cantidadDeUnidades;
			}
			break;
		}

		repeticion++;
	}
}
