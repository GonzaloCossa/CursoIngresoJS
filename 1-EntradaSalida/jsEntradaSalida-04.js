/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{

 var nombre;

 nombre = PROMPT("Ingrese su nombre");

 document.getElementById('txtIdNombre').value = nombre; 

}

