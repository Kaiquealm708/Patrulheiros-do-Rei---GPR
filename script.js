let slides = document.querySelector(".slides")
let slide = document.querySelectorAll(".slide")

let index = 0

document.querySelector(".next").onclick = () => {

index++

if(index >= slide.length){
index = 0
}

slides.style.transform = `translateX(-${index * 100}%)`
}

document.querySelector(".prev").onclick = () => {

index--

if(index < 0){
index = slide.length - 1
}

slides.style.transform = `translateX(-${index * 100}%)`
}


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