import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {

  const numeroCarta = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K']
  const figuraCarta = ['♦', '♥', '♠', '♣']

  // crear un numero random del 1 al 13
  const numeroRandom = Math.floor(Math.random() * 13)
  const paloRandom = Math.floor(Math.random() * 4)

  // mostrar el numero o figura segun el numeroRandom
  function mostrarCarta () {
    document.getElementById('palo-carta').innerHTML = figuraCarta[paloRandom]
    document.getElementById('palo-carta2').innerHTML = figuraCarta[paloRandom]
    document.getElementById('numero-carta').innerHTML = numeroCarta[numeroRandom]

    if (figuraCarta[paloRandom] === '♠' || figuraCarta[paloRandom] === '♣'){
      document.getElementById('palo-carta').style.color = "black"
      document.getElementById('palo-carta2').style.color = "black"
    }
    

  }

  mostrarCarta()

};
