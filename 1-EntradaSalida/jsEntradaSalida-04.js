/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'

Gonzalo Cossa
Div B
*/
function mostrar()
{
    var nombreDeUsuario;
    nombreDeUsuario = prompt("Por favor, ingrese su nombre");
    document.getElementById("txtIdNombre").value = nombreDeUsuario;
}

