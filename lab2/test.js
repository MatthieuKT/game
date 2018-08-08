ajaxGet("http://localhost/game/lab2/test.json", function (reponse) {

  // Stockage des données JSON dans une variable JS
  var targets = JSON.parse(reponse);

  // Récupère l'URL pour interroger le server
  var url_string = window.location.href;
  var url = new URL(url_string);
  // Récupère le paramètre de l'url concernant l'écran à cibler
  var keytofind = url.searchParams.get("c");

  // parcourt les ecrans contenus dans la requête
  // Initialisation des variables
  var i = 0, req_index = "";
  $.each(targets, function(index, value){
    // Si l'index correspond au paramètre de la page recherchée dans l'URL
    // IDEA: placer l'URL de l'image à insérer dans le mainElt
    if(index === keytofind){ // IDEA: penser à stopper la boucle à ce stade
      req_index = i;
      // Récupération des noeuds
      var mainElt = document.getElementById("main");
      // TODO: Récupérer le dataDisplay pour le target.desc

      // Ensuite parcourir les index contenus dans l'écran
      value.forEach(function(target) {
        // construction de la div .action et de ses deux enfants
        var actionElt = document.createElement("div");
        actionElt.classList.add("action");
        var targetElt = document.createElement("div");
        targetElt.classList.add("target");
        var iconElt = document.createElement("div");
        iconElt.classList.add("icon");
        actionElt.appendChild(targetElt);
        actionElt.appendChild(iconElt);
        mainElt.appendChild(actionElt);

        // construction des targets
        var aElt = document.createElement("a");
        console.log(target.redirect.link);
        if (target.redirect.link) { // Le lien correspond au target.link
          aElt.href = target.redirect.link;
        } else {
          aElt.href = "#";
          // On lui attribue la classe des liens désactivés
          aElt.classList.add("lock");
        }

        var iElt = document.createElement("i");
        // Ajout des classes FontAwesome contenues dans un tableau spécial
        iElt.classList.add(target.icon[0]);
        iElt.classList.add(target.icon[1]);
        iElt.classList.add(target.icon[2]);
        aElt.appendChild(iElt);
        // Ajout dynamique des coordonnées
        // IDEA: On pourrait le positionner ailleurs
        var actionStyle = actionElt.style;
        actionStyle.left = target.coordonnees.x;
        actionStyle.top = target.coordonnees.y;
        // Insertion dans la div .target
        targetElt.appendChild(aElt);
        // Insertion finale dans mainElt
        mainElt.appendChild(actionElt);

// IDEA: Doit-on placer ce code dans le call AJAX ou plutot dans l'UI/UX?

// repérage des éléments
targetElt = document.getElementsByClassName('target');

// Zoom sur la target au survol
$(iElt).mouseenter( function() {
  $(iElt).removeClass("fa-circle").addClass("fa-dot-circle");
  $(iconElt).html('<i class="far fa-hand-paper fa-2x"></i>')
  // <i class="fas fa-door-open fa-2x"></i>
  // <i class="fas fa-search"></i>
  // displayElt.innerHTML=target.name;
});
// Dézoom de la target à la sortie de souris
$(iElt).mouseleave(function() {
  $(iElt).removeClass("fa-dot-circle").addClass("fa-circle");
  $(iconElt).html('')
  // displayElt.innerHTML="";
});

// Désactive les liens
$('a.lock').click(function(){
  return false;
});

}); // targets in value
}
i++;
});
}); // call ajax targets
