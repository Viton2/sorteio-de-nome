//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.


const nomeInput = document.getElementById("amigo");
let listaHTML = document.getElementById("listaAmigos");

function adicionarAmigo() {
    let nome = nomeInput.value;
    console.log(nome);

    if (nome === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }
    const itensLista = Array.from(listaHTML.children).map((item) => item.textContent);

    if (itensLista.includes(nome)) {
        alert("Este nome já foi adicionado.");
        return;
    }
    // Cria um novo elemento <li> para adicionar o nome
    const novoItem = document.createElement("li");
    novoItem.textContent = nome;

    // Adiciona o <li> na lista UL
    listaHTML.appendChild(novoItem);

    // Limpa o campo de input
    nomeInput.value = "";
    console.log(listaHTML.innerHTML);
}


// function sortearAmigo() {
//     let listaResultado = document.getElementById("resultado");
//
// }
