// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.//
let amigo = [];

function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nombreAmigo = inputAmigo.value;
    console.log(amigo);
    if (!nombreAmigo) {
        alert("debes ingresar un nombre valido");
        return;
    }
    amigo.push(nombreAmigo);
    inputAmigo.value = "";
    inputAmigo.focus();
    renderizarAmigos();
}

function renderizarAmigos(){
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    for (let i = 0; i < amigo.length; i++) {
        let item = document.createElement ("li");
        item.textContent = amigo [i];
        //const element = array[index];
        listaAmigos.appendChild(item);
        
    }
}
function sortearAmigo() {
    if (amigo.length === 0) {
        alert("cadena de amigos vacia, no hay amis para sortear");
        return;
    }
    let amigoSorteado = amigo[Math.floor(Math.random() * amigo.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `el amigo secreto elegido es: ${amigoSorteado}`;

    let limpiarLista = documnet.getElementById("listaAmigos");
    limpiarLista.innerHTML = "";

}

// referencia bibliografica tomada de la mentoria challenge amigo secreto a jose gonzales y wilfredo rojas 
// tiempo de ejecucion limitado