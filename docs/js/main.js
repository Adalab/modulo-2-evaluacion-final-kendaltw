const d=document.querySelector(".js-btn"),a=document.querySelector(".js-input");let c=[],i=[];const r=document.querySelector(".js-list");let s=document.querySelector(".js-favorites");const f=document.querySelector(".js-reset");function m(){for(const t of c){let e=t.images.jpg.image_url;e==="https://cdn.myanimelist.net/img/sp/icon/apple-touch-icon-256.png"&&(console.log("que pasa"),e="https://via.placeholder.com/210x295/ffffff/666666/?text=TV"),r.innerHTML+=`
            <li class="list js-anime" id=${t.mal_id}>  
            <h5>${t.title}</h5>
            <img src="${e}" class="image" alt="${t.title} "/>
            </li>
            `;const n=document.querySelectorAll(".js-anime");for(const o of n)o.addEventListener("click",p)}}function g(t){t.preventDefault();const e=a.value;fetch(`https://api.jikan.moe/v4/anime?q=${e}`).then(n=>n.json()).then(n=>{c=n.data,m()})}d.addEventListener("click",g);function p(t){const e=t.currentTarget.id,n=c.find(o=>o.mal_id===parseInt(e));console.log(n),i.push(n),console.log(i),localStorage.setItem("favorites",JSON.stringify(i)),t.currentTarget.classList.toggle("js-selected"),s.innerHTML="",u()}function u(){for(const e of i)s.innerHTML+=`
            <li class="list js-favorites" id=${e.mal_id}>  
            <h5>${e.title}</h5>
            <img src="${e.images.jpg.image_url}" class="image" alt="${e.title} "/>
            <button id=${e.mal_id} class="x-btn js-x-btn">X</button>
            </li>
            `;const t=document.querySelectorAll(".js-x-btn");for(const e of t)e.addEventListener("click",v)}function v(t){const e=t.currentTarget.id,n=i.indexOf(e);i.splice(n),s.innerHTML=i}const l=JSON.parse(localStorage.getItem("favorites"));console.log(l);l!==null&&(i=l,u());function h(t){t.preventDefault(),s.innerHTML="",r.innerHTML="",a.value="",localStorage.clear(),i=[]}f.addEventListener("click",h);
//# sourceMappingURL=main.js.map
