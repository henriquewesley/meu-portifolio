const linkHome = document.querySelector("#ir-home");
const linkprojetos = document.querySelector("#ir-projetos");
const linksobre = document.querySelector("#ir-sobre");
const linkcontatos = document.querySelector("#ir-contatos");

function cliqueiHome() {
  console.log("clicou em home");
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

select.addEventListener("click", cliqueiHome);

function cliqueiProjetos() {
  console.log(linkprojetos);
  window.scrollTo({
    top: 600,
    behavior: "smooth",
  });
}

linkprojetos.addEventListener("click", cliqueiProjetos);

function cliqueiSobre() {
  console.log("clicou em sobre");
  window.scrollTo({
    top: 1300,
    behavior: "smooth",
  });
}

select.addEventListener("click", cliqueiSobre);

function cliqueiContatos() {
  console.log("clicou em contatos");
  window.scrollTo({
    top: 2200,
    behavior: "smooth",
  });
}

select.addEventListener("click", cliqueiContatos);
