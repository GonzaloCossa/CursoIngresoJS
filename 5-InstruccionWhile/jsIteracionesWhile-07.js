/*
Realizar el algoritmo que permita 
	el ingreso por prompt de
	1-alturas en centimetros (validar entre 0 y 250) ,
	2-la edad (validar)
	3-temperatura(validar)
	4-el sexo(validar el sexo “f” o “m” o "nb")
	5-nota (validar)
	6-nombre de estudiantes de la UTN hasta que el usuario quiera, 
Div B While simulacro v2
*/
function mostrar()
{
	var altura;
	var edad;
	var temperatura;
	var sexo;
	var nota;
	var nombre;

	var contadorMujeres;
	var contadorHombres;
	var contadorNb;
	var contadorDesaprobados;
	var contadorTotal;
	var totalEdadMujeres;
	var totalEdadHombres;
	var totalEdadNb;
	var promedioMujeres;
	var promedioHombres;
	var promedioNb;
	var porcentajeDesaprobados;
	var genteConFiebre;
	var genteSinFiebre;
	
	var banderaPrimerAprobado;
	var primerAprobadoNombre;
	var banderaTemparaturaMax;
	var temperaturaMax;
	var edadTemperaturaMax;
	var nombreTemperaturaMax;
	var nbMasJoven;
	var banderaNbMasJoven;
	var notaNbMasJoven;
	var alturaNbMasJoven;
	var mujerMasAlta;
	var banderaMujerMasAlta;
	var nombreMujerMasAlta;
	var primerEnanoAprobado;
	var nombrePetisoAprobado;
	var respuesta;

	genteConFiebre = 0;
	genteSinFiebre = 0;
	contadorMujeres = 0;
	contadorHombres = 0;
	contadorNb = 0;
	contadorDesaprobados = 0;
	contadorTotal = 0
	totalEdadMujeres = 0;
	totalEdadHombres = 0;
	totalEdadNb = 0;
	respuesta = "si";
	banderaPrimerAprobado = false;
	banderaTemparaturaMax = false;
	banderaMujerMasAlta = false;
	banderaNbMasJoven = false;
	primerEnanoAprobado = false;

	while(respuesta == "si")
	{
		altura = prompt("Ingrese la altura.");
		altura = parseInt(altura);
			while(altura < 0 || altura > 250 || !altura)
			{
				altura = prompt("Ingrese una altura valida.");
				altura = parseInt(altura);
			}
		
		edad = prompt("Ingrese la edad.","20");
		edad = parseInt(edad);
			while(edad < 18 || edad > 100 || !edad)	
			{
				edad = prompt("Ingrese una edad valida.")
				edad = parseInt(edad);
			}

		temperatura = prompt("Ingrese la temparatura (36-42).");
		temperatura = parseInt(temperatura);
			while(temperatura < 36 || temperatura > 42)
			{
				temperatura = prompt("Ingrese una temperatura valida.");
				temperatura = parseInt(temperatura);
			}

			if(temperatura > 37)
			{
				genteConFiebre ++;
			}
			else
			{
				genteSinFiebre ++;
			}
		
		sexo = prompt("Ingrese su sexo. (f/m/nb)");
		while(sexo != "f" && sexo != "m" && sexo != "nb" && !sexo)
			{
				sexo = prompt("Ingrese un sexo valido.");
			}

		switch(sexo)
		{
			case "f": 
				totalEdadMujeres += edad;
				contadorMujeres ++;
				
			break;
			case "m":
				contadorHombres ++;
				totalEdadHombres += edad;
			break;

			case "nb":
				contadorNb ++;
				totalEdadNb += edad;
				
				if(edad < nbMasJoven || banderaNbMasJoven == false)
				{
				nbMasJoven = edad;
				notaNbMasJoven = nota;
				alturaNbMasJoven = altura;
				banderaNbMasJoven = true;
				}
			break;

			default:
				sexo = prompt("Ingrese un sexo valido.");
			break;
		}

		nota = prompt("Ingrese su nota (0-10).");
		nota = parseInt(nota);
		
			while(nota > 10 || nota < 0 || !nota)
			{
				nota = prompt("Ingrese una nota valida.");
				nota = parseInt(nota);
			}

		nombre = prompt("Ingrese su nombre.");

		// Primer aprobado
		if(banderaPrimerAprobado == false && nota > 3) 
		{
		primerAprobadoNombre = nombre;
		banderaPrimerAprobado = true; 
		}

		if(banderaPrimerAprobado == false)
		{
			primerAprobadoNombre = "No hay ningún aprobado."
		}
		
		// Temperatura más alta
		if(banderaTemparaturaMax == false || temperatura > temperaturaMax)
		{
			temperaturaMax = temperatura;
			nombreTemperaturaMax = nombre;
			edadTemperaturaMax = edad;
			banderaTemparaturaMax = true;
		}
		
		// Mujer aprobada más alta
		if(sexo == "f" && nota > 3 && (banderaMujerMasAlta == false || altura > mujerMasAlta))
		{
			mujerMasAlta = altura;
			nombreMujerMasAlta = nombre;
			banderaMujerMasAlta = true;
		}

		if(sexo == "m" && nota < 4 && altura < 160 && primerEnanoAprobado == false)
		{
			nombrePetisoAprobado = nombre;
			primerEnanoAprobado = true;
		}
		
		if(banderaMujerMasAlta == false)
			{
				mujerMasAlta = "no hay mujer más alta";
				nombreMujerMasAlta = "no hay mujer más alta";
			}
		
		if(nota < 4)
		{
			contadorDesaprobados ++;
		}
		
		contadorTotal ++;
			
		respuesta = prompt("¿Quiere seguir ingresando números?","si");
	}	

	if(contadorMujeres > 0)
		{
		promedioMujeres = (totalEdadMujeres / contadorMujeres);
		}
	else
	{
		promedioMujeres = "No hay ninguna mujer";
		nombreMujerMasAlta = "No hay ninguna mujer";
	}

	if(contadorHombres > 0)
		{
		promedioHombres = (totalEdadHombres / contadorHombres);
		}
	else
	{
		promedioHombres = "No hay ningún hombre";
	}
	
	if(contadorNb > 0)
		{
		promedioNb = (totalEdadNb / contadorNb);
		}
	else
	{
		promedioNb = "No hay nadie no binario";
		alturaNbMasJoven = 0;
		notaNbMasJoven = 0;
	}

	porcentajeDesaprobados = contadorDesaprobados * 100 / contadorTotal;
	porcentajeDesaprobados = parseInt(porcentajeDesaprobados);

	//a)
		document.write("La cantidad de mujeres es: " + contadorMujeres + ". <br>");
	//b)
		document.write("La cantidad de alumos con fiebre es: " + genteConFiebre + " y la cantidad de la que no es: " + genteSinFiebre + ". <br>");
	//c)
		document.write("El promedio de edad por sexo es: F: " + promedioMujeres + ", M: " + promedioHombres + ", NB: " + promedioNb + ". <br>");
	//d)
		document.write("El primero aprobado es: " + primerAprobadoNombre + ". <br>");
	//e)
		document.write("El alumno con la temperatura más alta registrada es: " + nombreTemperaturaMax + " , su edad es " + edadTemperaturaMax + ". <br>");
	//f)
		document.write("La altura de la persona no binaria más joven es: " + alturaNbMasJoven + "cm , su nota es " + notaNbMasJoven + ". <br>");
	//g)
		document.write("El nombre de la mujer más alta aprobada es: " + nombreMujerMasAlta + ". <br>");
	//h)
		document.write("El porcentaje de desaprobados es: " + porcentajeDesaprobados + "%. <br>");
	//i)
		document.write("El primer hombre menor a 160cm desaprobado es: " + nombrePetisoAprobado + ". <br>");
	}//FIN DE LA FUNCIÓN