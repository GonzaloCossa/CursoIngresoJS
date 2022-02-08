/*

Alumno: Gonzalo Agustín Cossa
Div B
Instrucción 'IF' Ejercicio N°10
*/
function mostrar() {
	var numero;
	//Genero el número RANDOM entre 1 y 10 
	numero = Math.floor(Math.random() * 10) + 1;

	if (numero == 10 || numero == 9) {
		alert("EXCELENTE");
	}
	else
		if (numero > 3 && numero < 9) {
			alert("APROBÓ");
		}
	if (numero < 4) {
		alert("Vamos, la proxima se puede");
	}
}//FIN DE LA FUNCIÓN