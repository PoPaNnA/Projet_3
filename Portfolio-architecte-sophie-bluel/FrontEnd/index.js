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


const TahinaElement = document.createElement("figure");
TahinaElement.classList.add("objets");
const imageTahinaElement = document.createElement("img");
//imageTahinaElement.url = ;
const figTahinaElement = document.createElement("figcaption");
figTahinaElement.innerText = "Abat-jour Tahina";

const ParisvElement = document.createElement("figure");
ParisvElement.classList.add("appart");
const imageParisvElement = document.createElement("img");
const figParisvElement = document.createElement("figcaption");
figParisvElement.innerText = "Appartement Paris V";

const SushisenElement = document.createElement("figure");
SushisenElement.classList.add("hobbies");
const imageSushisenElement = document.createElement("img");
const figSushisenElement = document.createElement("figcaption");
figSushisenElement.innerText = "Restaurant Sushisen - Londres";

const BalisiereElement = document.createElement("figure");
BalisiereElement.classList.add("appart");
const imageBalisiereElement = document.createElement("img");
const figBalisiereElement = document.createElement("figcaption");
figBalisiereElement.innerText = "Villa “La Balisière” - Port-Louis";

const ThermopolisElement = document.createElement("figure");
ThermopolisElement.classList.add("objets");
const imageThermopolisElement = document.createElement("img");
const figThermopolisElement = document.createElement("figcaption");
figThermopolisElement.innerText = "Structures Thermopolis";

const ParisxElement = document.createElement("figure");
ParisxElement.classList.add("appart");
const imageParisxElement = document.createElement("img");
const figParisxElement = document.createElement("figcaption");
figParisxElement.innerText = "Appartement Paris X";

const CoteauElement = document.createElement("figure");
CoteauElement.classList.add("appart");
const imageCoteauElement = document.createElement("img");
const figCoteauElement = document.createElement("figcaption");
figCoteauElement.innerText = "Pavillon “Le coteau” - Cassis";

const FernezeElement = document.createElement("figure");
FernezeElement.classList.add("appart");
const imageFernezeElement = document.createElement("img");
const figFernezeElement = document.createElement("figcaption");
figFernezeElement.innerText = "Villa Ferneze - Isola d’Elba";

const ParisxviiiElement = document.createElement("figure");
ParisxviiiElement.classList.add("appart");
const imageParisxviiiElement = document.createElement("img");
const figParisxviiiElement = document.createElement("figcaption");
figParisxviiiElement.innerText = "Appartement Paris XVIII";

const LullabyElement = document.createElement("figure");
LullabyElement.classList.add("hobbies");
const imageLullabyElement = document.createElement("img");
const figLullabyElement = document.createElement("figcaption");
figLullabyElement.innerText = "Bar “Lullaby” - Paris";

const ArteElement = document.createElement("figure");
ArteElement.classList.add("hobbies");
const imageArteElement = document.createElement("img");
const figArteElement = document.createElement("figcaption");
figArteElement.innerText = "Hôtel First Arte - New Delhi";


document.querySelector(".gallery").appendChild(TahinaElement);
document.querySelector(".objets").appendChild(imageTahinaElement);
document.querySelector(".objets").appendChild(figTahinaElement);

document.querySelector(".gallery").appendChild(ParisvElement);
document.querySelector(".appart").appendChild(imageParisvElement);
document.querySelector(".appart").appendChild(figParisvElement);

document.querySelector(".gallery").appendChild(SushisenElement);
document.querySelector(".hobbies").appendChild(imageSushisenElement);
document.querySelector(".hobbies").appendChild(figSushisenElement);

document.querySelector(".gallery").appendChild(BalisiereElement);
document.querySelector(".appart").appendChild(imageBalisiereElement);
document.querySelector(".appart").appendChild(figBalisiereElement);

document.querySelector(".gallery").appendChild(ThermopolisElement);
document.querySelector(".objets").appendChild(imageThermopolisElement);
document.querySelector(".objets").appendChild(figThermopolisElement);

document.querySelector(".gallery").appendChild(ParisxElement);
document.querySelector(".appart").appendChild(imageParisxElement);
document.querySelector(".appart").appendChild(figParisxElement);

document.querySelector(".gallery").appendChild(CoteauElement);
document.querySelector(".appart").appendChild(imageCoteauElement);
document.querySelector(".appart").appendChild(figCoteauElement);

document.querySelector(".gallery").appendChild(FernezeElement);
document.querySelector(".appart").appendChild(imageFernezeElement);
document.querySelector(".appart").appendChild(figFernezeElement);

document.querySelector(".gallery").appendChild(ParisxviiiElement);
document.querySelector(".appart").appendChild(imageParisxviiiElement);
document.querySelector(".appart").appendChild(figParisxviiiElement);

document.querySelector(".gallery").appendChild(LullabyElement);
document.querySelector(".hobbies").appendChild(imageLullabyElement);
document.querySelector(".hobbies").appendChild(figLullabyElement);

document.querySelector(".gallery").appendChild(ArteElement);
document.querySelector(".hobbies").appendChild(imageArteElement);
document.querySelector(".hobbies").appendChild(figArteElement);



/* Filter */

   const list = document.querySelector(".list"),
    listFiltrer = document.querySelectorAll(".gallery"),
    listItems = document.querySelectorAll(".list_item")

    function filter(){

        list.addEventListener('click', event =>{
            const targetId = event.target.dataset.targetId
            const target =event.target

            if(target.classList.contains("list_item")){
                listItems.forEach(listItem => listItem.classList.remove('active'))
                target.classList.add("active")

            }
            switch(targetId){
                case 'all':
                    getItems('gallery')
                    break
                case 'objets':
                        getItems(targetId)
                    break
                    case 'appart':
                        getItems(targetId)
                    break
                    case 'hobbies':
                        getItems(targetId)
                    break
            }

        })
        }
        filter()

        function getItems(className){
            listFiltrer.forEach(item =>{
                if (item.classList.contains(className)) {
                 item.getElementsByClassName.display = 'block'
                } else{
                 item.style.display = 'none'
                }
             })
        }
    
   
        

        
   
   
       

    
    





























