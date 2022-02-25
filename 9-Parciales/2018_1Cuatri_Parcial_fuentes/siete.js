/* Bienvenidos.
Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10) , 
el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert:
a) El promedio de las notas totales.
b) La nota más baja y el sexo de esa persona.
c) La cantidad de varones que su nota haya sido mayor o igual a 6. */
function mostrar()
{
    var nota;
    var sexo;
    var promedio;
    var notaTotal = 0;
    var flag = true;
    var notaMinima;
    var contadorVarones = 0;

    for(repeticion = 0 ; repeticion < 1 ; repeticion ++)
    {
        nota = prompt("Ingrese su nota.");
        nota = parseInt(nota);
        
        while(nota > 10 || nota < 0 || !nota)
        {
            nota = prompt("Ingrese una nota valida.");
        }
        
        notaTotal = notaTotal + nota;

        sexo = prompt("Ingrese un sexo.","f");

        while(sexo !="f" && sexo !="m")
        {
            sexo = prompt("Ingrese un sexo valido.");
        }

        if(flag)
        {
        notaMinima = nota;
        sexoNotaMin = sexo;
        flag = false;
        }
        else 
            if (nota < notaMinima)
            {
                notaMinima = nota;
                sexoNotaMin = sexo;
            }

        if(nota >= 6 && sexo == "m")
        {
            contadorVarones ++;
        }
    }
    
    promedio = notaTotal / 5;

    alert("El promedio de las notas totales es " + promedio);
    alert("La nota más baja es " + notaMinima + " y su sexo es " + sexoNotaMin);
    alert("La cantidad de varones con nota igual o mayor a 6 es: " + contadorVarones);
}
