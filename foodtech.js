const lienOnglet = document.querySelectorAll('.nav-tabs .nav-link');
const contenuOnglet = document.querySelectorAll('.content');

lienOnglet.forEach(function(tabLink) { 
    tabLink.addEventListener('click', (event) => {
        event.preventDefault(); //La méthode preventDefault(), rattachée à l'interface Event(click), indique à l'agent utilisateur que si l'évènement n'est pas explicitement géré, l'action par défaut ne devrait pas être exécutée comme elle l'est normalement.
        let currentTab = event.currentTarget;
        let currentTabId = currentTab.getAttribute('href');

        contenuOnglet.forEach((tabContent) => {
            tabContent.classList.add('hidden');
        });

        let currentTabContent = document.querySelector(currentTabId);
        currentTabContent.classList.remove('hidden');
    });
});

const mainCourses = ["Filet de turbot de la mer Noire", "Tablier de sapeur", "Gigot d'agneau", "Faisan de forêt", "Trio de quinoa, chou kale et pousses d'épinard"];
const techniques = ["à la cocotte", "minute", "avec sa sauce hollandaise", "façon sud-ouest", "comme chez ma grand-mère", "déglacé au saké", "maturé en fût de chêne"];
const sides = ["une purée de topinambour", "ses frites truffées", "des châtaignes croustillantes", "une brunoise carotte-cèleri", "un oeuf parfait", "sa crème veloutée de fromages affinés"];
const seasonings = ["au yuzu rouge", "au poivre vert de Sichuan", "et une pointe de safran", "à l'ail noir", "et un peu de sucre en poudre"];

const getRandom = (data) => data[Math.floor(Math.random() * data.length)];

const menu = `${getRandom(mainCourses)} ${getRandom(techniques)}, avec ${getRandom(sides)} ${getRandom(seasonings)}`


document.getElementById("bouton-change-menu").addEventListener("click", () => {
    const menu = `${getRandom(mainCourses)} ${getRandom(techniques)}, avec ${getRandom(sides)} ${getRandom(seasonings)}`;
    document.getElementById("menu-items").innerHTML = menu;
  });

// Get all the images
const images = document.querySelectorAll("#container img");

// Add the draggable attribute to all the images
images.forEach(img => {
    img.setAttribute("draggable", true);
});

// Add the event listeners for drag and drop
images.forEach(img => {
    img.addEventListener("dragstart", dragStart);
    img.addEventListener("dragend", dragEnd);
});

// Add event listeners to the container
const container = document.querySelector("#container");
container.addEventListener("dragover", dragOver);
container.addEventListener("dragenter", dragEnter);
container.addEventListener("dragleave", dragLeave);
container.addEventListener("drop", drop);

// Drag start function
function dragStart() {
    this.classList.add("hold");
    setTimeout(() => this.classList.add("invisible"), 0);
}

// Drag end function
function dragEnd() {
    this.classList.remove("hold", "invisible");
}

// Drag over function
function dragOver(e) {
    e.preventDefault();
}

// Drag enter function
function dragEnter(e) {
    e.preventDefault();
    this.classList.add("hovered");
}

// Drag leave function
function dragLeave() {
    this.classList.remove("hovered");
}
