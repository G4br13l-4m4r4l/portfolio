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



//Efeito aleatorio

let campoTexto = document.getElementById('output2');
let t = 1;

function driveIn(){
      campoTexto.innerHTML = '$ [12lld@*(*&#"!A]';
  
      if(t==1){
        campoTexto.innerHTML = '$ [(&*¨!¨&¨#%¨&aT$]';
        t++
      }else if(t==2){
        campoTexto.innerHTML = '$ [!*(&P&wt*#w¨t&!h¨qwe*&¨sd#*]';
        t++
      }else{
        campoTexto.innerHTML = '$ [&¨&KJAKD&*!DJD()!Y&#&¨!]';
        t=1;
        let intervalId = setInterval(loading, 230);
      }
}
window.onload = ()=> setInterval(driveIn,400);


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

