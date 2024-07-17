let cabecera = document.querySelector("cabecera");
function reiniciarJuego() {

 // Restablecer las variables relacionadas con el contador
  movimientos = 0;
  movimientosActualizados = "00";

  //Agregamos el valor a #mov
  document.getElementById("mov").value = movimientosActualizados;


    //Al darle a aceptar el tiempo vuelve a cero
    segundos = 0;
    minutos = 0;
    minutosTotales.innerHTML = '00';
    segundosTotales.innerHTML = '00';

    //Comienza a contar el tiempo
    iniciaCronometro();


    // Eliminar el HTML (mensaje) agregado anteriormente
    const limiteMovElement = document.getElementById("limite_mov");
    if (limiteMovElement) {
      limiteMovElement.remove();
    }
    

   //Mostramos elemento juego 
    if (juego) {

      juego.classList.remove("ocultar");
    }


    reparteTarjetas();

    
    //Funcion para descubrir tarjetas
    document.querySelectorAll(".tarjeta").forEach(function(elemento) {
      elemento.addEventListener('click', descubrir);
     });
  
        
}
 
