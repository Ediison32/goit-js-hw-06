
const font = document.querySelector("#font-size-control");
const text = document.querySelector("#text");


font.addEventListener("input",(evento)=>{
    console.log(evento.target.value);
    const fontsize = evento.target.value+"px";
    console.log(fontsize);
    text.style.fontSize = fontsize;
})