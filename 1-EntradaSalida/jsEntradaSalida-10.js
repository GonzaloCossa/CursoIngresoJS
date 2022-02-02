/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"

Gonzalo Cossa E/S Ejercicio 10
Div B
*/
function mostrarAumento() {
	var importe;
	var descuento;
	var resultado;

	importe = document.getElementById("txtIdImporte").value;

	descuento = 0.25;

	importe = parseInt(importe);
	resultado = importe - (importe * descuento);
	document.getElementById("txtIdResultado").value = resultado;
}	
