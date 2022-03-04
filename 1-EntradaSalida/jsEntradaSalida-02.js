/*
Gonzalo Agustín Cossa
Div B
DNI 45889664
Ejercicio 1
Se pide cargar la ficha médica para 5 jugadores de fútbol categoría mayores.
Se solicita Nombre, Edad (entre 18 y 36), Peso y Altura. Se solicita:
A) Nombre del jugador más joven.
B) El peso del jugador más alto.
C) Promedio de altura del equipo.
D) Cantidad de jugadores que tienen entre 20 y 30 años y cuyo peso esté entre 70 y 90 kg.
*/
function mostrar() {
    var nombre;
    var edad;
    var peso;
    var altura;
    var repeticion;

    var totalAltura;
    var cantidadJugadores;

    var banderaJugadorMasJoven;
    var edadJugadorMasJoven;
    var nombreJugadorMasJoven;
    var banderaJugadorMasAlto;
    var alturaJugadorMasAlto;
    var pesoJugadorMasAlto;

    totalAltura = 0;
    cantidadJugadores = 0;

    banderaJugadorMasJoven = false;
    banderaJugadorMasAlto = false;

    repeticion = 0;

    while (repeticion < 5) {
        nombre = prompt("Ingrese su nombre.");
        while (!nombre) {
            nombre = prompt("Ingrese un nombre valido.");
        }

        edad = prompt("Ingrese su edad.");
        edad = parseInt(edad);
        while (edad < 18 || edad > 36 || !edad) {
            edad = prompt("Ingrese una edad valida.");
        }

        peso = prompt("Ingrese su peso.");
        peso = parseInt(peso);
        while (peso < 0 || !peso) {
            peso = prompt("Ingrese sea un peso valido");
        }

        altura = prompt("Ingrese su altura");
        altura = parseInt(altura);
        while (altura < 0 || !altura) {
            altura = prompt("Ingrese sea una altura valida");
        }

        //A) Nombre del jugador más joven.

        if (banderaJugadorMasJoven == false || edad < edadJugadorMasJoven) {
            banderaJugadorMasJoven = true;
            edadJugadorMasJoven = edad;
            nombreJugadorMasJoven = nombre;
        }

        // B) El peso del jugador más alto.

        if (banderaJugadorMasAlto == false || altura > alturaJugadorMasAlto) {
            banderaJugadorMasAlto = true;
            alturaJugadorMasAlto = altura;
            pesoJugadorMasAlto = peso;
        }

        // D) Cantidad de jugadores que tienen entre 20 y 30 años y cuyo peso esté entre 70 y 90 kg.
        if ((edad > 20 && edad < 30) && (peso > 70 && peso < 90)) {
            cantidadJugadores++;
        }

        totalAltura += altura;
        totalAltura = parseInt(totalAltura);

        repeticion++;
    }

    // C) Promedio de altura del equipo.

    promedioAltura = totalAltura / 5;
    promedioAltura = parseFloat(promedioAltura);

    document.write("<br> El nombre del jugador más joven es " + nombreJugadorMasJoven);
    document.write("<br> El peso del jugador más alto es: " + pesoJugadorMasAlto + "KG");
    document.write("<br> El promedio de altura del equipo es: " + promedioAltura + "cm");
    document.write("<br> La cantidad de jugadores que tienen entre 20 y 30 años y cuyo peso esté entre 70 y 90 kg.: " + cantidadJugadores);
}

