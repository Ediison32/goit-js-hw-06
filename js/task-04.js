


let counterValue = 0;


const btnRest = document.querySelector("button[data-action='decrement']");
const btnSuma = document.querySelector("button[data-action='increment']")
const valor =document.querySelector("#value")
/* general.addEventListener("click", ()=>{
    if(btnSuma){
        counterValue++;

    }
    
    valor.textContent = counterValue;

})
 */

btnSuma.addEventListener("click", ()=>{
    counterValue++;
    valor.textContent = counterValue;
});

btnRest.addEventListener("click",()=>{
    counterValue--;
    valor.textContent=counterValue;
})

/* const saveBtn = document.querySelector('.editor button[data-action="save"]'); */