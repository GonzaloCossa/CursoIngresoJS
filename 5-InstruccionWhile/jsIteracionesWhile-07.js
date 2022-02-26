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
	var totalEdadMujeres;
	var totalEdadHombres;
	var totalEdadNb;
	var promedioMujeres;
	var promedioHombres;
	var promedioNb;
	var genteConFiebre;
	var genteSinFiebre;
	var primerAprobado;
	var notaAprobado;
	var nombrePrimero;
	var sexoPrimero;
	var respuesta;

	genteConFiebre = 0;
	genteSinFiebre = 0;
	contadorMujeres = 0;
	contadorHombres = 0;
	contadorNb = 0;
	promedioMujeres = 0;
	promedioHombres = 0;
	promedioNb = 0;
	totalEdadMujeres = 0;
	totalEdadHombres = 0;
	totalEdadNb = 0;
	notaAprobado = 0;
	respuesta = "si";
	alguienAprobo = true;

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

			if(sexo == "f")
			{
				contadorMujeres ++; 
				totalEdadMujeres += edad;
			}
			else
			{
				if(sexo == "m")
				{
					contadorHombres ++;
					totalEdadHombres += edad;
				}
				else
				{
					if(sexo == "nb")
					{
						contadorNb ++;
						totalEdadNb += edad;
					}
				}
			}

		nota = prompt("Ingrese su nota (0-10).");
			while(nota > 10 || nota < 0 || !nota)
			{
				nota = prompt("Ingrese una nota valida.");
			}

		nombre = prompt("Ingrese su nombre.");	
			
		respuesta = prompt("¿Quiere seguir ingresando números?","si");
	}	
		if(nota >= 4)
		{
			if(alguienAprobo == true)
			{
				alguienAprobo = false;
				notaAprobado = nota;
				nombrePrimero = nombre;
				sexoPrimero = sexo;
			}

			else
			{
				contadorDesaprobados ++;
			}
		}	
	
	promedioMujeres = (totalEdadMujeres / contadorMujeres).toFixed(2);
	promedioHombres = (totalEdadHombres / contadorHombres).toFixed(2);
	promedioNb = (totalEdadNb / contadorNb).toFixed(2);

	promedioMujeres = parseFloat(promedioMujeres);
	promedioHombres = parseFloat(promedioHombres);
	promedioNb = parseFloat(promedioNb);
	//a)
		document.write("La cantidad de mujeres es: " + contadorMujeres + ". <br>");
	//b)
		document.write("La cantidad de alumos con fiebre es: " + genteConFiebre + " y la cantidad de la que no es: " + genteSinFiebre + ". <br>");
	//c)
		document.write("El promedio de edad por sexo es: F: " + promedioMujeres + ", M: " + promedioHombres + ", NB: " + promedioNb +". <br>");
	//d)
		document.write("El primero aprobado es: " + nombrePrimero + " su nota es: " + notaAprobado + " y su sexo es: " + sexoPrimero + ". <br>");
}//FIN DE LA FUNCIÓN