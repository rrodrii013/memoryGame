function descubrir() {

    var tarjetasPendientes;
    var descubiertas;
    var totalDescubiertas = document.querySelectorAll(".descubierta:not(.acertada)") ;

    //establecemos límite de cartas descubiertas

    if (totalDescubiertas.length > 1){
        return ;
    }

        /*utilizamos selector :not para que cuente con las tarjetas que 
    tienen la clase "descubierta" pero no la clase "acertada" */

    this.classList.add("descubierta") ;
    descubiertas = document.querySelectorAll(".descubierta:not(.acertada)") ;
   
    if (descubiertas.length < 2){
        return ;
    }

 comparar(descubiertas);
 actualizaContadorMovimientos();
 tarjetasPendientes = document.querySelectorAll(".tarjeta:not(.acertada)") ; 


 finalizar() 
}


/*lanzamos la funcion luego de lanzar las cartas y
 tener un numero suficiente de cartas para lanzarlas*/

function comparar(TarjetasAComparar) {
    
    //condiciones de acierto o error 

    if (TarjetasAComparar[0].dataset.valor === TarjetasAComparar[1].dataset.valor) {
        acierto(TarjetasAComparar);
    }
    else{
       sigueBuscando(TarjetasAComparar);
    }} ;


