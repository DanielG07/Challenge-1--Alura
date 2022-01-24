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
    
    if(mensaje){
        let mensajeEncriptado = encriptar(mensaje.toLowerCase());
        outMensaje.textContent = mensajeEncriptado;
    }
    else{
        alert("Ingresa un mensaje a encriptar.");
    }

    inputMensaje.value = "";
    inputMensaje.focus();

})

function encriptar(mensaje){
    let nuevoMensaje = mensaje;

    for(let clave in encriptacion){
        nuevoMensaje = nuevoMensaje.replaceAll(clave, encriptacion[clave]);
    }

    return nuevoMensaje;
}