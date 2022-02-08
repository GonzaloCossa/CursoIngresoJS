/*
Alumno: Gonzalo Agustín Cossa
Div B
Instrucción 'IF' Ejercicio N°4
*/
function mostrar() {
	var edad;
	var resultado;

	edad = document.getElementById("txtIdEdad").value;

	resultado = (edad > 12) && (edad < 18);

	if (resultado) {
		alert("Usted es adolecente.");
	}
}//FIN DE LA FUNCIÓN