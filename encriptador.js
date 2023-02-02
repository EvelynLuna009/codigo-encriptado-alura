var textoIngresado = document.querySelector(".input-padron");
var textoSalida = document.querySelector(".salida-resultado");

function botonEncriptar() {
    var textoEncriptado = encriptarEntrada(textoIngresado.value)
    textoSalida.value = textoEncriptado
}

function encriptarEntrada(stringEncriptar) {
    var llavesEncriptar = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptar = stringEncriptar.toLowerCase()

    for(var i = 0; i < llavesEncriptar.length; i++) {
        if(stringEncriptar.includes(llavesEncriptar[i][0])) {
            stringEncriptar = stringEncriptar.replaceAll(llavesEncriptar[i][0],llavesEncriptar[i][1]);
        }
    }
    return stringEncriptar
}

function botonDesencriptar() {
    var textoDesencriptado = desencriptarSalida(textoIngresado.value)
    textoSalida.value = textoDesencriptado

}

function desencriptarSalida(stringDesencriptar) {
    var llavesEncriptar = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptar = stringDesencriptar.toLowerCase()

    for(var i = 0; i < llavesEncriptar.length; i++) {
        if(stringDesencriptar.includes(llavesEncriptar[i][0])) {
            stringDesencriptar = stringDesencriptar.replaceAll(llavesEncriptar[i][1],llavesEncriptar[i][0]);
        }
    }
    return stringDesencriptar
}

/*function caracteresEspeciales(){
    var caracteresEspeciales = ["á","é","í","ó","ú"];
    var textoIngresado = document.querySelector(".input-padron");

    if (textoIngresado.includes(caracteresEspeciales[caracteresEspeciales.length])) {
        alert("No se permiten caracteres especiales")
    }
    
    else {
        var textoEncriptado = encriptarEntrada(textoIngresado.value)
        textoSalida.value = textoEncriptado
    }
    
}*/



document.querySelector(".boton-copiar").onclick = async () => {
    try {
        await navigator.clipboard.writeText(textoSalida.value)
    } catch (error) {
        console.log(error)
    }

    alert("Texto Copiado");
}

/*for(var i=0;i < caracteresEspeciales.length;i++) {
        if (textoIngresado.includes(caracteresEspeciales)) {
            alert("No se permiten caracteres especiales")
        }
        return 
    }*/