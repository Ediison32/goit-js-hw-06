const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


/* const image = document.querySelector(".galley");

console.log(image.attributes);
console.log(image.hasAttribute(images.url)); */

/* 
const ul = document.querySelector(".gallery");

const li = document.createElement("li");
ul.appendChild(li);

const img = document.createElement("img");
img.src = images[0].url 
img.alt = images[0].alt 
li.appendChild(img)

console.log(ul);  */

const ul = document.querySelector(".gallery");
images.forEach((x)=>{
  const li = document.createElement('li');
  ul.appendChild(li);
  const img = document.createElement('img');
  img.src = x.url
  img.alt = x.alt;
  li.appendChild(img);
})
console.log(ul);