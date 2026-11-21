import{i as m,c as p,e as h,a as u,t as f,b as t,d,f as y,s as v,g as b,h as _,j as L}from"./data-IPK2q5CJ.js";const o="mariotristan",w=6,n=e=>document.getElementById(e),i='target="_blank" rel="noopener noreferrer"';m();const M=p.reduce((e,a)=>e+a.items.length,0),c=new Date,k=c.getFullYear()-2005-(c.getMonth()<10?1:0);n("stats").innerHTML=[[`${k}+`,"years in tech"],[h.length,"roles"],[M,"certifications"],[u.length,"degrees"]].map(([e,a])=>`<li><strong>${e}</strong><span>${a}</span></li>`).join("");n("tech").innerHTML=f.map(e=>`<span>${t(e)}</span>`).join("");n("timeline").innerHTML=h.map(e=>`<article class="row">
      <span class="tag">${t(e.period)}</span>
      <div class="experience-content">
        ${d(e.logo)}
        <div>
          <h3>${t(e.role)} · <a href="${t(e.url)}" ${i}>${t(e.company)}</a></h3>
          ${e.summary?`<p>${t(e.summary)}</p>`:""}
          ${e.link?`<a class="more" href="${t(e.link.href)}" ${i}>${t(e.link.label)} ↗</a>`:""}
        </div>
      </div>
    </article>`).join("");n("education-list").innerHTML=u.map(e=>`<article class="card">
      <span class="tag">${t(e.period)}</span>
      <h3>${t(e.degree)}</h3>
      <p><a href="${t(e.url)}" ${i}>${t(e.school)}</a></p>
    </article>`).join("");n("certs").innerHTML=p.map(e=>`<article class="card">
      <h3><span class="brand-heading">${d(e.logo)} ${t(e.issuer)}</span> <span class="count">${e.items.length}</span></h3>
      <ul class="cert-list">
        ${e.items.map(a=>`<li><a href="${t(a.href)}" ${i}>${t(a.name)}<span aria-hidden="true">↗</span></a></li>`).join("")}
      </ul>
    </article>`).join("");n("article-list").innerHTML=y.map(e=>`<article class="card repo">
      <span class="tag">LinkedIn</span>
      <h3 class="article-title"><a href="${t(e.href)}" ${i}>${t(e.title)}</a></h3>
      <div class="meta"><span>Read on LinkedIn ↗</span></div>
    </article>`).join("");const $=v.map(e=>`<li><a href="${t(e.href)}" ${i}>${t(e.label)}</a></li>`).join("");n("socials-contact").innerHTML=$;n("socials-footer").innerHTML=$;n("year").textContent=new Date().getFullYear();function H(e){const a=Math.floor((Date.now()-new Date(e))/864e5);return a<1?"today":a<30?`${a}d ago`:a<365?`${Math.floor(a/30)}mo ago`:`${Math.floor(a/365)}y ago`}function l(e){n("repo-list").innerHTML=e.map(a=>`<article class="card repo">
        <h3><a href="${t(a.html_url)}" ${i}>${t(a.name)}</a></h3>
        <p>${t(a.description||"No description yet.")}</p>
        <div class="meta">
          ${a.language?`<span>${t(a.language)}</span>`:""}
          ${a.stargazers_count?`<span>★ ${a.stargazers_count}</span>`:""}
          <span>pushed ${H(a.pushed_at)}</span>
        </div>
        ${a.pages_url?`<a class="live" href="${t(a.pages_url)}" ${i}>Live site ↗</a>`:""}
      </article>`).join("")}async function T(){const e="gh-repos-v2";try{const a=JSON.parse(sessionStorage.getItem(e));if(a&&Date.now()-a.at<36e5)return l(a.repos)}catch{}try{const a=await fetch(`https://api.github.com/users/${o}/repos?sort=pushed&per_page=30`);if(!a.ok)throw new Error(a.status);const r=(await a.json()).filter(s=>!s.fork&&!s.archived).slice(0,w).map(s=>({name:s.name,html_url:s.html_url,description:s.description,language:s.language,stargazers_count:s.stargazers_count,pushed_at:s.pushed_at,pages_url:s.has_pages?s.homepage||`https://${o}.github.io/${s.name===`${o}.github.io`?"":`${s.name}/`}`:""}));l(r);try{sessionStorage.setItem(e,JSON.stringify({at:Date.now(),repos:r}))}catch{}}catch{n("repo-list").innerHTML=`<p class="muted">Couldn't load repositories right now. See them all on <a href="https://github.com/${o}?tab=repositories&sort=updated" ${i}>GitHub</a>.</p>`}}T();const g=[...document.querySelectorAll("#nav-links a")],j=new IntersectionObserver(e=>{e.forEach(a=>{a.isIntersecting&&g.forEach(r=>{if(r.hash===`#${a.target.id}`){r.setAttribute("aria-current","true");const s=r.closest(".links");s.scrollLeft=r.offsetLeft-(s.clientWidth-r.offsetWidth)/2}else r.removeAttribute("aria-current")})})},{rootMargin:"-40% 0px -55% 0px"});g.forEach(e=>{const a=document.querySelector(e.hash);a&&j.observe(a)});b();_();L();
