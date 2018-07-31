// Les noeuds de la page
var narrativeElt = document.getElementById("narrative");
var index = 0;

// Call AJAX
ajaxGet("http://localhost/game/data/intro.json", function (reponse) {
  var intro = JSON.parse(reponse);

  narrativeElt.innerHTML = intro.intro[index].texte;

  // au clic du bouton Suivant
  document.addEventListener("keypress", function(e){
    var key = e.which || e.keyCode;
    if (key === 13) { // 13 is code for enter
      console.log("yoooo");
      index = index+1;
      dialogElt.innerHTML = intro.intro[index].texte;
    }
  });
});
