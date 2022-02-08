/*
Alumno: Gonzalo Agustín Cossa
Div B
Instrucción 'IF' Ejercicio N°6
*/
function mostrar() {
	var edad;

	edad = document.getElementById("txtIdEdad").value;

	if (edad > 17) {
		alert("Es una persona mayor.");
	}
	else
		if (edad > 12 && edad < 18) {
			alert("Es una persona adolescente.");
		}
		else
			alert("Es una persona menor.");
}//FIN DE LA FUNCIÓN