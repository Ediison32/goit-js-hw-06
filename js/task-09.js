function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.body
const color = document.querySelector(".change-color");
const text  = document.querySelector(".color");

color.addEventListener("click", ()=>{
    const color = getRandomHexColor();
    console.log(color);
    body.style.backgroundColor= color;
    text.textContent = color
  
});