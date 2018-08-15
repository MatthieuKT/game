<?php
// include header
include_once "layout_header.php";
 ?>

 <img id="bckgrndImg" src="images/intro.jpg" class="img-fluid" alt="#">

  <div id="filtreIntro" class="col-md-6 offset-md-3"></div>
  <div id="intro" class="col-md-6 offset-md-3 position-absolute">
    <span id="narrative"></span>
  </div>

  <div class="bloc">

  </div>

  <audio id="ambiance" controls autoplay>
   <source src="sounds/intro.ogg" type="audio/ogg">
   <source src="sounds/intro.mp3" type="audio/mpeg">
   Your browser does not support the audio tag.
  </audio>

  <!-- JQuery -->
  <script src="js/jquery.js"></script>
  <!-- AJAX -->
  <script type="text/javascript" src="js/ajax.js"></script>
  <!-- Narration -->
  <script type="text/javascript" src="js/narrative.js"></script>

<?php
// include footer
include_once "layout_footer.php";
?>
