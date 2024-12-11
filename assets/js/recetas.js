function darkmode(){
    document.body.style.backgroundColor="black"
    document.getElementById("pbarra").style.backgroundColor="#454545"
    document.getElementById("pinicio").style.backgroundColor="#545454"
    document.getElementById("pinicio1").style.backgroundColor="#545454"
    document.getElementById("pcuerpo").style.backgroundColor="#545454"
 
    var elementos = document.getElementsByClassName('card');
    for (var i = 0; i < elementos.length; i++) {
        elementos[i].style.backgroundColor = '#545454'; // Cambia el color de fondo
    }


    var parrafosDestacados = document.getElementsByClassName('card-title'); for (var i = 0; i < parrafosDestacados.length; i++) {
    parrafosDestacados[i].style.color = '#fff';
}



    }