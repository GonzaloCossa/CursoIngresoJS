function mostrar()
{
	var edad = document.getElementById("txtIdEdad").value;
	var comparacion = 15;

	edad = parseInt(edad);
	var resultado = edad == comparacion;

	if(resultado)
	{
		alert("niña bonita");
	}
}//FIN DE LA FUNCIÓN