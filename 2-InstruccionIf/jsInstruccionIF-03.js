/*
Alumno: Gonzalo Agustín Cossa
Div B
Instrucción 'IF' Ejercicio N°3
*/
function mostrar() {
	var edad;
	var mayorDeEdad;
	var resultado;

	edad = document.getElementById("txtIdEdad").value;
	mayorDeEdad = 18;

	resultado = (edad > 17) && (mayorDeEdad > 17);

	if (resultado) {
		alert("Usted es mayor de edad.");
	}
	else {
		alert("Usted es menor de edad.");
	}
}//FIN DE LA FUNCIÓN