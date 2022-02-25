/* Bienvenidos (IF).
Pedir dos números y mostrar el resultado:
Si son iguales los muestro concatenados.
Si el primero es mayor, los resto,
de lo contrario los sumo.
Si la suma es mayor a 10 ,además de mostrar el resultado, muestro el mensaje
"la suma es xxx y supero el 10". */
function mostrar()
{
    var numeroUno;
    var numeroDos;
    var suma;

    numeroUno = prompt("Ingrese el primer número.");
    numeroDos = prompt("Ingrese el segundo número.");
    numeroUno = parseInt(numeroUno);
    numeroDos = parseInt(numeroDos);

    suma = numeroUno + numeroDos;
   

    if(numeroUno == numeroDos)
    {
        alert("El num es: " + numeroUno + "" + numeroDos);
    }
    else
    {
        if(numeroUno > numeroDos)
        {
        
            alert("La resta es: " + numeroUno - numeroDos);
        }
        else
        {
            if(numeroUno < numeroDos)
            {
            alert("La suma es: " + suma);
            (suma > 10)
                {
                alert("La suma es " + suma  + " y supero el 10");
                }
            }
        }
    }
}
