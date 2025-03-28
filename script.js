const linkHome = document.querySelector("#ir-home");
const linkProjetos = document.querySelector("#ir-projetos");
const linkSobre = document.querySelector("#ir-sobre");
const linkContatos = document.querySelector("#ir-contatos");

function cliqueiHome() {
  console.log(linkHome);
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

linkHome.addEventListener("click", cliqueiHome);

function cliqueiProjetos() {
  console.log(linkProjetos);
  window.scrollTo({
    top: 600,
    behavior: "smooth",
  });
}

linkProjetos.addEventListener("click", cliqueiProjetos);

function cliqueiSobre() {
  console.log(linkSobre);
  window.scrollTo({
    top: 1300,
    behavior: "smooth",
  });
}

linkSobre.addEventListener("click", cliqueiSobre);

function cliqueiContatos() {
  console.log(linkContatos);
  window.scrollTo({
    top: 2200,
    behavior: "smooth",
  });
}

linkContatos.addEventListener("click", cliqueiContatos);
