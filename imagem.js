// imagens e sons do jogo
let imagemDaEstrada;
let imagemDoAtor;
let imagemCarros = [];

let somDaTrilha;
let somDaColisao;
let somDoPonto;

function preload(){
  imagemDaEstrada = loadImage("imagens/estrada.png");
  imagemDoAtor = loadImage("imagens/ator-1.png");
  imagemCarros.push(loadImage("imagens/carro-1.png"));
  imagemCarros.push(loadImage("imagens/carro-2.png"));
  imagemCarros.push(loadImage("imagens/carro-3.png"));
  imagemCarros.push(loadImage("imagens/carro-1.png"));
  imagemCarros.push(loadImage("imagens/carro-2.png"));
  imagemCarros.push(loadImage("imagens/carro-3.png"));
  
  somDaTrilha = loadSound("sons/trilha.mp3");
  somDaColisao = loadSound("sons/colidiu.mp3");
  somDoPonto = loadSound("sons/pontos.wav");
}