
let nome = document.getElementById('name');

let show = document.getElementById('show');

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


//efeito typing
function typeAndErase(text, container, speed) {
  let index = 0;

  function type() {
    container.textContent += text[index];
    index++;

    if (index < text.length) {
      setTimeout(type, speed);
    } else {
      setTimeout(erase, speed * 2); // Aguarda um tempo antes de começar a apagar
    }
  }

  function erase() {
    container.textContent = text.substring(0, index);
    index--;

    if (index >= 0) {
      setTimeout(erase, speed);
    } else {
      setTimeout(type, speed); // Aguarda um tempo antes de começar a digitar novamente
    }
  }

  type(); // Inicia o processo de digitação
}

// Texto para o efeito de digitação e apagar
const textToType = 'Hello, World!';

// Velocidade de digitação (em milissegundos por caractere)
const typingSpeed = 300;

// Inicia o efeito de digitação e apagar
typeAndErase(textToType, show, typingSpeed);