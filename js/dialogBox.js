// Les noeuds de la page
var dialogElt = document.getElementById('dialog');
var textElt = document.getElementById('text');
var nextElt = document.getElementById('next');
// permet de situer l'index du texte
var index = 0;

ajaxGet("http://matthieukt.com/game/data/scenario.json", function (reponse) {
  var scenario = JSON.parse(reponse);

  dialogElt.innerHTML = scenario.chapitre1[index].texte;

  // au clic du bouton Suivant
  nextElt.addEventListener("click", function(){
  index = index+1;
  dialogElt.innerHTML = scenario.chapitre1[index].texte;
  });

});
