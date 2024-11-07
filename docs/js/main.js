const c=document.querySelector(".js-btn"),o=document.querySelector(".js-input");let i=[];const l=document.querySelector(".js-list");function a(){for(const e of i){const t=e.images.jpg.image_url;l.innerHTML+=`
            <li class="js-anime" id=${e.mal_id}>  
            <h5>${e.title}</h5>
            <img src="${t}" class="image" alt="${e.title} "/>
            </li>
            `,t==="https://cdn.myanimelist.net/img/sp/icon/     apple-touch-icon-256.png"&&(t.innerHTML="https://via.placeholder.com/210x295/ffffff/666666/?text=TV.");const n=document.querySelectorAll(".js-anime");for(const s of n)s.addEventListener("click",r)}}function r(e){const t=e.currentTarget.id;i.find(n=>n.mal_id=t)}function d(e){e.preventDefault();const t=o.value;fetch(`https://api.jikan.moe/v4/anime?q=${t}`).then(n=>n.json()).then(n=>{i=n.data,a()})}c.addEventListener("click",d);
//# sourceMappingURL=main.js.map
