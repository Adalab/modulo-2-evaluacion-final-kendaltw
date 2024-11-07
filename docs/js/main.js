const s=document.querySelector(".js-btn"),o=document.querySelector(".js-input");let n=[];const c=document.querySelector(".js-list");function l(){for(const t of n)c.innerHTML+=`
            <li id=${t.mal_id}>  
            <h5>${t.title}</h5>
            <img src="${t.images.jpg.image_url}" alt="${t.title}"/>
            </li>
            `}function r(t){t.preventDefault();const i=o.value;fetch(`https://api.jikan.moe/v4/anime?q=${i}`).then(e=>e.json()).then(e=>{n=e.data,l(),console.log(n)})}s.addEventListener("click",r);
//# sourceMappingURL=main.js.map
