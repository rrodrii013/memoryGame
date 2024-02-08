function finalizar() {
    movimientosActualizados = movimientosActualizados.toString() ; // lo cambiamos a string para utilizar .charAt()
     playerName = playerNameGlobal;

    //Todas las tarjetas han sido acertadas
    let todasAcertadas = true;


    //Seleccionamos las tarjetas que no tienen la clase .acertada
    document.querySelectorAll(".tarjeta:not(.acertada)").forEach(function(tarjeta) {


        //Si existe alguna que no sea certada
        if(!tarjeta.classList.contains("acertada")) {

            todasAcertadas = false;

            //El juego no ha acabado 

        }

 
    });
  
    //Si todas las tarjetas han sido acertadas...
    if(todasAcertadas) {

        clearTimeout(timeoutCronometro);
       
        if(juego) {
            juego.remove()
        }


        if (movimientosActualizados < 10) {
            
            //charAt() muestra solamente el indice seleccionado entre los parentesis (solo se usa con string)
            movimientosActualizados = movimientosActualizados.charAt(1);
        }
   
       let finalizado =  document.getElementById("finalizado") ;

        finalizado.innerHTML = `
        <h1 id= "finalizado-felicidades"> ¡Felicidades ${playerName}! </h1>
        <h1 id= "finalizado-datos"> Has acabado el juego en ${textoMinutos}:${textoSegundos}. <br>
        Para ello, necesitaste de ${movimientosActualizados} movimientos. <br ¡Buen trabajo!></h1>

        <div id "finalizar-btn">  <button id="volver-a-jugar" onclick="playAgain()">Aceptar</button>  </div>
        `

        document.body.appendChild(finalizado);


    }
  
}
     


function playAgain() {
   let finalizado = document.getElementById("finalizado");
   let recarga = location.reload();

   //Removemos el mensaje de finalizado
   if(finalizado) {
    finalizado.remove()
 }

 //Recargamos la pagina para volver a pantalla de inicio 
    if (recarga) {

        recarga
    }
   
    }

    







