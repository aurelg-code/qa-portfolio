# QA Portfolio

## Contexte

Ce dépôt fait partie de ma démarche de reconversion professionnelle vers le métier de testeur QA. 
Diplômé(e) d'un bac+5 dans un autre domaine, je m'entraîne ici sur des cas concrets pour développer 
et démontrer mes compétences en test logiciel.

## Objectif de cet exercice

Rédiger un plan de test structuré et un rapport de bug professionnel, à partir de l'application 
de démonstration SauceDemo (site conçu pour l'entraînement au test logiciel).

## Contenu du dépôt

- `saucedemo-login-tests.xlsx` : plan de test de la fonctionnalité de connexion (5 cas de test, 
  incluant cas positifs, cas d'erreur et champ vide), avec les résultats d'exécution.
- Feuille "Bugs" du même fichier : rapport de bug détaillé sur une anomalie détectée durant les tests.
- Capture d'écran illustrant l'anomalie trouvée (BUG-001).
- Feuille "Panier" du même fichier : plan de test de la fonctionnalité panier (5 cas), aucune anomalie détectée.

## Méthodologie appliquée

- Écriture des cas de test avant exécution (étapes, résultat attendu)
- Exécution manuelle et comparaison résultat attendu / résultat obtenu
- Documentation d'une anomalie selon un format standard (étapes de reproduction, 
  environnement, sévérité, priorité)

## Prochaines étapes

- Automatisation d'un premier scénario avec Cypress
- Test d'autres fonctionnalités (panier, tri des produits)
  
## Automatisation (Cypress)

Le dossier `cypress-tests/` contient un premier script d'automatisation écrit avec Cypress, 
couvrant 3 scénarios de la fonctionnalité de connexion :

- **TC01** : connexion réussie avec des identifiants valides
- **TC02** : connexion refusée avec un mot de passe incorrect
- **TC04** : connexion refusée avec un compte utilisateur bloqué

Chaque test vérifie soit la redirection vers la page produits (connexion réussie), 
soit l'apparition d'un message d'erreur précis et correspondant au cas testé.

Ces scénarios reprennent la logique déjà validée manuellement dans le plan de test 
(feuille "Plan de test" du fichier Excel), afin de démontrer le passage d'un test manuel 
à sa version automatisée.
