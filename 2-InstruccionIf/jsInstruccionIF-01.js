/*
Alumno: Gonzalo Agustín Cossa
Div B
Instrucción 'IF' Ejercicio N°1
*/
function mostrar() {
	var edad = document.getElementById("txtIdEdad").value;
	var comparacion = 15;
	var resultado = edad == comparacion;

	if (resultado) {
		alert("niña bonita");
	}
}//FIN DE LA FUNCIÓN