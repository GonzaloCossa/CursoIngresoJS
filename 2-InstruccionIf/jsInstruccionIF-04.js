function mostrar() {
	var edadInicial;
	var resultado;

	edadInicial = document.getElementById("txtIdEdad").value;
	edadInicial = parseInt(edadInicial);
	
	resultado = (edadInicial > 12) && (edadInicial < 18);

	if (resultado) 
	{
		alert(edadInicial + " usted es adolecente");
	}
	
}//FIN DE LA FUNCIÓN