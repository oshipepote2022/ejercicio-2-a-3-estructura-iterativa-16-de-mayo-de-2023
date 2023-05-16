const contenedorDeMensajes= document.querySelector("#contenedor");
const cantidadDeSolicitudes= document.querySelector("#cantidad");


function funcion1() {
    let CANTIDAD_MAXIMA_ITERACIONES= cantidadDeSolicitudes.value;
    for (let i = 0; i < CANTIDAD_MAXIMA_ITERACIONES; i++){
    
        contenedorDeMensajes.innerHTML+=`<p>hola</p>`;
       
    }
    
}

