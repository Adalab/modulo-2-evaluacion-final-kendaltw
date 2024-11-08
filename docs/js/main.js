const r=document.querySelector(".js-btn"),f=document.querySelector(".js-input");let o=[],n=[];const d=document.querySelector(".js-list");let a=document.querySelector(".js-favorites");function m(){for(const e of o){let i=e.images.jpg.image_url;i==="https://cdn.myanimelist.net/img/sp/icon/apple-touch-icon-256.png"&&(console.log("que pasa"),i="https://via.placeholder.com/210x295/ffffff/666666/?text=TV"),d.innerHTML+=`
            <li class="js-anime" id=${e.mal_id}>  
            <h5>${e.title}</h5>
            <img src="${i}" class="image" alt="${e.title} "/>
            </li>
            `;const t=document.querySelectorAll(".js-anime");for(const s of t)s.addEventListener("click",g)}}function u(e){e.preventDefault();const i=f.value;fetch(`https://api.jikan.moe/v4/anime?q=${i}`).then(t=>t.json()).then(t=>{o=t.data,m()})}r.addEventListener("click",u);function g(e){const i=e.currentTarget.id,t=o.find(s=>s.mal_id===parseInt(i));n.push(t);for(const s of t)s.classList.add("js-selected");console.log(n),localStorage.setItem("favorites",JSON.stringify(n)),a.innerHTML="",c()}function c(){for(const e of n)a.innerHTML+=`
            <li class="js-favorites" id=${e.mal_id}>  
            <h5>${e.title}</h5>
            <img src="${e.images.jpg.image_url}" class="image" alt="${e.title} "/>
            </li>
            `}const l=JSON.parse(localStorage.getItem("favorites"));l!==null&&(n=l,c());
//# sourceMappingURL=main.js.map
