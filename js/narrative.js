// Les noeuds de la page
var narrativeElt = document.getElementById("narrative");
var index = 0;

// Call AJAX
ajaxGet("http://localhost/game/data/intro.json", function (reponse) {
  var intro = JSON.parse(reponse);

  narrativeElt.innerHTML = intro.intro[index].texte;

  // // au clic du bouton Suivant
  // document.addEventListener("keypress", function(e){
  //   var key = e.which || e.keyCode;
  //
  //   if (key === 13) { // 13 is code for enter
  //     index = index+1;
  //     narrativeElt.innerHTML = intro.intro[index].texte;
  //
  //     // si on est arrivés au bout du scenar
  //     // (rajouter une méthode universelle)
  //     if (intro.intro[index].id = "1") {
  //         document.addEventListener("keypress", function(e){
  //         var key = e.which || e.keyCode;
  //
  //         if (key === 13) { // on appuye une derniere fois sur entree
  //           document.location = 'ecran1.php';
  //         }
  //         });
  //       }
  //     }
  //   });
});
