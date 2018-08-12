var Dialog = {
  iteration: 0,

  // Initialise le dialogue
  initDialog: function(dialog) {
    this.dialog = dialog;
    this.dialogLength = dialog.length;
  },

  nextReplica: function() {
    // Il y a deux types de répliques, les normales et celles incluant des choix

    // Si le dialog.type === "choix"

    // alors , c'est une réplique normale
      // tant que currentDialog n'a pas atteint la fin du dialogue
      if (this.iteration < this.dialog.length-1) {
        dialogElt.textContent = this.dialog[iteration].texte;
        iteration = iteration+1;
      }
      // Si la fin du dialogue est atteinte
      else if (iteration === this.dialog.length-1) {
        // Ce qui signifie la fin du dialogue
        // 1: On vide la boite de dialogue
        dialogElt.innerHTML = "";
        // 2: On rajoute le fadeOut pure js sur dialogElt
        // 3: On fait apparaître les .action
      }
  }
}
