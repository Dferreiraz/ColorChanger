const html = document.getElementById("html")
const btn = document.getElementById("btn")
const span = document.getElementById("span")

btn.addEventListener("click", function(){
  html.style.backgroundColor= "blue"
  span.innerText= "Cor de Fundo: Azul"  
})