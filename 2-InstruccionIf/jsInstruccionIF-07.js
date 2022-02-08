/*
Alumno: Gonzalo Agustín Cossa
Div B
Instrucción 'IF' Ejercicio N°7
*/
function mostrar() {
	var edad;
	var estadoCivil;

	edad = document.getElementById("txtIdEdad").value;
	estadoCivil = document.getElementById("estadoCivil").value;

	if (edad < 18 && estadoCivil != "Soltero") {
		alert("Es muy pequeño para NO ser soltero.");
	}
}//FIN DE LA FUNCIÓN