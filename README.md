<html>
<h1 align="center">Jogo baseado em Freeaway</h1>
<p align="center">
<a  href="https://imgur.com/qrK6n95"><img src="https://i.imgur.com/qrK6n95.png" title="source: imgur.com" /></a><br>
</p>
      </html>
> Feito apartir das aulas da Alura

Para rodar este jogo deve ir no site:
```
https://editor.p5js.org
```

**Apos entrar, deve criar duas pastas.**
<html>
<h3>imagens:</h3>
> Nela deve conter todos os arquivos que estão dentro de imagens.zip<br>
> É todas as imagens ultilizadas no jogo. <br><br>

<h3>sons:</h3>
> Nela deve conter todos os arquivos que estão dentro de sons.zip<br>
> É todos os sons ultilizados no jogo.<br><br>

<h2>Apos isto, dar upload nos seguintes arquivos js quem contém:</h2> 
<h2 align="center">ator.js</h2>
<h4>Codigo do personagem jogavel (vaquinha):</h4>
> Função  mostraAtor():<br>
      <p>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Desenha o ator na tela. <br>
      </p>
> Função movimentaAtor():<br>
      <p>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Movimenta o ator ultilizando as teclas UP_ARROW e DOWN_ARROW.<br>
      </p>
> Função verificaColisao():<br>
      <p>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Verifica colição entre um retangulo(carros) e um circulo(ator).<br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Se teve colisão vai chamar a função voltaAtorParaPosicaoInicial().<br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Toca o som da colisão.<br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Se os pontos forem maior que 0, um ponto vai ser decrementado.<br>
      </p>
> Função voltaAtorParaPosicaoInicial():<br>
      <p>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Leva o ator para a cordenada y = 366.<br>
      </p>
> Função incluiPontos():<br>
      <p>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Desenha o placar na tela.<br>
      </p>
> Função marcaPontos():<br>
      <p>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Se o ator atravessou a rua, é acrescentado um ponto.<br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Toca o som do ponto.<br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Chama a função voltaAtorParaPosicaoInicial.<br>
      </p>
<h2 align="center">carro.js</h2>
<h4>Codigo do carro:</h4>
> Criação de todas as variaveis de posição, velocidade e tamanho do carro;<br><br>
>Função mostraCarro():<br>
      <p>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Desenha o carro na tela.<br>
      </p>
> Função movimentaCarro():<br>
      <p>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Faz os carros se moverem pela rua.<br>
      </p>
> Função voltaPosicaoInicialDoCarro():<br>
      <p>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Quando o carro estiver fora da tela, faz com que ele retorne para nua posiçãp inicial.<br>
      </p>
<h2 align="center">imagem.js</h2>
<h4>Codigo de carregamento das imagens e sons:</h4>
> Cria variaveis para as imagens.<br><br>
> Cria variaveis para os sons.<br><br>
> Função preload():<br>
      <p>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Carrega as imagens e sons das pastas "imagens" e "sons" nas variaveis.<br>
      </p>
<h2 align="center">sketch.js</h2>
<h4>Codigo que desenha e cria a tela:</h4>
> Função setup():<br>
      <p>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Define o tamanho da tela.<br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Toca o musica de fundo em loop.<br>
      </p>
> Função Draw():<br>
      <p>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Função da biblioteca p5.<br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tudo o que esta dentro fica em loop.<br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Desenha o plano de fundo.<br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Chama outras funções para o loop.<br>
      </p>
<h2 align="center">p5.collide2d.js</h2>
      <p>
      >Biblioteca para colisões de objetos 2d.<br>
      >Pode acessar ultilizando:
      </p>
   </html>   

```
https://github.com/bmoren/p5.collide2D/
```
<html>
      <h2 align="center">p5.js e p5.sound.min.js</h2>
      <p>
            >Bibliotecas p5 ultilizada.<br>
            >Para saber mais entre em:
      </p>
</html>

```
https://p5js.org
```

<html>
      <h2>Apos isto, dar upload no arquivo HTML e no arquivo CSS:</h2>
      <h2 align="center">index.html</h2>
      <p>
            >Arquivo que indexa todos os codigos Java script em um HTML.<br>
      </p>
      <h2 align="center">style.css</h2><br>
      <p>
            >Simples arquivo html, sem alteraçôes.<br>
      </p>
      <h2>Observações:</h2>
      <p>
            Apos dar upload ou sobrepor os arquivos no site ele ira ficar assim:<br>
            <a href="https://imgur.com/ABND0jj"><img src="https://i.imgur.com/ABND0jj.png" title="source: imgur.com" /></a><br>
            Assim, esta tudo certo para rodar o jogo, Divirta-se!<br>
      </p>
      <h3>Referencias:</h3>
</html>
      
      ```
      https://p5js.org

      https://cursos.alura.com.br/course/pong-javascript

      https://github.com/bmoren/p5.collide2D/
      ```
      
      
      
