<?php
// Include header
include_once 'layout_header.php';
?>

    <div class="container-fluid">
      <div class="row">
        <div id="main" class="col-md-12">
            <img id="bckgrndImg" src="../../images/one.gif" class="img-fluid" alt="Responsive image">
            <!-- Div de test pour l'affichage des datas -->
            <div id="dataDisplay"> <span id="data"></span> </div>
        </div>
      </div>
    </div>

    <!-- Sons d'ambiance -->
    <audio id="ambiance" controls autoplay>
     <source src="../../sounds/ambiance1.ogg" type="audio/ogg">
     <source src="../../sounds/ambiance1.mp3" type="audio/mpeg">
     Your browser does not support the audio tag.
    </audio>


<?php
// Include footer
include_once 'layout_footer.php';
?>
