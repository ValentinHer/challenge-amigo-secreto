// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

const agregarAmigo = () => {
    let input = document.getElementById("amigo");
    let inputValue = input.value;

    if (inputValue.trim().length <= 0) {
        alert("Por favor, inserte un nombre");
        return;
    }

    amigos.push(inputValue);
    input.value = "";   

    let lista = document.getElementById("listaAmigos");

    lista.innerHTML = "";
    
    lista.innerHTML = amigos.map(item => {
        return `<li>
            ${item}
        </li>`
    }).join("")

}