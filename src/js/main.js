'use strict';

const button = document.querySelector(".js-btn");
const input = document.querySelector(".js-input");
let seriesList = [];
let favoriteList = [];
const searchList = document.querySelector(".js-list");
let favoriteSelection = document.querySelector(".js-favorites");

//1
function showList() {
    //por cada serie de mi lista
    for (const series of seriesList) {
        let image = series.images.jpg.image_url;

        // si no tiene imagen, cambiamos por nueva src *******
        if (image === "https://cdn.myanimelist.net/img/sp/icon/apple-touch-icon-256.png") {
            console.log("que pasa");
            image = "https://via.placeholder.com/210x295/ffffff/666666/?text=TV";
        }
        //añado un li a mi html
        searchList.innerHTML += `
            <li class="js-anime" id=${series.mal_id}>  
            <h5>${series.title}</h5>
            <img src="${image}" class="image" alt="${series.title} "/>
            </li>
            `

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
        return series.mal_id === parseInt(idSeriesClicked);

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

    //pintar lista de favoritos en html
    favoriteSelection.innerHTML = "";
    localFavorites();
}
function localFavorites() {
    for (const selection of favoriteList) {

        favoriteSelection.innerHTML += `
            <li class="js-favorites" id=${selection.mal_id}>  
            <h5>${selection.title}</h5>
            <img src="${selection.images.jpg.image_url}" class="image" alt="${selection.title} "/>
            </li>
            `
    }
}


//3 recoger lista de favoritos del local storage
const favoritesLocalStorage = JSON.parse(localStorage.getItem("favorites"));
console.log(favoritesLocalStorage);
//Si local storage tiene algo, pintar en el html nuestra lista de favoritos
if (favoritesLocalStorage !== null) {
    favoriteList = favoritesLocalStorage;
    localFavorites();
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

/* 3 Cachear la peticion al servidor 
    guardar los datos de la lista de favoritos en mi local storage
*/