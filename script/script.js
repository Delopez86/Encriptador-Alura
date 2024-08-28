const entrada = document.querySelector(".entrada");
const mensaje = document.querySelector(".mensaje");
const logo = document.querySelector(".imagen_muñeco");
const estado= document.querySelector(".estado");
const indicacion = document.querySelector(".indicacion");
const respuesta = document.querySelector(".respuesta");
const seccionR = document.querySelector(".seccion_respuesta");
const copiaBoton = document.querySelector(".boton_copiar");

function botonEncrip() {

    respuesta.style.display = "block";
    copiaBoton.style.display = "block";

    let textoEncriptado = encriptar(entrada.value);
    respuesta.value = textoEncriptado;

    logo.style.display = "none";
    estado.style.display = "none";
    indicacion.style.display = "none";

}

function botonDesencrip() {

    respuesta.style.display = "block";
    copiaBoton.style.display = "block";

    let textoDesencriptado = desencriptar(entrada.value);
    respuesta.value = textoDesencriptado;

    logo.style.display = "none";
    estado.style.display = "none";
    indicacion.style.display = "none";
}

function copiar() {

      respuesta.select();
      respuesta.setSelectionRange(0, 99999); 
      document.execCommand("copy");
      alert("Texto copiado al portapapeles: ");
    
}

function encriptar(text) {
    let matriz = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    text = text.toLowerCase();

    for (let i = 0; i < matriz.length; i++) {
        
        if(text.includes(matriz[i][0])){
            text=text.replaceAll(matriz[i][0],matriz[i][1]);
        }
        
    }
    return text;
}

function desencriptar(textDesencriptado) {
    let matriz = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    textDesencriptado = textDesencriptado.toLowerCase();

    for (let i = 0; i < matriz.length; i++) {
        
        if(textDesencriptado.includes(matriz[i][1])){
            textDesencriptado=textDesencriptado.replaceAll(matriz[i][1],matriz[i][0]);
        }
        
    }
    return textDesencriptado;
}
