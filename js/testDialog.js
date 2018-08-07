// Les noeuds de la page
var dialogElt = document.getElementById('dataDisplay');
var nextElt = document.getElementById('next');
// permet de situer l'index du texte
var index = 0;

ajaxGet("http://localhost/game/data/dialog.json", function (reponse) {
  var dialog = JSON.parse(reponse);

  // Le premier texte apparait directement
  dialogElt.innerHTML = dialog.ecran1[0].texte;
  // Apparition progressive du texte
  $('#dataDisplay').fadeIn();

    // limitera l'événement
    var i = 0;
    // à l'appui de la touche entrée
    document.addEventListener("keypress", function(e){
      var key = e.which || e.keyCode;


      if (key === 13) { // 13 is code for enter
        // Itération et passage au texte suivant
        // Effet de disparition du texte précédent
        $('#dataDisplay').fadeOut(500);
          if (index < dialog.ecran1.length-1) {
            // Pendant que l'élément est invisible, on insère de nouvelles data
            setTimeout(function() {
              // On passe à l'index suivant
              index = index+1;
              dialogElt.innerHTML = dialog.ecran1[index].texte;
            },500);
            // Ux apparition du texte
            $('#dataDisplay').fadeIn(500);
           }

         if (i <= dialog.ecran1.length-1) {
           i = i +1 ;
           // A la fin du dialogue
           if (i == dialog.ecran1.length){ // IDEA: stopper la touche entrée?
             // On vide la boite de dialogue
             dialogElt.innerHTML = "";
             $("i").css('visibility', 'visible');

           }
         }


       } // if press enter
     }); // function keypress
  }); // AJAX get

  ajaxGet("http://localhost/game/data/test.json", function (reponse) {

    var targets = JSON.parse(reponse);
    // Récupération des noeuds
    var mainElt = document.getElementById("main");

    // Récupère l'URL pour interroger le server
    // https://stackoverflow.com/questions/979975/how-to-get-the-value-from-the-get-parameters
    var url_string = window.location.href;
    var url = new URL(url_string);
    // Récupère le paramètre de l'url concernant un écran en particulier
    var keytofind = url.searchParams.get("c");


    // Initialisation des variables
    var i = 0, req_index = "";
    // parcourt les ecrans contenus dans la requête
    $.each(targets, function(index, value){
      // Si l'index correspond au paramètre de la page recherchée dans l'URL
      // IDEA: Ici on pourrait placer l'URL de l'image à insérer dans le mainElt

      if(index === keytofind){ // IDEA: penser à stopper la boucle à ce stade
      req_index = i;

      // Ensuite parcourir les index contenus dans l'écran
      value.forEach(function(target) {
         // construction des targets
         var iElt = document.createElement("i");
         iElt.id = target.id;
         iElt.classList.add("fas");
         iElt.classList.add("fa-bullseye");
         iElt.classList.add("fa-3x");
         var iEltStyle = iElt.style;
         iEltStyle.left = target.coordonnees.x;
         iEltStyle.top = target.coordonnees.y;
         // Insertion de l'élément dans le DOM
         mainElt.appendChild(iElt);

         // Zoom sur la target au survol
         $(iElt).mouseenter( function() {
           $(iElt).css("color", "green");
           // displayElt.innerHTML=target.name;
         });
         // Dézoom de la target à la sortie de souris
         $(iElt).mouseleave(function() {
           $(iElt).css("color", "white");
           // displayElt.innerHTML="";
         });
         // Affiche la data de la target
         $(iElt).click(function() {
           $('#dataDisplay').fadeIn();
           console.log(target.desc);
           dialogElt.innerHTML=target.desc;

           console.log(target.link);
           // si il possède un data.link
           if (target.link) {
             // TODO: faire une disparition d'écran
             document.location.href = target.link;
           }
         });
       });
     }
     i++;
   }); // each
}); // call ajax targets

      // au clic du bouton Suivant
      // nextElt.addEventListener("click", function(){
      // index = index+1;
      // dialogElt.innerHTML = scenario.chapitre1[index].texte;
      // });
