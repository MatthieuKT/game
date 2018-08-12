var dialogElt = document.getElementById('data');
var nextElt = document.getElementById('next');
// permet de situer l'index du texte
var iteration = 0;

ajaxGet("http://localhost/game/lab4/dialog.json", function (reponse) {
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

        // TODO: rajouter index en param?
        var testObj = Object.create(Dialog);
        testObj.initDialog(value);


          testObj.nextReplica();

        nextElt.addEventListener('click', function() {
          console.log("click");
          testObj.nextReplica();
        })


            // // Rappel: u sers à déterminer quand le dialogue est fini
            // if (u <= value.length-1) {
            //    u = u +1 ;
            //    // A la fin du dialogue
            //    if (u == value.length){ // IDEA: stopper la touche entrée?
            //      // On vide la boite de dialogue
            //      dialogElt.innerHTML = "";
            //      // disparition de la boite de dialogue
            //      $('#dataDisplay').fadeOut();
            //      // Apparition des targets
            //      $(".action").css('visibility', 'visible');
            //    }
            // }

      }; // if index = keytofind
      i++; // Itère tant que l'index n'est pas égal à keytofind
   }); // $.each
}); // AJAX call
