/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */

function CalcularPrecio() 
{
    var precioDescuento;
    var precioTotal;
    var cantidad;
    var precioFinal;
    var marca;
    var valorIngresosBrutos = 0;
    var descuento;

    cantidad = document.getElementById("txtIdCantidad").value;
    marca = document.getElementById("Marca").value;
    cantidad = parseInt(cantidad);

    //Precio de las lamparas sin descuento
    precioTotal = (35 * cantidad);

    //A
    if(cantidad > 5){
        descuento = 0.5; // 50%
    //B
    }else 
        if(cantidad == 5)
        {
            if(marca == "ArgentinaLuz")
            {
            descuento = 0.6; // 40%
            }
            else
            {
            descuento = 0.7; // 30%
            }
        }
    //C
    else 
        if(cantidad == 4)
        {
            if(marca == "ArgentinaLuz" || marca == "FelipeLamparas")
            {   
            descuento = 0.75; // 25%
            }
            else
            {
            descuento = 0.8; // 20%
            }
    //D
    }else 
        if(cantidad == 3)
        {
            if(marca == "ArgentinaLuz" )
            {
            descuento = 0.85; // 15%
            }
        else 
            if(marca == "FelipeLamparas")
            {
            descuento = 0.9; // 10%
            }
        else
            {
            descuento = 0.95; // 5%
            }
        }
    //Si no se aplica descuento
    else
        {
        descuento = 1; // Precio base
        }

        //Aplico descuento
    precioDescuento =  precioTotal * descuento;

        //Ingresos brutos
    if(precioDescuento > 120)
        {
        valorIngresosBrutos = precioDescuento * 0.1; //Ingresos brutos del 10%
        alert("De IIBB usted pago " + valorIngresosBrutos);
        }

        //Aplico ingresos brutos si corresponde
    precioFinal = precioDescuento + valorIngresosBrutos;

        //Muestro el precio
    document.getElementById("txtIdprecioDescuento").value = precioFinal;
}