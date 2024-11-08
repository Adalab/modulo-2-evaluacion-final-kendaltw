const r=document.querySelector(".js-btn"),f=document.querySelector(".js-input");let o=[],s=[];const m=document.querySelector(".js-list");let a=document.querySelector(".js-favorites");function u(){for(const e of o){let i=e.images.jpg.image_url;i==="https://cdn.myanimelist.net/img/sp/icon/apple-touch-icon-256.png"&&(console.log("que pasa"),i="https://via.placeholder.com/210x295/ffffff/666666/?text=TV"),m.innerHTML+=`
            <li class="js-anime" id=${e.mal_id}>  
            <h5>${e.title}</h5>
            <img src="${i}" class="image" alt="${e.title} "/>
            </li>
            `;const t=document.querySelectorAll(".js-anime");for(const n of t)n.addEventListener("click",g)}}function d(e){e.preventDefault();const i=f.value;fetch(`https://api.jikan.moe/v4/anime?q=${i}`).then(t=>t.json()).then(t=>{o=t.data,u()})}r.addEventListener("click",d);function g(e){const i=e.currentTarget.id,t=o.find(n=>n.mal_id===parseInt(i));console.log(t),s.push(t),e.currentTarget.classList.toggle("js-selected"),console.log(s),localStorage.setItem("favorites",JSON.stringify(s)),a.innerHTML="",c()}function c(){for(const e of s)a.innerHTML+=`
            <li class="js-favorites" id=${e.mal_id}>  
            <h5>${e.title}</h5>
            <img src="${e.images.jpg.image_url}" class="image" alt="${e.title} "/>
            </li>
            `}const l=JSON.parse(localStorage.getItem("favorites"));l!==null&&(s=l,c());
//# sourceMappingURL=main.js.map
