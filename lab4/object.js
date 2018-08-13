var Dialog = {
  // Initialise le dialogue
  initDialog: function(dialog) {
    this.dialog = dialog;
    this.dialogLength = dialog.length;
  },

  nextReplica: function() {
    dialogElt.textContent = this.dialog[iteration].texte;
  },

  getChoices: function() {
    dialogElt.textContent = this.dialog[iteration].texte;
    var listeChoix = this.dialog[iteration].choix;
    for (var cle in listeChoix) {
      for (var cle2 in listeChoix[cle]) {
        var choixElt = document.createElement('button');
        choixElt.classList.add('choixElt');
        // On lui donne un attribut data contenant la référence du choix
        choixElt.setAttribute('data', cle2);
        choixElt.textContent = listeChoix[cle][cle2];
        choicesDisplay.appendChild(choixElt);
        choicesDisplay.innerHTML += "<br>"
      }
    }
  },

  dialogEnd: function() {
      // Ce qui signifie la fin du dialogue
      // 1: On vide la boite de dialogue
      dialogElt.innerHTML = "";
      // 2: On rajoute le fadeOut pure js sur dialogElt
      // 3: On fait apparaître les .action
      $(".action").css('visibility', 'visible');
  }
}
