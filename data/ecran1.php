<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="css/testLayout.css">
    <link rel="stylesheet" href="css/ecran1.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous">
    <link rel="stylesheet" href="css/bootstrap.css">
    <title>SCAR - intro</title>
  </head>
  <body>

    <div class="container-fluid">

      <div class="row">
        <div id="main" class="col-md-12">
          <img id="bckgrndImg" src="images/task.jpg" class="img-fluid" alt="Responsive image">

          <!-- Div de test pour l'affichage des datas -->
          <div id="dataDisplay"></div>
        </div>
      </div>

    </div> <!-- /container-fluid-->


    <script type="text/javascript" src="js/ajax.js"></script>
    <script src="js/jquery.js"></script>


    <script type="text/javascript">
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


</script>

</body>
</html>
