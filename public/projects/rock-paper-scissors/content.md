# Rock Paper Scissors

<br/>

## Lien GitHub

[Rock Paper Scissors](https://github.com/NathanGros/Rock-paper-scissors.git)

<br/>

## Description

Un **automate cellulaire** simple codé en **C** avec des règles dérivées du jeu de pierre feuille ciseaux: Chaque cellule prend la couleur de son adversaire gagnante si le nombre de cellules adjacentes du type de cet adversaire dépasse un certain seuil.

**Exemple:** La valeur seuil dans mon programme est 2. Si une cellule est de type feuille, les ciseaux l'emportent sur celle-ci, donc si il y a 2 cellules ciseaux ou plus adjacentes, notre cellule devient à son tour une cellule ciseaux.

![Preview](/projects/rock-paper-scissors/global-view.png)

Ces règles créent des tourbillons qui tournent, chaque branche s'étendant sur la branche plus faible adjacente au fil du temps, comme on peut le voir ci dessus.

J'ai aussi inclus un **mode édition**, permettant de dessiner ce que l'on veut.

![Preview](/projects/rock-paper-scissors/editing.png)

On peut également afficher une grille comme on peut presque le voir ci dessus (la résolution d'un écran standard est probablement trop petite), arrêter et relancer la simulation, donner un état aléatoire a chaque cellule, et réinitialiser la grille.

Un fait intéressant est que les tourbillons sont de moins en moins nombreux au fil du temps, comme on peut le voir ci dessous.

Début de la simulation:
![Preview](/projects/rock-paper-scissors/start.png)

Après un peu de temps:
![Preview](/projects/rock-paper-scissors/end.png)
