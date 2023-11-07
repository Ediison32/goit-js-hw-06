const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientes = document.querySelector("#ingredients")

ingredients.forEach((x)=>{
  let li = document.createElement("li");
  li.textContent=(x);           // texContent asigna 
  ingredientes.appendChild(li);
  li.classList.toggle("item")    //toggle añade una class que esta en los ()
  
})


console.log(ingredientes);