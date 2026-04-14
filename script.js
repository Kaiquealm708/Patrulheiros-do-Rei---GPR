const elemSlides = document.querySelector('.slides');
const elemBotaoEsquerdo = document.querySelector('.prev');
const elemBotaoDireito = document.querySelector('.next');
const elemsImagem = document.querySelectorAll('.slides IMG');

const tamanhoLista = elemsImagem.length - 1;

let index = 0;
elemBotaoEsquerdo.addEventListener('click', () => {
  index--;

  if (index < 0) index = tamanhoLista;

  atualizarCarrossel();
  //console.log(index);
});

elemBotaoDireito.addEventListener('click', () => {
  incrementarIndex();
  atualizarCarrossel();
  //console.log(index);
});

const incrementarIndex = () => {
  index++;
  if (index > tamanhoLista) index = 0;
}

const atualizarCarrossel = () => {
  elemSlides.style.transform = `translateX(-${index * 100}%)`;
};

let interval;

const iniciarAuto = () => {
  interval = setInterval(() => {
    incrementarIndex();
    atualizarCarrossel();
  }, 3000);
};

const pararAuto = () => {
  clearInterval(interval);
};

iniciarAuto();

const carrossel = document.querySelector('.carrossel');

carrossel.addEventListener('mouseenter', pararAuto);
carrossel.addEventListener('mouseleave', iniciarAuto);


function toggleMenu() {
  document.querySelector(".menu").classList.toggle("active");
}

window.addEventListener("scroll", function () {
    const section = document.querySelector(".vaquinha");
    const bg = document.querySelector(".vaquinha-bg");

    const rect = section.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // só ativa quando a section estiver visível
    if (rect.top < windowHeight && rect.bottom > 0) {
      let scrollPercent = (windowHeight - rect.top) / (windowHeight + rect.height);

      bg.style.transform =
        "translateY(" + (scrollPercent * 100) + "px) scale(1.1)";
    }
  });

