const linkHome = document.querySelector("#ir-home");
const linkProjetos = document.querySelector("#ir-projetos");
const linkSobre = document.querySelector("#ir-sobre");
const linkContatos = document.querySelector("#ir-contatos");
const menuToggle = document.getElementById("menu-toggle");
const menuList = document.getElementById("menu");



function cliqueiHome() {
  window.scrollTo({
    top: document.querySelector("#home").offsetTop,
    behavior: "smooth",
  });
}

linkHome.addEventListener("click", cliqueiHome);

function cliqueiProjetos() {
  window.scrollTo({
    top: document.querySelector("#projetos").offsetTop,
    behavior: "smooth",
  });
}

linkProjetos.addEventListener("click", cliqueiProjetos);

function cliqueiSobre() {
  window.scrollTo({
    top: document.querySelector("#sobre").offsetTop,
    behavior: "smooth",
  });
}

linkSobre.addEventListener("click", cliqueiSobre);

function cliqueiContatos() {
  window.scrollTo({
    top: document.querySelector("#contatos").offsetTop,
    behavior: "smooth",
  });
}

linkContatos.addEventListener("click", cliqueiContatos);

const projetos = document.querySelectorAll(".info-projeto");
const setaEsquerda = document.querySelector(".seta-esquerda");
const setaDireita = document.querySelector(".seta-direita");
let projetoAtual = 0;

function mostrarProjeto(index) {
  projetos.forEach((projeto, i) => {
    projeto.style.transform = `translateX(${100 * (i - index)}%)`;
  });
}

function proximoProjeto() {
  projetoAtual = (projetoAtual + 1) % projetos.length;
  mostrarProjeto(projetoAtual);
}

function projetoAnterior() {
  projetoAtual = (projetoAtual - 1 + projetos.length) % projetos.length;
  mostrarProjeto(projetoAtual);
}

setaDireita.addEventListener('click', proximoProjeto);
setaEsquerda.addEventListener('click', projetoAnterior);

mostrarProjeto(projetoAtual);

menuToggle.addEventListener("click", () => {
  // Alterna a classe 'hidden' para mostrar/ocultar o menu
  menuList.classList.toggle("hidden");
});