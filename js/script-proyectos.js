$(document).ready(function () {
    var contenedorProyectos = $("#contenedor-proyectos");
    var contenedor = $("#proyectos-0");
    var imagenes = [ "img/buen_ciudadano.png", "img/e-games.png", "img/martial_arts.png", "img/seework.png", "img/teatro_nacional.png" ];
    var titulos = [ "Ser un buen ciudadano", "E GAMES", "MARTIAL ARTS", "See Work", "Teatro Nacional" ];
    var descripciones = [ "Proyecto escolar sobre la ‘buena ciudadania’ donde se utiliza Bootstrap para crear un sitio web sencillo.", "E GAMES", "MARTIAL ARTS", "See Work", "Teatro Nacional" ];
    var link = [ "https://como-ser-un-buen-ciudadano.netlify.app/", "https://e-games.vercel.app/", "https://taller2-20100048-20190124.vercel.app/", "https://teatro-nacional.vercel.app/", "https://diegosan03.github.io/HernandezNolasco-ManciaHernandez-PruebaPractica1/" ];
    var card = "";
    var contenedorP = "";
    var etiqueta = "";

    for (let i = 0; i < imagenes.length; i++) {
        card = estructuraCard(imagenes[i], titulos[i], descripciones[i], link[i]);

        if(i % 3 == 0){
            contenedorP = estructuraContenedor(i);
            contenedorProyectos.append(contenedorP);
            etiqueta = "#proyectos-" + i;
            contenedor = $(etiqueta);
        }

        contenedor.append(card);
    }

});

function estructuraCard(imagen, titulo, descripcion, link) {
    var texto = "";

    texto += "<div class='col'>";
    texto += "<div class='card'>";
    texto += "<img src='" + imagen + "' alt='Web 1' class='card-img-top'>";
    texto += "<div class='card-body'>";
    texto += "<h5 class='card-title text-center'>" + titulo + "</h5>";
    texto += "<p class='card-text'>" + descripcion + "</p>";
    texto += "<a href='" + link + "' class='btn btn-outline-success' target='_blank'>Visitar</a>";
    texto += "</div>";
    texto += "</div>";
    texto += "</div>";

    return texto;
}

function estructuraContenedor(i) {
    var texto = "";

    texto += "<div class='row m-4' id='proyectos-" + i + "'>";
    texto += "</div>";

    return texto;
}