document.addEventListener("DOMContentLoaded", () => {
    const projectsList = document.getElementById("projects-list");
    const filtersBar = document.getElementById("project-filters");

    // Pour ajouter un projet : copier un bloc et le remplir.
    // "cats" sert aux filtres (python, r, sql, finance). "repo" est facultatif.
    const projects = [
        {
            title: "Tarification en assurance automobile",
            tags: ["R", "Actuariat", "Modèles linéaires généralisés"],
            cats: ["r", "finance"],
            hook: "Une chaîne de quatre modèles qui aboutit à une prime par ménage : 959 €, 508 € et 528 € pour les trois premiers clients.",
            problem: "Comment fixer le prix d'un contrat auto à partir du profil d'un ménage, avant de connaître ses sinistres ?",
            method: "Sur 5 352 ménages et 27 variables : modèle Probit pour la survenue d'un sinistre (préféré aux forêts aléatoires sur l'erreur de prédiction), binomiale négative pour leur nombre, modèle Gamma pour leur coût, puis estimation de la durée du contrat.",
            result: "Une méthode de tarification en quatre étapes. Primes pures de 959 €, 508 € et 528 € pour les trois premiers ménages, soit 1 055 €, 559 € et 581 € après un chargement de 10 %.",
            link: "assets/projets/Stat_assu.pdf"
        },
        {
            title: "Prédiction du prix des smartphones",
            tags: ["R", "Machine learning", "Régression"],
            cats: ["r"],
            team: "En équipe de 3",
            hook: "La RAM est la caractéristique qui pèse le plus sur le prix, devant la mémoire interne et la fréquence du processeur.",
            problem: "Peut-on estimer le prix d'un téléphone à partir de ses seules caractéristiques techniques ?",
            method: "Jeu de données Kaggle de 161 téléphones et 14 variables. Comparaison de régressions linéaires et polynomiales, Ridge, Lasso, arbre de décision élagué et forêt aléatoire de 1 000 arbres, évalués par RMSE sur un échantillon de test.",
            result: "Les régressions expliquent entre 93 % et 96 % de la variance des prix (R² ajusté). La forêt aléatoire classe la RAM, la mémoire interne et la fréquence du processeur comme les trois variables les plus influentes.",
            link: "assets/projets/Data_science.pdf"
        },
        {
            title: "Prévision de températures par séries chronologiques",
            tags: ["R", "Séries temporelles", "ARMA"],
            cats: ["r"],
            team: "En équipe de 3",
            hook: "Un modèle ARMA(2,7) ajusté sur 13 ans de relevés quotidiens pour prévoir les 50 jours suivants.",
            problem: "Comment modéliser et prévoir la température quotidienne d'une ville à partir de son seul historique ?",
            method: "4 826 relevés quotidiens à Marignane, de 2010 à 2023. Étude de la tendance et de la saisonnalité, autocorrélations (ACF et PACF), stationnarisation par différenciation, puis choix du modèle par minimisation de l'AIC.",
            result: "Le modèle ARMA(2,7) est retenu. Il fournit une prévision des 50 observations suivantes, chacune avec son erreur standard.",
            link: "assets/projets/Serie_chro.pdf"
        },
        {
            title: "Simulation d'un processus de Galton-Watson avec immigration",
            tags: ["Python", "Simulation", "Probabilités"],
            cats: ["python"],
            hook: "La population se stabilise autour de 30 individus : l'immigration empêche l'extinction.",
            problem: "Une population où chaque individu a un nombre aléatoire de descendants finit-elle par s'éteindre si de nouveaux arrivants s'ajoutent à chaque génération ?",
            method: "Simulation de 5 000 trajectoires de 1 000 générations, avec une descendance en loi binomiale négative et une immigration en loi de Poisson, puis estimation de la distribution stationnaire.",
            result: "Moyenne simulée de 30 individus, égale à la valeur théorique, variance estimée à 77,7 et probabilité d'extinction nulle.",
            link: "assets/projets/Galton.pdf"
        },
        {
            title: "Simulation d'une loi par la méthode du rejet",
            tags: ["Python", "Simulation", "Probabilités"],
            cats: ["python"],
            hook: "1,32 essai en moyenne par tirage, comme le prévoit la théorie.",
            problem: "Comment tirer des nombres au hasard selon une loi donnée, ici |X| avec X normale centrée réduite, quand on ne sait simuler qu'une loi plus simple ?",
            method: "Calcul de la densité cible et de la plus petite constante C = √(2/π)·e^(1/2) permettant d'utiliser une loi exponentielle comme loi auxiliaire, puis algorithme du rejet sur 1 000 tirages.",
            result: "Environ 75 % des tirages sont acceptés dès le premier essai et aucun n'en demande plus de quatre, en accord avec la loi géométrique attendue.",
            link: "assets/projets/REJET.pdf"
        },
        {
            title: "Réalités sociales des pays de l'Union européenne",
            tags: ["R", "ACP", "Classification"],
            cats: ["r"],
            hook: "Trois profils de pays se dégagent, et tous les entrants de 2004 se retrouvent dans le même groupe.",
            problem: "Comment situer la France parmi les 25 pays de l'Union à partir d'indicateurs sociaux et économiques ?",
            method: "Neuf indicateurs par pays : chômage, pauvreté, dépenses d'éducation et de protection sociale, PIB, développement humain, bénévolat. Statistiques bivariées, analyse en composantes principales, puis classification ascendante hiérarchique.",
            result: "Trois groupes : les pays développés économiquement et socialement, dont la France ; les pays en développement ; les pays riches mais aux fortes inégalités.",
            link: "assets/projets/Analyse_de_donnee.pdf"
        },
        {
            title: "Régression sur les montants de sinistres",
            tags: ["R", "Régression", "Assurance"],
            cats: ["r", "finance"],
            team: "En binôme",
            hook: "Un modèle à six variables explique 93 % de la variabilité des dommages.",
            problem: "Quels facteurs expliquent le montant des dommages déclarés par un ménage assuré ?",
            method: "235 ménages et 16 variables. Régression simple, analyse de covariance avec et sans interaction, puis régression multiple avec sélection de variables (AIC, BIC, R² ajusté) et vérification des hypothèses du modèle.",
            result: "Pour les sinistres de type 1, le modèle retenu explique 45,6 % de la variabilité. Pour ceux de type 2, le modèle choisi par le critère BIC en explique 93,5 % avec six variables.",
            link: "assets/projets/Modele_de_regression.pdf"
        },
        {
            title: "Base de données du stationnement à Paris",
            tags: ["SQL", "MySQL", "Modélisation de données"],
            cats: ["sql"],
            team: "En binôme",
            hook: "Une base relationnelle de trois tables, de la création du schéma aux requêtes avec jointures.",
            problem: "Comment structurer et interroger des données de stationnement parisien : voies, emplacements et régimes ?",
            method: "Création du schéma sous MySQL avec clés primaires et étrangères, insertion des données, puis requêtes d'interrogation : filtres, recherches par motif et jointures entre tables.",
            result: "Une base opérationnelle et une série de requêtes présentées avec leurs résultats.",
            link: "assets/projets/BDR.pdf"
        },
        {
            title: "Gestion du risque de crédit chez Santander Consumer Banque",
            tags: ["Alternance", "Risque de crédit", "SQL", "R", "Power BI"],
            cats: ["finance", "r", "sql"],
            hook: "Un an au département des risques : analyse d'impact d'un changement de seuil de scoring, reporting automatisé et détection de fraude.",
            problem: "Comment faire évoluer une stratégie d'octroi de crédit sans dégrader la qualité du portefeuille ni le taux d'acceptation ?",
            method: "Analyse de scénarios sur le changement de seuil du score, tests de régression et de non-régression, puis mesure de l'impact réel. Automatisation des reportings du département sous Power BI. Scripts SQL et R de détection de fraude.",
            result: "Un tableau de bord centralisé pour le département des risques et des scripts qui ont permis de détecter des cas de fraude.",
            link: "assets/projets/RAPPORT_ALTERNANCE YAYA AYMAN.pdf",
            linkLabel: "Lire le rapport d'alternance (PDF)"
        }
    ];

    const filters = [
        { id: "all", label: "Tous" },
        { id: "python", label: "Python" },
        { id: "r", label: "R" },
        { id: "sql", label: "SQL" },
        { id: "finance", label: "Finance et risque" }
    ];

    const cards = projects.map((project, index) => {
        const card = document.createElement("details");
        card.className = "project-card";
        card.dataset.cats = project.cats.join(" ");

        const tags = project.tags.map(tag => `<li>${tag}</li>`).join("");
        const team = project.team ? `<span class="project-team">${project.team}</span>` : "";
        const repo = project.repo
            ? `<a href="${project.repo}" target="_blank" rel="noopener" class="project-button project-button-alt">Voir le code sur GitHub</a>`
            : "";

        card.innerHTML = `
            <summary>
                <span class="project-head">
                    <span class="project-title">${project.title}</span>
                    <span class="project-toggle" aria-hidden="true"></span>
                </span>
                <span class="project-hook">${project.hook}</span>
                <ul class="project-tags">${tags}</ul>
            </summary>
            <div class="project-body">
                <dl>
                    <dt>Problème</dt><dd>${project.problem}</dd>
                    <dt>Méthode</dt><dd>${project.method}</dd>
                    <dt>Résultat</dt><dd>${project.result}</dd>
                </dl>
                <div class="project-actions">
                    <a href="${encodeURI(project.link)}" target="_blank" rel="noopener" class="project-button">${project.linkLabel || "Lire le rapport complet (PDF)"}</a>
                    ${repo}
                    ${team}
                </div>
            </div>
        `;
        projectsList.appendChild(card);
        return card;
    });

    filters.forEach(filter => {
        const button = document.createElement("button");
        button.type = "button";
        button.id = `filter-${filter.id}`;
        button.className = "filter-button";
        button.textContent = filter.label;
        button.setAttribute("aria-pressed", filter.id === "all" ? "true" : "false");
        button.addEventListener("click", () => {
            filtersBar.querySelectorAll("button").forEach(b => b.setAttribute("aria-pressed", "false"));
            button.setAttribute("aria-pressed", "true");
            cards.forEach(card => {
                const show = filter.id === "all" || card.dataset.cats.split(" ").includes(filter.id);
                card.hidden = !show;
            });
        });
        filtersBar.appendChild(button);
    });
});
