//Les différents types: Image   Video   Audio   tD   Code Texte


let softs = [
    // Les logiciels d'image
    {
        "type": "Image",
        "img_link": "https://pic.clubic.com/v1/images/1692381/raw",
        "desc": "Le Photoshop Online.",
        "link": "https://www.photopea.com/"
    },
    {
        "type": "Image",
        "img_link": "https://www.remove.bg/images/logo.svg",
        "desc": "Ce logiciel retire le fond des images",
        "link": "https://www.remove.bg/"
    },
    {
        "type": "Image",
        "img_link": "https://www198.lunapic.com/editor/images/lunapic-bw.gif",
        "desc": "Un gros site permettant de faire pleins d'effets sur les images... plus complet que SnapChat et Instagram.",
        "link": "https://www198.lunapic.com/editor/"
    },
    {
        "type": "Image",
        "img_link": "https://compressor.io/logo-compressor.svg",
        "desc": "Pour compresser sans pertes de qualité les images.",
        "link": "https://compressor.io/"
    },
    {
        "type": "Image",
        "img_link": "https://www.iloveimg.com/img/iloveimg.svg",
        "desc": "Pour redimensionner plusieurs images à la fois.",
        "link": "https://www.iloveimg.com/fr/redimensionner-image"
    },
    {
        "type": "Image",
        "img_link": "https://labs.sketchfab.com/experiments/assets/sketchfab-logo.svg",
        "desc": "Pour exporter en .png des modèles 3D de Sketchfab ayant la position désirée.",
        "link": "https://labs.sketchfab.com/experiments/screenshots/"
    },
    {
        "type": "Image",
        "img_link": "https://labs.sketchfab.com/experiments/assets/sketchfab-logo.svg",
        "desc": "Pour exporter en .gif des modèles 3D de Sketchfab.",
        "link": "https://labs.sketchfab.com/experiments/gif-export/"
    },
    {
        "type": "Image",
        "img_link": "https://online.theinpaint.com/images/header-image.png",
        "desc": "Pour effacer certains détails sur une image (notamment un Watermark).",
        "link": "https://online.theinpaint.com/"
    },
    {
        "type": "Image",
        "img_link": "https://fr.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/logos/egoditor/logo-icon-blue.svg",
        "desc": "Pour générer un QR code.",
        "link": "https://fr.qr-code-generator.com/"
    },

    // Les logiciels de vidéo
    {
        "type": "Video",
        "img_link": "https://panzoid.com/img/logo.svg",
        "desc": "Un éditeur de vidéo assez complet et sans watermark.",
        "link": "https://panzoid.com/tools/videoeditor"
    },
    {
        "type": "Video",
        "img_link": "https://fr.savefrom.net/img/logo_small2.svg",
        "desc": "Pour télécharger des vidéos depuis plusieurs sites.",
        "link": "https://fr.savefrom.net"
    },
    {
        "type": "Video",
        "img_link": "https://www.y2mate.com/themes/images/logo.png",
        "desc": "Téléchargez de la vidéo et de l'audio depuis YouTube",
        "link": "https://www.y2mate.com/fr8"
    },
    {
        "type": "Video",
        "img_link": "https://cdn.notube.net/images/general/logo.webp",
        "desc": "Pour télécharger des vidéos provenant de YouTube en .mp3 ou .mp4.",
        "link": "https://notube.net/fr/easy-converter-video"
    },


    // Les logiciels pour l'audio
    {
        "type": "Audio",
        "img_link": "https://www.ispeech.org/img/logos/ispeech.png",
        "desc": "Un text-to-speech assez complet et facile à utiliser avec Audacity.",
        "link": "https://www.ispeech.org/text.to.speech"
    },
    {
        "type": "Audio",
        "img_link": "http://www.oddcast.com/ttsdemo/assets/images/oaddcast-logo.png",
        "desc": "Un text-to-speech avec un visuel en fonction du sexe lié à la voix.",
        "link": "http://ttsdemo.com/"
    },
    {
        "type": "Audio",
        "img_link": "data:image/jpeg;base64,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",
        "desc": "Faîtes de la musique en ligne gratuitement de manière assez complete.",
        "link": "http://www.audiosauna.com/studio/"
    },
    {
        "type": "Audio",
        "img_link": "https://www.remove-vocals.com/static/vocal_remover.png",
        "desc": "Enlever les paroles de n'importe quel chanson. ",
        "link": "https://www.remove-vocals.com/"
    },
    {
        "type": "Audio",
        "img_link": "https://voicechanger.io/img/voice-cards/autowah.jpg",
        "desc": "Pour mettre des effets dans vos fichiers audios. ",
        "link": "https://voicechanger.io/"
    },

    // Les logiciel de 3D
    {
        "type": "tD",
        "img_link": "https://labs.sketchfab.com/sculptfab/ressources/logo.png",
        "desc": "Le logiciel de création 3D de Sketchfab.\n Tout commence par une boule.",
        "link": "https://labs.sketchfab.com/sculptfab/"
    },
    {
        "type": "tD",
        "img_link": "http://medias.3dvf.com/news/logiciels/mixamo/mixamo.png",
        "desc": "Un logiciel pour animer des modèles 3D humanoïdes.",
        "link": "https://www.mixamo.com/#/"
    },
    {
        "type": "tD",
        "img_link": "data:image/jpeg;base64,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",
        "desc": "Un logiciel pour créer des modèles 3D pour Facebook.",
        "link": "https://easy3dpost.com/#=_="
    },

    // Les logiciels de Coding
    {
        "type": "Code",
        "img_link": "http://canvimation.github.io/assets/logo.png",
        "desc": "Pour générer des dessins en Canvas pour les sites en Javascript.",
        "link": "http://canvimation.github.io/"
    },
    {
        "type": "Code",
        "img_link": "https://digitalworkshopcenter.com/wp-content/uploads/2018/02/JavaScript-Classes-at-Digital-Workshop-Center-2.png",
        "desc": "Connaître les KeyCodes pour Javascript.",
        "link": "https://keycode.info/"
    },
    {
        "type": "Code",
        "img_link": "https://caffeinecreations.ca/uploads/blog/_1200x630_crop_center-center_82_none/emmet-logo.jpg?mtime=1553958970",
        "desc": "L'ensemble des raccourcis Emmet pour Visual Studio Code.",
        "link": "https://docs.emmet.io/cheat-sheet/"
    },
    {
        "type": "Code",
        "img_link": "https://seeklogo.com/images/C/code-sandbox-logo-0746E97CA1-seeklogo.com.png",
        "desc": "Un logiciel d'édition d'application web très complet permettant de faire autant du Vanilla que du React ou autres types de API...Un genre de Visual Studio Code en ligne.",
        "link": "https://codesandbox.io/s/vanilla"
    },
    {
        "type": "Code",
        "img_link": "data:image/png;base64,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",
        "desc": "Éditeur HTML simple.",
        "link": "https://js.do/"
    },
    {
        "type": "Code",
        "img_link": "https://pbs.twimg.com/profile_images/455676678652452864/JYOZ85z-_400x400.png",
        "desc": "Générateur graphique de palette de couleur avec exportation HTML ,CSS , LESS , SASS , XML et text.",
        "link": "https://paletton.com/#uid=15a0u0kMzLdWw3KUk9haaU48lXd"
    },

    {
        "type": "Code",
        "img_link": "assets/img/CSS animate.png",
        "desc": "Pour générer des animations en CSS.",
        "link": "http://cssanimate.com/#=_="
    }
    // Les logiciels de Texte
    ,

    {
        "type": "Texte",
        "img_link": "https://keywordtool.io/sites/all/images/keyword-tool-logo.png",
        "desc": "Pour générer des mots-clés à mettre dans la description de vos contenus.",
        "link": "https://keywordtool.io/fr/"
    }
];