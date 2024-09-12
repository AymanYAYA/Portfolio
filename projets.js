const documents = [
    {
      text: `### Titre du projet : Modélisation des Dommages d'Assurance à l'aide de Modèles de Régression

#### Contexte :
Ce projet se concentre sur l'analyse de données provenant d'une compagnie d'assurance. Les données concernent des ménages assurés habitant Paris et son agglomération, avec des variables couvrant les revenus, les caractéristiques des ménages, les montants des sinistres, et les types de polices souscrites. L’objectif principal était de modéliser les dommages subis par les ménages à travers différents types de sinistres et d'évaluer si certaines variables, comme la catégorie socioprofessionnelle (CSP), influencent les montants des sinistres.

#### Objectifs :
- Explorer et résumer les données des ménages assurés pour comprendre la répartition des différentes variables.
- Construire un modèle de régression simple pour prédire les montants des dommages subis par les ménages en fonction des sinistres.
- Évaluer l’influence de la catégorie socioprofessionnelle (CSP) sur les montants des sinistres.
- Comparer plusieurs modèles de régression pour déterminer le meilleur ajustement.

#### Données utilisées :
Les données incluent :
- **Variables quantitatives continues** : REVENU (revenu du ménage), DOM1, DOM2, DOM3 (montants des dommages pour différents types de sinistres).
- **Variables qualitatives** : CSP (catégorie socioprofessionnelle), CR (catégorie de revenu), STOCC (statut d'occupation du logement), COMP (composition du ménage), AUTO (possession d’un véhicule).

Le jeu de données contient **235 ménages** observés.

#### Méthodologie :
1. **Analyse descriptive des données** :
   - La première étape a consisté à explorer les données, notamment en calculant des statistiques descriptives telles que les moyennes, médianes, et écarts-types pour les variables quantitatives, et en examinant la répartition des catégories pour les variables qualitatives.
   - Le **montant des dommages de sinistres de type 1 (DOM1)** a montré une moyenne de 13 914, avec une variance de 3,33 et un écart-type de 1,83.

2. **Modèle de régression simple** :
   - Un premier modèle de régression simple a été construit pour prédire le montant des sinistres de type 1 (DOM1) en fonction des sinistres de type 2 (DOM2). Le modèle linéaire simple a été ajusté, et la pente de la régression a montré une relation modérée positive entre les deux types de sinistres (coefficient de corrélation r = 0,58).
   - Le coefficient de la régression simple était de **0,39**, ce qui indique qu’une augmentation d'une unité dans DOM2 entraîne une augmentation de 0,39 unité dans DOM1.

3. **Ajout de la CSP au modèle** :
   - L'influence de la **CSP** a ensuite été testée en ajoutant cette variable au modèle de régression. Trois modèles ont été envisagés :
     - Un **modèle additif** (sans interaction) où l'effet de DOM2 et celui de la CSP sont ajoutés séparément.
     - Un **modèle multiplicatif** (avec interaction) où l’effet de la CSP modifie également la pente de la régression.
     - Un **modèle simplifié** où seules certaines interactions sont prises en compte.
   - Chaque modèle a été ajusté, et les résultats ont été comparés à l'aide des tests de Fisher et des coefficients de détermination (R²).

4. **Comparaison des modèles** :
   - Le modèle **multiplicatif avec interaction** (modèle 2.b) n’a pas montré d’amélioration significative par rapport au modèle additif (2.a), selon les résultats des tests de Fisher (p-valeur = 0,1625).
   - Le modèle simplifié **(2.c)** s’est révélé le plus performant, expliquant **45,59 %** de la variabilité dans les montants des sinistres de type 1. Ce modèle a montré que la catégorie socioprofessionnelle influence les montants des sinistres, avec des pentes légèrement différentes selon la CSP des ménages.

#### Résultats :
- Le modèle de régression avec interaction n’a pas apporté d’informations supplémentaires significatives, donc le modèle additif sans interaction a été retenu.
- Le modèle retenu (modèle 2.c) a montré que, pour les **Cadres et professions intellectuelles supérieures**, une augmentation d’une unité dans les sinistres de type 2 entraîne une augmentation de **0,31 unité** dans les sinistres de type 1, contre **0,17 unité** pour les **Employés** et les **Professions intermédiaires**.

#### Outils et technologies :
- **R** a été utilisé pour l'analyse des données, la construction des modèles de régression, et les visualisations (nuages de points, ajustements de régression).
- Des tests statistiques ont été réalisés pour comparer les modèles et valider les hypothèses du modèle linéaire.

#### Conclusion :
Ce projet a permis de modéliser les relations entre différents types de sinistres subis par les ménages, tout en tenant compte de l’influence des catégories socioprofessionnelles. Le modèle retenu (modèle 2.c) a révélé des différences significatives entre les groupes socioprofessionnels, tout en offrant un ajustement robuste avec un coefficient de détermination de 45,59 %. Ce type de modélisation est essentiel pour mieux comprendre les risques et les sinistres subis par les clients dans le secteur de l'assurance.`,
      pdf: "Projet Modèles de Régression .pdf"
    },
    {
      text:  `### Titre du projet : Analyse des Réalités Sociales Françaises à l’Aune Européenne

      #### Contexte :
      Ce projet s'appuie sur l'étude **"Les réalités sociales françaises à l’aune européenne"** publiée par le **Centre d’Analyse Stratégique** en 2007. L'objectif était de comparer les réalités sociales de la France avec celles des autres pays de l’Union Européenne (UE) en analysant divers indicateurs sociaux tels que le chômage, la pauvreté, l'éducation, et le PIB. Pour mener à bien cette analyse, nous avons utilisé une combinaison d'**analyse bivariée**, d'**Analyse en Composantes Principales (ACP)**, et de **Classification Ascendante Hiérarchique (CAH)** afin de comprendre les corrélations entre les variables et regrouper les pays selon leurs caractéristiques sociales et économiques.
      
      #### Objectifs :
      - Identifier les corrélations entre les indicateurs sociaux et économiques des pays européens.
      - Réaliser une réduction de dimension via l'ACP pour mieux visualiser et interpréter les relations entre les variables.
      - Utiliser la CAH pour regrouper les pays européens en fonction de leurs similarités sociales et économiques.
      - Fournir une analyse comparative des réalités sociales françaises par rapport aux autres pays de l'UE.
      
      #### Données utilisées :
      Les données couvrent les **pays de l'Europe à 25** et incluent les variables suivantes :
      - **benev** : Part des personnes exerçant une activité bénévole dans une association.
      - **chom** : Taux de chômage des personnes entre 15 et 74 ans.
      - **depedu** : Dépenses publiques d’éducation en pourcentage du PIB.
      - **depsoc** : Dépenses de protection sociale en pourcentage du PIB.
      - **devel** : Indice de développement humain.
      - **pib** : Produit Intérieur Brut par habitant.
      - **pv.ap** : Taux de pauvreté après transferts sociaux.
      - **pv.av** : Taux de pauvreté avant transferts sociaux.
      - **trv.pv** : Taux de pauvreté des travailleurs à temps complet.
      
      #### Méthodologie :
      1. **Statistiques descriptives** :
         - Nous avons commencé par une **analyse descriptive** des variables pour comprendre la distribution des indicateurs sociaux au sein des pays européens. Par exemple, le PIB varie fortement entre les pays, avec le Luxembourg se démarquant comme une valeur aberrante en raison de sa richesse économique.
      
      2. **Corrélations bivariées** :
         - Une analyse des **corrélations** a révélé plusieurs relations importantes, comme une **corrélation positive** entre le bénévolat, les dépenses sociales, le PIB, et l'indice de développement humain (environ 0,7). À l'inverse, il y a une **corrélation négative** entre le taux de chômage et ces indicateurs (-0,6), suggérant que le développement économique réduit le chômage.
         - Les variables liées à la pauvreté (pv.ap et trv.pv) étaient également négativement corrélées avec le bénévolat (-0,65), suggérant que l'engagement bénévole contribue à l'amélioration du niveau de vie des plus pauvres.
      
      3. **Analyse en Composantes Principales (ACP)** :
         - L'ACP a été utilisée pour réduire le nombre de dimensions et identifier les axes principaux de variabilité entre les pays européens. L'axe 1 (44,9 % de la variance) était principalement influencé par les variables liées au développement social et économique (benev, pib, devel), tandis que l'axe 2 (17,2 %) reflétait les inégalités de pauvreté avant transferts sociaux.
         - Les pays comme la **Suède** et le **Danemark** étaient fortement positionnés sur l'axe 1, indiquant leur haute performance sociale et économique. À l'inverse, des pays comme la **Pologne** et la **Lituanie** étaient moins performants, en raison de taux de pauvreté et de chômage plus élevés.
      
      4. **Classification Ascendante Hiérarchique (CAH)** :
         - La CAH a permis de regrouper les pays européens en **trois clusters** distincts :
           - **Groupe 1** : Pays économiquement et socialement développés, tels que la Suède et le Danemark, avec des taux de pauvreté et de chômage faibles.
           - **Groupe 2** : Pays en développement, majoritairement des nouveaux membres de l'UE (comme la Pologne et la Lituanie), caractérisés par des PIB plus bas et des taux de chômage plus élevés.
           - **Groupe 3** : Pays avec de forts écarts économiques, tels que le **Luxembourg** et le **Royaume-Uni**, qui se démarquent par un PIB élevé mais des inégalités internes marquées.
      
      #### Résultats :
      - **Corrélations** : Le bénévolat et les dépenses sociales sont fortement liés au développement humain et à la richesse d'un pays, tandis que le chômage tend à diminuer avec l'augmentation de ces indicateurs.
      - **Classification des pays** : Les pays européens se divisent en trois groupes, allant des plus développés aux moins performants sur les plans social et économique. La France, en tant que fondateur de l'UE, se situe parmi les pays économiquement et socialement développés, avec des inégalités moins marquées que dans des pays comme le Royaume-Uni.
      
      #### Outils et technologies :
      - **R** a été utilisé pour toutes les analyses statistiques, notamment l'ACP et la CAH, ainsi que pour la génération de visualisations graphiques.
      - **NbClust** a été utilisé pour déterminer le nombre optimal de clusters dans la CAH.
      
      #### Conclusion :
      Ce projet a permis d'établir une comparaison claire des réalités sociales entre la France et les autres pays de l'UE, en montrant l'importance du développement économique pour améliorer les indicateurs sociaux tels que la pauvreté et le chômage. Grâce à l'ACP et à la CAH, nous avons pu regrouper les pays en fonction de leurs performances et identifier les facteurs clés influençant leurs situations.
      `,
      pdf: "Projet Analyse de donnée.pdf"
    },
    {
      text: `### Titre du projet : Modélisation et Analyse en Assurance

#### Contexte :
Dans le domaine de l'assurance automobile, la tarification joue un rôle clé pour gérer les risques et maintenir la compétitivité. Ce projet avait pour but de modéliser les coûts des sinistres afin d'optimiser les primes d'assurance tout en anticipant les risques auxquels la compagnie pourrait être exposée. La réglementation Solvabilité 2, qui impose une gestion rigoureuse des risques, rend ce type de modélisation d'autant plus essentiel.

#### Objectif :
L'objectif principal était de créer un modèle prédictif permettant d'estimer, pour chaque nouveau client :
- La probabilité qu'un sinistre survienne.
- Le nombre de sinistres attendus.
- Le coût total des sinistres.
- La durée de vie du contrat d’assurance.

Cette modélisation devait aider l'assureur à proposer une tarification adaptée, en ajustant les primes de manière à couvrir les risques tout en restant compétitif.

#### Données utilisées :
Les données analysées regroupaient des informations détaillées sur 5 352 ménages français, notamment leur catégorie socio-professionnelle, leur revenu, leur région de résidence, ainsi que des données sur les sinistres déjà survenus. Les variables comme le montant des sinistres ou la durée de souscription aux polices d'assurance étaient également incluses. Après un nettoyage et un traitement des valeurs aberrantes, nous avons pu utiliser un large ensemble de caractéristiques pour la modélisation.

#### Méthodologie :
1. **Préparation des données** : Le nettoyage des données a permis de recoder certaines variables et de traiter les valeurs extrêmes, comme les sinistres d'un montant exceptionnel, en les remplaçant par des valeurs plus cohérentes.
2. **Modélisation des sinistres** :
   - **Modèle Probit** : Utilisé pour prédire la probabilité qu'un sinistre survienne. Ce modèle a été optimisé pour inclure les variables les plus pertinentes, telles que le revenu du ménage, l'âge du chef de famille et la région de résidence.
   - **Modèle binomial négatif** : Utilisé pour estimer le nombre de sinistres probables, ce modèle a été préféré au modèle de Poisson en raison de sa meilleure gestion de la variabilité des sinistres.
   - **Modèle Gamma et Tobit** : Utilisés pour prédire le montant des sinistres, avec le modèle Gamma offrant les meilleures performances sur les données de test.
   - **Modèle de Cox** : Utilisé pour estimer la durée de vie des contrats d’assurance, permettant ainsi de prédire combien de temps un client resterait fidèle à la compagnie.
3. **Validation des modèles** : Chaque modèle a été évalué en termes d'erreurs de prédiction sur des échantillons de test. Le critère AIC a également été utilisé pour sélectionner les modèles les plus efficaces.

#### Résultats :
- Le **modèle Probit** a montré une précision de 75,28 % dans la prédiction de l’occurrence des sinistres.
- Le **modèle binomial négatif** a permis d'estimer le nombre de sinistres avec une erreur moyenne de ±3 sinistres par client, se révélant plus performant que le modèle de Poisson.
- En ce qui concerne les montants des sinistres, le **modèle Gamma** a montré une erreur de prédiction moyenne de 2 550 €, particulièrement fiable pour les sinistres importants.
- Le **modèle de Cox** a prédit la durée de vie des contrats avec une erreur moyenne de ±5 ans, aidant ainsi à mieux comprendre la fidélité des clients en fonction de leurs caractéristiques.

#### Outils et technologies :
Ce projet a été réalisé avec **R**, en utilisant des algorithmes statistiques avancés comme le **Probit**, le **modèle binomial négatif**, et le **modèle Gamma**. Des méthodes de machine learning comme les **Random Forests** ont également été testées pour évaluer leur efficacité.

#### Conclusion :
Ce projet a démontré l'importance d'une modélisation rigoureuse dans le domaine de la tarification d'assurance. Les modèles retenus, tels que le **Probit** et le **modèle binomial négatif**, ont fourni des résultats fiables et interprétables, permettant à l'assureur de mieux anticiper les risques et de fixer des primes plus précises.
`,
      pdf: "Projet Statistique (Modélisation et Analyse en Assurance).pdf"
    },
    {
        text:  `### Titre du projet : Prédiction des Prix des Téléphones Mobiles

        #### Contexte :
        Dans l’industrie des smartphones, la fixation des prix est un enjeu stratégique crucial pour les fabricants. Un prix mal ajusté peut influencer la perception des consommateurs et réduire la compétitivité. Ce projet vise à créer des modèles prédictifs permettant d’estimer le prix d’un téléphone mobile en fonction de ses caractéristiques techniques. Les données utilisées proviennent d’un ensemble public accessible sur Kaggle, et incluent des informations comme la mémoire, la résolution de l’écran, la capacité de la batterie et le nombre de cœurs du processeur.
        
        #### Objectifs :
        L'objectif principal de ce projet était de développer des modèles capables de prédire avec précision les prix des téléphones en fonction de leurs spécifications techniques. Cela permettrait aux fabricants de mieux ajuster leurs prix et d’améliorer leur stratégie marketing.
        
        #### Données utilisées :
        Les données contiennent 161 observations et 14 variables, incluant des caractéristiques comme :
        - **Product_id** : Identifiant unique du téléphone.
        - **Price** : Le prix, variable cible pour la prédiction.
        - **RAM**, **Internal Memory**, **Battery** : Spécifications techniques importantes pour les performances du téléphone.
        - **Resolution**, **PPI** : Caractéristiques de l’écran.
        - **CPU Core**, **CPU Frequency** : Spécifications du processeur.
          
        #### Méthodologie :
        1. **Analyse exploratoire des données (AED)** : Une première analyse statistique a permis de comprendre la distribution des variables, d’identifier les valeurs manquantes et d’observer les relations entre les différentes caractéristiques et le prix.
          
        2. **Modélisation prédictive** : Différents modèles de régression ont été développés :
           - **Régression linéaire** : Utilisée comme modèle de base pour prédire les prix à partir des variables explicatives.
           - **Régression polynomiale** : Pour capturer des relations non linéaires entre les variables.
           - **Régression Ridge et Lasso** : Ces méthodes ont permis de régulariser les coefficients et de prévenir le surajustement en pénalisant les coefficients les plus grands.
           - **Arbres de décision et Forêts aléatoires** : Ces modèles permettent de capturer des interactions complexes entre les variables sans nécessiter de transformation manuelle des données.
        
        3. **Évaluation des modèles** : Les modèles ont été évalués avec des métriques comme la racine de l’erreur quadratique moyenne (RMSE) et le coefficient de détermination (R²). Ces métriques ont aidé à comparer les performances et à sélectionner le meilleur modèle.
        
        #### Résultats :
        - Le **modèle de régression linéaire** a servi de référence avec un **R² ajusté** de 0.95, ce qui signifie que le modèle explique 95 % de la variance du prix.
        - Le **modèle Ridge** a montré une légère amélioration par rapport à la régression classique, avec un **MSE** (erreur quadratique moyenne) de 36 080,4.
        - Le **modèle Lasso**, avec un MSE de 36 124,7, a aussi montré des performances robustes, en simplifiant le modèle grâce à la sélection automatique des variables les plus pertinentes.
        - **L’arbre de décision** a révélé que les variables les plus influentes pour la prédiction des prix sont la RAM, la mémoire interne, et la fréquence du processeur.
        
        #### Outils et technologies :
        - **R** a été utilisé pour toutes les analyses statistiques et la construction des modèles, avec des bibliothèques comme \`glmnet\`, \`randomForest\`, et \`rpart\` pour implémenter les modèles de régression Ridge, Lasso, et les arbres de décision.
        
        #### Conclusion :
        Ce projet a permis de démontrer l’importance des caractéristiques techniques des smartphones dans la détermination de leur prix. Les modèles de régression et d'arbres de décision ont offert des prédictions fiables, aidant ainsi à mieux comprendre les dynamiques de prix dans le secteur des téléphones mobiles. Le modèle Ridge a particulièrement montré son efficacité en équilibrant précision et généralisation, tout en évitant le surajustement.
        `,
        pdf: "Projet Data-Science.pdf"
      },
    {
        text: `### Titre du projet : Analyse et Modélisation de Séries Chronologiques : Températures à Marignane

#### Contexte :
Ce projet porte sur l'analyse d'une série chronologique représentant les relevés de température quotidienne à Marignane sur une période de 13 ans, soit 4 826 observations allant du 1er janvier 2010 au 19 mars 2023. L'objectif était d'identifier les tendances, la saisonnalité et d'ajuster un modèle prédictif qui pourrait fournir des prévisions de températures futures.

#### Objectifs :
- Analyser la série chronologique des températures pour détecter les tendances et la saisonnalité.
- Stationnariser la série afin de la rendre plus simple à modéliser.
- Ajuster un modèle ARMA pour prédire les futures observations.

#### Données utilisées :
Les données contiennent deux variables :
- **Date** : Les dates des relevés, formatées de 2010 à 2023.
- **Température moyenne journalière (mean.temp)** : La température moyenne relevée chaque jour. Sur la période d'analyse, la température moyenne était de 17,3°C avec un minimum de 4,8°C et un maximum de 29,1°C.

#### Méthodologie :
1. **Analyse descriptive** :
   - Nous avons d'abord procédé à une analyse statistique descriptive des données, ce qui a révélé une tendance croissante dans les températures avec des fluctuations saisonnières.
   - Un modèle additif a été envisagé pour modéliser cette série chronologique, en ajustant les données à une échelle temporelle et en observant les pics de température annuels, correspondant généralement aux périodes estivales.

2. **Détection des tendances et saisonnalité** :
   - Une régression linéaire a été ajustée pour estimer la tendance générale des températures au fil du temps. Bien que certaines erreurs aient été rencontrées dans l'affichage de la droite de régression, l'analyse visuelle a confirmé une tendance croissante avec une forte saisonnalité.
   - L'**Autocorrelation Function (ACF)** et la **Partial Autocorrelation Function (PACF)** ont été utilisées pour analyser la corrélation entre les valeurs à différents décalages (lags). Les résultats ont montré une décroissance lente de la corrélation, suggérant une dépendance temporelle élevée dans les données.

3. **Stationnarisation de la série** :
   - Afin de rendre la série stationnaire, nous avons appliqué plusieurs différenciations. Après avoir pris la première et la deuxième différence des données, nous avons observé une réduction des pics dans les graphiques ACF et PACF, bien que certaines corrélations subsistent.
   - Un modèle ARMA a ensuite été ajusté en tenant compte des valeurs optimales pour p (3) et q (6) obtenues à partir des graphiques de l'ACF et de la PACF.

4. **Ajustement d’un modèle ARMA** :
   - Le modèle ARMA (2,7) a été choisi en minimisant l'Akaike Information Criterion (AIC), avec une valeur finale d'AIC de 16 044.32.
   - Le modèle ajusté a ensuite été testé via le **Ljung-Box Test**, qui a révélé une p-value très faible (< 2.2e-16), indiquant que le modèle peut encore être amélioré.

5. **Prédiction des observations futures** :
   - En utilisant un modèle ARIMA ajusté (3,1,6), nous avons généré des prévisions pour les 50 jours suivants. Les prévisions montrent une température oscillant autour de 13°C à 29°C pour cette période, avec des intervalles de confiance croissants.

#### Résultats :
- L'analyse de la série chronologique a confirmé une forte saisonnalité et une tendance croissante des températures à Marignane, probablement liée aux fluctuations climatiques annuelles.
- Le modèle ARMA (2,7) ajusté a permis de capturer ces dynamiques et de fournir des prévisions fiables pour les 50 jours suivants.
- La méthode de stationnarisation a réduit la variabilité dans les données, facilitant ainsi l'ajustement du modèle prédictif.

#### Outils et technologies :
- Ce projet a été réalisé en **R**, en utilisant des bibliothèques comme \`ts.plot\` et \`arima\` pour ajuster les modèles ARMA et ARIMA et générer des prédictions.
- Les analyses de l'ACF et de la PACF ont été réalisées pour explorer la dépendance temporelle dans la série.

#### Conclusion :
Ce projet a permis de démontrer l'importance de la stationnarisation et de l'ajustement des modèles ARMA pour analyser des séries chronologiques. L'application de ces techniques aux données de température a permis de modéliser avec succès la tendance et la saisonnalité des températures à Marignane, tout en fournissant des prévisions fiables pour les jours à venir.
`,
        pdf: "Projet Série Chronologique .pdf"
      },
    {
        text: `"""
Titre du projet : Simulation et Estimation d'une Distribution via la Méthode de Rejet

Contexte :
Dans ce projet, nous avons exploré la méthode de rejet pour simuler une variable aléatoire de la forme |X|, où X suit une loi normale standard N(0, 1). L'objectif principal est de simuler des valeurs pour la distribution de |X|, de comparer ces simulations avec la distribution théorique, et d'analyser le nombre d'itérations nécessaires pour chaque simulation en utilisant la méthode de rejet. Ce type de simulation est essentiel pour générer des échantillons à partir de distributions complexes qui n'ont pas de formules fermées simples pour l'échantillonnage direct.

Objectifs :
- Calculer la densité et la fonction de répartition cumulative (CDF) de la variable aléatoire |X|, où X est une variable normale N(0, 1).
- Simuler un échantillon de taille 1 000 pour |X| en utilisant la méthode de rejet.
- Comparer les résultats de simulation à la distribution théorique, à la fois visuellement (graphiques) et statistiquement (écarts).
- Estimer le nombre moyen d'itérations nécessaires pour la méthode de rejet.

Méthodologie :
1. Calcul de la densité de |X| : En utilisant les propriétés de la distribution normale, nous avons déterminé que la densité de |X| est donnée par :
   f(t) = 2 × (1 / √(2π)) e^(-t^2 / 2) pour t ≥ 0
   De plus, nous avons utilisé une distribution exponentielle standard avec densité g(t) = e^(-t) comme fonction d'instrument pour la méthode de rejet.

2. Détermination de la constante C : Pour appliquer la méthode de rejet, nous devons trouver une constante C telle que :
   f(t) ≤ C g(t), pour tout t ≥ 0
   Après analyse, nous avons trouvé que la constante optimale est C = √(2 / π) e^(1 / 2).

3. Simulation avec la méthode de rejet :
   - Nous avons généré des valeurs à partir de la distribution exponentielle standard.
   - Pour chaque valeur générée, nous avons accepté ou rejeté cette valeur selon une probabilité basée sur le rapport entre les densités f(t) et g(t).
   - Ce processus a été répété jusqu'à ce que 1 000 valeurs acceptées soient obtenues, formant ainsi un échantillon simulé de |X|.

4. Comparaison avec la distribution théorique :
   - Nous avons tracé un histogramme de l'échantillon simulé et superposé la densité théorique de |X|.
   - Nous avons également tracé la fonction de répartition empirique et comparé cette dernière à la CDF théorique.

5. Analyse du nombre d'itérations :
   - Nous avons analysé combien d'itérations de la méthode de rejet étaient nécessaires pour chaque simulation et comparé les résultats à la distribution géométrique théorique. La moyenne théorique du nombre d'itérations est C ≈ 1,32.

Résultats :
- Simulation réussie : L'histogramme des valeurs simulées suit parfaitement la courbe de la densité théorique de |X|, prouvant ainsi que la méthode de rejet a bien fonctionné pour cette distribution.
- Nombre d'itérations : Environ 75 % des simulations ont nécessité une seule itération, et environ 20 % ont nécessité deux itérations. Aucun échantillon n’a nécessité plus de quatre itérations, ce qui correspond à la distribution géométrique attendue avec une moyenne de 1,32.
- Fonction de répartition empirique : La fonction de répartition cumulative empirique des données simulées suit de près la CDF théorique, confirmant la validité des simulations.

Outils et technologies :
- Le projet a été réalisé en Python, avec des bibliothèques comme numpy et matplotlib pour les simulations et la visualisation des résultats. Nous avons également utilisé scipy.stats pour les fonctions liées aux distributions normales et exponentielles.
- Méthode de rejet : Implémentée pour simuler des échantillons selon une distribution complexe en utilisant une distribution simple et une probabilité d'acceptation calculée à chaque itération.

Conclusion :
Ce projet a démontré l'efficacité de la méthode de rejet pour simuler des échantillons à partir de distributions difficiles à échantillonner directement. En utilisant une distribution exponentielle comme fonction d'instrument et en ajustant la constante C, nous avons pu générer un échantillon de taille 1 000 qui correspond bien à la distribution théorique de |X|. L'analyse des itérations nécessaires a montré que la méthode est relativement efficace, avec un nombre moyen d'itérations proche de la valeur théorique attendue.
"""`,
        pdf: "Simulation et Estimation d’une Distribution via la méthode du rejet.pdf"
      },
    {
        text: `### Titre du projet : Simulations de Processus de Galton-Watson avec Immigration

#### Contexte :
Le processus de Galton-Watson est un modèle mathématique utilisé pour simuler l'évolution d'une population à travers plusieurs générations. Il est couramment utilisé en probabilités pour modéliser la dynamique des populations, en tenant compte de la descendance de chaque individu. Dans ce projet, nous avons travaillé sur un processus de Galton-Watson avec une distribution de descendance négative binomiale et une immigration suivant une distribution de Poisson. L'objectif était de simuler ce processus, d'estimer sa distribution stationnaire et d'analyser la probabilité d'extinction à long terme.

#### Objectifs :
- Simuler un processus de Galton-Watson avec une distribution de descendance binomiale négative et une immigration modélisée par une distribution de Poisson.
- Estimer la distribution stationnaire de la population à travers un grand nombre de simulations.
- Calculer la moyenne et la variance de cette distribution.
- Évaluer la probabilité d'extinction de la population.

#### Données utilisées :
- **Distribution de descendance** : Modélisée par une loi binomiale négative NB(1, p), où \( p \) représente la probabilité de succès.
- **Immigration** : Modélisée par une loi de Poisson avec un paramètre \( \theta \), représentant la moyenne du nombre d'individus immigrés à chaque génération.

#### Méthodologie :
1. **Simulation du processus de Galton-Watson avec immigration** : Le processus démarre avec une population initiale \( X_0 = 1 \) et évolue à travers plusieurs générations. Chaque individu de la génération \( i \) génère un nombre de descendants qui suit une distribution binomiale négative, et un certain nombre d'immigrants s'ajoute à chaque génération, suivant une loi de Poisson.
   
2. **Arrêt du processus** : Si la population atteint zéro à une génération donnée, le processus s'arrête, sinon il continue jusqu'à la fin du nombre de générations spécifié.

3. **Estimation de la distribution stationnaire** : Nous avons simulé un grand nombre de trajectoires du processus (5 000 simulations), chaque trajectoire représentant l’évolution de la population à travers 1 000 générations. L'objectif était de calculer la taille moyenne de la population à la dernière génération et d'estimer la variance de cette distribution.
   
4. **Calcul de la probabilité d'extinction** : La probabilité que la population s'éteigne au fil du temps a été estimée en calculant la proportion de trajectoires qui se sont terminées avec une population de taille zéro.

#### Résultats :
- **Distribution stationnaire** : Après avoir simulé un grand nombre de trajectoires, nous avons estimé la moyenne de la population de la dernière génération à 30 individus. La variance de cette distribution a été estimée à 77,7.
- **Probabilité d'extinction** : Nous avons trouvé que la probabilité d'extinction à long terme est nulle, car même si le processus de descendance mène à une extinction, l'immigration permet à la population de persister.

#### Outils et technologies :
- Le projet a été entièrement réalisé en **Python** en utilisant des bibliothèques comme **numpy**, **matplotlib**, et **scipy** pour les simulations et les analyses statistiques.
- **Algorithme de simulation** : Un algorithme itératif a été conçu pour simuler chaque génération du processus, incluant les naissances (descendance) et les migrations (immigration).
- **Visualisation** : Un histogramme a été généré pour visualiser la distribution des tailles de population à la dernière génération des simulations.

#### Conclusion :
Ce projet a démontré l'intérêt des simulations de processus stochastiques comme outil pour modéliser des dynamiques complexes de population. Le processus de Galton-Watson avec immigration est particulièrement intéressant car, bien que chaque sous-processus puisse conduire à une extinction certaine, l'immigration permet d'éviter cette extinction à long terme. Les résultats obtenus montrent une population stable avec une variance modérée et aucune probabilité d'extinction dans les conditions définies.`,
        pdf: "Simulation de Processus de Galton-Watson avec Immigration .pdf"
      },
    {
        text: `### Titre du projet : Analyse des Places de Stationnement à Paris

#### Contexte :
Dans ce projet, nous avons travaillé sur une base de données concernant les **stationnements dans Paris**. Cette base regroupe des informations sur les **voies parisiennes**, les **régimes de stationnement** et les **places de stationnement**, permettant ainsi d’étudier la répartition des places selon les arrondissements et les régimes de stationnement. L’objectif principal était de fournir une analyse comparative des places disponibles en fonction des arrondissements et des types d'usagers (motos, voitures, etc.), tout en exploitant les données à l’aide de requêtes SQL pour répondre à des besoins spécifiques d'analyse.

#### Objectifs :
- Extraire et analyser les données liées aux voies, aux régimes et aux types de stationnement.
- Fournir des rapports statistiques sur les places de stationnement par arrondissement, type de stationnement et régime.
- Mettre à jour, ajouter et supprimer des entrées dans la base de données en fonction des besoins de gestion des places de stationnement.
- Automatiser des requêtes complexes pour des analyses spécifiques, telles que la disponibilité des places par régime prioritaire ou la taille des places de stationnement.

#### Données utilisées :
- **Voie** : Contient des informations sur les voies de Paris, telles que l’arrondissement, le type de voie, et le nom de la voie.
- **Régime** : Contient les régimes de stationnement, notamment si le stationnement est prioritaire pour certaines catégories d'usagers (par exemple, GIG/GIC).
- **Stationnement** : Contient des informations sur les places de stationnement, notamment le nombre de places, le type de stationnement, et les dimensions des places (longueur et largeur).

#### Méthodologie :
1. **Requêtes SQL de base** :
   - Nous avons commencé par des requêtes simples pour explorer les données et extraire des informations spécifiques. Par exemple :
     - **Lister les voies** dans certains arrondissements (ex. : le 12ème et le 13ème).
     - **Lister les types de stationnement** disponibles dans certaines rues (ex. : Lincoln, rues contenant "De").
     - **Lister les stationnements** de certains types (par exemple, longitudinal, épi) et ceux avec un nombre minimum de places.
   
2. **Requêtes SQL avancées** :
   - Des requêtes plus complexes ont été développées pour répondre à des analyses plus spécifiques :
     - **Calculer le nombre de places** disponibles par arrondissement ou par régime de stationnement.
     - **Afficher les statistiques** telles que la longueur maximale ou moyenne des places de stationnement.
     - **Identifier les premières occurrences** de certains types de stationnement pour mieux comprendre la répartition des places à Paris.

3. **Mises à jour de la base de données** :
   - Nous avons également effectué des mises à jour sur les données en modifiant certaines entrées :
     - **Changer le régime** de stationnement pour certaines places.
     - **Modifier les dimensions** des places de stationnement selon les critères spécifiés (ex. : augmenter ou diminuer le nombre de places longitudinales en fonction de la longueur).
     - **Suppression des enregistrements** : Suppression de certaines places selon leur type ou nombre de places.

4. **Automatisation et synthèse** :
   - Plusieurs requêtes ont été automatisées pour être exécutées régulièrement afin de maintenir à jour les informations sur les stationnements. Par exemple, les requêtes de synthèse permettent de suivre automatiquement la distribution des places par arrondissement ou par régime.

#### Résultats :
- **Statistiques sur les places de stationnement** : Nous avons pu établir un comparatif des places de stationnement entre les arrondissements, montrant par exemple que certains arrondissements, comme le 15ème et le 12ème, disposent de plus de places longitudinales que d'autres.
- **Gestion des régimes prioritaires** : Les requêtes ont permis d’identifier les arrondissements offrant le plus de places pour les régimes prioritaires (GIG/GIC).
- **Optimisation des dimensions des places** : Grâce aux requêtes de mise à jour, nous avons pu ajuster les dimensions des places de stationnement en fonction des besoins, notamment en augmentant ou diminuant le nombre de places dans certaines zones.

#### Outils et technologies :
- **SQL** : Utilisé pour écrire les requêtes d’extraction, de mise à jour et de suppression des données.
- **Base de données relationnelle** : Les données sont organisées dans une base de données relationnelle où les tables "Voie", "Régime" et "Stationnement" sont reliées par des clés étrangères.

#### Conclusion :
Ce projet a permis de mettre en lumière l’importance des requêtes SQL pour la gestion et l’analyse des données de stationnement à Paris. En automatisant certaines requêtes, il est devenu possible de suivre efficacement la disponibilité des places selon les besoins des usagers et les contraintes de chaque arrondissement. L’analyse des dimensions des places et la gestion des régimes de stationnement prioritaires ont également aidé à mieux comprendre l’accessibilité des différents types de places dans la ville.`,
        pdf: "Requête+tableau BDR.pdf",
        pdf2:"DOSSIER TEXTE BDR.pdf"
      },
    {
        text: `### Titre du projet : Modélisation Supervisée et Gestion du Risque : Optimisation des Stratégies de Décision

#### Contexte :
Durant mon alternance au sein du département des risques chez **Santander Consumer Banque**, j'ai eu l'opportunité de participer à l'optimisation des stratégies de décision en gestion du risque. Santander Consumer Banque est une filiale du groupe bancaire Santander, spécialisée dans le financement des véhicules et les services associés. Mon rôle en tant que **Data Analyste Risque** se concentrait sur la modélisation statistique des risques de crédit et l’automatisation des reportings pour améliorer la prise de décision concernant les crédits accordés aux particuliers et aux entreprises.

#### Objectifs :
- Automatiser et optimiser les reportings pour surveiller le risque de crédit en temps réel.
- Mettre en place des stratégies de décision basées sur des modèles de Scoring afin de réduire le risque de défaut des emprunteurs.
- Analyser les impacts des modifications des stratégies d’octroi et proposer des ajustements pour améliorer la gestion des risques.

#### Méthodologie :
1. **Exploration des données** :
   - J’ai commencé par une phase d’exploration, au cours de laquelle j'ai pris en main les différents outils et bases de données, notamment **RAS** (Risk Analytic Service), un outil développé par Oracle, qui permet de traiter les données des clients et des contrats.
   - L’objectif principal était de comprendre le fonctionnement de l’entreprise, les processus d’octroi de crédit, ainsi que les différents indicateurs utilisés pour surveiller le risque de crédit, comme la **Probabilité de Défaut** (PD) et les **Key Performance Indicators** (KPI).

2. **Construction et Automatisation des Reportings** :
   - J’ai automatisé le processus de reporting en utilisant **SQL** pour extraire les données de la base RAS et **R** pour traiter et visualiser les données. Cette automatisation a permis de réduire les erreurs humaines et d’accélérer le traitement des données.
   - Le reporting était ensuite partagé avec les managers et le siège social de **Santander Consumer Finance**, permettant une surveillance continue de la performance des contrats et du risque de crédit.

3. **Analyse des Scénarios pour le Changement de Stratégies d’Octroi** :
   - Face à une augmentation significative du volume de demandes (notamment liées à Tesla), j’ai participé à l'analyse des **Scénarios de Cut-off**. Ces analyses consistaient à tester différents seuils de Scoring pour voir comment ils affectaient le **taux d’acceptation** et le **taux de décisions automatiques**. Le but était d’optimiser la charge de travail des analystes tout en minimisant les risques.
   - Pour cela, j’ai effectué des simulations de scénario, en ajustant les seuils et en analysant les impacts sur les indicateurs clés, tels que le taux de défaut anticipé et le coût du risque.

4. **Projets supplémentaires** :
   - J’ai également contribué à un **Projet Fraude** en analysant des modèles de détection de fraude pour mieux comprendre les facteurs qui augmentent le risque de fraude dans les crédits automobiles.
   - Enfin, j’ai travaillé sur la mise en place d’un **tableau de bord interactif** avec **Power BI**, permettant une visualisation dynamique et interactive des KPI pour les équipes dirigeantes.

#### Outils et technologies :
- **SQL** pour extraire les données de la base Oracle.
- **R** pour l’analyse statistique, la visualisation des données, et l’automatisation des scripts.
- **Power BI** pour la création de tableaux de bord dynamiques et interactifs.
- **Excel** pour des analyses ponctuelles et la gestion des reportings au format xlsx.

#### Résultats :
- L’automatisation des reportings a permis de gagner en efficacité et en précision, tout en réduisant les délais de production.
- Les analyses de scénario ont aidé à optimiser les stratégies de Scoring, réduisant ainsi les taux de défaut tout en maintenant un **taux d’acceptation stable** autour de 60%.
- Le projet Power BI a permis de centraliser et de visualiser les indicateurs clés de manière plus intuitive pour les managers et le siège social.

#### Conclusion :
Cette expérience a été extrêmement enrichissante, tant sur le plan technique que professionnel. En combinant des compétences en **data science** et en gestion du risque, j’ai pu contribuer à l’optimisation des stratégies de crédit de **Santander Consumer Banque** tout en développant des compétences transversales essentielles dans un environnement dynamique et exigeant.`,
        pdf: "RAPPORT_ALTERNANCE YAYA AYMAN.pdf"
      },
  ];


  



  function createPortfolioItem(doc, index) {
   const container = document.createElement('div');
   container.classList.add('portfolio-item');

   // Créer le conteneur de texte tronqué
   const textContainer = document.createElement('div');
   textContainer.classList.add('text-container');
   const truncatedText = doc.text.slice(0, 600);
   textContainer.innerHTML = truncatedText;

   // Ajouter un lien "En savoir plus" si le texte dépasse 600 caractères
   if (doc.text.length > 600) {
       const showMoreLink = document.createElement('span');
       showMoreLink.classList.add('show-more');
       showMoreLink.textContent = '... En savoir plus';
       textContainer.appendChild(showMoreLink);
   }

   // Créer le conteneur de texte complet, caché par défaut
   const fullText = document.createElement('div');
   fullText.classList.add('full-text');
   fullText.style.display = 'none';
   fullText.innerHTML = doc.text.slice(600);

   // Créer les liens PDF
   const pdfContainer = document.createElement('div');
   pdfContainer.classList.add('pdf-container');
   
   const pdfLink = document.createElement('a');
   pdfLink.href = `pdf/${doc.pdf}`;
   pdfLink.textContent = 'Télécharger le PDF';
   pdfLink.classList.add('pdf-link');
   pdfLink.target = '_blank';
   pdfContainer.appendChild(pdfLink);

   // Ajouter un lien PDF supplémentaire pour l'objet 7
   if (index === 7) {
       const pdfLink2 = document.createElement('a');
       pdfLink2.href = `pdf/${doc.pdf2}`;
       pdfLink2.textContent = 'Télécharger le PDF 2';
       pdfLink2.classList.add('pdf-link');
       pdfLink2.target = '_blank';
       pdfContainer.appendChild(pdfLink2);
   }

   container.appendChild(textContainer);
   container.appendChild(fullText);
   container.appendChild(pdfContainer);

   // Ajouter un événement pour afficher/masquer le texte complet
   const showMoreElement = textContainer.querySelector('.show-more');
   if (showMoreElement) {
       showMoreElement.addEventListener('click', () => {
           const isTextVisible = fullText.style.display === 'block';
           if (isTextVisible) {
               // Réduire le texte
               fullText.style.display = 'none';
               showMoreElement.textContent = '... En savoir plus';
           } else {
               // Afficher le texte complet
               fullText.style.display = 'block';
               showMoreElement.textContent = 'Réduire';
           }
       });
   }

   return container;
}

// Ajouter les éléments du portfolio au DOM
document.addEventListener('DOMContentLoaded', () => {
   const portfolioContainer = document.getElementById('portfolio-container');
   documents.forEach((doc, index) => {
       const portfolioItem = createPortfolioItem(doc, index);
       portfolioContainer.appendChild(portfolioItem);
   });
});
