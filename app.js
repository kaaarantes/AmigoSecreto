//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo(){
    let amigo = document.getElementById('amigo');

    if (amigo.value == '') {
        alert('Por favor insira um nome.');
    }

    let lista = document.getElementById('listaAmigos');
    amigos.push(amigo.value);

    if (lista.textContent == '') {
        lista.textContent = amigo.value;
    } else {
        lista.textContent = lista.textContent + ', ' + amigo.value;
    }
    amigo.value = '';
}

function sortearAmigo(){
    if (amigos.length < 4){
        alert('Deve ter no mínimo 4 participantes');
        return;
    }
    embaralha(amigos);
    let listaSorteio = document.getElementById('resultado');
    for (let i = 0; i < amigos.length; i++){
        if (i == amigos.length - 1){
            listaSorteio.innerHTML =  listaSorteio.innerHTML +  amigos[i] + ' > ' + amigos[0] + '<br/>';
        } else {
            listaSorteio.innerHTML =  listaSorteio.innerHTML +  amigos[i] + ' > ' + amigos[i + 1] + '<br/>';
        }
    }
}

function reiniciar(){
    amigos = [];
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('resultado').innerHTML = '';
}

function embaralha(lista){
    for(let indice = lista.length; indice; indice--){
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

