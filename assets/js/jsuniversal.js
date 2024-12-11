function  volverAPaginaAnterior() {
        window.history.back()
    }
function informacion() {alert ("Programador: Iván Francsico Ezquivel - Edad: 17 años - Nacionalidad: Argentino - Correo: ivanezquivel672@gmail.com")}



function darkmode() {
document.body.style.backgroundColor="black"
document.getElementById("barra").style.backgroundColor="#454545"
document.getElementById("inicio").style.backgroundColor="#545454"
document.getElementById("inicio1").style.backgroundColor="#545454"
document.getElementById("cuerpo").style.backgroundColor="#2B2B2B"
document.getElementById("cuerpo1").style.backgroundColor="#2B2B2B"
document.getElementById("cuerpo2").style.backgroundColor="#545454"
document.getElementById("letra").style.color="#ffffff"
document.getElementById("letra1").style.color="#ffffff"
document.getElementById("letra2").style.color="#ffffff"
document.getElementById("letra3").style.color="#ffffff"

var elementos = document.getElementsByClassName('card');
for (var i = 0; i < elementos.length; i++) {
    elementos[i].style.backgroundColor = '#545454'; // Cambia el color de fondo
}

var parrafosDestacados = document.getElementsByClassName('card-title'); for (var i = 0; i < parrafosDestacados.length; i++) {
parrafosDestacados[i].style.color = '#fff';
}

}