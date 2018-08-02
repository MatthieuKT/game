ajaxGet("http://localhost/game/data/targets.json", function (reponse) {
  var res = JSON.parse(reponse);
  // Noeud Parent
  var mainElt = document.getElementById("main");
  var displayElt = document.getElementById("dataDisplay");
  var targets = res.targets.ecran1;

  targets.forEach(function(target) {
    var iElt = document.createElement("i");
    iElt.id = target.id;
    iElt.classList.add("fas");
    iElt.classList.add("fa-bullseye");
    iElt.classList.add("fa-3x");
    var iEltStyle = iElt.style;
    iEltStyle.left = target.coordonnees.x;
    iEltStyle.top = target.coordonnees.y;

    mainElt.appendChild(iElt);

    // Zoom sur la target au survol
    $(iElt).mouseenter( function() {
      $(iElt).removeClass("fa-3x");
      $(iElt).addClass("fa-4x");
      // displayElt.innerHTML=target.name;
    });
    // Dézoom de la target à la sortie de souris
    $(iElt).mouseleave(function() {
      $(iElt).removeClass("fa-4x");
      $(iElt).addClass("fa-3x");
      // displayElt.innerHTML="";
    });
    // Affiche la data de la target
    $(iElt).click(function() {
      displayElt.innerHTML=target.desc;
    });
  });

}); // AJAX callecran1.php
