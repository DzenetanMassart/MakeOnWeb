let gen = " ";

/*
|==========================================|
|La détection du type de logiciel à montrer|
|==========================================|
*/
const url_o = window.location.href;
let url_result = url_o.substring(url_o.lastIndexOf("#") + 1);
console.log(url_o)
console.log(url_result);

document.addEventListener("DOMContentLoaded", function() {
    if (url_result === "Image") { generator("Image"); };
    if (url_result === "Video") { generator("Video"); };
    if (url_result === "Audio") { generator("Audio"); };
    if (url_result === "3D") { generator("tD"); };
    if (url_result === "Code") { generator("Code"); };
    if (url_result === "Texte") { generator("Texte"); };
});


/*
|===================|
|L'affichage de base|
|===================|
*/

for (let ii = 0; ii < softs.length; ii++) {

    let softwares = (softs[ii]);
    gen += '<a class="softos" target="_blank" href="' + softwares.link + '"><div class="card">';
    gen += '<img src="' + softwares.img_link + '" class="card-img-top"';
    gen += ' alt="' + softwares.desc + '">';
    gen += '<div class="card-body">';
    gen += '<p class="card-text">' + softwares.desc + '</p>';
    gen += '<p class="card-bottom">' + softwares.link + '</p>';
    gen += '</div></div></a>';

    document.getElementById("gen").innerHTML = gen;

}
/*
|================================|
|Les différents boutons du header|
|================================|
*/

// Les boutons du header et liens à leurs fonctions
document.getElementById("all").addEventListener("click", all);

document.getElementById("Image").addEventListener("click", function() { generator("Image"); });
document.getElementById("Video").addEventListener("click", function() { generator("Video"); });
document.getElementById("Audio").addEventListener("click", function() { generator("Audio"); });
document.getElementById("tD").addEventListener("click", function() { generator("tD"); });
document.getElementById("Code").addEventListener("click", function() { generator("Code"); });
document.getElementById("Texte").addEventListener("click", function() { generator("Texte"); });


// Les fonctions des boutons
function all() {
    document.title = "Make on Websoft";

    gen = ' ';
    for (let ii = 0; ii < softs.length; ii++) {

        let softwares = (softs[ii]);
        gen += '<a class="softos" target="_blank" href="' + softwares.link + '"><div class="card">';
        gen += '<img src="' + softwares.img_link + '" class="card-img-top"';
        gen += ' alt="' + softwares.desc + '">';
        gen += '<div class="card-body">';
        gen += '<p class="card-text">' + softwares.desc + '</p>';
        gen += '<p class="card-bottom">' + softwares.link + '</p>';
        gen += '</div></div></a>';

        document.getElementById("gen").innerHTML = gen;

    }
}


function generator(nom) {

    if (nom === "tD") {
        document.title = "MoW: 3D ";
    } else {
        document.title = "MoW: " + nom;
    }
    gen = " ";

    for (let ii = 0; ii < softs.length; ii++) {

        let softwares = (softs[ii]);
        if (softwares.type == nom) {
            gen += '<a class="softos" target="_blank" href="' + softwares.link + '"><div class="card">';
            gen += '<img src="' + softwares.img_link + '" class="card-img-top"';
            gen += ' alt="' + softwares.desc + '">';
            gen += '<div class="card-body">';
            gen += '<p class="card-text">' + softwares.desc + '</p>';
            gen += '<p class="card-bottom">' + softwares.link + '</p>';
            gen += '</div></div></a>';
        }
    }
    document.getElementById("gen").innerHTML = gen;

    if (nom == "Code") {
        document.getElementById("pub").innerHTML = `<a type="button" class="btn text-white  mt-4 p-5 bg-danger  btn-block text-white rounded" href="https://dzenetanmassart.github.io/Tricks-and-Tips/" target="_blank"><h1>Rechercher sur Tricks&Tips</h1> <p>Vous rechercher de la documentation et des générateurs de code ? Je vous recommande fortement l'emploi de Tricks&Tips.</p><img src="https://dzenetanmassart.github.io/Tricks-and-Tips/assets/pics/T_T.png" alt="logo de Tricks&Tips"/></div></a>`;
    } else {
        document.getElementById("pub").innerHTML = ``;
    }
}