// console.log("hello world") inscrit après la création du fichier, pour s'assurer que le fichier soit bien prit en compte par le navigateur


// Création d'événement click
const burger = document.getElementById('burger');
const menu = document.getElementById('principale');
 
burger.addEventListener('click', () => {
    //Fonction apparition du menu nav
    if (menu.style.display === "flex") {

        menu.style.display = "none";

    } else {

        menu.style.display = "flex";
    }
})


    //Switch de bars vers croix et inversement (ouvrir et fermer le menu)
const bars = document.querySelector('.bars');
const croix = document.querySelector('.croix');

burger.addEventListener('click', () => {
    
    if (bars.style.display === "none") {

        bars.style.display = "block";

    } else {

        bars.style.display = "none";
    }
})

burger.addEventListener('click', () => {

    if (croix.style.display === "block") {

        croix.style.display = "none";

    } else {
        
        croix.style.display = "block"
    }
})
