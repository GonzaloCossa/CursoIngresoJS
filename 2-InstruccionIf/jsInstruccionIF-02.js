function mostrar() {
	var edad;
	var mayorDeEdad;
	var resultado;

	edad = document.getElementById("txtIdEdad").value;
	mayorDeEdad = 18;

	resultado = (edad >= 18) && (mayorDeEdad >= 18);

	if (resultado) {

		alert(edad + " es mayor de edad");
	}
}//FIN DE LA FUNCIÓN