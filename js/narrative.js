// Les noeuds de la page
var narrativeElt = document.getElementById("narrative");
var index = 0;
// texte suivant


// Call AJAX
ajaxGet("http://matthieukt.com/game/data/intro.json", function (reponse) {
  var intro = JSON.parse(reponse);



  narrativeElt.innerHTML = intro.intro[index].texte;
  // Ux apparition progressive du texte
  $('.bloc').fadeIn();
  // à l'appui de la touche entrée
  document.addEventListener("keypress", function(e){
    var key = e.which || e.keyCode;

    if (key === 13) { // 13 is code for enter
      // Ux disparition du texte
      $.when( $('.bloc').fadeOut() ).then(function() {
        index = index+1;
        narrativeElt.innerHTML = intro.intro[index].texte;
        // Ux apparition du texte
        $('.bloc').fadeIn();
      });
    }

    // si on est arrivés au bout du scenar
    // (rajouter une méthode universelle)
    if (intro.intro[index].id = "1") {
      document.addEventListener("keypress", function(e){
        var key = e.which || e.keyCode;
        if (key === 13) { // on appuye une derniere fois sur entree
          setTimeout(function() {
            window.location.href = "ecran1.php";
          }, 500);
        }
      });
    }

  });
});
