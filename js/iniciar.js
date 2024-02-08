let movimientosSeleccionadosGlobal = 0;
let movimientosSeleccionados = document.getElementById("selec-mov-number");
let juego = document.getElementById("juego");
let bienvenida = document.getElementById("bienvenida");



function iniciar(event){
    event.preventDefault();
  
    const presentacion = document.getElementById("presentacion");


    movimientos = 0;
    reparteTarjetas();

    document.querySelectorAll(".tarjeta").forEach(function(elemento) {
     elemento.addEventListener('click', descubrir);
    });

       //Declaramos nombre de player antes de borrar bienvenida
        const playerName = playerNameGlobal ;



        // Colocamos el nombre del player en cabecera
         document.getElementById("nombre-cabecera").innerHTML = `
            <h3 id="nombre-cabecera1">  Está jugando:<br> </h3> <h3 class="nombre-cabecera"> ${playerName} </h3> 
            `

        
    //Agregamos los movimientos seleccionados por player al juego
    //addEventListener coon 'change' se activa cada vez que el player escoge un nuevo valor

   movimientosSeleccionados.addEventListener('change', function() {
    movimientosSeleccionadosGlobal = movimientosSeleccionados.value;
   }) 

   movimientosSeleccionadosGlobal = movimientosSeleccionados.value;

   //Se agrega el movimiento seleccionado a la cabecera
   document.getElementById("mov-total").textContent =  movimientosSeleccionadosGlobal ;


   
    //Eliminamos div bienvenida y presentacion
    if (bienvenida && presentacion) {
        bienvenida.remove(); 
        presentacion.remove();

        
    }


    //Mostramos elemento juego 
    if (juego) {

        juego.classList.remove("ocultar");

    }


    iniciaCronometro();

}

/* Se apodera del botón "Aceptar" a través de su ID
y hace que se ejecute iniciar() por click */

document.getElementById("btn-iniciar").addEventListener("click", iniciar)
