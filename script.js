/* slide passar slide para frente ou para trás */
var slideIndex = 0;
    var slides = document.getElementsByClassName("slide-img");
    
    function showSlide(index) {
      if (index < 0) {
        slideIndex = slides.length - 1;
      } else if (index >= slides.length) {
        slideIndex = 0;
      }
      
      for (var i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
      }
      
      slides[slideIndex].classList.add("active");
    }
    
    function nextSlide() {
      slideIndex++;
      showSlide(slideIndex);
    }
    
    function prevSlide() {
      slideIndex--;
      showSlide(slideIndex);
    }
    
    setInterval(nextSlide, 5000); // Altera para a próxima imagem a cada 3 segundos

/* Aba carrinho de serviços */
    document.addEventListener("DOMContentLoaded", function () {
      document.getElementById("openCarrinho").addEventListener("click", function () {
        var tab = document.getElementById("myTab");
        var button = document.getElementById("openCarrinho");

        // Alternar a classe "active" na aba e no botão
        tab.classList.toggle("active");
        button.classList.toggle("active");
      });

      document.getElementById("closeTab").addEventListener("click", function () {
        var tab = document.getElementById("myTab");
        var button = document.getElementById("openCarrinho");

        // Fechar a aba
        tab.classList.remove("active");
        button.classList.remove("active");
      });
    });



    /* tag header aparecer e sumir */
    var prevScrollPos = window.pageYOffset;  // Armazena a posição anterior de rolagem

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;  // Obtém a posição atual de rolagem

  // Verifica a direção do scroll
  if (prevScrollPos > currentScrollPos) {
    // Rolando para cima, faz o cabeçalho aparecer
    document.querySelector("header").style.top = "0";
  } else {
    // Rolando para baixo, faz o cabeçalho desaparecer
    document.querySelector("header").style.top = "-100px";  // Você pode ajustar o valor para controlar o quanto o cabeçalho desaparece
  }

  prevScrollPos = currentScrollPos;  // Atualiza a posição anterior de rolagem
}