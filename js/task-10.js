function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const create = document.querySelector('[data-create]');
const destroBoxes= document.querySelector('[ data-destroy]');
const input = document.querySelector("input[type='number']");
const boxes = document.querySelector("#boxes");

create.addEventListener("click", ()=>{
  
  console.log(":"+ input.value);
  const cantidad =  input.value;
  createBoxes(cantidad);
  
});

destroBoxes.addEventListener('click',()=>{
  
  boxes.innerHTML = "";
  
});

function createBoxes(amount){
  let aumentar = 30

  for(let i =0 ; i < amount; i++){
    const color = getRandomHexColor();
    const box = document.createElement("div");
    box.style.backgroundColor = color
    box.style.width= aumentar +"px";
    box.style.height= aumentar+"px";
    boxes.appendChild(box);
    aumentar =aumentar+10;
      
  };
  console.log(boxes);
}