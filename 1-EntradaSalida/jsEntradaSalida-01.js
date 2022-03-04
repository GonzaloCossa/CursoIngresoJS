/*
1. Una empresa de venta de cosméticos necesita un programa que permita la carga de productos
vendidos, junto a los datos del vendedor. Se requiere ingresar los siguientes campos:
• Vendedor: Juan, María, Lucrecia
• Tipo producto: Perfume, Shampoo o Maquillaje
• Importe de la venta (Numero mayor que cero)
No hay un límite total de ventas, y cada vendedor puede realizar varias ventas.
Una vez finalizada la carga de productos vendidos se debe calcular la comision del vendedor.
Si la suma de las ventas realizadas por cada vendedor está entre 5000 y 10000, la comision será del
15%.
Si la comision supera los 10000, la comision será del 20%. En caso contrario la comision será del
5%.
Se debe mostrar:
a. Promedio de ventas por cada vendedor.
b. Cantidad de perfumes que vendió María
c. El importe mas barato junto con el vendedor que lo vendió.
d. El nombre del vendedor con menor comision.
*/
function mostrar()
{
	var vendedor;
	var tipoProducto;
	var importe;

	var promedioVentaJuan;
	var promedioVentaMaria;
	var promedioVentaLucrecia;
	var comision; 
	var respuesta;

	var totalVentasJuan;
	var totalVentasMaria;
	var totalVentasLucrecia;
	var contadorJuan;
	var contadorMaria;
	var contadorLucrecia;

	var banderaImporteMinimo;
	var importeMinimo;
	var vendedorImporteMinimo;
	var banderaMenorComision;
	var vendedorMenorComision;
	var menorComision;

	var cantidadPerfumeMaria;

	importe = 0;
	totalVentasJuan = 0;
	totalVentasMaria = 0;
	totalVentasLucrecia = 0;
	contadorJuan = 0;
	contadorMaria = 0;
	contadorLucrecia = 0;
	promedioVentaJuan = 0;
	promedioVentaLucrecia = 0;
	promedioVentaMaria = 0;
	cantidadPerfumeMaria = 0;
	porcentaje = 0;
	respuesta = "si";

	banderaImporteMinimo = false;
	banderaMenorComision = false;

	while(respuesta == "si")
	{	
		vendedor = prompt("Ingrese un vendedor: juan, maría o lucrecia.");

		while(vendedor != "juan" && vendedor != "maria" && vendedor != "lucrecia")
		{
			vendedor = prompt("Error, ingrese un vendedor: juan, maría o lucrecia.");
		}

		tipoProducto = prompt("Ingrese un producto: perfume, shampoo o maquillaje.","perfume");

		while(tipoProducto != "perfume" && tipoProducto != "shampoo" && tipoProducto != "maquillaje")
		{
			tipoProducto = prompt("Error, ingrese un tipo de produto: perfume, shampoo o maquillaje.");
		}

		importe = prompt("Ingrese un importe.");
		importe = parseInt(importe);

		while(importe < 1 || importe == "")
		{
			importe = prompt("Ingrese un importe valido.");
			importe = parseInt(importe);
		}

		switch(vendedor)
		{
			case "juan":
				if(importe < 10000 && importe > 5000)
				{
					comision = importe + (importe * 0.15);
				}
				else
				{
					if(importe > 10000)
					{
						comision = importe + (importe * 0.20);
					}

					else
					{
						comision = importe + (importe * 0.05);
					}
				}

				totalVentasJuan = totalVentasJuan + comision;
				contadorJuan ++;
			break;

			case "maria":
				if(importe < 10000 && importe > 5000)
				{
					comision = importe + (importe * 0.15);
				}
				else
				{
					if(importe > 10000)
					{
						comision = importe + (importe * 0.20);
					}

					else
					{
						comision = importe + (importe * 0.05);
					}
				}

				if(tipoProducto == "perfume")
				{
					cantidadPerfumeMaria ++;
				}

				totalVentasMaria = totalVentasMaria + comision;
				contadorMaria ++;
			break;

			default:
				if(importe < 10000 && importe > 5000)
				{
					comision = importe + (importe * 0.15);
				}
				else
				{
					if(importe > 10000)
					{
						comision = importe + (importe * 0.20);
					}

					else
					{
						comision = importe + (importe * 0.05);
					}
				}
				totalVentasLucrecia = totalVentasLucrecia + comision;
				contadorLucrecia ++;
			break;
		}// termina el switch

		if(banderaImporteMinimo == false || importe < importeMinimo)
		{
			importeMinimo = importe;
			vendedorImporteMinimo = vendedor;
			banderaImporteMinimo = true;
		}

		if(banderaMenorComision == false || comision < menorComision)
		{
			menorComision = comision;
			vendedorMenorComision = vendedor;
			banderaMenorComision = true;
		}

		respuesta = prompt("Quieres seguir ingresando datos?","si");
	}// termina el while

	promedioVentaJuan = totalVentasJuan / contadorJuan;
	promedioVentaMaria = totalVentasMaria / contadorMaria;
	promedioVentaLucrecia = totalVentasLucrecia / contadorLucrecia;

	promedioVentaJuan = parseFloat(promedioVentaJuan);
	promedioVentaMaria = parseFloat(promedioVentaMaria);
	promedioVentaLucrecia = parseFloat(promedioVentaLucrecia);

	//A
	document.write("<br> El promedio de venta de Juan es: $" + promedioVentaJuan);
	document.write("<br> El promedio de venta de Maria es: $" + promedioVentaMaria);
	document.write("<br> El promedio de venta de Lucrecia es: $" + promedioVentaLucrecia);
	//B
	document.write("<br> Maria vendió " + cantidadPerfumeMaria + " perfumes.");
	//C
	document.write("<br> Importe minimo es: $" + importeMinimo + " y su vendedor es: " + vendedorImporteMinimo);
	//D
	document.write("<br> El vendedor de menor comision es " + vendedorMenorComision);
}