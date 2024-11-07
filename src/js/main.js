'use strict';

const button = document.querySelector(".js-btn");
const input = document.querySelector(".js-input");
let seriesList = [];
let favoriteList = [];
const searchList = document.querySelector(".js-list");

function showList() {
    for (const series of seriesList) {
        const image = series.images.jpg.image_url;
        //añado un li a mi html
        searchList.innerHTML += `
            <li class="js-anime" id=${series.mal_id}>  
            <h5>${series.title}</h5>
            <img src="${image}" class="image" alt="${series.title} "/>
            </li>
            `
        //si no tiene imagen, intercambiamos por nueva src
        if (image === "https://cdn.myanimelist.net/img/sp/icon/     apple-touch-icon-256.png") {
            image.innerHTML = "https://via.placeholder.com/210x295/ffffff/666666/?text=TV.";
        }
        //añado constante para recoger todas las paletas
        const allSeries = document.querySelectorAll(".js-anime");
        for (const anime of allSeries) {
            anime.addEventListener("click", handleAddFavorites);

        }
    }
}
function handleAddFavorites(event) {
    //recojo el id de las series en las que clica
    const idSeriesClicked = event.currentTarget.id;
    //buscar las series clicadas a partir de ese id
    const seriesSelected = seriesList.find((series) => {
        return series.mal_id = idSeriesClicked;
    })

}


function handleClick(ev) {
    ev.preventDefault();
    const inputText = input.value;
    fetch(`https://api.jikan.moe/v4/anime?q=${inputText}`)
        .then(response => response.json())
        .then(info => {
            seriesList = info.data;
            showList();
        })

}

button.addEventListener("click", handleClick);



/* 1 Buscador de series
    -seleccionar los elementos de mi html
    -Cuando la usuaria hace click en el boton "buscar"
        -recoger lo que ha escrito en el input
        -Pedir datos al servidor
        -filtrar la lista de series por el nombre con lo que se ha escrito
        -acceder/guardar los datos que necesito
        -Por cada serie de la lista
            -pintar una tarjeta en html
            -si no contiene imagen, 

*/

/* 2 Favoritos
    Cuando la usuaria haga click en una serie
        -saber qué paleta ha clickado y guardarlo
        -cambiar el estilo de esa tarjeta (color de fuente)
        -añadir esa serie a la lista de favoritos en localStorage
        -pintar las series seleccionadas a la izda de la pagina
 */

