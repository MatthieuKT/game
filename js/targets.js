ajaxGet("http://matthieukt.com/game/data/targets.json", function (reponse) {
  var res = JSON.parse(reponse);
  // Récupération des noeuds
  var mainElt = document.getElementById("main");
  var displayElt = document.getElementById("dataDisplay");

  // Récupère l'URL pour interroger le server
  // https://stackoverflow.com/questions/979975/how-to-get-the-value-from-the-get-parameters
  var url_string = window.location.href;
  var url = new URL(url_string);


  // for(var i in ecran) {
  //   var target = ecran[i];
  //   for (var key in target) {
  //     console.log(target[key].id);
  //   }
  // }





  // for (var i = 0; i < ecran.length; i++) {
  //   console.log(ecran[i]);
  //   if (ecran[i] === keytofind) {
  //     console.log("yooo");
  //   }
  // }


  // Récupère le paramètre de l'url concernant un écran en particulier
  var keytofind = url.searchParams.get("c");
  // contient la réponse de la requête AJAX
  var ecran = res;
  // Initialisation des variables
  var i = 0, req_index = "";
  // parcourt les ecrans contenus dans la requête
  $.each(ecran, function(index, value){
      // Si l'index correspond au paramètre de la page recherchée dans l'URL
      // IDEA: Ici on pourrait placer l'URL de l'image à insérer dans le mainElt
      if(index === keytofind){ // IDEA: penser à stopper la boucle à ce stade
          req_index = i;
          // Ensuite parcourir les index contenus dans l'écran
          // for(var test in value) {
          // var target = value[test];

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

          // }
      }
      i++;

  });




// targets.forEach(function(target) {

// console.log(req_index);
//
//   test.forEach(function(page) {
//     console.log(Object.keys(page));
//         var keytofind = c;
//     console.log(String(Object.keys(page).indexOf(keytofind)));
//
//   })

  // var index = Object.keys(res).indexOf(keytofind);
  // console.log(index);

  // var targets = res.targets.ecran1;
  //
  // targets.forEach(function(target) {
  //   var iElt = document.createElement("i");
  //   iElt.id = target.id;
  //   iElt.classList.add("fas");
  //   iElt.classList.add("fa-bullseye");
  //   iElt.classList.add("fa-3x");
  //   var iEltStyle = iElt.style;
  //   iEltStyle.left = target.coordonnees.x;
  //   iEltStyle.top = target.coordonnees.y;
  //
  //   mainElt.appendChild(iElt);
  //
  //   // Zoom sur la target au survol
  //   $(iElt).mouseenter( function() {
  //     $(iElt).removeClass("fa-3x");
  //     $(iElt).addClass("fa-4x");
  //     // displayElt.innerHTML=target.name;
  //   });
  //   // Dézoom de la target à la sortie de souris
  //   $(iElt).mouseleave(function() {
  //     $(iElt).removeClass("fa-4x");
  //     $(iElt).addClass("fa-3x");
  //     // displayElt.innerHTML="";
  //   });
  //   // Affiche la data de la target
  //   $(iElt).click(function() {
  //     displayElt.innerHTML=target.desc;
  //   });
  // });

}); // AJAX callecran1.php
