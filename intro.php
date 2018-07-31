<?php
// include header
include_once "layout_header.php";
 ?>



 <img id="bckgrndImg" src="images/intro.jpg" class="img-fluid" alt="#">

  <div id="filtreIntro"></div>
  <div id="intro">
    <span id="narrative"></span>
    <img id="arrow" src="images/arrow.gif" alt="">
  </div>

  <div class="bloc">

  </div>

  <!-- JQuery -->
  <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
  <!-- AJAX -->
  <script type="text/javascript" src="js/ajax.js"></script>
  <!-- Narration -->
  <script type="text/javascript" src="js/narrative.js"></script>

  <script type="text/javascript">

  $(document).on('keypress', function(e) {
    var key = e.which || e.keyCode;
    if (key === 13) {
      $( ".bloc" ).fadeOut( "slow", function() {
        // Animation complete.
      });

    }
  });

  </script>


 <?php
 // include footer
 include_once "layout_footer.php";
  ?>
