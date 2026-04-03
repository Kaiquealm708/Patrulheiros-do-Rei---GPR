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
