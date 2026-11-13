// Lot 3 : formulaire de contact.
// Pas de serveur : on vérifie les champs puis on ouvre la messagerie avec le message déjà rempli.
(function () {
  var form = document.getElementById('form-contact');
  if (!form) return;
  var erreur = document.getElementById('contact-erreur');
  var emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var destinataire = form.dataset.destinataire || 'contact' + '@' + 'adriencardot.com';

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var champs = form.elements;
    var manquants = [];

    ['nom', 'email', 'message'].forEach(function (nom) {
      var champ = champs[nom];
      var vide = !champ.value.trim();
      var invalide = vide || (nom === 'email' && !emailOk.test(champ.value.trim()));
      champ.setAttribute('aria-invalid', invalide ? 'true' : 'false');
      if (invalide) manquants.push(champ);
    });

    if (manquants.length) {
      erreur.textContent = 'Il manque quelque chose : vérifiez les champs en rouge.';
      erreur.hidden = false;
      manquants[0].focus();
      return;
    }
    erreur.hidden = true;

    var sujet = champs.type.value + ' : message de ' + champs.nom.value.trim();
    var corps = champs.message.value.trim() + '\n\n' + champs.nom.value.trim() + '\n' + champs.email.value.trim();
    window.location.href = 'mailto:' + destinataire + '?subject=' +
      encodeURIComponent(sujet) + '&body=' + encodeURIComponent(corps);
  });
})();
