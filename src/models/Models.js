export class Usuario {
    #nome;
    constructor(nome) { this.#nome = nome; }
    get nome() { return this.#nome; }
    boasVindas() { return `Olá, ${this.#nome}`; }
}

export class Visitante extends Usuario {
    boasVindas() { return `Explorador(a) ${this.nome}, sua aventura começa agora!`; }
}

export class Guia extends Usuario {
    boasVindas() { return `Guia ${this.nome}, painel administrativo liberado.`; }
}

export class PontoModel {
    constructor() { this.lista = []; }

    carregar(dados) {
        for (let i = 0; i < dados.length; i++) {
            let item = dados[i];
            this.lista.push({ 
                id: item.id, 
                nome: item.nome, 
                desc: item.descricao, 
                img: item.imagem, 
                visitado: false 
            });
        }
    }

    alternarVisita(id) {
        for (let i = 0; i < this.lista.length; i++) {
            if (this.lista[i].id === id) {
                this.lista[i].visitado = !this.lista[i].visitado;
            }
        }
    }

    get progresso() {
        let visitados = 0;
        for (let i = 0; i < this.lista.length; i++) {
            if (this.lista[i].visitado) visitados++;
        }
        return Math.round((visitados / this.lista.length) * 100);
    }
}

export class QuizModel {
    constructor() {
        this.perguntas = [];
        this.atual = 0;
        this.acertos = 0;
    }
    carregar(dados) { this.perguntas = dados; }
    
    verificar(indice) {
        let p = this.perguntas[this.atual];
        if (indice === p.correta) {
            this.acertos++;
            return true;
        }
        return false;
    }
}