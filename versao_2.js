let usuario = []
let computador = []

if (confirm("Boas Vindas ao Jogo BlackJack \nQuer iniciar uma nova rodada?")) {
   let cartaInicial = false
   while (!cartaInicial) {
      usuario.push(comprarCarta())
      usuario.push(comprarCarta())
      computador.push(comprarCarta())
      computador.push(comprarCarta())
      if ((usuario[0].valor===11 && usuario[1].valor===11)||(computador[0].valor===11 && computador[1].valor===11)) {
         usuario = []
         computador = []
      } else {
         cartaInicial = true
      }
   }

   let comprando = false
   let textoUsuario = ''
   let valorUsuario = 0
   while (!comprando) {
      textoUsuario = ''
      valorUsuario = 0
      for (carta of usuario) {
            textoUsuario +=  carta.texto 
            valorUsuario = valorUsuario + carta.valor
         }
         if (valorUsuario>=21) {
            comprando = true
         }  else if (confirm(`Suas cartas são ${textoUsuario}. A carta revelada do computador é ${computador[0].texto}.`+`\n`+`\n`+`Deseja comprar mais uma carta?`)) {
            usuario.push(comprarCarta())
         
         }  else {
            comprando = true
         }
   }   
   
   let comprandoComputador = false
   let textoComputador = ''
   let valorComputador = 0
   while(!comprandoComputador) {
      textoComputador = ''
      valorComputador = 0
         
      for (carta of computador) {
         textoComputador += carta.texto
         valorComputador = valorComputador + carta.valor
      }
      if (valorComputador<21 && valorComputador<valorUsuario && valorUsuario<21) {
         computador.push(comprarCarta())
      } else {
         comprandoComputador = true
      }
      
   }

   let resultado = ''
   if ((valorComputador>valorUsuario) && (valorComputador<=21) || (valorUsuario>21)) {
      resultado = `O computador ganhou!`
   } else if ((valorUsuario>valorComputador) && (valorUsuario<=21) || (valorComputador>21)){
      resultado = `O usuário ganhou!`
   } else {
      resultado = `Empate!`
   }
   
   alert(`Suas cartas são ${textoUsuario}. Sua pontuação é ${valorUsuario}.\nAs cartas do computador são ${textoComputador}. A pontuação do computador é ${valorComputador}.\n${resultado}`)
   
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

