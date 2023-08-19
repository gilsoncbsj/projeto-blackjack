if (confirm("Boas Vindas ao Jogo BlackJack \nQuer iniciar uma nova rodada?")) {
   const cartaJogador = comprarCarta()
   let pontuacaoJogador = cartaJogador.valor+cartaJogador.valor
   console.log(`Usuário - cartas:${cartaJogador.texto}${cartaJogador.texto} - pontuação ${pontuacaoJogador}` );
   const cartaComputador = comprarCarta()
   let pontuacaoComputador = cartaComputador.valor+cartaComputador.valor
   console.log(`Coputador - cartas:${cartaComputador.texto}${cartaComputador.texto} - pontuação ${pontuacaoComputador}` );

   if ((pontuacaoJogador>pontuacaoComputador) && (pontuacaoJogador<21) || (pontuacaoComputador>21)) {
      console.log("O Usuario ganhou!") 
   } else if ((pontuacaoComputador>pontuacaoJogador) && (pontuacaoComputador <21) || (pontuacaoJogador>21)) {
      console.log("O computador ganhou")
   } else {
      console.log("Empate!")
   }
} else {
   console.log("O jogo acabou")
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
