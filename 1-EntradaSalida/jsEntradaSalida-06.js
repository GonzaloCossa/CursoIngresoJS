/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"

Gonzalo Cossa E/S Ejercicio 6
Div B
*/
function sumar() {

	var numeroUno;
	var numeroDos;
	var resultado;

	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;

	resultado = parseInt(numeroUno) + parseInt(numeroDos)

	alert("La suma es: " + resultado);
}

