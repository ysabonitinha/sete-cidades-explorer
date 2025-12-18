import { PontoModel, QuizModel } from './models/Models.js';
import { MainView } from './views/Views.js';
import { MainController } from './controllers/MainController.js';

const dadosPontos = [
    { id: 1, nome: "1ª Cidade - Piscina dos Milagres", descricao: "Marca o início do roteiro com a famosa nascente natural e a Pedra dos Canhões.", imagem: "public/assets/pedra.jpg" },
    { id: 2, nome: "2ª Cidade - O Mirante", descricao: "Abriga o gigantesco Arco do Triunfo e o mirante com vista panorâmica do parque.", imagem: "public/assets/arco_triunfo.jpg" },
    { id: 3, nome: "3ª Cidade - Cabeça de Dom Pedro", descricao: "Destaque para a rocha que perfila a Cabeça de Dom Pedro I e a Gruta do Estrangeiro.", imagem: "public/assets/Parque_Nacional_de_Sete_Cidades_-_Piauí.jpg" },
    { id: 4, nome: "4ª Cidade - O Mapa", descricao: "Lar do Mapa do Brasil (abertura na rocha) e da caverna do eremita José Catirina.", imagem: "public/assets/tatu.jpg" },
    { id: 5, nome: "5ª Cidade - As Inscrições", descricao: "Sítio arqueológico repleto de pinturas rupestres e símbolos geométricos antigos.", imagem: "public/assets/mirante.jpg" },
    { id: 6,nome: "6ª Cidade - As Figuras", descricao: "A mais famosa, onde ficam as esculturas da Pedra da Tartaruga e do Elefante.", imagem: "public/assets/parede_pedra.jpg" },
    { id: 7, nome: "7ª Cidade - O Fim", descricao: "Uma área de preservação mais densa e mística, onde se encontra a Gruta do Pajé.", imagem: "public/assets/pedra_tartaruga.jpg" }
];

const dadosQuiz = [
    { texto: "O Parque Nacional de Sete Cidades fica na transição de quais biomas?", opcoes: ["Mata Atlântica e Amazônia", "Cerrado e Caatinga", "Pampa e Pantanal"], correta: 1 },
    { texto: "Qual é a formação rochosa mais famosa, símbolo do parque?", opcoes: ["Pedra do Elefante", "Pedra da Tartaruga", "Cabeça de Dom Pedro"], correta: 1 },
    { texto: "Além do vento e da chuva, o que ajudou a esculpir as rochas?", opcoes: ["O calor intenso", "A neve", "Ação humana"], correta: 0 },
    { texto: "Qual o nome do curandeiro que viveu em uma gruta na 4ª Cidade?", opcoes: ["José Catirina", "Severino do Sertão", "Chico Mendes"], correta: 0 },
    { texto: "Qual teoria o escritor Erich von Däniken divulgou sobre o parque?", opcoes: ["Construção Viking", "Origem Extraterrestre", "Civilização Atlântida"], correta: 1 },
    { texto: "Qual é a cor predominante das pinturas rupestres do parque?", opcoes: ["Azul", "Preta", "Vermelha"], correta: 2 },
    { texto: "Em qual das 'Cidades' fica localizado o Arco do Triunfo?", opcoes: ["1ª Cidade", "2ª Cidade", "7ª Cidade"], correta: 1 },
    { texto: "Qual formação rochosa lembra o contorno geográfico de um país?", opcoes: ["Mapa da África", "Mapa da Itália", "Mapa do Brasil"], correta: 2 },
    { texto: "Qual é o principal tipo de rocha que compõe as formações do parque?", opcoes: ["Granito", "Arenito", "Basalto"], correta: 1 },
    { texto: "Quais cidades piauienses abrigam a área do parque?", opcoes: ["Teresina e Altos", "Piripiri e Piracuruca", "Parnaíba e Luís Correia"], correta: 1 }
];

const modeloP = new PontoModel();
modeloP.carregar(dadosPontos);

const modeloQ = new QuizModel();
modeloQ.carregar(dadosQuiz);

const visao = new MainView();

const controle = new MainController(modeloP, modeloQ, visao);

document.getElementById('btn-entrar').onclick = function() {
    let nome = document.getElementById('login-nome').value;
    let tipo = document.getElementById('login-tipo').value;
    if (nome) {
        controle.login(nome, tipo);
    } else {
        alert("Por favor, digite seu nome.");
    }
};