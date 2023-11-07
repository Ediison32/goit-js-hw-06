


const categoria = document.querySelectorAll(".item").length
console.log(`Number of categories: ${categoria}`); 

const titles = document.querySelectorAll("h2");

titles.forEach(element => {
    console.log(`Category: ${element.innerText}`);
    console.log(`Elements: ${element.nextElementSibling.children.length}`);
});
