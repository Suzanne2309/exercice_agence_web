// console.log("hello world") inscrit après la création du fichier, pour s'assurer que le fichier soit bien prit en compte par le navigateur

//Test création d'événement avec nouvelle div

//Test active /*
// const burger = document.querySelector('#burger');
// const menu = document.querySelector('.principale')
// const links = document.querySelector('#links');

// const active = document.createElement("div")
// active.classList.add("active")

// burger.addEventListener('click', () => {
//     menu.classList.toggle('active');
// })



// Solution qui fonctionne
// On définit la variable menu = nav principale en passant par le DOM
//     const menu = document.getElementById('principale')
// // Création de l'événement click => class = active
//     burger.addEventListener('click' , () => {
//         if (menu.classList.contains("active")) {
//             menu.style.display = "block";
     
//     } else {
//           menu.classList.toggle("active")
//         // menu.style.display = "none";
//     }
   
// })
// Fonction si class active alors affichage menu mobile et si pas active alors rien afficher
// function navBurger() {
    
// }


// Création d'événement click
const burger = document.getElementById('burger');

const menu = document.getElementById('principale');
 
burger.addEventListener('click', () => {
    //Fonction apparition du menu nav
    if (menu.style.display === "none") {

        menu.style.display = "none";

    } else {

        menu.style.display = "none";

    }

    //click sur croix ferme le menu
    burger.classList.toggle('active')
})

//Création croix

