//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.


const nomeInput = document.getElementById("amigo");
let listaNomes = [];
let listaHTML = document.getElementById("listaAmigos");
let resultado = document.getElementById("resultado");

function agregarAmigos(){
    let nome = nomeInput.value;
    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }
    const itensLista = Array.from(listaHTML.children).map((item) => item.textContent);

    if (itensLista.includes(nome)) {
        alert("Este nome já foi adicionado.");
        return;
    }
    nomeInput.value = "";
    return nome;

}

function adicionarAmigo() {
    let nome = agregarAmigos();
    console.log(nome);

    // Cria um novo elemento <li> para adicionar o nome
    const novoItem = document.createElement("li");
    novoItem.textContent = nome;

    // Adiciona o <li> na lista UL
    listaHTML.appendChild(novoItem);

    // Limpa o campo de input
    console.log(listaHTML.innerHTML);
}


function sortearAmigo() {
    // Obtém todos os itens da lista de amigos
    const itensLista = Array.from(listaHTML.children);

    // Verifica se a lista está vazia
    if (itensLista.length === 0) {
        alert("A lista de amigos está vazia. Adicione nomes antes de sortear.");
        return;
    }

    // Seleciona um índice aleatório
    const indiceSorteado = Math.floor(Math.random() * itensLista.length);
    const amigoSorteado = itensLista[indiceSorteado];

    // Remove o amigo sorteado da lista de amigos
    listaHTML.removeChild(amigoSorteado);

    // Adiciona o amigo sorteado na lista de sorteados
    const novoItemSorteado = document.createElement("li");
    novoItemSorteado.textContent = amigoSorteado.textContent;
    resultado.appendChild(novoItemSorteado);
}
