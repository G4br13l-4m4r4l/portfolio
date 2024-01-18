
let nome = document.getElementById('name');

let progress = 0;
let myName = '[Gabriel do Amaral]';

const type = ()=>{       
    nome.textContent += myName.charAt(progress);
    progress++;

    if(progress === myName.length){
        progress = 0;
        clearInterval(intervalo);
        
    }
}

let intervalo = setInterval(type,100);

//efeito fade in
document.addEventListener("DOMContentLoaded", function() {
    var fadeElements = document.querySelectorAll(".fade-in-element");
  
    function fadeInOnScroll() {
      fadeElements.forEach(function(element) {
        var elementPosition = element.getBoundingClientRect().top;
        var screenPosition = window.innerHeight;
  
        if (elementPosition < screenPosition && element.style.opacity !== "1") {
          element.style.opacity = "1";
        }
      });
    }
  
    // chamando o fade in
    fadeInOnScroll();
  
    // Fade in on scroll
    window.addEventListener("scroll", fadeInOnScroll);
});


