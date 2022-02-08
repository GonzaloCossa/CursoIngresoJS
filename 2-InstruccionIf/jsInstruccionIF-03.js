function mostrar() {
	var edad;
	var mayorDeEdad;
	var resultado;

	edad = document.getElementById("txtIdEdad").value;
	mayorDeEdad = 18;

	resultado = (edad > 17) && (mayorDeEdad > 17);

	if (resultado) 
	{
		alert(edad + " es mayor de edad");
	}
	else{
		alert(edad + " es menor de edad");
	}
	

}//FIN DE LA FUNCIÓN