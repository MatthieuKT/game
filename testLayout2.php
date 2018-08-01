<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="css/testLayout.css">
    <link rel="stylesheet" href="css/ecran1.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous">
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <title>SCAR - intro</title>
  </head>
  <body>

    <div class="container-fluid">


     <div class="row">
       <div id="main" class="col-md-12">
         <img id="bckgrndImg" src="images/task.jpg" class="img-fluid" alt="Responsive image">
         <i id="ordi" class="fas fa-bullseye fa-3x"></i>
         <i id="lit" class="fas fa-bullseye fa-3x"></i>
         <i id="frigo" class="fas fa-bullseye fa-3x"></i>
     </div>


     </div>




 <!-- Div de test pour l'affichag edes datas -->
 <div id="dataDisplay">

 </div>

<!-- <div id="background" style="background-image:url('images/task.jpg');">
  <div id="filtreIntro"></div>
  <div id="intro">yo</div>

</div>-->
<script type="text/javascript" src="js/jquery.js"></script>
<script type="text/javascript" src="js/ajax.js"></script>
<script type="text/javascript">
ajaxGet("http://localhost/game/data/targets.json", function (reponse) {
  var targets = JSON.parse(reponse);

  console.log(targets.targets.ecran1);

  // targets.forEach(function(target) {
  //   console.log("yo");
  // });


  // dialogElt.innerHTML = scenario.chapitre1[index].texte;


});

  $('i').each(function() {
      // Zoom sur la target au survol
      $(this).mouseenter( function() {
        $(this).removeClass("fa-3x");
        $(this).addClass("fa-4x");
      })

      // Dézoom de la target à la sortie de souris
      $(this).mouseleave(function() {
        $(this).removeClass("fa-4x");
        $(this).addClass("fa-3x");
      })

      // Affiche la data de la target
      $(this).click(function() {

      });
  })
</script>

 <?php
 // include footer
 include_once "layout_footer.php";
  ?>
