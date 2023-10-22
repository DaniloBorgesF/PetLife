let elementosDuvida = document.querySelectorAll(".duvida")

// Dúvida 

elementosDuvida.forEach(function (duvida) {
  duvida.addEventListener("click", function () {
    duvida.classList.toggle("ativa")
  })
})