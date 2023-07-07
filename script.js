// configure le texte à imprimer, chaque élément du tableau est une nouvelle ligne
var aText = new Array("BONJOUR, JE M'APPELLE ANGELINA.");
var iSpeed = 100; // délai d'impression
var iIndex = 0; // commence à imprimer le tableau à cette position
var iArrLength = aText[0].length; // la longueur du tableau de texte
var iScrollAt = 20;
// commence à défiler vers le haut à ce nombre de lignes

var iTextPos = 0; // initialise la position du texte
var sContents = ""; // initialise la variable de contenu
var iRow; // initialise la ligne courante

function typewriter() {
  sContents = " ";
  iRow = Math.max(0, iIndex - iScrollAt);
  var destination = document.getElementById("typedtext");

  while (iRow < iIndex) {
    sContents += aText[iRow++] + "<br />";
  }
  destination.innerHTML =
    sContents + aText[iIndex].substring(0, iTextPos) + "_";
  if (iTextPos++ == iArrLength) {
    iTextPos = 0;
    iIndex++;
    if (iIndex != aText.length) {
      iArrLength = aText[iIndex].length;
      setTimeout("typewriter()", 500);
    }
  } else {
    setTimeout("typewriter()", iSpeed);
  }
}

typewriter();

//    Apparition section par section

let sectionFadeIn = document.querySelectorAll(".section-fade-in");
for (let i = 0; i < sectionFadeIn.length; i++) {
  window.addEventListener("scroll", () => {
    const sectionFadeInCoordonnees = sectionFadeIn[i].getBoundingClientRect();
    if (
      sectionFadeInCoordonnees.top <= window.innerHeight - 100 &&
      sectionFadeInCoordonnees.bottom >= 0
    ) {
      sectionFadeIn[i].classList.add("show");
    }
  });
}

/*SLIDEPARALAXE*/
function parallaxEffect() {
  document.addEventListener("DOMContentLoaded", () => {
    parallaxEffect();
    $(document).ready(function () {
      $("#slide1").parallax("center", 500, 0.1, true);
    });
  });
}
/*Scroll Bonjour*/
window.addEventListener("scroll", () => {
  const typedText = document.getElementById("typedtext");
  const typedTextCoords = typedText.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (typedTextCoords.top <= windowHeight - 100) {
    typedText.classList.remove("hidden");
  }
});
