# Mini-Projet-Choix-al-atoire-de-noms-Objectif
Mini-Projet : Choix aléatoire de noms
**Objectif** :
Créer une petite application web permettant à un utilisateur :

  d’entrer des noms de personnes,

  de les afficher directement sur la page,

  puis de sélectionner aléatoirement un nom et de l’afficher dans une popup.

**Ce projet te permettra de pratiquer :
**
  la manipulation du DOM avec JavaScript,

  les événements (click, submit),

  la création dynamique d’éléments HTML,

  les fonctions et la logique avec des tableaux.

**Fonctionnalités attendues
Ajout de noms**

  L’utilisateur peut taper un nom dans un champ <input> et cliquer sur un bouton “Ajouter”.
  
  Chaque nom ajouté s’affiche immédiatement sur la page sous forme de liste ou de petits encadrés.
  
  Choix aléatoire

  Un bouton “Choisir un nom” permet de sélectionner aléatoirement un nom parmi la liste.
  
  Le nom choisi s’affiche dans une popup (modal).
  
  Bouton “Suivant” dans la popup
  
  La popup contient un bouton “Suivant”.

**Quand on clique dessus :
**
  La popup se ferme.
  
  Le nom choisi est retiré de la liste pour ne pas être choisi à nouveau.

  Gestion dynamique
  
  La liste visible sur la page se met à jour à chaque ajout ou suppression.
  
  Aucun nom ne peut être choisi deux fois.

  Si la liste est vide, le bouton “Choisir un nom” est désactivé ou affiche un message d’alerte.

**Étapes conseillées pour réaliser le projet
**
Structure HTML

  Crée un <input> pour entrer un nom et un bouton “Ajouter”.
  
  Crée un conteneur (<div> ou <ul>) pour afficher la liste des noms.
  
  Crée un bouton “Choisir un nom”.
  
  Crée un conteneur pour la popup avec un message et un bouton “Suivant” (tu peux la cacher par défaut avec CSS).
  
  Style CSS

  Mets en forme la liste pour qu’elle soit claire et lisible.
  
  Stylise la popup pour qu’elle apparaisse au centre de l’écran avec un fond semi-transparent.
  
  Script JavaScript
  
  Crée un tableau pour stocker les noms ajoutés.

**Ajoute un événement au bouton “Ajouter” pour :
**
  récupérer le nom saisi,
  
  l’ajouter au tableau,
  
  créer un élément HTML visible dans la page.
  
  Ajoute un événement au bouton “Choisir un nom” pour :
  
  choisir un nom aléatoire du tableau,
  
  l’afficher dans la popup.

**Ajoute un événement au bouton “Suivant” de la popup pour :
**
  fermer la popup,
  
  retirer le nom choisi du tableau,
  
  mettre à jour la liste visible.
  
**  Exemple de comportement attendu
**
  L’utilisateur entre : "Alice" → "Alice" s’affiche sur la page.

  L’utilisateur entre : "Bob" → "Bob" s’affiche sous "Alice".
  
  L’utilisateur clique sur “Choisir un nom” → popup affiche : "Alice"
  
  L’utilisateur clique sur “Suivant” → popup disparaît, "Alice" est retiré de la liste.
  
  L’utilisateur clique de nouveau sur “Choisir un nom” → popup affiche : "Bob"

