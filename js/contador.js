//declaramos mesa usarla en distintas funciones
const mesa = document.querySelector("main") ;

function actualizaContadorMovimientos() {
   
   movimientos++;
   movimientosActualizados = movimientos;

   if(movimientos < 10) {
    movimientosActualizados = "0" + movimientos}


   document.querySelector("#mov").innerHTML = movimientosActualizados;


   if (movimientos > movimientosSeleccionadosGlobal) {

      finalizado.style.display = "none" ;

      detenerCronometro();

       //Creamos el elemento section
       const section = document.createElement("section");
       section.innerHTML =
            `
               <div id="limite_mov">
               <h1 class="limite">Lo siento,<br> excediste el límite de movimientos. <br>🧐​</h1>
               <button class="button_limite" onclick= "reiniciarJuego()">Aceptar</button>
               </div>
            `;
   
   
   
   //Añadimos la section al body
   document.body.appendChild(section);
   
   
      //Mostramos elemento juego 
      if (juego) {

         juego.classList.add("ocultar");

         //juego.classList.add("ocultar");
 
     }
         
      
   
   }
} 
