


const inputText = document.querySelector("#name-input");
const autput = document.querySelector("#name-output");
/* 
const type = age >= 18 ? "adult" : "child";
 */
inputText.addEventListener("input",(evento)=>{
    console.log(evento.target.value);
    const type = evento.target.value.length
     type == 0 ? autput.textContent = "Anonymous": autput.textContent = evento.target.value
  /*   if((evento.target.value.length) == "0" ){
        autput.textContent = "Anonymous"
        return
    }
    autput.textContent = evento.target.value;
 */
}) 