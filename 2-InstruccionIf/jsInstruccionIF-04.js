function mostrar() {
	var edad;
	var resultado;

	edad = document.getElementById("txtIdEdad").value;
	
	resultado = (edad > 12) && (edad < 18);

	if (resultado) 
	{
		alert(edad + " usted es adolecente");
	}
	
}//FIN DE LA FUNCIÓN