document.addEventListener("DOMContentLoaded", () => {
    
    const imageReduire = document.getElementById("boutonreduire");
  
    imageReduire.addEventListener("mouseenter", () => {
      imageReduire.src = "images/BoutonReduireClair.png";
    });
  
    imageReduire.addEventListener("mouseleave", () => {
      imageReduire.src = "images/BoutonReduire.png";
    });



    const imageFermer = document.getElementById("boutonfermer");
  
    imageFermer.addEventListener("mouseenter", () => {
      imageFermer.src = "images/BoutonFermerClair.png";
    });
  
    imageFermer.addEventListener("mouseleave", () => {
      imageFermer.src = "images/BoutonFermer.png";
    });


    const divParent = document.getElementById("div-todolist");
    const divTaches = document.getElementsById("all-tasks-div");
    const buttonDiv = document.getElementById("addTaskButton");

    let firstClick = true;

    addTask.addEventListener("click", () => {

        const divPremiereTache = document.createElement("div");
        divPremiereTache.classList.add("nouvelleTache");

        // Ajouter une image
        const image = document.createElement("img");
        image.src = "images/CercleToDo.png";  // Mets ton chemin d'image ici
        image.classList.add("imageToDo");
        divPremiereTache.appendChild(image);

        // Ajouter un textarea
        const text = document.createElement("textarea");
        text.classList.add("espaceTexteToDo");
        text.setAttribute('spellcheck', 'false');
        divPremiereTache.appendChild(text);


        divTaches.prepend(divPremiereTache);
        buttonDiv.dataset.clicked = "true";

        if (firstClick) {
            // Ajouter le div en bas la première fois
            divParent.appendChild(divPremiereTache); 
            firstClick = false;  // On change l'état après le premier clic

            // Déplacer le bouton en bas
            divParent.appendChild(buttonDiv);  // Déplace le bouton en bas du parent
            firstClick = false; 
        } else {
            divTaches.prepend(divPremiereTache);
        }


    });


});
  