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