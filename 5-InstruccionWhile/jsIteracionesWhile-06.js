/* 
Gonzalo Cossa
Div B Ej N°6 WHILE 
*/
function mostrar()
{
	var contador;
	var acumulador;
	var numeroIngresado;
	var promedio;

	contador = 0;
	acumulador = 0;

	while(contador < 5)
		{
			numeroIngresado = prompt("Ingrese un número.")
			numeroIngresado = parseInt(numeroIngresado);
			acumulador = numeroIngresado + acumulador;
			contador ++;
		}
		
		promedio = acumulador / 5;
	
	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio
}//FIN DE LA FUNCIÓN