/* Bienvenidos.
Realizar el algoritmo que permita iterar el ingreso de dos datos, una letra y un número entre 
-100 y 100 (validar) hasta que el usuario quiera e informar al terminar 
el ingreso por document.write:
a) La cantidad de números pares.
b) La cantidad de números impares.
c) La cantidad de ceros.
d) El promedio de todos los números positivos ingresados.
e) La suma de todos los números negativos.
f) El número y la letra del máximo y el mínimo. */
function mostrar()
{
    var letraIngresada;
    var numeroIngresado;
    var numerosPares = 0;
    var numerosImpares = 0;
    var contadorCeros = 0;
    var sumaPositivos = 0;
    var promedioPositivos = 0;
    var cantidadPositivos = 0;
    var sumaNegativos = 0;
    var respuesta = "si";
    var bandera = false;

    while(respuesta == "si")
        {
            letraIngresada = prompt("Ingrese una letra.");

            numeroIngresado = prompt("Ingrese un número.");
            numeroIngresado = parseInt(numeroIngresado);

            while(numeroIngresado < -100 || numeroIngresado > 100 || numeroIngresado == 0)
            {
                numeroIngresado = prompt("Ingrese un numero valido.");
            }

            if(numeroIngresado % 2 == 0)
            {
                numerosPares ++;
            }
            else
            {
                numerosImpares ++;
            }

            if(numeroIngresado == 0)
            {
                contadorCeros ++;
            }

            if(numeroIngresado > 0)
            {
                sumaPositivos = sumaPositivos + numeroIngresado;
                cantidadPositivos ++;
            }

            else
            {
                sumaNegativos = sumaNegativos + numeroIngresado;
            }

            respuesta = prompt("¿Quiere seguir ingresando datos?","si");
        }  
        
        promedioPositivos = sumaPositivos / cantidadPositivos;

    document.write("La cantidad de números pares es: " + numerosPares + "<br>");
    document.write("La cantidad de números impares es: " + numerosImpares + "<br>");
    document.write("La cantidad de ceros es: " + contadorCeros + "<br>");
    document.write("El promedio de los números positivos es: " + promedioPositivos + "<br>");
    document.write("La suma de números negativos es: " + sumaNegativos + "<br>");
}
