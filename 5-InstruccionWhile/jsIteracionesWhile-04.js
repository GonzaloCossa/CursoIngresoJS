/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numeroIngresado;

	numeroIngresado = prompt("ingrese un número entre 0 y 9.");

	while(numeroIngresado > 9 || numeroIngresado < 0)
	{
		numeroIngresado = prompt("ingrese un número entre 0 y 9");
	}
		document.getElementById("txtIdNumero").value = numeroIngresado;
}//FIN DE LA FUNCIÓN