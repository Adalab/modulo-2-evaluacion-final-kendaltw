const a=document.querySelector(".js-btn"),l=document.querySelector(".js-input");let c=[],o=[];const r=document.querySelector(".js-list"),m=document.querySelector(".js-favorites");function d(){for(const e of c){const t=e.images.jpg.image_url;r.innerHTML+=`
            <li class="js-anime" id=${e.mal_id}>  
            <h5>${e.title}</h5>
            <img src="${t}" class="image" alt="${e.title} "/>
            </li>
            `,t==="https://cdn.myanimelist.net/img/sp/icon/apple-touch-icon-256.png"&&(t="https://images.app.goo.gl/z5Jyr9h7ozRkKmscA");const i=document.querySelectorAll(".js-anime");for(const n of i)n.addEventListener("click",g)}}function u(e){e.preventDefault();const t=l.value;fetch(`https://api.jikan.moe/v4/anime?q=${t}`).then(i=>i.json()).then(i=>{c=i.data,d()})}a.addEventListener("click",u);function g(e){const t=e.currentTarget.id,i=c.find(s=>s.mal_id=t);o.push(i),console.log(o),localStorage.setItem("favorites",JSON.stringify(o));const n=JSON.parse(localStorage.getItem("favorites"));for(const s of n)m.innerHTML+=`
            <li class="js-favorites" id=${s.mal_id}>  
            <h5>${s.title}</h5>
            <img src="${s.images.jpg.image_url}" class="image" alt="${s.title} "/>
            </li>
            `}
//# sourceMappingURL=main.js.map
