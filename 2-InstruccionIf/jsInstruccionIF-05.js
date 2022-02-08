/*
Alumno: Gonzalo Agustín Cossa
Div B
Instrucción 'IF' Ejercicio N°5
*/
function mostrar() {
	var edad;

	edad = document.getElementById("txtIdEdad").value;

	if (!(edad < 18 && edad > 12)) {

		alert("La persona no es adolescente.");
	}
}//FIN DE LA FUNCIÓN