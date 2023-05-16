const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");


//La letra "e" es convertida para "enter"//
//La letra "i" es convertida para "imes"//
//La letra "a" es convertida para "ai"//
//La letra "o" es convertida para "ober"//
//La letra "u" es convertida para "ufat"//

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function encriptar(stringEncriptada){
    let matrizcCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < matrizcCodigo.length; i++){
        if(stringEncriptada.includes(matrizcCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizcCodigo[i][0], matrizcCodigo[i][1])

        }

    }
    return stringEncriptada
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}


function desencriptar(stringDesencriptada){
    let matrizcCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i < matrizcCodigo.length; i++){
        if(stringDesencriptada.includes(matrizcCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizcCodigo[i][1], matrizcCodigo[i][0])

        }

    }
    return stringDesencriptada
}

function copyToClipBoard() {

    var content = document.getElementById('mensaje');
    
    content.select();
    document.execCommand('copy');
}

