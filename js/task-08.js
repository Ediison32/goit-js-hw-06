

const login = document.querySelector(".login-form");


login.addEventListener("submit", loginFuntion);

function loginFuntion(evento){
    evento.preventDefault();
    const form = evento.target;
    const email = form.elements.email.value;
    const password =  form.elements.password.value;
   

    if (email === "" || password === ""){
        console.log("alerta");
        return alert("Todos los espacios deben ser rellenados");
    }
    console.log(`login: ${email}, password: ${password}`);
    form.reset();
}