var choicesDisplay = document.getElementById('choicesDisplay');
var dialogElt = document.getElementById('data');
var nextElt = document.getElementById('next');
var nextElt2 = document.getElementById('next2');
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
  var testObj = Object.create(Dialog);
  // parcourt les ecrans contenus dans la requête
  $.each(dialog, function(index, value){
    // Si l'index correspond au paramètre de la page recherchée dans l'URL
    // IDEA: Ici on pourrait placer l'URL de l'image à insérer dans le mainElt

    if(index === keytofind){ // IDEA: penser à stopper la boucle à ce stade
      req_index = i;

      if (iteration === 0) {
        testObj.initDialog(value);
        testObj.getReplica();
        iteration = iteration+1;
      }






nextElt.addEventListener('click', function() {
  console.log("length: " + value.length);
  console.log("iteration: " + iteration);

  // Si l'on a atteint la fin du dialogue
    if (iteration === value.length-1) {
    console.log("the end");
    testObj.dialogEnd();
    }

  // Si c'est une réplique normale
  else if (value[iteration].type === "replique"){
    testObj.getReplica();
    iteration = iteration+1;
    console.log(iteration);
  }

    else if (value[iteration].type === "choix") {
      // TODO: itérer directement?
    testObj.getChoices();
    // disparition du bouton next lors du choix
    nextElt.style.display = 'none';
    // Lors du choix du dialogue

    $('.choixElt').on('click', function(e) {
      e.stopPropagation();
      var data = $(this).attr('data');
      if (data === "choix1") {
        choicesDisplay.style.display = 'none';
        // initialise le compteur de reliques contenu dans le choix en question
        var a = 0;
        dialogElt.textContent = value[iteration].choix1[a][1];
        a = a+1;
        nextElt2.style.visibility = "visible";

        $('#next2').on('click', function() {
          if (a < value[iteration].choix1.length) {
            dialogElt.textContent = value[iteration].choix1[a][1];
            a = a+1;
          }
          // TODO: sortie du choix
          else if (a === value[iteration].choix1.length) {
            nextElt2.style.visibility = "hidden";
            // On passe au noeud suivant
            nextElt.style.display = '';
            testObj.getReplica();
            iteration = iteration+1;
            console.log("fin du choix!");
            console.log(iteration);
          }
        });
      }
    }); // choixElt onclick
  }// if value.type === "choix"



}); // Au click du bouton next



}; // if index = keytofind
// i++; // Itère tant que l'index n'est pas égal à keytofind
}); // $.each
}); // AJAX call
