/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"

Gonzalo Cossa E/S Ejercicio 6
Div B
*/
function sumar() {

	//Declaro variables

	var numeroUno;
	var numeroDos;
	var resultado;

	//Obtención de datos de las ID

	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;

	//Transformo a enteros

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	//Realizo la suma

	resultado = numeroUno + numeroDos;

	//Muestro el resultado obtenido

	alert("La suma es " + resultado);
}

