const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const perguntas = [
{
enunciado: "PORQUE ACONTECE A DEGRADAÇAO DO SOLO",
alternativas: [
{
texto: "ACONTECE POR CAUSA DAS CHUVAS",
afirmacao: "A degradação do solo acontece devido ao uso excessivo de fertilizantes e pesticidas, à falta de cobertura vegetal e à compactação do solo por maquinário pesado, o que leva à perda de nutrientes, à erosão e à redução da biodiversidade do solo."
},
{
texto: "ACONTECE POR TIRAR OS NUTRIENTES DO SOLO",
afirmacao: "A degradação do solo acontece devido ao uso excessivo de fertilizantes e pesticidas, à falta de cobertura vegetal e à compactação do solo por maquinário pesado, o que leva à perda de nutrientes, à erosão e à redução da biodiversidade do solo."
}
]
},
{
enunciado: "A SOCIEDADE CONSEGUE SOBREBRIVER COM A DEGRADAÇÃO DO SOLO",
alternativas: [
{
texto: "SIM ELES CONSEGUE SOBREVIVER MAS VIVERÃO UMA VIDA COMPLICADA ",
afirmacao: " SIM com o tempo terão que se mudar para ter mais oportunidade de vida "
},
{
texto: "NÃO CONSEGUIRAM SOBREVIVER ",
afirmacao: "SIM com o tempo terão que se mudar para ter mais oportunidade de vida"
}
]
},
{
 enunciado: "MUITAS CULTURAS VÃO SE PERDER POR CAUSA DA DEGRADAÇÃO",
alternativas: [
{
texto: "SIM POIS ELES VAO TER QUE PROCURAR NOVA AREA PARA MORAR ",
afirmacao: "Com a locomoção de um povo eles acabam levando sua cultura e assim começa a ter mais biodiversidades "
},
{
texto: "NÃO NECESSARIAMENTE POIS ELES VÃO SE MUDAR E LEVAR A CULTURA COM ELES ",
afirmacao: "Com a locomoção de um povo eles acabam levando sua cultura e assim começa a ter mais biodiversidades"
}
]

},
];
let atual = 0;
let perguntaAtual;
let historiaFinal = "";
function mostraPergunta() {
if (atual >= perguntas.length) {
mostraResultado();
return;
}
perguntaAtual = perguntas[atual];
caixaPerguntas.textContent = perguntaAtual.enunciado;
caixaAlternativas.textContent = "";
mostraAlternativas();
}
function mostraAlternativas(){
for(const alternativa of perguntaAtual.alternativas) {
const botaoAlternativas = document.createElement("button");
botaoAlternativas.textContent = alternativa.texto;
botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
caixaAlternativas.appendChild(botaoAlternativas);
}
}
function respostaSelecionada(opcaoSelecionada) {
const afirmacoes = opcaoSelecionada.afirmacao;
historiaFinal += afirmacoes + " ";
atual++;
mostraPergunta();
}
function mostraResultado() {
caixaPerguntas.textContent = "Podemos concluir que...";
textoResultado.textContent = historiaFinal;
caixaAlternativas.textContent = "";
}
mostraPergunta();
