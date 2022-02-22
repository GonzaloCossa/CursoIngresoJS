/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	var respuesta;
	var numeroIngresado;
	var sumaNegativos = 0;
	var sumaPositivos = 0;
	var cantidadPositivos = 0;
	var cantidadNegativos = 0;
	var cantidadCeros = 0;
	var cantidadPares = 0;
	var promedioPositivo = 0;
	var promedioNegativo = 0;
	var restaPositivosNegativos;

	respuesta = "si";

	while(respuesta == "si")
	{
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);
		console.log(numeroIngresado);
		if(numeroIngresado > 0)
			{
			sumaPositivos+=numeroIngresado;
			cantidadPositivos++;
			}
		else 
			if (!numeroIngresado)
				{
				cantidadCeros++;
				}
		else
			{
			sumaNegativos += numeroIngresado;
			cantidadNegativos++;
			}
			if(!(numeroIngresado % 2))
				{
				cantidadPares++;
				}

		respuesta = prompt("¿Quiere seguir ingresando números?","si");
	}//fin del while

	if(cantidadPositivos)
		{
		promedioPositivo= sumaPositivos / cantidadPositivos;
		}

	if(cantidadNegativos)
		{
		promedioNegativo = sumaNegativos / cantidadNegativos;
		}

	restaPositivosNegativos = sumaPositivos + sumaNegativos;

	document.write("</br> la suma de negativos es :" + sumaNegativos);
	document.write("</br> la suma de positivos es :" + sumaPositivos);
	document.write("</br> la cantidad de positivos es :" + cantidadPositivos);
	document.write("</br> la cantidad de negativos es :" + cantidadNegativos);
	document.write("</br> la cantidad de ceros es :" + cantidadCeros);
	document.write("</br> la cantidad de números pares es :" + cantidadPares);
	document.write("</br> el promedio de los positivos es :" + promedioPositivo);
	document.write("</br> el promedio de los negativos es :" + promedioNegativo);
	document.write("</br> la diferencia entre positivos y negativos es :" + restaPositivosNegativos);


}//FIN DE LA FUNCIÓN