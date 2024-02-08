
function acierto(lasTarjetas) {
    lasTarjetas.forEach(function(elemento) {
        elemento.classList.add("acertada")

    })}



function sigueBuscando(lasTarjetas) {
    lasTarjetas.forEach(function(elemento) {
        elemento.classList.add("sigueBuscando");
    });



 /* Permite añadir un intervalo de tiempo antes de ejecutar
 la siguiente función. Primero le damos la función y luego
 el tiempo que querramos */

    setTimeout(function(){
        lasTarjetas.forEach(function(elemento) {
            elemento.classList.remove("descubierta");
            elemento.classList.remove("sigueBuscando"); 
        });
    }, 1000);

}
