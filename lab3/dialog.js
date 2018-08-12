var dialogElt = document.getElementById('data');
// var nextElt = document.getElementById('next');
// permet de situer l'index du texte
var iteration = 0;

ajaxGet("http://localhost/game/lab3/dialog.json", function (reponse) {
    var dialog = JSON.parse(reponse);

    // Récupère l'URL pour interroger le server
    // https://stackoverflow.com/questions/979975/how-to-get-the-value-from-the-get-parameters
    var url_string = window.location.href;
    var url = new URL(url_string);
    // Récupère le paramètre de l'url concernant un écran en particulier
    var keytofind = url.searchParams.get("c");


    // Initialisation des variables
    var i = 0, req_index = "";
    // parcourt les scenes contenus dans la requête
    $.each(dialog, function(index, value){
      // Si l'index correspond au paramètre de la page recherchée dans l'URL
      // IDEA: Ici on pourrait placer l'URL de l'image à insérer dans le mainElt

      if(index === keytofind){ // IDEA: penser à stopper la boucle à ce stade
        req_index = i;
        //  Le premier texte du tableau de dialogue apparait automatiquement
        dialogElt.textContent = value[0].texte;

        // activera l'apparition des .action à la fin du dialogue
        var u = 0;
        // à l'appui de la touche entrée
        document.addEventListener("keypress", function(e){
          var key = e.which || e.keyCode;

          function choix(choice, e) {
            var choix = choice;
            console.log(e.which);
            var check = e.which || e.keyCode;

            if (Array.isArray(choix)) {
              console.log("array");
              if (check === 49) {
                var choixObj = value[iteration].choix;
                for (var key in choixObj) {
                  $.each(choixObj[key], function(index, value){
                    dialogElt.innerHTML += "<br>" + value;
                  });
                }
              }
            }
          }

          choix(value[iteration].choix, e);


          if (key === 13) { // 13 is code for enter
            if (iteration < value.length-1) {

              iteration = iteration+1;
              dialogElt.textContent = value[iteration].texte;


              if (value[iteration].choix) {
                var arrChoix = value[iteration].choix;
                for (var key in arrChoix) {
                  $.each(arrChoix[key], function(index, value){
                    dialogElt.innerHTML += "<br>" + value;
                  });
                  }
                  document.addEventListener("keydown", function(e){
                    var keydown = e.which || e.keyCode;
                    if (keydown === 97) {
                      var choix = value[iteration].choix1;
                      choix.forEach(function(aaa){
                        dialogElt.textContent = aaa.texte
                        document.addEventListener("keydown", function(e){
                          var keydown = e.which || e.keyCode;
                          if (keydown === 13) {
                            // sortie du choix et retour au fil du dialogue
                            iteration = iteration+1;
                            dialogElt.textContent = value[iteration].texte;
                          }
                      });
                    });
                  }
                    else if (keydown === 98) {
                      var choix = value[iteration].choix2;
                      choix.forEach(function(aaa){
                        dialogElt.textContent = aaa.texte
                      })
                    }
                    else if (keydown === 99) {
                      var choix = value[iteration].choix3 ;
                      choix.forEach(function(aaa){
                        dialogElt.textContent = aaa.texte
                      })
                    }
                  });
                }





            }

            // Rappel: u sers à déterminer quand le dialogue est fini
            if (u <= value.length-1) {
               u = u +1 ;
               // A la fin du dialogue
               if (u == value.length){ // IDEA: stopper la touche entrée?
                 // On vide la boite de dialogue
                 dialogElt.innerHTML = "";
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

function yo() {
  console.log("yooo");
}


$("#teeeeest").on('click', yo());
