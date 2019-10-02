//Les différents types: Image   Video   Audio   tD   Code


let softs=[
    // Les logiciels d'image
{
    "type":"Image",
    "img_link": "https://pic.clubic.com/v1/images/1692381/raw",
    "desc": "Le Photoshop Online.",
    "link": "https://www.photopea.com/"
},  
{
    "type":"Image",
    "img_link": "https://www.remove.bg/images/logo.svg",
    "desc": "Ce logiciel retire le fond des images",
    "link": "https://www.remove.bg/"
},  
{
    "type":"Image",
    "img_link": "https://www198.lunapic.com/editor/images/lunapic-bw.gif",
    "desc": "Un gros site permettant de faire pleins d'effets sur les images... plus complet que SnapChat et Instagram.",
    "link": "https://www198.lunapic.com/editor/"
},  
{
    "type":"Image",
    "img_link": "https://compressor.io/img/compressor.png",
    "desc": "Pour compresser sans pertes de qualité les images.",
    "link": "https://compressor.io/"
}, 
{
    "type":"Image",
    "img_link": "https://www.iloveimg.com/img/iloveimg.svg",
    "desc": "Pour redimensionner plusieurs images à la fois.",
    "link": "https://www.iloveimg.com/fr/redimensionner-image"
}, 
    {
    "type":"Image",
    "img_link": "http://assets.stickpng.com/thumbs/5842a622a6515b1e0ad75af9.png",
    "desc": "Pour créer des logos,posters,cartes de visite,CV,... à partir de modèle.",
    "link": "https://www.canva.com/fr_fr/"
},

// Les logiciels de vidéo
{
    "type":"Video",
    "img_link": "https://panzoid.com/img/logo.svg",
    "desc": "Un éditeur de vidéo assez complet et sans watermark.",
    "link": "https://panzoid.com/tools/videoeditor"
},   
{
    "type":"Video",
    "img_link": "https://fr.savefrom.net/img/logo_small2.svg",
    "desc": "Pour télécharger des vidéos depuis plusieurs sites.",
    "link": "https://fr.savefrom.net"
},  

// Les logiciels pour l'audio
{
    "type":"Audio",
    "img_link": "https://www.ispeech.org/img/logos/ispeech.png",
    "desc": "Un text-to-speech assez complet et facile à utiliser avec Audacity.",
    "link": "https://www.ispeech.org/text.to.speech"
}, 
{
    "type":"Audio",
    "img_link": "http://www.oddcast.com/ttsdemo/assets/images/oaddcast-logo.png",
    "desc": "Un text-to-speech avec un visuel en fonction du sexe lié à la voix.",
    "link": "http://ttsdemo.com/"
},   
{
    "type":"Audio",
    "img_link": "http://dashboard.music.freemac.org/wp-content/uploads/2015/01/AudioSauna-276-1.png",
    "desc": "Faîtes de la musique en ligne gratuitement de manière assez complete.",
    "link": "http://www.audiosauna.com/studio/"
}, 
{
    "type":"Audio",
    "img_link": "https://songbpm.com/songbpm/img/0eaf143.png",
    "desc": "Retrouver le BPM (Battement par Minute) d'une musique/chanson.",
    "link": "https://songbpm.com/"
},
// Les logiciel de 3D
{
    "type":"tD",
    "img_link": "https://labs.sketchfab.com/sculptfab/ressources/logo.png",
    "desc": "Le logiciel de création 3D de Sketchfab.\n Tout commence par une boule.",
    "link": "https://labs.sketchfab.com/sculptfab/"
},  
{
    "type":"tD",
    "img_link": "http://medias.3dvf.com/news/logiciels/mixamo/mixamo.png",
    "desc": "Un logiciel pour animer des modèles 3D humanoïdes.",
    "link": "https://www.mixamo.com/#/"
},  
// Les logiciels de Coding
{
    "type":"Code",
    "img_link": "http://canvimation.github.io/assets/logo.png",
    "desc": "Pour générer des dessins en Canvas pour les sites en Javascript.",
    "link": "http://canvimation.github.io/"
},
{
    "type":"Code",
    "img_link": "https://digitalworkshopcenter.com/wp-content/uploads/2018/02/JavaScript-Classes-at-Digital-Workshop-Center-2.png",
    "desc": "Connaître les KeyCodes pour Javascript.",
    "link": "https://keycode.info/"
},
{
    "type":"Code",
    "img_link": "https://caffeinecreations.ca/uploads/blog/_1200x630_crop_center-center_82_none/emmet-logo.jpg?mtime=1553958970",
    "desc": "L'ensemble des raccourcis Emmet pour Visual Studio Code.",
    "link": "https://docs.emmet.io/cheat-sheet/"
},
{
    "type":"Code",
    "img_link": "https://seeklogo.com/images/C/code-sandbox-logo-0746E97CA1-seeklogo.com.png",
    "desc": "Un logiciel d'édition d'application web très complet permettant de faire autant du Vanilla que du React ou autres types de API...Un genre de Visual Studio Code en ligne.",
    "link": "https://codesandbox.io/s/vanilla"
},
{
    "type":"Code",
    "img_link": "data:image/png;base64,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",
    "desc": "Éditeur HTML simple.",
    "link": "https://js.do/"
}
];
