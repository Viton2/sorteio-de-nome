//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

const inputNome = document.getElementById("amigo");
const listaAmigos = document.getElementById("listaAmigos");
const listaSorteado = document.getElementById("resultado");

let listaNomes = [];

function agregarAmigos() {
    const nome = inputNome.value;
    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }
    if (listaNomes.includes(nome)) {
        alert("Este nome já foi adicionado.");
        return;
    }
    listaNomes.push(nome);
    inputNome.value = "";
}

function adicionarAmigos() {
    // Limpa a lista HTML antes de adicionar novamente
    listaAmigos.innerHTML = "";

    // Adiciona cada nome do array à lista HTML
    listaNomes.forEach((nome) => {
        const novoItem = document.createElement("li");
        novoItem.textContent = nome;
        listaAmigos.appendChild(novoItem);
    });
}

function adicionarAmigo() {
    agregarAmigos();
    adicionarAmigos();
}

function sortearAmigo() {
    if (listaNomes.length === 0) {
        alert("A lista de amigos está vazia. Adicione nomes antes de sortear.");
        return;
    }
    // Verifica se a lista de sorteados não está vazia e limpa
    if (listaSorteado.children.length > 0) {
        listaSorteado.innerHTML = "";
    }
    // Seleciona um índice aleatório
    const indiceSorteado = Math.floor(Math.random() * listaNomes.length);
    const nomeSorteado = listaNomes[indiceSorteado];

    // Atualiza a lista HTML de amigos
    adicionarAmigos();

    listaAmigos.innerHTML = "";

    // Adiciona o amigo sorteado na lista de sorteados
    const novoNomeSorteado = document.createElement("li");
    novoNomeSorteado.textContent = `O amigo secreto sorteado é: ${nomeSorteado}`;
    listaSorteado.appendChild(novoNomeSorteado);
}


