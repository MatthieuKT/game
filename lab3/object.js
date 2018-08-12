// var Choix = {
//   // Initialisation
//   initChoix: function(e,)
// }

function choix(choice, e) {
  var choix = choice;
  var key = e.which || e.keyCode;

  if (Array.isArray(choix)) {
    console.log("array");
    if (key === 97) {
      console.log('test réussi');
    }
  }
}
