var dialogElt = document.getElementById('data');
// var nextElt = document.getElementById('next');
// permet de situer l'index du texte
var iteration = 0;

ajaxGet("http://localhost/game/lab2/dialog.json", function (reponse) {
    var dialog = JSON.parse(reponse);

    // Récupère l'URL pour interroger le server
    // https://stackoverflow.com/questions/979975/how-to-get-the-value-from-the-get-parameters
    var url_string = window.location.href;
    var url = new URL(url_string);
    // Récupère le paramètre de l'url concernant un écran en particulier
    var keytofind = url.searchParams.get("c");


    // Initialisation des variables
    var i = 0, req_index = "";
    // parcourt les ecrans contenus dans la requête
    $.each(dialog, function(index, value){
      // Si l'index correspond au paramètre de la page recherchée dans l'URL
      // IDEA: Ici on pourrait placer l'URL de l'image à insérer dans le mainElt

      if(index === keytofind){ // IDEA: penser à stopper la boucle à ce stade
        req_index = i;

        //  Le premier texte du tableau de dialogue apparait automatiquement
        dialogElt.innerHTML = value[0].texte;

        // activera l'apparition des .action à la fin du dialogue
        var u = 0;
        // à l'appui de la touche entrée
        document.addEventListener("keypress", function(e){
          var key = e.which || e.keyCode;

          if (key === 13) { // 13 is code for enter
            // Effet de disparition du texte précédent
            $('#data').fadeOut(500);
            if (iteration < value.length-1) {
              // Pendant que l'élément est invisible, on insère de nouvelles data
              setTimeout(function() {
                // On passe à l'index suivant
                iteration = iteration+1;
                dialogElt.textContent = value[iteration].texte;
              },500);
              // Ux apparition du texte
              $('#data').fadeIn(500);
            }

            // Rappel: u sers à déterminer quand le dialogue est fini
            if (u <= value.length-1) {
               u = u +1 ;
               // A la fin du dialogue
               if (u == value.length){ // IDEA: stopper la touche entrée?
                 // On vide la boite de dialogue
                 dialogElt.innerHTML = "";
                 console.log("on en est là?");
                 // disparition de la boite de dialogue
                 $('#dataDisplay').fadeOut();
                 // Apparition des targets
                 $(".action").css('visibility', 'visible');
               }
            }

          }; // if key = 13
        }); // function keypress

      }; // if index = keytofind
      i++; // Itère tant que l'index n'est pas égal à keytofind
   }); // $.each
}); // AJAX call
