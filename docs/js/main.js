const d=document.querySelector(".js-btn"),c=document.querySelector(".js-input");let l=[],s=[];const r=document.querySelector(".js-list");let a=document.querySelector(".js-favorites");const f=document.querySelector(".js-reset");function m(){for(const e of l){let t=e.images.jpg.image_url;t==="https://cdn.myanimelist.net/img/sp/icon/apple-touch-icon-256.png"&&(console.log("que pasa"),t="https://via.placeholder.com/210x295/ffffff/666666/?text=TV"),r.innerHTML+=`
            <li class="js-anime" id=${e.mal_id}>  
            <h5>${e.title}</h5>
            <img src="${t}" class="image" alt="${e.title} "/>
            </li>
            `;const i=document.querySelectorAll(".js-anime");for(const n of i)n.addEventListener("click",h)}}function g(e){e.preventDefault();const t=c.value;fetch(`https://api.jikan.moe/v4/anime?q=${t}`).then(i=>i.json()).then(i=>{l=i.data,m()})}d.addEventListener("click",g);function h(e){const t=e.currentTarget.id,i=l.find(n=>n.mal_id===parseInt(t));console.log(i),s.push(i),console.log(s),localStorage.setItem("favorites",JSON.stringify(s)),e.currentTarget.classList.toggle("js-selected"),a.innerHTML="",u()}function u(e){for(const t of s)a.innerHTML+=`
            <li class="js-favorites" id=${t.mal_id}>  
            <h5>${t.title}</h5>
            <img src="${t.images.jpg.image_url}" class="image" alt="${t.title} "/>
            </li>
            `}const o=JSON.parse(localStorage.getItem("favorites"));console.log(o);o!==null&&(s=o,u());function p(e){e.preventDefault(),a.innerHTML="<h4>Favoritas</h4>",r.innerHTML="<h4>Resultados</h4>",c.value="",localStorage.clear(),s=[]}f.addEventListener("click",p);
//# sourceMappingURL=main.js.map
