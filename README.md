![MakeOnWeb Logo](https://dzenetanmassart.github.io/MakeOnWeb/assets/img/LogoMOW2021.png)

# MakeOnWeb
Une galerie spéciale autour des logiciels de production sur le Web.

## Le principe 

Lorsque j'ai créé TipsAndTricks, j'avais pris un malin plaisir à répertorier l'ensemble des générateurs et documentation autour du code que j'ai trouvé sur le web... et ben, c'est la même chose ici sauf qu'on a des logiciels en ligne pour les 5 genres de production numériques: Image,Audio,Video,3D et Code.

## Le technique

J'utilise une base de donnée local qui prend forme d'une variable répertoriant l'ensemble de mes données dans un fichier javascript.
```
let softs=[{
    "type":"Image/Video/Audio/tD/Code",
    "img_link": "sample.png",
    "desc": "Description.",
    "link": "sample.com"
}
```

Ensuite, je fais appel à mes scripts d'intégration (que je ne vais pas copier-coller ici car ce n'est pas encore assez optimisé à mon gout mais vous pouvez faire "inspecter l'élément" sur le site en lui-même pour analyser par-vous-même !).

Les fichiers de scripts sont intégrer dans l'index.html en commençant par la base de donnée et ensuite le fichier des scripts d'intégration (ils intègrent les différents blocks relatifs aux logiciels).
