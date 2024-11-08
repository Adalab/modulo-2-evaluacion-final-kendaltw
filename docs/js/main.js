const d=document.querySelector(".js-btn"),a=document.querySelector(".js-input");let o=[],i=[];const r=document.querySelector(".js-list");let c=document.querySelector(".js-favorites");const f=document.querySelector(".js-reset");document.querySelector(".js-x-btn");function m(){for(const e of o){let t=e.images.jpg.image_url;t==="https://cdn.myanimelist.net/img/sp/icon/apple-touch-icon-256.png"&&(console.log("que pasa"),t="https://via.placeholder.com/210x295/ffffff/666666/?text=TV"),r.innerHTML+=`
            <li class="list js-anime" id=${e.mal_id}>  
            <h5>${e.title}</h5>
            <img src="${t}" class="image" alt="${e.title} "/>
            </li>
            `;const s=document.querySelectorAll(".js-anime");for(const n of s)n.addEventListener("click",h)}}function g(e){e.preventDefault();const t=a.value;fetch(`https://api.jikan.moe/v4/anime?q=${t}`).then(s=>s.json()).then(s=>{o=s.data,m()})}d.addEventListener("click",g);function h(e){const t=e.currentTarget.id,s=o.find(n=>n.mal_id===parseInt(t));console.log(s),i.push(s),console.log(i),localStorage.setItem("favorites",JSON.stringify(i)),e.currentTarget.classList.toggle("js-selected"),c.innerHTML="",u()}function u(e){for(const t of i)c.innerHTML+=`
            <li class="list js-favorites" id=${t.mal_id}>  
            <h5>${t.title}</h5>
            <img src="${t.images.jpg.image_url}" class="image" alt="${t.title} "/>
            <button class="x-btn js-x-btn">X</button>
            </li>
            `}const l=JSON.parse(localStorage.getItem("favorites"));console.log(l);l!==null&&(i=l,u());function p(e){e.preventDefault(),c.innerHTML='<h3 class="listTitle">Favoritas</h3>',r.innerHTML='<h3 class="listTitle">Resultados</h3>',a.value="",localStorage.clear(),i=[]}f.addEventListener("click",p);
//# sourceMappingURL=main.js.map
