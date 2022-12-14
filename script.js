//                   chave.  valor.
var rodrigo = {nome:"Rodrigo", vitorias:0 ,empates: 0, derrotas:0, pontos: 0};
var tiago = {nome:"Tiago", vitorias:0 ,empates: 0, derrotas:0, pontos: 0};
var tivoli = {nome:"Tivoli", vitorias:0 ,empates: 0, derrotas:0, pontos: 0};
var ze = {nome:"Zé", vitorias:0 ,empates: 0, derrotas:0, pontos: 0};

function calculaPontos(jogador) {
  var pontos = jogador.vitorias * 3 + jogador.empates;
  return pontos;
}

rodrigo.pontos = calculaPontos(rodrigo);
tiago.pontos = calculaPontos(tiago);
tivoli.pontos = calculaPontos(tivoli);
ze.pontos = calculaPontos(ze);

var jogadores = [rodrigo, tiago, tivoli, ze]

function exibeJogadoresNaTela(jogadores) {
  var elemento = ""
  for (var i = 0; i < jogadores.length; i++){
    elemento += "<tr><td>" + jogadores[i].nome + "</td>"
    elemento += "<td>" + jogadores[i].vitorias + "</td>"
    elemento += "<td>" + jogadores[i].empates + "</td>";
    elemento += "<td>" + jogadores[i].derrotas + "</td>";
    elemento += "<td>" + jogadores[i].pontos + "</td>";
elemento += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
    elemento += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
    elemento += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
    elemento +=
      "<td><button onClick='limpar(" + i + ")'>Limpar</button></tr></td>";
  }
  
  var tabelaJogadores = document.getElementById("tabelaJogadores");
  tabelaJogadores.innerHTML = elemento;
}

exibeJogadoresNaTela(jogadores);

//função para utilizar os botões da tela
function adicionarVitoria(i) {
  var jogador = jogadores[i];
  jogador.vitorias++;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresNaTela(jogadores);
}

function adicionarEmpate(i) {
  var jogador = jogadores[i];
  jogador.empates++;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresNaTela(jogadores);
}

function adicionarDerrota(i) {
  var jogador = jogadores[i];
  jogador.derrotas++;
  exibeJogadoresNaTela(jogadores);
}

function limpar(i) {
  var jogador = jogadores[i];
  jogador.vitorias = 0;
  jogador.derrotas = 0;
  jogador.empates = 0;
  jogador.pontos = 0;
  exibeJogadoresNaTela(jogadores);
}