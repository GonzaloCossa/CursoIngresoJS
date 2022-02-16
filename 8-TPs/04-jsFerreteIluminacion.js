/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

Gonzalo Cossa
Div B TP N°4

 */

function CalcularPrecio() 
{
    var cantidad;
    var precio;
    var valorIngresosBrutos = 0;
    var precioConDescuento;
    var precioConIIBB;
    var marca;
    var descuento;

    cantidad = document.getElementById("txtIdCantidad").value;
    marca = document.getElementById("Marca").value;
    cantidad = parseInt(cantidad);

    //Precio de las lamparas sin descuento
    precio = (35 * cantidad);

    switch(cantidad)
        {
            case 1:
            case 2:
                descuento = 1;
            break;
            
            case 3:
                switch(marca)
                {
                    case "ArgentinaLuz":
                        descuento = 0.85;//DESCUENTO 15%
                    break;

                    case "FelipeLamparas":
                        descuento = 0.9;//DESCUENTO 10%
                    break;

                    default:
                        descuento = 0.95;//DESCUENTO 5%
                    break;
                }
            case 4:
                    if(marca == "ArgentinaLuz" || marca == "FelipeLamparas")
                    {   
                    descuento = 0.75; // 25%
                    }
                    else
                    {
                    descuento = 0.8; // 20%
                    }   
                break;

            case 5:
                    if(marca == "ArgentinaLuz")
                    {
                    descuento = 0.6; // 40%
                    }
                    else
                    {
                    descuento = 0.7; // 30%
                    }  
                break;
            
            default: 
                descuento = 0.5; // 50%
            break;   
        }
    precioConDescuento =  precio * descuento;

    if(precioConDescuento > 120)
        {
        valorIngresosBrutos = precioConDescuento * 0.1; //Ingresos brutos del 10%
        alert("De IIBB usted pago " + valorIngresosBrutos);
        }

    precioConIIBB = precioConDescuento + valorIngresosBrutos;

    document.getElementById("txtIdprecioDescuento").value = precioConIIBB;
}