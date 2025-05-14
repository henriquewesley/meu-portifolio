// Seleciona o elemento HTML com o ID "ir-home" e o armazena na constante linkHome.
const linkHome = document.querySelector("#ir-home");
// Seleciona o elemento HTML com o ID "ir-projetos" e o armazena na constante linkProjetos.
const linkProjetos = document.querySelector("#ir-projetos");
// Seleciona o elemento HTML com o ID "ir-sobre" e o armazena na constante linkSobre.
const linkSobre = document.querySelector("#ir-sobre");
// Seleciona o elemento HTML com o ID "ir-contatos" e o armazena na constante linkContatos.
const linkContatos = document.querySelector("#ir-contatos");
// Seleciona o elemento HTML com o ID "menu-toggle" e o armazena na variável menuToggle (usando 'let' porque pode ser reatribuída, embora não seja neste código).
let menuToggle = document.getElementById("menu-toggle");
// Seleciona o elemento HTML com o ID "menu" e o armazena na variável menuList (usando 'let' porque pode ser reatribuída, embora não seja neste código).
let menuList = document.getElementById("menu");

// Adiciona um "ouvinte de evento" (event listener) ao elemento menuToggle.
// Quando ocorre um clique nesse elemento, a função seguinte é executada.
menuToggle.addEventListener("click", () => {
  // Alterna a classe "ativo" na lista de menu (menuList).
  // Se a classe estiver presente, ela é removida; se não estiver, ela é adicionada.
  // Isso é comumente usado para mostrar e ocultar menus responsivos.
  menuList.classList.toggle("ativo");
});

// Define uma função chamada cliqueiHome.
function cliqueiHome() {
  // Remove a classe "ativo" da lista de menu, garantindo que o menu seja ocultado.
  menuList.classList.remove("ativo");
  // Utiliza a função window.scrollTo para rolar suavemente a página até um ponto específico.
  window.scrollTo({
    // Define a posição vertical para a qual rolar.
    // document.querySelector("#home") seleciona o elemento HTML com o ID "home".
    // .offsetTop retorna a distância em pixels do topo do elemento "#home" até o topo do documento.
    top: document.querySelector("#home").offsetTop,
    // Define o comportamento da rolagem como "smooth" para uma animação suave.
    behavior: "smooth",
  });
}

// Adiciona um "ouvinte de evento" ao elemento linkHome.
// Quando ocorre um clique nesse link, a função cliqueiHome é executada.
linkHome.addEventListener("click", cliqueiHome);

// Define uma função chamada cliqueiProjetos, similar a cliqueiHome, mas rola para a seção de "projetos".
function cliqueiProjetos() {
  menuList.classList.remove("ativo");
  window.scrollTo({
    top: document.querySelector("#projetos").offsetTop,
    behavior: "smooth",
  });
}

// Adiciona um "ouvinte de evento" ao elemento linkProjetos.
linkProjetos.addEventListener("click", cliqueiProjetos);

// Define uma função chamada cliqueiSobre, similar às anteriores, mas rola para a seção "sobre".
function cliqueiSobre() {
  menuList.classList.remove("ativo");
  window.scrollTo({
    top: document.querySelector("#sobre").offsetTop,
    behavior: "smooth",
  });
}

// Adiciona um "ouvinte de evento" ao elemento linkSobre.
linkSobre.addEventListener("click", cliqueiSobre);

// Define uma função chamada cliqueiContatos, similar às anteriores, mas rola para a seção "contatos".
function cliqueiContatos() {
  menuList.classList.remove("ativo");
  window.scrollTo({
    top: document.querySelector("#contatos").offsetTop,
    behavior: "smooth",
  });
}

// Adiciona um "ouvinte de evento" ao elemento linkContatos.
linkContatos.addEventListener("click", cliqueiContatos);

// Seleciona todos os elementos HTML que possuem a classe "info-projeto" e os armazena em uma NodeList chamada projetos.
const projetos = document.querySelectorAll(".info-projeto");
// Seleciona o elemento HTML com a classe "seta-esquerda" e o armazena na constante setaEsquerda.
const setaEsquerda = document.querySelector(".seta-esquerda");
// Seleciona o elemento HTML com a classe "seta-direita" e o armazena na constante setaDireita.
const setaDireita = document.querySelector(".seta-direita");
// Inicializa uma variável chamada projetoAtual com o valor 0, representando o índice do projeto atualmente visível.
let projetoAtual = 0;

// Define uma função chamada mostrarProjeto que recebe um índice como argumento.
function mostrarProjeto(index) {
  // Itera sobre cada elemento da NodeList 'projetos' e seu respectivo índice.
  projetos.forEach((projeto, i) => {
    // Modifica a propriedade 'transform' do estilo de cada projeto para movê-lo horizontalmente.
    // `translateX(${100 * (i - index)}%)` calcula a porcentagem de deslocamento.
    // Se 'i' for igual a 'index', o projeto estará na posição 0%.
    // Se 'i' for menor que 'index', o projeto será movido para a esquerda.
    // Se 'i' for maior que 'index', o projeto será movido para a direita.
    projeto.style.transform = `translateX(${(i - index) * 100}%)`;
  });
}

// Define uma função chamada proximoProjeto.
function proximoProjeto() {
  console.log("Próximo projeto");
  // Incrementa o índice do projeto atual.
  // O operador % (módulo) garante que, ao atingir o final da lista, o índice volte para 0, criando um loop.
  projetoAtual = (projetoAtual + 1) % projetos.length;
  // Chama a função mostrarProjeto com o novo índice para exibir o próximo projeto.
  mostrarProjeto(projetoAtual);
}

// Define uma função chamada projetoAnterior.
function projetoAnterior() {
  console.log("Projeto anterior");
  // Decrementa o índice do projeto atual.
  // A adição de 'projetos.length' antes do módulo garante que, ao atingir o início da lista, o índice vá para o último elemento, criando um loop.
  projetoAtual = (projetoAtual - 1 + projetos.length) % projetos.length;
  // Chama a função mostrarProjeto com o novo índice para exibir o projeto anterior.
  mostrarProjeto(projetoAtual);
}

// Adiciona um "ouvinte de evento" ao elemento setaDireita.
// Quando ocorre um clique nessa seta, a função proximoProjeto é executada.
setaDireita.addEventListener('click', proximoProjeto);
// Adiciona um "ouvinte de evento" ao elemento setaEsquerda.
// Quando ocorre um clique nessa seta, a função projetoAnterior é executada.
setaEsquerda.addEventListener('click', projetoAnterior);

// Chama a função mostrarProjeto inicialmente com o valor de projetoAtual (que é 0)
// para exibir o primeiro projeto quando a página carrega.
mostrarProjeto(projetoAtual);