//Declaramos la variable global para utulizarla mas adelante
let playerNameGlobal = "";

function gamePresentacion(prevenir) {

    //Declaramos las constantes para luego remover del DOM
   

    const playerNameInput = document.getElementById("nombre");
    const obligatorio = playerNameInput.value.trim() ;




    if (obligatorio === '') {
        
        document.getElementById("campo-obligatorio").innerHTML = "*Este campo es obligatorio";
        return;
        
        //No sale de la funcion hasta que campo tenga algo escrito
    }

    /* El formulario está haciendo una acción por defecto de 
    enviar el form y recargar la página 
    Usamos preventDefault() para evitarlo*/
        
    prevenir.preventDefault();



    // Luego de verificar que exista un nombre, añadimos presentacion
    presentacion.style.display = "flex";


    //Declaramos nombre de player antes de borrar bienvenida

    const playerName = playerNameInput.value ;

    playerNameGlobal = playerName;

   


    // Elimina elementos de la pantalla

    if(bienvenidaH2 && form) {
        bienvenidaH2.remove();
        form.remove();
   
    }


    document.getElementById("presentacion-name").innerHTML = `
     
    <h1 id="presentacion-name"> ¡Hola, ${playerName}! </h1> `
    
}
document.getElementById("btn-bienvenida").addEventListener("click", gamePresentacion);
