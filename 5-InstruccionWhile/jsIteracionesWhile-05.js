/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.
Gonzalo Cossa
Div B Ej N°5 WHILE
*/
function mostrar()
{
	var sexoIngresado;

	while(sexoIngresado != "f" && sexoIngresado != "m")
		{
		sexoIngresado = prompt("Ingrese un sexo.");
		}
		document.getElementById("txtIdSexo").value = sexoIngresado;
}//FIN DE LA FUNCIÓN