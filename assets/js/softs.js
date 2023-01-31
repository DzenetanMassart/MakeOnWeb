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
    {
        "type": "Image",
        "img_link": "https://www.qrcode-monkey.com/img/qr-code-monkey-logo-new-white.svg",
        "desc": "Pour générer un QR code.",
        "link": "https://www.qrcode-monkey.com/fr/"
    },
    {
        "type": "Image",
        "img_link": "https://cdn1.ftimg.com/images/ft-nib-text-80.png",
        "desc": "Pour générer un Logo à partir d'un texte.",
        "link": "https://flamingtext.com/"
    },
    {
        "type": "Image",
        "img_link": "data:image/png;base64,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",
        "desc": "QRCode.js est une librairie Javascript pour générer des QRcode.",
        "link": "https://davidshimjs.github.io/qrcodejs/"
    },
    {
        "type": "Image",
        "img_link": "https://toonme-com-cdn.ws.pho.to/apple-touch-icon.png",
        "desc": "Pour donner un style cartoonesque à vos selfies.",
        "link": "https://toonme.com/labs/"
    },
    {
        "type": "Image",
        "img_link": "https://www.posemaniacs.com/favicon.ico",
        "desc": "Pour trouver et adapter une pose pour le dessin en 3D",
        "link": "https://www.posemaniacs.com/"
    }, {
        "type": "Image",
        "img_link": "https://static1.textcraft.net/img/textcraft4f.png",
        "desc": "Pour générer une parodie d'un logo pré-existant.",
        "link": "https://textcraft.net/"
    }, {
        "type": "Image",
        "img_link": "https://www.base64-image.de/build/img/base64-image-logo-3eb23a9eef.png",
        "desc": "Pour générer le code sous base 64 d'une image.",
        "link": "https://www.base64-image.de/"
    }, {
        "type": "Image",
        "img_link": "https://cdn.pixelbin.io/v2/dummy-cloudname/original/watermarkremover_asset/logo/Watermarkremover_light_2x.png?f_auto=true",
        "desc": "Pour enlever les filigranes/watermark d'une image.",
        "link": "https://www.watermarkremover.io/fr/upload"
    },
    {
        "type": "Image",
        "img_link": "https://cdn.pixelbin.io/v2/dummy-cloudname/original/upscalemedia_assets/logo/Upscalemedia_light_2x.png?f_auto=true",
        "desc": "Pour Améliorer et rehausser la taille d'une image.",
        "link": "https://www.upscale.media/fr"
    },
    {
        "type": "Image",
        "img_link": "https://cdn.pixelbin.io/v2/dummy-cloudname/original/erasebg_assets/logo/Erasebg_light_2x.png?f_auto=true",
        "desc": "Pour enlever un fond d'une image.",
        "link": "https://www.erase.bg/upload"
    },
        {
        "type": "Image",
        "img_link": "https://imagecolorpicker.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-55x55_b.eee47b98.png&w=64&q=75",
        "desc": "Pour connaître les couleurs, le nuancier, d'une image.",
        "link": "https://imagecolorpicker.com/#"
    },
            {
        "type": "Image",
        "img_link": "http://paletton.com/img/paletton-preview-20140414.png",
        "desc": "Pour générer une palette de couleur, un nuancier.",
        "link": "http://paletton.com/"
    },
                {
        "type": "Image",
        "img_link": "https://paint.sumo.app/icon.png",
        "desc": "Pour créer des images autant avec des pinceaux qu'avec une description interprétée par une IA.",
        "link": "https://paint.sumo.app/?lang=fr"
    },
                    {
        "type": "Image",
        "img_link": "https://static.canva.com/web/images/12487a1e0770d29351bd4ce4f87ec8fe.svg",
        "desc": "Pour créer toutes sortes de contenus visuels dont majoritairement des images.",
        "link": "https://www.canva.com/"
    },
                    {
        "type": "Image",
        "img_link": "https://d5nunyagcicgy.cloudfront.net/p/assets/m/drawings/clipping-magic-favicon-16_42966e5248c36402c175d31fe969eda6.png",
        "desc": "Pour supprimer le fond d'une image avec une sélection intelligente éditable.",
        "link": "https://clippingmagic.com/"
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
    {
        "type": "Video",
        "img_link": "https://www.amoyshare.com/asset/common/header/css/images/logo-a702b569.png",
        "desc": "Pour télécharger des vidéos provenant de Nicovideo en .mp3 et .mp4.",
        "link": "https://fr.amoyshare.com/niconico-video-downloader/"
    },
    {
        "type": "Video",
        "img_link": "https://downloadtwittervideo-xvbumqfixmhzxo.stackpathdns.com/imgs/how-to-twitter.png",
        "desc": "Pour télécharger des vidéos provenant de Twitter en .mp4.",
        "link": "https://www.downloadtwittervideo.com/fr/"
    },
    {
        "type": "Video",
        "img_link": "https://cloudconvert.com/images/logo_flat_110_borderless.png",
        "desc": "Pour convertir des vidéos en .webm en .mp4.",
        "link": "https://cloudconvert.com/webm-to-mp4"
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
    }, {
        "type": "Audio",
        "img_link": "https://www.hooktheory.com/images/logos/hooktheory-logo-2021-with-name-and-tagline-no-border-01.svg",
        "desc": "Faîtes de la musique en ligne. C'est partiellement gratuit. ",
        "link": "https://hookpad.hooktheory.com/"
    },
    {
        "type": "Audio",
        "img_link": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAANSURBVBhXY2BgYGAAAAAFAAGKM+MAAAAAAElFTkSuQmCC",
        "desc": "Faîtes de la musique en ligne à partir de mèmes internet ",
        "link": "https://thirtydollar.website/"
    },
    {
        "type": "Audio",
        "img_link": "https://www.klickaud.co/wp-content/themes/KA-Wordpress/images/favicon.png",
        "desc": "Pour télécharger des musiques de Soundcloud gratuitement.",
        "link": "https://www.klickaud.co/"
    },
    {
        "type": "Audio",
        "img_link": "https://eproves.com/images/icons/logotype.webp",
        "desc": "Pour vérifier si une musique a un copyright.",
        "link": "https://eproves.com/"
    },
        {
        "type": "Audio",
        "img_link": "https://vocalremover.org/img/remover/player_en.png",
        "desc": "Pour séparer la voix d'une chanson de son instrumental.",
        "link": "https://vocalremover.org/"
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
        "img_link": "https://medias.3dvf.com/news/logiciels/mixamo/mixamo.png",
        "desc": "Un logiciel pour animer des modèles 3D humanoïdes.",
        "link": "https://www.mixamo.com/#/"
    },
    {
        "type": "tD",
        "img_link": "data:image/jpeg;base64,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",
        "desc": "Un logiciel pour créer des modèles 3D pour Facebook.",
        "link": "https://easy3dpost.com/#=_="
    },
    {
        "type": "tD",
        "img_link": "https://www.indirtik.com/wp-content/uploads/2019/07/maxresdefault-12.jpg",
        "desc": "SculptGL est une application qui vous permet de faire de la sculpture en ligne.",
        "link": "https://stephaneginier.com/sculptgl/"
    },
    {
        "type": "tD",
        "img_link": "https://monstermash.zone/imgs/loading.jpg",
        "desc": "Pour faire de la 3D animée expérimentale à partir d'image.",
        "link": "https://monstermash.zone/"
    },

    // Les logiciels de Coding
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
    }
    // Les logiciels de Texte
    ,

    {
        "type": "Texte",
        "img_link": "data:image/png;base64,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",
        "desc": "Pour générer des mots-clés à mettre dans la description de vos contenus.",
        "link": "https://keywordtool.io/fr/"
    },
    {
        "type": "Texte",
        "img_link": "https://www.tagsfinder.com/data/brand/logo.png",
        "desc": "Pour générer des mots-clés à mettre dans la description de vos contenus.",
        "link": "https://www.tagsfinder.com/fr-fr/"
    },

    {
        "type": "Texte",
        "img_link": "https://fontjoy.com/favicon32.gif",
        "desc": "Pour générer votre propre police d'écriture à partir d'autres polices d'écriture",
        "link": "https://fontjoy.com/"
    },
    
];