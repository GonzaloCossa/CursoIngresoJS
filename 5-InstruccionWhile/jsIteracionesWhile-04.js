/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.
Gonzalo Cossa
Div B Ej N°4 WHILE
*/
function mostrar()
{
	var numeroIngresado;

	numeroIngresado = prompt("ingrese un número entre 0 y 9 inclusive.");

	while(numeroIngresado > 9 || numeroIngresado < 0 || !numeroIngresado)
	{
		numeroIngresado = prompt("El número no es entre 0 y 9");
	}
		document.getElementById("txtIdNumero").value = numeroIngresado;
}//FIN DE LA FUNCIÓN