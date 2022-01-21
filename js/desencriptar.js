const desencriptacion = {
    ufat: "u",
    ober: "o",
    ai: "a",
    imes: "i",
    enter: "e"
}

var buttonDesencriptador = document.querySelector("#desencriptador");

buttonDesencriptador.addEventListener("click", function(){
    let inputMensaje = document.querySelector("#mensaje-entrada");
    let outMensaje = document.querySelector("#mensaje-salida");
    
    let mensaje = inputMensaje.value;
    
    let mensajeDesencriptado = desencriptar(mensaje.toLowerCase());
    outMensaje.textContent = mensajeDesencriptado

    
})

function desencriptar(mensaje){
    let nuevoMensaje = mensaje;
    
    for(let clave in desencriptacion){
        nuevoMensaje = nuevoMensaje.replaceAll(clave, desencriptacion[clave]);
    }

    return nuevoMensaje;
}