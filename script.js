let element_p = document.getElementById("preloader");
let element_l = document.getElementById("loader");
console.log("ok, passou por aqui!");

setTimeout(function(){
    element_p.classList.remove("preloader");
    element_l.classList.remove("loader");
},1280);