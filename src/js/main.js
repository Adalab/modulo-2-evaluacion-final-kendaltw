'use strict';

const button = document.querySelector(".js-btn");
const input = document.querySelector(".js-input");
let seriesList = [];
const searchList = document.querySelector(".js-list");

function showList() {
    for (const series of seriesList) {
        searchList.innerHTML += `
            <li id=${series.mal_id}>  
            <h5>${series.title}</h5>
            <img src="${series.images.jpg.image_url}" alt="${series.title}"/>
            </li>
            `
    }
}



function handleClick(ev) {
    ev.preventDefault();
    const inputText = input.value;
    fetch(`https://api.jikan.moe/v4/anime?q=${inputText}`)
        .then(response => response.json())
        .then(info => {
            seriesList = info.data;
            showList();
            console.log(seriesList);
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

*/

/* 2 Favoritos
    Cuando la usuaria haga click en una serie
        -saber qué paleta ha clickado
        -cambiar el estilo de esa tarjeta
        -añadir esa serie a la lista de favoritos en localStorage
        -pintar las series seleccionadas a la izda de la pagina
 */

