const d=document.querySelector(".js-btn"),a=document.querySelector(".js-input");let c=[],s=[];const r=document.querySelector(".js-list");let o=document.querySelector(".js-favorites");const f=document.querySelector(".js-reset");function m(){for(const t of c){let n=t.images.jpg.image_url;n==="https://cdn.myanimelist.net/img/sp/icon/apple-touch-icon-256.png"&&(console.log("que pasa"),n="https://via.placeholder.com/210x295/ffffff/666666/?text=TV"),r.innerHTML+=`
            <li class="list js-anime" id=${t.mal_id}>  
            <h5>${t.title}</h5>
            <img src="${n}" class="image" alt="${t.title} "/>
            </li>
            `;const e=document.querySelectorAll(".js-anime");for(const i of e)i.addEventListener("click",h)}}function g(t){t.preventDefault();const n=a.value;fetch(`https://api.jikan.moe/v4/anime?q=${n}`).then(e=>e.json()).then(e=>{c=e.data,m()})}d.addEventListener("click",g);function h(t){const n=t.currentTarget.id,e=c.find(i=>i.mal_id===parseInt(n));console.log(e),s.push(e),console.log(s),localStorage.setItem("favorites",JSON.stringify(s)),t.currentTarget.classList.toggle("js-selected"),o.innerHTML="",u()}function u(){for(const e of s)o.innerHTML+=`
            <li class="list js-favorites" id=${e.mal_id}>  
            <h5>${e.title}</h5>
            <img src="${e.images.jpg.image_url}" class="image" alt="${e.title} "/>
            <button class="x-btn js-x-btn">X</button>
            </li>
            `;const t=document.querySelectorAll(".js-x-btn");for(const e of t)e.addEventListener("click",n);function n(e){const i=e.currentTarget.xButton;o.innerHTML-=i}}const l=JSON.parse(localStorage.getItem("favorites"));console.log(l);l!==null&&(s=l,u());function p(t){t.preventDefault(),o.innerHTML='<h3 class="listTitle">Favoritas</h3>',r.innerHTML='<h3 class="listTitle">Resultados</h3>',a.value="",localStorage.clear(),s=[]}f.addEventListener("click",p);
//# sourceMappingURL=main.js.map
