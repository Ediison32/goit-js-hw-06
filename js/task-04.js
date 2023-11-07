


let counterValue = 0;


const btnRest = document.querySelector("button[data-action='decrement']");
const btnSuma = document.querySelector("button[data-action='increment']")
const valor =document.querySelector("#value")

btnSuma.addEventListener("click", ()=>{
    counterValue++;
    valor.textContent = counterValue;
});

btnRest.addEventListener("click",()=>{
    counterValue--;
    valor.textContent=counterValue;
})

