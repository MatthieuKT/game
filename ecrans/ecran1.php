<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="../css/testLayout.css">
    <link rel="stylesheet" href="../css/ecran1.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous">
    <link rel="stylesheet" href="../css/bootstrap.css">
    <title>Scar</title>
  </head>
  <body>

    <div class="container-fluid">

      <div class="row">
        <div id="main" class="col-md-12">
          <div id="mainFilter"></div>
              <img id="bckgrndImg" src="../images/one.gif" class="img-fluid" alt="Responsive image">

          <!-- Div de test pour l'affichage des datas -->
          <div id="dataDisplay"></div>
        </div>
      </div>

    </div> <!-- /container-fluid-->

    <audio id="ambiance" controls autoplay>
     <source src="../sounds/ambiance1.ogg" type="audio/ogg">
     <source src="../sounds/ambiance1.mp3" type="audio/mpeg">
     Your browser does not support the audio tag.
    </audio>


    <?php // TODO: Trier les fichiers JS de façon définitive ?>
    <script src="../js/ajax.js"></script>
    <script src="../js/jquery.js"></script>
    <script src="../js/ux.js"></script>
    <script src="../js/testDialog.js"></script>

  </body>
</html>
