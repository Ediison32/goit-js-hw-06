

const entrada = document.querySelector("#validation-input");
const dataLength = document.querySelector('[data-length]');

entrada.addEventListener("blur", (evento)=>{
    
    const longe = evento.target.value.length;
  
    console.log( dataLength.dataset.length);
    if(longe == dataLength.dataset.length){
        entrada.classList.remove("invalid");
        entrada.classList.add("valid");
      
        return
    }
    entrada.classList.remove("valid");
    entrada.classList.add("invalid");
   
})