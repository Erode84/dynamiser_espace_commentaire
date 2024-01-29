// Sélectionner le formulaire
let form = document.querySelector("form");

// Sélectionner la liste des commentaires
let commentList = document.getElementById("comment-list");

// Sélectionner le message d'erreur
let errorMessage = document.getElementById("error-message");

// Ajouter un écouteur d'événements pour le formulaire
form.addEventListener("submit", function (e) {
  // Empêcher le comportement par défaut du formulaire (ne pas recharger la page)
  e.preventDefault();

  // Sélectionner tous les champs du formulaire
  let firstName = document.getElementById("first-name").value;
  let lastName = document.getElementById("last-name").value;
  let message = document.getElementById("message").value;

  // Vérifier que tous les champs ne sont pas vides
  if (!firstName || !lastName || !message) {
    // Affiche le message d'erreur qui est caché en "none"
    errorMessage.style.display = "block";
    return;
  }

  // Créer un nouveau commentaire avec utilisation de l'interpolation $ au lieu de la concaténation
  let newComment = document.createElement("div");
  newComment.className = "flex space-x-4 text-sm text-gray-500";
  newComment.innerHTML = `
  <div class="flex-1 py-10 border-t border-gray-200">
    <h3 class="font-medium text-gray-900">${firstName} ${lastName}</h3>
    <div class="prose prose-sm mt-4 max-w-none text-gray-500">
      <p>${message}</p>
    </div>
  </div>
`;

  // Ajouter le nouveau commentaire à la liste
  commentList.appendChild(newComment);

  // Supprimer le contenu des champs du formulaire
  form.reset();

  // Cacher le message d'erreur qui est passé en "block"
  errorMessage.style.display = "none";
});
