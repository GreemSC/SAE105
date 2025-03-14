const moteurs =
    `[
    {
        "nom": "Unity",
        "entreprise": "Unity Technologies",
        "tarifs": "Gratuit pour les revenus inférieurs à 200 000$/an, plans payants à partir de 399$/an",
        "openSource": false,
        "description": "Unity est un moteur de jeu multiplateforme permettant de créer des jeux en 2D, 3D et en réalité augmentée/virtuelle.",
        "langageDeProg": "C# (UnityScript, obsolète)",
        "avantages": [
            {
                "nom": "Multiplateforme",
                "description": "Permet de déployer des jeux sur une grande variété de plateformes, y compris PC, consoles, mobile et réalité virtuelle."
            },
            {
                "nom": "Grande communauté",
                "description": "Dispose d'une communauté active et de nombreuses ressources en ligne, comme des tutoriels et des forums."
            },
            {
                "nom": "Asset Store",
                "description": "Propose une boutique où les développeurs peuvent acheter ou vendre des ressources prêtes à l'emploi pour leurs projets."
            }
        ],
        "desavantages": [
            {
                "nom": "Coût des versions avancées",
                "description": "Les fonctionnalités avancées nécessitent des abonnements coûteux."
            },
            {
                "nom": "Performance en 3D",
                "description": "Moins performant que certains moteurs optimisés pour la 3D haute qualité, comme Unreal Engine."
            }
        ],
        "jeux": [
            {
                "nom": "Hollow Knight",
                "description": "Un jeu de plateforme et d'exploration acclamé pour son gameplay et son design artistique."
            },
            {
                "nom": "Among Us",
                "description": "Un jeu multijoueur populaire basé sur la déduction et la collaboration."
            }
        ],
        "versions": [
            {
                "nom": "Unity 5",
                "description": "Introduit le système d'éclairage global et des améliorations pour le rendu en temps réel."
            },
            {
                "nom": "Unity 2017",
                "description": "Ajoute des fonctionnalités comme Timeline et Cinemachine pour le contrôle des animations et caméras."
            },
            {
                "nom": "Unity 2018",
                "description": "Mise à jour majeure avec un nouveau pipeline de rendu (HDRP, LWRP)."
            },
            {
                "nom": "Unity 2019",
                "description": "Améliore le support pour les jeux en VR et le Ray Tracing."
            },
            {
                "nom": "Unity 2020",
                "description": "Ajoute des fonctionnalités pour les jeux multijoueurs et l'amélioration de l'éditeur."
            },
            {
                "nom": "Unity 2021",
                "description": "Inclut des mises à jour pour le HDRP, la gestion des shaders et l'optimisation mobile."
            }
        ]
    },
    {
        "nom": "Unreal Engine",
        "entreprise": "Epic Games",
        "tarifs": "Gratuit jusqu'à 1 million de revenus, 5% de redevance ensuite",
        "openSource": true,
        "description": "Unreal Engine est un moteur de jeu puissant et très utilisé dans l'industrie pour les jeux AAA et les projets haute qualité.",
        "langageDeProg": "C++, Blueprints (langage visuel)",
        "avantages": [
            {
                "nom": "Rendu 3D de haute qualité",
                "description": "Offre un rendu photo-réaliste grâce à des outils avancés comme Lumen et Nanite."
            },
            {
                "nom": "Outils de développement visuel",
                "description": "Blueprints permet de créer des mécaniques de jeu sans programmation."
            },
            {
                "nom": "Communauté et ressources",
                "description": "Dispose d'une vaste communauté, d'une documentation détaillée et d'une marketplace riche."
            }
        ],
        "desavantages": [
            {
                "nom": "Courbe d'apprentissage",
                "description": "La complexité du moteur peut être intimidante pour les débutants."
            },
            {
                "nom": "Exigeant en performances",
                "description": "Nécessite des machines puissantes pour un développement fluide, surtout pour les projets 3D."
            }
        ],
        "jeux": [
            {
                "nom": "Fortnite",
                "description": "Jeu de battle royale développé par Epic Games utilisant Unreal Engine."
            },
            {
                "nom": "Gears of War",
                "description": "Une franchise AAA célèbre pour son gameplay et ses graphismes impressionnants."
            }
        ],
        "versions": [
            {
                "nom": "Unreal Engine 3",
                "description": "Populaire pour les jeux de la génération PS3/Xbox 360."
            },
            {
                "nom": "Unreal Engine 4",
                "description": "Introduction de Blueprints et améliorations graphiques majeures."
            },
            {
                "nom": "Unreal Engine 5",
                "description": "Ajout de Lumen pour l'éclairage dynamique et Nanite pour les géométries détaillées."
            }
        ]
    },
    {
        "nom": "Godot",
        "entreprise": "Communauté Open Source",
        "tarifs": "Gratuit (open source sous licence MIT)",
        "openSource": true,
        "description": "Godot est un moteur de jeu gratuit et open source qui prend en charge le développement 2D et 3D. Il est apprécié pour sa légèreté et son approche modulaire.",
        "langageDeProg": "GDScript, C#, C++, VisualScript",
        "avantages": [
            {
                "nom": "Gratuit et open source",
                "description": "Pas de frais ou de redevances, avec un code accessible et modifiable par tous."
            },
            {
                "nom": "Interface utilisateur intuitive",
                "description": "Facile à utiliser avec une interface conviviale et un éditeur intégré."
            },
            {
                "nom": "Performances en 2D",
                "description": "Optimisé pour les jeux 2D avec des fonctionnalités avancées comme le Pixel Perfect."
            }
        ],
        "desavantages": [
            {
                "nom": "Moins performant en 3D",
                "description": "Les capacités 3D sont inférieures à celles des moteurs comme Unreal ou Unity."
            },
            {
                "nom": "Moins de ressources",
                "description": "La communauté est plus petite et offre moins de ressources que des moteurs établis."
            }
        ],
        "jeux": [
            {
                "nom": "Deponia",
                "description": "Un jeu d'aventure graphique créé avec Godot."
            },
            {
                "nom": "Cruelty Squad",
                "description": "Un jeu de tir immersif avec un style visuel unique."
            }
        ],
        "versions": [
            {
                "nom": "Godot 3.x",
                "description": "Stable et largement utilisé pour les projets 2D et 3D basiques."
            },
            {
                "nom": "Godot 4.0",
                "description": "Amélioration des capacités 3D, support Vulkan et refonte du moteur de rendu."
            }
        ]
    },
    {
        "nom": "CryEngine",
        "entreprise": "Crytek",
        "tarifs": "Gratuit avec redevance de 5% sur les revenus générés au-delà de 5 000$",
        "openSource": false,
        "description": "CryEngine est un moteur de jeu axé sur le rendu graphique réaliste et souvent utilisé pour des jeux AAA nécessitant des environnements détaillés.",
        "langageDeProg": "C++, C#, Lua",
        "avantages": [
            {
                "nom": "Rendu graphique avancé",
                "description": "Offre des outils puissants pour des graphismes photo-réalistes, y compris la gestion avancée de l'éclairage et des matériaux."
            },
            {
                "nom": "Outils intégrés",
                "description": "Fournit des outils pour l'édition d'environnements et la création de gameplay directement dans l'éditeur."
            },
            {
                "nom": "Support VR/AR",
                "description": "Optimisé pour les applications en réalité virtuelle et augmentée."
            }
        ],
        "desavantages": [
            {
                "nom": "Complexité",
                "description": "Peut être difficile à apprendre pour les développeurs novices."
            },
            {
                "nom": "Moins de communauté",
                "description": "Une communauté plus restreinte par rapport à Unity ou Unreal."
            }
        ],
        "jeux": [
            {
                "nom": "Crysis",
                "description": "Un jeu de tir en monde ouvert connu pour avoir repoussé les limites des performances graphiques."
            },
            {
                "nom": "Hunt: Showdown",
                "description": "Un jeu multijoueur PvPvE mettant en valeur les capacités immersives du moteur."
            }
        ],
        "versions": [
            {
                "nom": "CryEngine 3",
                "description": "Utilisé pour des jeux AAA, avec un accent sur les performances sur consoles."
            },
            {
                "nom": "CryEngine V",
                "description": "Introduction du modèle de tarification basé sur les redevances et des outils de réalité virtuelle."
            }
        ]
    },
    {
        "nom": "RPG Maker",
        "entreprise": "Gotcha Gotcha Games",
        "tarifs": "Entre 50$ et 80$ selon la version",
        "openSource": false,
        "description": "RPG Maker est un moteur conçu pour créer facilement des jeux de rôle 2D avec un minimum de connaissances en programmation.",
        "langageDeProg": "Ruby (anciennes versions), JavaScript (versions récentes)",
        "avantages": [
            {
                "nom": "Facilité d'utilisation",
                "description": "Idéal pour les débutants grâce à son interface utilisateur intuitive."
            },
            {
                "nom": "Assets inclus",
                "description": "Livré avec des graphismes, des sons et des animations prêts à l'emploi."
            },
            {
                "nom": "Focus RPG",
                "description": "Optimisé pour la création rapide de jeux de rôle avec des fonctionnalités comme le système de combat et la gestion des quêtes."
            }
        ],
        "desavantages": [
            {
                "nom": "Limité à certains genres",
                "description": "Principalement conçu pour des RPG, moins adapté pour d'autres types de jeux."
            },
            {
                "nom": "Graphismes simples",
                "description": "Ne permet pas de créer des jeux avec des graphismes modernes ou complexes."
            }
        ],
        "jeux": [
            {
                "nom": "To the Moon",
                "description": "Un RPG narratif populaire réalisé avec RPG Maker."
            },
            {
                "nom": "LISA: The Painful",
                "description": "Un jeu RPG sombre et humoristique utilisant le moteur."
            }
        ],
        "versions": [
            {
                "nom": "RPG Maker XP",
                "description": "Une des premières versions populaires, utilisant Ruby comme langage de script."
            },
            {
                "nom": "RPG Maker MV",
                "description": "Ajout du support multiplateforme et JavaScript comme langage de programmation."
            },
            {
                "nom": "RPG Maker MZ",
                "description": "Améliorations de l'éditeur et du moteur graphique par rapport à MV."
            }
        ]
    },
    {
        "nom": "Love2D",
        "entreprise": "Projet open source (Love Team)",
        "tarifs": "Gratuit",
        "openSource": true,
        "description": "Love2D est un moteur de jeu léger et open source axé sur le développement de jeux en 2D à l'aide de Lua.",
        "langageDeProg": "Lua",
        "avantages": [
            {
                "nom": "Facilité d'apprentissage",
                "description": "Le langage Lua est simple à apprendre, ce qui le rend accessible aux débutants."
            },
            {
                "nom": "Performance",
                "description": "Très rapide et efficace, adapté pour des jeux 2D avec des performances élevées."
            },
            {
                "nom": "Personnalisation",
                "description": "Offre une grande flexibilité pour personnaliser les jeux grâce à Lua."
            }
        ],
        "desavantages": [
            {
                "nom": "Pas d'éditeur intégré",
                "description": "Requiert un éditeur de texte externe, ce qui peut être un inconvénient pour certains utilisateurs."
            },
            {
                "nom": "Limité à la 2D",
                "description": "Pas conçu pour les jeux en 3D."
            }
        ],
        "jeux": [
            {
                "nom": "Mari0",
                "description": "Un jeu combinant Super Mario et Portal, développé avec Love2D."
            },
            {
                "nom": "Risk of Rain",
                "description": "Un jeu de plateforme roguelike réalisé avec le moteur."
            }
        ],
        "versions": [
            {
                "nom": "Love2D 0.10",
                "description": "Amélioration des performances et du support audio."
            },
            {
                "nom": "Love2D 11.0",
                "description": "Ajout de nouvelles fonctionnalités graphiques et meilleure gestion des erreurs."
            }
        ]
    },
    {
        "nom": "RAGE",
        "entreprise": "Rockstar Games",
        "tarifs": "Non disponible pour un usage externe (propriétaire)",
        "openSource": false,
        "description": "RAGE est un moteur propriétaire utilisé par Rockstar Games pour développer des jeux en monde ouvert.",
        "langageDeProg": "C++, script propriétaire",
        "avantages": [
            {
                "nom": "Optimisé pour les mondes ouverts",
                "description": "Idéal pour les jeux massifs avec des environnements détaillés et interactifs."
            },
            {
                "nom": "Graphismes réalistes",
                "description": "Excellente gestion des éclairages, textures et animations réalistes."
            },
            {
                "nom": "Physique et IA avancées",
                "description": "Intégration d'outils pour des simulations de physique et des comportements réalistes."
            }
        ],
        "desavantages": [
            {
                "nom": "Usage limité",
                "description": "Non disponible pour les développeurs externes."
            },
            {
                "nom": "Courbe d'apprentissage",
                "description": "Réservé à une équipe interne, ce qui limite son accessibilité."
            }
        ],
        "jeux": [
            {
                "nom": "Grand Theft Auto V",
                "description": "Un jeu en monde ouvert avec des graphismes réalistes et un gameplay immersif."
            },
            {
                "nom": "Red Dead Redemption 2",
                "description": "Un jeu acclamé pour ses graphismes détaillés et son monde vivant."
            }
        ],
        "versions": [
            {
                "nom": "RAGE 1.0",
                "description": "Utilisé pour des jeux comme Table Tennis et Grand Theft Auto IV."
            },
            {
                "nom": "RAGE 2.0",
                "description": "Version améliorée utilisée pour GTA V et Red Dead Redemption 2."
            }
        ]
    },
    {
        "nom": "Ubisoft Anvil",
        "entreprise": "Ubisoft",
        "tarifs": "Non disponible pour un usage externe (propriétaire)",
        "openSource": false,
        "description": "Ubisoft Anvil est le moteur utilisé pour développer des jeux AAA en monde ouvert, avec un accent sur les environnements immersifs et les mécaniques complexes.",
        "langageDeProg": "C++, script propriétaire",
        "avantages": [
            {
                "nom": "Excellente gestion des mondes ouverts",
                "description": "Permet de créer des environnements immersifs et interactifs, adaptés aux jeux en monde ouvert."
            },
            {
                "nom": "Support multijoueur",
                "description": "Optimisé pour des expériences en ligne et coopératives."
            },
            {
                "nom": "Systèmes complexes",
                "description": "Gère des mécaniques comme l'escalade, le combat et la furtivité."
            }
        ],
        "desavantages": [
            {
                "nom": "Usage limité",
                "description": "Uniquement utilisé en interne chez Ubisoft."
            },
            {
                "nom": "Performances exigeantes",
                "description": "Peut entraîner des limitations sur les anciennes consoles ou PC."
            }
        ],
        "jeux": [
            {
                "nom": "Assassin's Creed Valhalla",
                "description": "Un jeu en monde ouvert mettant en valeur les capacités graphiques et mécaniques du moteur."
            },
            {
                "nom": "Ghost Recon Breakpoint",
                "description": "Un jeu tactique utilisant les fonctionnalités avancées du moteur."
            }
        ],
        "versions": [
            {
                "nom": "AnvilNext",
                "description": "Première version utilisée pour les Assassin's Creed récents."
            },
            {
                "nom": "AnvilNext 2.0",
                "description": "Améliorations pour les jeux de la génération actuelle, avec des graphismes et des performances optimisés."
            }
        ]
    },
    {
        "nom": "REDengine",
        "entreprise": "CD Projekt RED",
        "tarifs": "Non disponible pour un usage externe (propriétaire)",
        "openSource": false,
        "description": "REDengine est le moteur utilisé par CD Projekt RED pour créer des RPG immersifs avec des environnements détaillés et une narration riche.",
        "langageDeProg": "C++, scripts propriétaires",
        "avantages": [
            {
                "nom": "Narration avancée",
                "description": "Optimisé pour des jeux narratifs avec des choix complexes et des dialogues riches."
            },
            {
                "nom": "Graphismes de haute qualité",
                "description": "Excellente gestion des éclairages et des environnements complexes."
            },
            {
                "nom": "Personnalisation poussée",
                "description": "Permet une personnalisation extrême des systèmes de jeu."
            }
        ],
        "desavantages": [
            {
                "nom": "Limitations en performances",
                "description": "Peut être exigeant, surtout sur des machines plus anciennes."
            },
            {
                "nom": "Usage interne uniquement",
                "description": "Non accessible pour les développeurs externes."
            }
        ],
        "jeux": [
            {
                "nom": "The Witcher 3: Wild Hunt",
                "description": "Un RPG acclamé pour sa narration, ses graphismes et ses mécaniques de gameplay."
            },
            {
                "nom": "Cyberpunk 2077",
                "description": "Un jeu en monde ouvert futuriste avec des graphismes avancés et une immersion poussée."
            }
        ],
        "versions": [
            {
                "nom": "REDengine 2",
                "description": "Utilisé pour The Witcher 2."
            },
            {
                "nom": "REDengine 3",
                "description": "Amélioré pour The Witcher 3 avec des graphismes avancés et des environnements plus vastes."
            },
            {
                "nom": "REDengine 4",
                "description": "Version utilisée pour Cyberpunk 2077, optimisée pour les mondes ouverts."
            }
        ]
    },
    {
        "nom": "Construct Engine",
        "entreprise": "Scirra",
        "tarifs": "Gratuit (version limitée), payant à partir de 15$/mois",
        "openSource": false,
        "description": "Construct est un moteur de jeu visuel permettant aux développeurs de créer des jeux 2D sans écrire de code, grâce à un système basé sur des événements.",
        "langageDeProg": "Aucun (système visuel basé sur des événements), JavaScript pour des fonctionnalités avancées",
        "avantages": [
            {
                "nom": "Facilité d'utilisation",
                "description": "Interface intuitive et absence de code rendent le moteur accessible aux débutants."
            },
            {
                "nom": "Rapidité de prototypage",
                "description": "Permet de créer rapidement des jeux grâce à des outils simples."
            },
            {
                "nom": "Exportation multiplateforme",
                "description": "Supporte de nombreuses plateformes comme le web, Android, iOS et PC."
            }
        ],
        "desavantages": [
            {
                "nom": "Limité aux jeux 2D",
                "description": "Non adapté pour le développement de jeux 3D."
            },
            {
                "nom": "Performances limitées",
                "description": "Peut être moins performant pour des projets plus complexes."
            }
        ],
        "jeux": [
            {
                "nom": "The Next Penelope",
                "description": "Un jeu d'arcade de science-fiction développé avec Construct."
            },
            {
                "nom": "Cosmochoria",
                "description": "Un jeu 2D exploratoire créé avec Construct."
            }
        ],
        "versions": [
            {
                "nom": "Construct 2",
                "description": "Version populaire avec une interface conviviale, mais support arrêté."
            },
            {
                "nom": "Construct 3",
                "description": "Version actuelle basée sur le navigateur, avec de nombreuses améliorations et fonctionnalités modernes."
            }
        ]
    },
    {
        "nom": "GameMaker Studio",
        "entreprise": "YoYo Games",
        "tarifs": "Gratuit (version limitée), payant à partir de 39$/an",
        "openSource": false,
        "description": "GameMaker Studio est un moteur de jeu 2D polyvalent, largement utilisé pour les jeux indépendants grâce à sa facilité d'utilisation et sa flexibilité.",
        "langageDeProg": "GML (GameMaker Language), système visuel pour les non-programmeurs",
        "avantages": [
            {
                "nom": "Accessible aux débutants",
                "description": "Propose un système visuel simple pour les non-programmeurs et un langage facile à apprendre."
            },
            {
                "nom": "Exportation multiplateforme",
                "description": "Permet d'exporter des jeux sur PC, mobile, consoles et web."
            },
            {
                "nom": "Flexibilité",
                "description": "Convient aussi bien aux projets simples qu'aux jeux plus complexes."
            }
        ],
        "desavantages": [
            {
                "nom": "Tarifs élevés",
                "description": "Les licences pour exporter sur certaines plateformes peuvent être coûteuses."
            },
            {
                "nom": "Limité en 3D",
                "description": "Bien que possible, le développement 3D est limité et peu intuitif."
            }
        ],
        "jeux": [
            {
                "nom": "Undertale",
                "description": "Un RPG populaire indépendant développé avec GameMaker Studio."
            },
            {
                "nom": "Hyper Light Drifter",
                "description": "Un jeu d'action-aventure acclamé par la critique, créé avec ce moteur."
            }
        ],
        "versions": [
            {
                "nom": "GameMaker 8.1",
                "description": "Ancienne version classique avant la transition vers GameMaker Studio."
            },
            {
                "nom": "GameMaker Studio",
                "description": "Introduction d'une interface moderne et d'une exportation multiplateforme."
            },
            {
                "nom": "GameMaker Studio 2",
                "description": "Version actuelle avec des outils et une interface améliorés."
            }
        ]
    }
]`;

var datas = JSON.parse(moteurs);

const madiv = document.querySelector("#moteurs");

var affichage = "";

for (var i = 0; i < datas.length; i++) {

    var openSourceImagePath = "";
    var openSourceTextAlt = "";
    if (datas[i].openSource == true) {
        openSourceImagePath = "../medias/interface/check-solid.svg";
        openSourceTextAlt = "Vrai";
    }
    else {
        openSourceImagePath = "../medias/interface/xmark-solid.svg";
        openSourceTextAlt = "Faux";
    }

    affichage +=
        `
    <article class="moteur">
        <h2>${datas[i].nom}</h2>
        <p>${datas[i].description}</p>
        <p class="bottomtext"><a href="#${((datas[i].nom).replace(/\s+/g, '')).toLowerCase()}Window">Plus d'informations</a></p>
    </article>
    <div id="${((datas[i].nom).replace(/\s+/g, '')).toLowerCase()}Window" class="windows">
        <div>
            <a href="#close" title="Fermer" class="close">x</a>

            <h2>${datas[i].nom}</h2>
            <div class="smallBlocks">
                <div class="smallBlock">
                    <h4>Entrprise</h4>
                    <p>${datas[i].entreprise}</p>
                </div>
                <div class="smallBlock">
                    <h4>Open Source</h4>
                    <figure>
                        <img src="${openSourceImagePath}" alt="${openSourceTextAlt}" />
                    </figure>
                </div>
                <div class="smallBlock">
                    <h4>Programation</h4>
                    <p>${datas[i].langageDeProg}</p>
                </div>
            </div>

            <div class="blocks">
                <div class="block">
                    <h4>Tarifs</h4>
                    <p>${datas[i].tarifs}</p>
                </div>
                <div class="block">
                    <h4>Description</h4>
                    <p>${datas[i].description}</p>
                </div>
            </div>
            <h3 id="avantages">Avantages :</h3>
            <div class="blocks">
    `;

    for (var j = 0; j < datas[i].avantages.length; j++) {

        affichage +=
            `
                    <div class="block">
                        <h4>${datas[i].avantages[j].nom}</h4>
                        <p>${datas[i].avantages[j].description}</p>
                    </div>
        `;
    }

    affichage +=
        `
            </div>
            <h3 id="desavantages">Désavantages :</h3>
            <div class="blocks">
    `;
    for (var j = 0; j < datas[i].desavantages.length; j++) {

        affichage +=
            `
                    <div class="block">
                        <h4>${datas[i].desavantages[j].nom}</h4>
                        <p>${datas[i].desavantages[j].description}</p>
                    </div>
        `;
    }

    affichage +=
        `
            </div>
            <h3 id="jeux">Les Jeux :</h3>
            <div class="blocks">
    `;
    for (var j = 0; j < datas[i].jeux.length; j++) {

        affichage +=
            `
                    <div class="block">
                        <h4>${datas[i].jeux[j].nom}</h4>
                        <p>${datas[i].jeux[j].description}</p>
                    </div>
        `;
    }

    affichage +=
        `
            </div>
            <h3 id="jeux">Les Versions :</h3>
            <div class="blocks">
    `;
    for (var j = 0; j < datas[i].versions.length; j++) {

        affichage +=
            `
                    <div class="block">
                        <h4>${datas[i].versions[j].nom}</h4>
                        <p>${datas[i].versions[j].description}</p>
                    </div>
        `;
    }
    affichage +=
        `
            </div>
        </div>
    </div>
    `;
}

madiv.innerHTML = affichage;