const lienOnglet = document.querySelectorAll('.nav-tabs .nav-link');
const contenuOnglet = document.querySelectorAll('.content');

lienOnglet.forEach(function(tabLink) { 
    tabLink.addEventListener('click', function(event) {
        event.preventDefault(); //La méthode preventDefault(), rattachée à l'interface Event(click), indique à l'agent utilisateur que si l'évènement n'est pas explicitement géré, l'action par défaut ne devrait pas être exécutée comme elle l'est normalement.
        let currentTab = event.currentTarget;
        let currentTabId = currentTab.getAttribute('href');

        // hide all tab contents
        contenuOnglet.forEach(function(tabContent) {
            tabContent.classList.add('hidden');
        });

        // show current tab content
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


document.getElementById("bouton-change-menu").addEventListener("click", function(){
    const menu = `${getRandom(mainCourses)} ${getRandom(techniques)}, avec ${getRandom(sides)} ${getRandom(seasonings)}`;
    document.getElementById("menu-items").innerHTML = menu;
  });

