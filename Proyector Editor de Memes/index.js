const formularioTexto = document.querySelector(".formulario-texto")
const botonTexto = document.querySelector(".div-texto")
const formularioImagen = document.querySelector(".formulario-imagen")
const botonImagen = document.querySelector(".div-imagen")

const mostrarDivTexto = () =>{
    formularioTexto.style.display ="flex"
    formularioImagen.style.display ="none"
}
const mostrarDivImagen = () =>{
    formularioImagen.style.display ="flex"
    formularioTexto.style.display ="none"
}

botonTexto.onclick = mostrarDivTexto
botonImagen.onclick = mostrarDivImagen
