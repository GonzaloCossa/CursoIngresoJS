/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	

Gonzalo Cossa
Div B
*/
function mostrar()
{
    var nombreDeUsuario;
	var edadDeUsuario;
    var mensaje;

    nombreDeUsuario = document.getElementById("txtIdNombre").value;
	edadDeUsuario = document.getElementById("txtIdEdad").value;
    mensaje = "Usted se llama " + nombreDeUsuario + " y tiene " + edadDeUsuario + " años";

    alert(mensaje);
}