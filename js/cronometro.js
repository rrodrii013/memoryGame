
let timeoutCronometro;
let segundos = 0;
let minutos = 0;
let textoSegundos = '00';
let textoMinutos = '00';




function actualizaContador() {

    
        segundos ++;
        if (segundos > 59 ){
            segundos = 0;
            minutos ++;
        }
  
     /* para los casos de segundos y minutos menores a 10
    se agrega un cero, para mantener el doble digito */

   if (segundos < 10 ){
        textoSegundos = '0' + segundos.toString();
    }else {
        textoSegundos = segundos.toString();
    }
    if (minutos < 10){
        textoMinutos = '0' + minutos.toString();
    } else {
        textoMinutos = minutos.toString();
    }
  

     /* pasa las variables guardadas al texto html en el class minutos
    y al class segundos */
     minutosTotales.innerHTML = textoMinutos;
    segundosTotales.innerHTML = textoSegundos;
 }
    

 function iniciaCronometro() {

     // Inicia un nuevo timeout
        ejecutarCronometro()
}

    function detenerCronometro() {

        clearTimeout(timeoutCronometro)
 }


 function ejecutarCronometro() {
        
  // Detiene el timeout anterior, si existe
     clearTimeout(timeoutCronometro);

    // Ejecuta la función actualizaContador después de 1s
    timeoutCronometro = setTimeout(function() {
        actualizaContador();

    // Vuelve a llamar a la función para que se ejecute de forma continua
        ejecutarCronometro();
        },1000)
 }



 
     

    