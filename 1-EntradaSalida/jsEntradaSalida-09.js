/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".

Gonzalo Cossa E/S Ejercicio 9
Div B
*/
function mostrarAumento() {
	var valorSueldo;
	var valorPorcentaje;
	var resultado;

	valorSueldo = document.getElementById("txtIdSueldo").value;

	valorSueldo = parseInt(valorSueldo);
	valorPorcentaje = 1.10;

	resultado = valorSueldo * valorPorcentaje;
	document.getElementById("txtIdResultado").value = resultado;
}
