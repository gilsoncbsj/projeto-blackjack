let cartaJogador = []
let cartaComputador = []
if (confirm("Boas Vindas ao Jogo BlackJack \nQuer iniciar uma nova rodada?")) {
   cartaJogador.push(comprarCarta())
   cartaJogador.push(comprarCarta())
   let pontuacaoJogador = cartaJogador[0].valor+cartaJogador[1].valor
   console.log(`Usuário - cartas:${cartaJogador[0].texto}${cartaJogador[1].texto} - pontuação ${pontuacaoJogador}` );
   
   cartaComputador.push(comprarCarta())
   cartaComputador.push(comprarCarta())
   let pontuacaoComputador = cartaComputador[0].valor+cartaComputador[1].valor
   console.log(`Coputador - cartas:${cartaComputador[0].texto}${cartaComputador[1].texto} - pontuação ${pontuacaoComputador}` );

   if ((pontuacaoJogador>pontuacaoComputador) && (pontuacaoJogador<=21) || (pontuacaoComputador>21)) {
      console.log("O Usuario ganhou!");
   } else if ((pontuacaoComputador>pontuacaoJogador) && (pontuacaoComputador <=21) || (pontuacaoJogador>21)) {
      console.log("O computador ganhou");
   } else {
      console.log("Empate!");
   }
} else {
   console.log("O jogo acabou");
}












/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
