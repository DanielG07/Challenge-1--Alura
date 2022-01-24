var buttonCopiar = document.querySelector("#copiar");

buttonCopiar.addEventListener("click", function(){
    let mensajeSalida = document.querySelector("#mensaje-salida");
    let aux = document.createElement("input");
    aux.value = mensajeSalida.textContent;
    document.body.appendChild(aux);
    aux.select();
    document.execCommand('copy')
    document.body.removeChild(aux);

    
});