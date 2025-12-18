export class MainView {
    constructor() {
        this.telaLogin = document.getElementById('secao-login');
        this.telaApp = document.getElementById('secao-principal');
        this.titulo = document.getElementById('msg-boas-vindas');
        this.grid = document.getElementById('ponto-turistico-grid');
        this.barra = document.getElementById('main-progress-bar');
        this.textoPorcentagem = document.getElementById('percent-txt');
        this.quizContainer = document.getElementById('quiz-root');
    }

    entrarNoApp(usuario) {
        this.telaLogin.style.display = 'none';
        this.telaApp.style.display = 'block';
        this.titulo.innerText = usuario.boasVindas();
    }

    renderizarPontos(lista, funcaoClique) {
        this.grid.innerHTML = "";
        for (let i = 0; i < lista.length; i++) {
            let p = lista[i];
            let card = document.createElement('div');
            card.className = `card-ponto ${p.visitado ? 'visitado' : ''}`;
            card.innerHTML = `
                <img src="${p.img}">
                <div class="card-content">
                    <h3>${p.nome}</h3>
                    <p>${p.desc}</p>
                </div>
            `;
            card.onclick = () => funcaoClique(p.id);
            this.grid.appendChild(card);
        }
    }

    atualizarProgresso(valor) {
        this.barra.style.width = valor + "%";
        this.textoPorcentagem.innerText = valor + "%";
    }

    renderizarQuiz(pergunta, funcaoResponder) {
        this.quizContainer.innerHTML = `<h3>${pergunta.texto}</h3>`;
        for (let i = 0; i < pergunta.opcoes.length; i++) {
            let btn = document.createElement('button');
            btn.className = "btn-opcao";
            btn.innerText = pergunta.opcoes[i];
            btn.onclick = (e) => funcaoResponder(i, e.target);
            this.quizContainer.appendChild(btn);
        }
    }

    mostrarFimQuiz(acertos, total) {
        this.quizContainer.innerHTML = `
            <h3>Quiz Finalizado!</h3>
            <p>Você acertou ${acertos} de ${total}</p>
            <button class="btn-primary" onclick="location.reload()">Reiniciar</button>
        `;
    }
}