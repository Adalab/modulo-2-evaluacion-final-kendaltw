'use strict';

const button = document.querySelector(".js-btn");
const input = document.querySelector(".js-input");
let seriesList = [];
let favoriteList = [];
const searchList = document.querySelector(".js-list");
const favoriteSelection = document.querySelector(".js-favorites");

//1
function showList() {
    //por cada serie de mi lista
    for (const series of seriesList) {
        const image = series.images.jpg.image_url;
        //añado un li a mi html
        searchList.innerHTML += `
            <li class="js-anime" id=${series.mal_id}>  
            <h5>${series.title}</h5>
            <img src="${image}" class="image" alt="${series.title} "/>
            </li>
            `
        // si no tiene imagen, cambiamos por nueva src *******
        if (image === "https://cdn.myanimelist.net/img/sp/icon/apple-touch-icon-256.png") {
            image = "https://images.app.goo.gl/z5Jyr9h7ozRkKmscA";
        }

        //añado constante para recoger todas las series
        const allAnime = document.querySelectorAll(".js-anime");
        for (const anime of allAnime) {
            anime.addEventListener("click", handleAddFavorites);
        }
    }
}
//1 al hacer click en buscar pedimos al servidor una lista que contenga el input
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


function handleAddFavorites(event) {
    //recojo el id de las series en las que clica
    const idSeriesClicked = event.currentTarget.id;
    //buscar las series clicadas a partir de ese id
    const seriesSelected = seriesList.find((series) => {
        return series.mal_id = idSeriesClicked;

    })
    //añadir las series clicadas a mi lista de favoritos
    favoriteList.push(seriesSelected); //**** 
    //añadir una clase a esas series clicadas *******
    // for (const selection of seriesSelected) {
    //     selection.classList.add("js-selected");
    // }
    console.log(favoriteList);
    //añadir lista de favoritos a local storage
    localStorage.setItem("favorites", JSON.stringify(favoriteList));
    //recoger lista de favoritos del local storage
    const favoritesLocalStorage = JSON.parse(localStorage.getItem("favorites"));
    //pintar lista de favoritos en html
    for (const selection of favoritesLocalStorage) {
        favoriteSelection.innerHTML += `
            <li class="js-favorites" id=${selection.mal_id}>  
            <h5>${selection.title}</h5>
            <img src="${selection.images.jpg.image_url}" class="image" alt="${selection.title} "/>
            </li>
            `
    }

}






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

