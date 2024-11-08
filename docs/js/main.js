const r=document.querySelector(".js-btn"),f=document.querySelector(".js-input");let l=[],s=[];const m=document.querySelector(".js-list");let a=document.querySelector(".js-favorites");function u(){for(const e of l){let t=e.images.jpg.image_url;t==="https://cdn.myanimelist.net/img/sp/icon/apple-touch-icon-256.png"&&(console.log("que pasa"),t="https://via.placeholder.com/210x295/ffffff/666666/?text=TV"),m.innerHTML+=`
            <li class="js-anime" id=${e.mal_id}>  
            <h5>${e.title}</h5>
            <img src="${t}" class="image" alt="${e.title} "/>
            </li>
            `;const i=document.querySelectorAll(".js-anime");for(const n of i)n.addEventListener("click",g)}}function d(e){e.preventDefault();const t=f.value;fetch(`https://api.jikan.moe/v4/anime?q=${t}`).then(i=>i.json()).then(i=>{l=i.data,u()})}r.addEventListener("click",d);function g(e){const t=e.currentTarget.id,i=l.find(n=>n.mal_id===parseInt(t));s.push(i),console.log(s),localStorage.setItem("favorites",JSON.stringify(s)),a.innerHTML="",c()}function c(){for(const e of s)a.innerHTML+=`
            <li class="js-favorites" id=${e.mal_id}>  
            <h5>${e.title}</h5>
            <img src="${e.images.jpg.image_url}" class="image" alt="${e.title} "/>
            </li>
            `}const o=JSON.parse(localStorage.getItem("favorites"));console.log(o);o!==null&&(s=o,c());
//# sourceMappingURL=main.js.map
