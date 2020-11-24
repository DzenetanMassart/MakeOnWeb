let gen = " ";
/*
|===================|
|L'affichage de base|
|===================|
*/
for (let ii = 0; ii < softs.length; ii++) {

    let softwares = (softs[ii]);
    gen += '<a href="' + softwares.link + '"><div class="card">';
    gen += '<img src="' + softwares.img_link + '" class="card-img-top"';
    gen += ' alt="' + softwares.desc + '">';
    gen += '<div class="card-body">';
    gen += '<p class="card-text">' + softwares.desc + '</p>';
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

// Les fonctions des boutons
function all() {
    document.title = "Make on Websoft";

    gen = ' ';
    for (let ii = 0; ii < softs.length; ii++) {

        let softwares = (softs[ii]);
        gen += '<a href="' + softwares.link + '"><div class="card" style="width: 18rem;">';
        gen += '<img src="' + softwares.img_link + '" class="card-img-top"';
        gen += ' alt="' + softwares.desc + '">';
        gen += '<div class="card-body">';
        gen += '<p class="card-text">' + softwares.desc + '</p>';
        gen += '</div></div></a>';

        document.getElementById("gen").innerHTML = gen;

    }
}


function generator(nom) {

    document.title = "MoW: " + nom;
    gen = " ";

    for (let ii = 0; ii < softs.length; ii++) {

        let softwares = (softs[ii]);
        if (softwares.type == nom) {
            gen += '<a href="' + softwares.link + '"><div class="card" style="width: 18rem;">';
            gen += '<img src="' + softwares.img_link + '" class="card-img-top"';
            gen += ' alt="' + softwares.desc + '">';
            gen += '<div class="card-body">';
            gen += '<p class="card-text">' + softwares.desc + '</p>';
            gen += '</div></div></a>';
        }
    }
    document.getElementById("gen").innerHTML = gen;
}