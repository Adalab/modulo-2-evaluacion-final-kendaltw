const d=document.querySelector(".js-btn"),a=document.querySelector(".js-input");let l=[],i=[];const r=document.querySelector(".js-list");let c=document.querySelector(".js-favorites");const f=document.querySelector(".js-reset");function m(){for(const e of l){let t=e.images.jpg.image_url;t==="https://cdn.myanimelist.net/img/sp/icon/apple-touch-icon-256.png"&&(console.log("que pasa"),t="https://via.placeholder.com/210x295/ffffff/666666/?text=TV"),r.innerHTML+=`
            <li class="list js-anime" id=${e.mal_id}>  
            <h5>${e.title}</h5>
            <img src="${t}" class="image" alt="${e.title} "/>
            </li>
            `;const n=document.querySelectorAll(".js-anime");for(const o of n)o.addEventListener("click",p)}}function g(e){e.preventDefault();const t=a.value;fetch(`https://api.jikan.moe/v4/anime?q=${t}`).then(n=>n.json()).then(n=>{l=n.data,m()})}d.addEventListener("click",g);function p(e){const t=e.currentTarget.id,n=l.find(o=>o.mal_id===parseInt(t));console.log(n),i.push(n),console.log(i),localStorage.setItem("favorites",JSON.stringify(i)),e.currentTarget.classList.toggle("js-selected"),c.innerHTML="",u()}function u(){for(const t of i)c.innerHTML+=`
            <li class="list js-favorites" id=${t.mal_id}>  
            <h5>${t.title}</h5>
            <img src="${t.images.jpg.image_url}" class="image" alt="${t.title} "/>
            <button id=${t.mal_id} class="x-btn js-x-btn">X</button>
            </li>
            `;const e=document.querySelectorAll(".js-x-btn");for(const t of e)t.addEventListener("click",h)}function h(e){e.currentTarget.id,console.log(e.currentTarget)}const s=JSON.parse(localStorage.getItem("favorites"));console.log(s);s!==null&&(i=s,u());function v(e){e.preventDefault(),c.innerHTML="",r.innerHTML="",a.value="",localStorage.clear(),i=[]}f.addEventListener("click",v);
//# sourceMappingURL=main.js.map
