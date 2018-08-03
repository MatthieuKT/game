<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="css/testLayout.css">
    <link rel="stylesheet" href="css/ecran1.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous">
    <link rel="stylesheet" href="css/bootstrap.css">
    <title>SCAR - intro</title>
  </head>
  <body>

    <div class="row">
      <div id="main" class="col-md-12">
        <div id="mainFilter"></div>
        <div class="col-md-8 offset-2">
          <img id="bckgrndImg" src="images/salon.jpg" class="img-fluid" alt="Responsive image">
        </div>
      <!-- Div de test pour l'affichage des datas -->
        <div id="dataDisplay"></div>
      </div>
    </div>


    <!-- <audio id="ambiance" controls autoplay>
     <source src="sounds/ambiance2.ogg" type="audio/ogg">
     <source src="sounds/ambiance2.mp3" type="audio/mpeg">
     Your browser does not support the audio tag.
    </audio> -->

    <!-- Fonction initiale du call AJAX -->
    <script src="js/ajax.js"></script>
    <script src="js/jquery.js"></script>
    <!-- Gère l'affichage des cibles -->
    <!-- TODO: Rajouter une condition de vérification de la page -->
    <script src="js/targets.js"></script>
    <script>


      // Apparition progressive de l'écran
      $('#mainFilter').fadeOut();


      // Lorsquel'on quittera l'écran
      // $('#mainFilter').fadeIn();
    </script>

</body>
</html>
