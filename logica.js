var botonEncriptar = document.querySelector(".btnencriptar");
var botonDesencriptrar = document.querySelector(".btndesencriptar");
var muneeco = document.querySelector(".muneco")
var textIzq = document.querySelector(".textleft")
var parrafoIzq = document.querySelector(".parraleft")
var resultado = document.querySelector(".textoresultado")

botonEncriptar.onclick = encriptar;
botonDesencriptrar.onclick = desencriptar;

function encriptar(){

    var area = recuperartexto()
    resultado.textContent = encriptartexto(area);
    ocultarAdelante();
}

function desencriptar(){

    var area = recuperartexto()
    resultado.textContent = desencriptartexto(area);
    ocultarAdelante();
}

function recuperartexto(){
    var area = document.querySelector(".area");
    return area.value;
}

function ocultarAdelante(){
    muneeco.classList.add("ocultar");
    textIzq.classList.add("ocultar");
    parrafoIzq.classList.add("ocultar");
}


function encriptartexto(mensaje){
    var texto = mensaje;
    var textofinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textofinal = textofinal + "ai"
        }
        else if(texto[i] == "e"){
            textofinal = textofinal + "enter"
        }
        else if(texto[i] == "i"){
            textofinal = textofinal + "imes"
        }
        else if(texto[i] == "o"){
            textofinal = textofinal + "ober"
        }
        else if(texto[i] == "u"){
            textofinal = textofinal + "ufat"
        }
        else {
            textofinal = textofinal + texto[i]; 
        }
    }
    return textofinal;
}

function desencriptartexto(mensaje){
    var texto = mensaje;
    var textofinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textofinal = textofinal + "a";
            i = i + 1;
        }
        else if(texto[i] == "e"){
            textofinal = textofinal + "e";
            i = i + 4;
        }
        else if(texto[i] == "i"){
            textofinal = textofinal + "i"
            i = i + 3;
        }
        else if(texto[i] == "o"){
            textofinal = textofinal + "o"
            i = i + 3;
        }
        else if(texto[i] == "u"){
            textofinal = textofinal + "u"
            i = i + 3;
        }
        else {
            textofinal = textofinal + texto[i]; 
        }
    }
    return textofinal;
}

const btnCopiar = document.querySelector(".btncopiar"); 
    btnCopiar.addEventListener("click", copiar = () => {
    var contenido = document.querySelector(".textoresultado").textContent;
    navigator.clipboard.writeText(contenido);
    const elementoAResetear = document.querySelector(".area");
    elementoAResetear.value = "";
})