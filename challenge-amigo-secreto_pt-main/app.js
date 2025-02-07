let amigos = [];
let sorteioRealizado = false;

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    if (nome === "") {
        alert("Digite um nome.");
        return;
    }

    if (amigos.includes(nome)) {
        alert("Esse nome já foi adicionado.");
        return;
    }

    amigos.push(nome);
    atualizarLista();
    input.value = "";
    input.focus();
}

function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        li.classList.add("lista-item");

        const botaoRemover = document.createElement("button");
        botaoRemover.textContent = "❌";
        botaoRemover.classList.add("remove-button");
        botaoRemover.onclick = () => removerAmigo(index);

        li.appendChild(botaoRemover);
        lista.appendChild(li);
    });
}

function removerAmigo(index) {
    amigos.splice(index, 1);
    atualizarLista();
}

function sortearAmigo() {
    if (sorteioRealizado) {
        alert("O sorteio já foi realizado! Atualize a página para reiniciar.");
        return;
    }

    if (amigos.length === 0) {
        alert("Adicione pelo menos um amigo antes de sortear.");
        return;
    }

    const sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li class="resultado-item">🎉 O amigo secreto sorteado é: <strong>${sorteado}</strong> 🎉</li>`;

    sorteioRealizado = true;


    document.querySelector(".button-draw").disabled = true;
    document.querySelector(".button-draw").style.opacity = "0.5";
    document.querySelector(".button-draw").style.cursor = "not-allowed";
}
