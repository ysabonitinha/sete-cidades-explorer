import { Visitante, Guia } from '../models/Models.js';

export class MainController {
    constructor(modelP, modelQ, view) {
        this.mPontos = modelP;
        this.mQuiz = modelQ;
        this.view = view;
    }

    login(nome, tipo) {
        let usuario;
        if (tipo === 'guia') {
            usuario = new Guia(nome);
        } else {
            usuario = new Visitante(nome);
        }
        this.view.entrarNoApp(usuario);
        this.atualizarTelaPontos();
        this.atualizarTelaQuiz();
    }

    cliquePonto(id) {
        this.mPontos.alternarVisita(id);
        this.atualizarTelaPontos();
    }

    atualizarTelaPontos() {
        this.view.renderizarPontos(this.mPontos.lista, this.cliquePonto.bind(this));
        this.view.atualizarProgresso(this.mPontos.progresso);
    }

    respostaQuiz(indice, botao) {
        let acertou = this.mQuiz.verificar(indice);
        if(acertou) botao.classList.add('correta');
        else botao.classList.add('errada');

        setTimeout(() => {
            this.mQuiz.atual++;
            if (this.mQuiz.atual < this.mQuiz.perguntas.length) {
                this.atualizarTelaQuiz();
            } else {
                this.view.mostrarFimQuiz(this.mQuiz.acertos, this.mQuiz.perguntas.length);
            }
        }, 1000);
    }

    atualizarTelaQuiz() {
        let p = this.mQuiz.perguntas[this.mQuiz.atual];
        this.view.renderizarQuiz(p, this.respostaQuiz.bind(this));
    }
}