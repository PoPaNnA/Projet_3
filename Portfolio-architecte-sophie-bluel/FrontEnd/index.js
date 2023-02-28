import { createElement } from "reacte";

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

alert

const tahElement = document.createElement("figure");
tahElement.classList.add("blocks_item objects");
document.querySelector(".gallery").appendChild(tahElement);
const imgtahElement = document.createElement("img");
imgtahElement.src = "./Backend/images/abajour-tahina1651286843956.png";
document.querySelector(".blocks_item objects").appendChild(imgtahElement);
const titretahElement = document.createElement("titre");
titretahElement.innerText = "Abat-jour Tahina";
document.querySelector(".blocks_item objects").appendChild(titretahElement);


const parvElement = document.createElement("figure");
parvElement.classList.add("blocks_item appartements");
document.querySelector(".gallery").appendChild(parvElement);
const imgparvElement = document.createElement("img");
document.querySelector(".blocks_item appartements").appendChild(imgparvElement);
const titreparvElement = document.createElement("titre");
titreparvElement.innerText = "";
document.querySelector(".blocks_item appartements").appendChild(titreparvElement);


const sushiElement = document.createElement("figure");
sushiElement.classList.add("blocks_item hobbies");
document.querySelector(".gallery").appendChild(sushiElement);
const imgsushiElement = document.createElement("img");
document.querySelector(".blocks_item hobbies").appendChild(imgsushiElement);
const titresushiElement = document.createElement("titre");
titresushiElement.innerText = "";
document.querySelector("blocks_item hobbies").appendChild(titresushiElement);

const balisElement = document.createElement("figure");
balisElement.classList.add("blocks_item apartments");
document.querySelector(".gallery").appendChild(balisElement);
const imgbalisElement = document.createElement("img");
document.querySelector(".blocks_item apartments").appendChild(imgbalisElement);
const titrebalisElement = document.createElement("titre");
titrebalisElement.innerText = "";
document.querySelector(".blocks_item appartements").appendChild(titrebalisElement);

const thermElement = document.createElement("figure");
thermElement.classList.add("blocks_item objects");
document.querySelector(".gallery").appendChild(thermElement);
const imgthermElement = document.createElement("img");
document.querySelector(".blocks_item objects").appendChild(imgthermElement);
const titrethermElement = document.createElement("titre");
titrethermElement.innerText = "";
document.querySelector(".blocks_item objects").appendChild(titrethermElement);


const parxElement = document.createElement("figure");
parxElement.classList.add("blocks_item apartments");
document.querySelector(".gallery").appendChild(parxElement);
const imgparxElement = document.createElement("img");
document.querySelector(".blocks_item apartments").appendChild(imgparxElement);
const titreparxElement = document.createElement("titre");
titreparxElement.innerText = "";
document.querySelector(".blocks_item appartements").appendChild(titreparxElement);


const cotElement = document.createElement("figure");
cotElement.classList.add("blocks_item apartments");
document.querySelector(".gallery").appendChild(cotElement);
const imgcotElement = document.createElement("img");
document.querySelector(".blocks_item apartments").appendChild(imgcotElement);
const titrecotElement = document.createElement("titre");
titrecotElement.innerText = "";
document.querySelector(".blocks_item appartements").appendChild(titrecotElement);


const fernElement = document.createElement("figure");
fernElement.classList.add("blocks_item apartments");
document.querySelector(".gallery").appendChild(fernElement);
const imgfernElement = document.createElement("img");
document.querySelector(".blocks_item apartments").appendChild(imgfernElement);
const titrefernElement = document.createElement("titre");
titrefernElement.innerText = "";
document.querySelector(".blocks_item appartements").appendChild(titrefernElement);

const parxviiiElement = document.createElement("figure");
parxviiiElement.classList.add("blocks_item apartments");
document.querySelector(".gallery").appendChild(parxviiiElement);
const imgparxviiiElement = document.createElement("img");
document.querySelector(".blocks_item apartments").appendChild(imgparxviiiElement);
const titreparxviiiElement = document.createElement("titre");
titreparxviiiElement.innerText = "";
document.querySelector(".blocks_item appartements").appendChild(titreparxviiiElement);


const lullElement = document.createElement("figure");
lullElement.classList.add("blocks_item hobbies");
document.querySelector(".gallery").appendChild(lullElement);
const imglullElement = document.createElement("img");
document.querySelector(".blocks_item hobbies").appendChild(imglullElement);
const titrelullElement = document.createElement("titre");
titrelullElement.innerText = "";
document.querySelector("blocks_item hobbies").appendChild(titrelullElement);


const arteElement = document.createElement("figure");
arteElement.classList.add("blocks_item hobbies");
document.querySelector(".gallery").appendChild(arteElement);
const imgarteElement = document.createElement("img");
document.querySelector(".blocks_item hobbies").appendChild(imgarteElement);
const titrearteElement = document.createElement("titre");
titrearteElement.innerText = "";
document.querySelector("blocks_item hobbies").appendChild(titrearteElement);


/*Creation buttons*/

const tousElement = document.createElement("button");
tousElement.innerText = "Tous";
tousElement.classList.add("list_item");
document.querySelector(".list").appendChild(tousElement);
tousElement.id = 'id.active';

const objectsElement = document.createElement("button");
objectsElement.innerText ="Objets";
objectsElement.classList.add("list_item");
document.querySelector(".list").appendChild(objectsElement);

const appartElement = document.createElement("button");
appartElement.innerText ="Appartements";
appartElement.classList.add("list_item");
document.querySelector(".list").appendChild(appartElement);

const hobbiesElement = document.createElement("button");
hobbiesElement.innerText ="Hôtels & restaurants";
hobbiesElement.classList.add("list_item");
document.querySelector(".list").appendChild(hobbiesElement);



/* Filter */


    
    const listItems = document.querySelector(".list_item");
    
    function filters(){
        list.addEventListener('click', event=>{
          const targetId  = event.target.dataset.id
          const target = event.target
        !  console.log(targetId);
          
        if(target.classList.contains("list_item")){
            
            target.classList.add('active')

            };
          
          switch(targetId){
            case 'active':
                getItems ("list")
                break
            case "objects":
                getItems (targetId)
              
                break
                case "appartements":
                    getItems (targetId)


                break
                case "hobbies":
                    getItems (targetId)

                break
          }
        })
    }
    filters()

    function getItems(className){
        items.forEach(item =>{
            if(item.classList.contains(className)){
                item.style.display = 'block'
            } else {
                item.style.display = 'none'
    
            }
        })



    }
    
































