ajaxGet("http://localhost/game/data/targets.json", function (reponse) {
  var res = JSON.parse(reponse);
  // Récupération des noeuds
  var mainElt = document.getElementById("main");
  var displayElt = document.getElementById("dataDisplay");

  // Récupère l'URL pour interroger le server
  // https://stackoverflow.com/questions/979975/how-to-get-the-value-from-the-get-parameters
  var url_string = window.location.href;
  var url = new URL(url_string);
  var keytofind = url.searchParams.get("c");


  var ecran = res.targets;

  for(var i in ecran) {
    var target = ecran[i];
    for( var key in target) {
      var lala = target[key];
      console.log(target[key]);
      for (var lulu in lala) {
        console.log(lala[lulu]);
      }
    }
  }


  // for (var i = 0; i < ecran.length; i++) {
  //   console.log(ecran[i]);
  //   if (ecran[i] === keytofind) {
  //     console.log("yooo");
  //   }
  // }

  // var i = 0, req_index = "";
  // $.each(ecran[i], function(index, value){
  //     if(index == keytofind){
  //         req_index = i;
  //         console.log(index);
  //         console.log(ecran[0].salon[0].id);
  //     }
  //     i++;
  // });


  // var json = '{ "key1" : "watevr1", "key2" : {"watevr2" : "2"}, "key3" : "watevr3" }';
  // json = $.parseJSON(json);
  //
  // var i = 0, req_index = "";
  // $.each(json, function(index, value){
  //     if(index == 'key2'){
  //         req_index = i;
  //         console.log(index);
  //     }
  //     i++;
  // });



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
