export async function getAllWorks() {
    try {
        const data = await fetch("http://localhost:5678/api/works");
        return data.json();
    } 
    catch (error) {
        return error;
    }
}
const works= await getAllWorks();
console.log(works);

const section= document.getElementById("portfolio");
console.log(section);

/* Creation Gallery */

function displayWorks() {
   
    for (let i=0; i<works.length; i++) {

    const figure = document.createElement("figure");
    const image = document.createElement("img");
    image.src = works[i].imageUrl;
    const figcaption = document.createElement("figcaption");
    figcaption.innerText = works[i].title;
    image.setAttribute("src", image.src);
    figure.appendChild(image);
    figure.appendChild(figcaption);
    document.querySelector(".gallery").appendChild(figure);
}}

    displayWorks();

/* Filter */

let filtresItems = document.getElementsByClassName('filtre-item');
let onClick = function (event) {
  event.preventDefault();
  
  for (let i = 0; i < filtresItems.length; i++) {
    filtresItems[i].classList.remove('active');
  }
  
  event.currentTarget.classList.add('active');
};

for (let i = 0; i <filtresItems.length; i++) {
    filtresItems[i].addEventListener('click', onClick, false);
};


const filtreTous = document.getElementById("tous");
filtreTous.addEventListener("click", function(){
    document.querySelector(".gallery").innerHTML = "";
    for (let i=0; i<works.length; i++){
        let categoryId = works[i].categoryId;
        if(categoryId){
const figure = document.createElement("figure");
const image = document.createElement("img");
image.src = works[i].imageUrl;
const figcaption = document.createElement("figcaption");
figcaption.innerText = works[i].title;
image.setAttribute("src", image.src);
figure.appendChild(image);
figure.appendChild(figcaption);
document.querySelector(".gallery").appendChild(figure);
        }
    }
})

    const filtreObjets = document.getElementById("objets");
    filtreObjets.addEventListener("click", function(){
        document.querySelector(".gallery").innerHTML = "";
        for (let i=0; i<works.length; i++){
            let categoryId = works[i].categoryId;
            if(categoryId ==1){
    const figure = document.createElement("figure");
    const image = document.createElement("img");
    image.src = works[i].imageUrl;
    const figcaption = document.createElement("figcaption");
    figcaption.innerText = works[i].title;
    image.setAttribute("src", image.src);
    figure.appendChild(image);
    figure.appendChild(figcaption);
    document.querySelector(".gallery").appendChild(figure);
            }
        }
    })
    const filtreAppartement = document.getElementById("appartements");
    filtreAppartement.addEventListener("click", function(){
        document.querySelector(".gallery").innerHTML = "";
        for (let i=0; i<works.length; i++){
            let categoryId = works[i].categoryId;
            if(categoryId ==2){
    const figure = document.createElement("figure");
    const image = document.createElement("img");
    image.src = works[i].imageUrl;
    const figcaption = document.createElement("figcaption");
    figcaption.innerText = works[i].title;
    image.setAttribute("src", image.src);
    figure.appendChild(image);
    figure.appendChild(figcaption);
    document.querySelector(".gallery").appendChild(figure);
            }
        }
    })
    const filtreHotelsrestaurants = document.getElementById("hotelsrestaurants");
    filtreHotelsrestaurants.addEventListener("click", function(){
        document.querySelector(".gallery").innerHTML = "";
        for (let i=0; i<works.length; i++){
            let categoryId = works[i].categoryId;
            if(categoryId ==3){
    const figure = document.createElement("figure");
    const image = document.createElement("img");
    image.src = works[i].imageUrl;
    const figcaption = document.createElement("figcaption");
    figcaption.innerText = works[i].title;
    image.setAttribute("src", image.src);
    figure.appendChild(image);
    figure.appendChild(figcaption);
    document.querySelector(".gallery").appendChild(figure);
            }
        }
    })























