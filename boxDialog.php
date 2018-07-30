<?php
// include header
include_once 'layout_header.php';
?>

<div class="container">

  <div id="character" class="fixed-bottom offset-md-6">
    <img src="https://orig05.deviantart.net/5c59/f/2016/316/5/b/ashenormal_small_by_canarycharm_daldh7e_by_winechan-dao7tgv.png" alt="">
  </div>


  <div id="dialogBox" class="fixed-bottom col-md-10 offset-md-1">
    <!-- Affiche le nom de l'interlocuteur  -->
    <div class="row">
      <div id="name"><span>6ix9ine</span></div>
      <div id="filtreNom"></div>
    </div>


    <!-- Affiche le scénario  -->
    <div class="row">
      <div id="dialog" class="position-absolute col-md-12">
        <span id="text"></span>
      </div>
      <div id="filtre" class="position-absolute col-md-12"></div>
    </div>


    <div id="action"><button id="next">Suivant</button></div>
  </div>

</div>
<?php
// include footer
include_once 'layout_footer.php';
?>
