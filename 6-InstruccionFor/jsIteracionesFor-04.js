function mostrar()
{
	var repeticiones;
	
	for(repeticiones = 0 ; ; repeticiones ++)
	{
		console.log(repeticiones);
		if(repeticiones == 100)
		{
			document.write("Hola UTN FRA" + "<br>");
			break;
		}
	}
}//FIN DE LA FUNCIÓN