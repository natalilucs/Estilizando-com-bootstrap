function menu_dropdown() {
    document.getElementsByClassName('dropdown')[0].classList.toggle('down'); //classList retorna uma coleção dom que ativa os atributos para o elemento anterior, nesse caso está ativando o atributo toggle (liga e desliga o down - false e true)
    document.getElementsByClassName('arrow')[0].classList.toggle('gone'); //div para espaço entre img e menu drop
    if (document.getElementsByClassName('dropdown')[0].classList.contains('down')) { //se down for true entra no if
      setTimeout(function () {
        document.getElementsByClassName('dropdown')[0].style.overflow = 'visible'; //tempo para o flow ficar vísivel -  setTimeout executa função no tempo determinado: meio segundo(500 milésimos)
      }, 100)
    } else {
      document.getElementsByClassName('dropdown')[0].style.overflow = 'hidden'; //esconde menu
    }
  }