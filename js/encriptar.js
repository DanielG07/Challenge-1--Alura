const encriptacion = {
    e: "enter",
    i: "imes",
    a: "ai",
    o: "ober",
    u: "ufat"
}

var buttonEncriptador = document.querySelector("#encriptador");

buttonEncriptador.addEventListener("click", function(){
    let inputMensaje = document.querySelector("#mensaje-entrada");
    let outMensaje = document.querySelector("#mensaje-salida");

    let mensaje = inputMensaje.value;
    
    let mensajeEncriptado = encriptar(mensaje.toLowerCase());
    outMensaje.textContent = mensajeEncriptado

})

function encriptar(mensaje){
    let nuevoMensaje = mensaje;

    for(let clave in encriptacion){
        nuevoMensaje = nuevoMensaje.replaceAll(clave, encriptacion[clave]);
    }

    return nuevoMensaje;
}