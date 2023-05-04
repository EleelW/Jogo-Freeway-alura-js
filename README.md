
<h1 align="center">Jogo baseado em Freeaway</h1>
<p align="center">
<a  href="https://imgur.com/qrK6n95"><img src="https://i.imgur.com/qrK6n95.png" title="source: imgur.com" /></a><br>
</p>
> Feito apartir das aulas da Alura

Para rodar este jogo deve ir no site:
```
https://editor.p5js.org
```
Apos entrar, deve criar duas pastas.

<h3>imagens:</h3>
> Nela deve conter todos os arquivos que estão dentro de imagens.zip<br>
> É todas as imagens ultilizadas no jogo. <br><br>

<h3>sons:</h3>
> Nela deve conter todos os arquivos que estão dentro de sons.zip<br>
> É todos os sons ultilizados no jogo.<br><br>

<h2>Apos isto, dar upload nos seguintes arquivos js quem contém:</h2> 
<h3>ator.js</h3>
<h4>Codigo do personagem jogavel (vaquinha):</h4>
> Função  mostraAtor():<br>
      <p>
      &nbsp;Desenha o ator na tela. <br>
      </p>
> Função movimentaAtor():<br>
      Movimenta o ator ultilizando as teclas UP_ARROW e DOWN_ARROW.<br><br>
> Função verificaColisao():<br>
      Verifica colição entre um retangulo(carros) e um circulo(ator).<br>
      Se teve colisão vai chamar a função voltaAtorParaPosicaoInicial().<br>
      Toca o som da colisão.<br>
      Se os pontos forem maior que 0, um ponto vai ser decrementado.<br><br>
> Função voltaAtorParaPosicaoInicial():<br>
      Leva o ator para a cordenada y = 366.<br><br>
> Função incluiPontos():<br>
      Desenha o placar na tela.<br><br>
> Função marcaPontos():<br>
      Se o ator atravessou a rua, é acrescentado um ponto.<br>
      Toca o som do ponto.<br>
      Chama a função voltaAtorParaPosicaoInicial.<br><br>
<h3>carro.js</h3>
<h4>Codigo do carro:</h4>
> Criação de todas as variaveis de posição, velocidade e tamanho do carro;<br><br>
>Função mostraCarro():<br>
      Desenha o carro na tela.<br><br>
> Função movimentaCarro():<br>
      Faz os carros se moverem pela rua.<br><br>
> Função voltaPosicaoInicialDoCarro():<br>
      quando o carro estiver fora da tela, faz com que ele retorne para nua posiçãp inicial.<br><br>
<h3>imagem.js</h3>
<h4>Codigo de carregamento das imagens e sons:</h4>
> Cria variaveis para as imagens.<br><br>
> Cria variaveis para os sons.<br><br>
> Função preload():<br>
      carrega as imagens e sons das pastas "imagens" e "sons" nas variaveis.<br><br>
<h3>sketch.js</h3>
> Função setup():
      
