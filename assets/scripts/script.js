//passar o texto para a linha de cima
function handleInput(event) {
    if (event.key === 'Enter') {
      executeCommand();
    }
  }

  function executeCommand() {
    let userInput = document.getElementById('user-input').value;
    if(userInput.toLowerCase() == '$ start'){
        document.getElementById('output').innerHTML = '$ entrando...';
        document.getElementById('user-input').value = '$ aguarde...';
        let intervalId = setInterval(loading, 300);
    }else{
        document.getElementById('output').innerHTML = '$ Comando não identificado!';
        document.getElementById('user-input').value = '$ ';
    }
  }

//efeito fade in
document.addEventListener("DOMContentLoaded", function() {
    let fadeElements = document.querySelectorAll(".fade-in-element");
  
    function fadeInOnScroll() {
      fadeElements.forEach(function(element) {
        let elementPosition = element.getBoundingClientRect().top;
        let screenPosition = window.innerHeight;
  
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

//funcao focus input
function digitarInput(){
    let cmd = document.getElementById('user-input');
    window.onload = ()=> cmd.focus();
    cmd.value = '$ ';

}
digitarInput();


//funcao loading
let progress = 0;
let progressBar = document.getElementById('progress');

function loading(){
    if(progress<100){
        progress += 10;
        progressBar.style.width = progress + '%';
        progressBar.innerHTML = '[' + '='.repeat(progress / 10) + '>' + ' '.repeat(10 - progress / 10) + ']' + progress + '%';
    }else{
        window.location.href = "portfolio.html";
        clearInterval(intervalId);
    }

}

