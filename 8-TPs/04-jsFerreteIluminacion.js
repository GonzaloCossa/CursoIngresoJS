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
    var precioDeLamparita;
    var cantidadDeLamparita;
    var marca;
    var precioSinDescuento;

    precioDeLamparita = 35;
    cantidadDeLamparita = document.getElementById("txtIdCantidad").value;
    marca = document.getElementById("Marca").value;
    cantidadDeLamparita = parseInt(cantidadDeLamparita);
    precioSinDescuento = cantidadDeLamparita * precioDeLamparita;

        // Punto A

    if(cantidadDeLamparita > 5) 
    {
        document.getElementById("txtIdprecioDescuento").value = (precioSinDescuento * 0.50);
    }

        // Punto B

    if((cantidadDeLamparita == 5) && (marca == "ArgentinaLuz"))
        {
            document.getElementById("txtIdprecioDescuento").value = (precioSinDescuento * 0.40);
        }
        else 
        {  
            document.getElementById("txtIdprecioDescuento").value = (precioSinDescuento * 0.30);
        }

        // Punto C

    if((cantidadDeLamparita == 4) && (marca == "ArgentinaLuz" || marca == "FelipeLamparas"))
    {
        document.getElementById("txtIdprecioDescuento").value = (precioSinDescuento * 0.25);
    }
        else
        {
            document.getElementById("txtIdprecioDescuento").value = (precioSinDescuento * 0.20);
        }
}

