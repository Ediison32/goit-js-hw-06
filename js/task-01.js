

/* 
Number of categories: 3

Category: Animals
Elements: 4

Category: Products
Elements: 3

Category: Technologies
Elements: 5


 alt + 96 
*/


const categoria = document.querySelectorAll(".item").length
console.log(`Number of categories: ${categoria}`); 

const titles = document.querySelectorAll("h2");

titles.forEach(element => {
    console.log(`Category: ${element.innerText}`);
    console.log(`Elements: ${element.nextElementSibling.children.length}`);
});
