import{i as m,c as h,e as u,a as d,b as f,d as t,t as v,f as l,g as y,s as b,h as L,j as _,k as w}from"./data-BH8Y2io5.js";const o="mariotristan",M=6,i=e=>document.getElementById(e),r='target="_blank" rel="noopener noreferrer"';m();const j=h.reduce((e,a)=>e+a.items.length,0),c=new Date,k=c.getFullYear()-2005-(c.getMonth()<10?1:0);i("stats").innerHTML=[[`${k}+`,"years in tech"],[u.length,"roles"],[j,"certifications"],[d.length,"degrees"]].map(([e,a])=>`<li><strong>${e}</strong><span>${a}</span></li>`).join("");i("industries").innerHTML=f.map(e=>`<li>${t(e)}</li>`).join("");i("tech").innerHTML=v.map(e=>`<details class="tech-group">
      <summary>
        <span class="tech-group-label"><strong>${t(e.area)}</strong><span>${e.items.length} technologies</span></span>
        <span class="tech-preview" aria-hidden="true">${e.items.slice(0,3).map(([,a,n])=>l(`tech-${a}`,"",n||"svg")).join("")}</span>
        <span class="tech-toggle" aria-hidden="true"></span>
      </summary>
      <ul>${e.items.map(([a,n,s])=>`<li>${l(`tech-${n}`,"",s||"svg")}<span>${t(a)}</span></li>`).join("")}</ul>
    </details>`).join("");i("timeline").innerHTML=u.map(e=>`<article class="row">
      <span class="tag">${t(e.period)}</span>
      <div class="experience-content">
        ${l(e.logo)}
        <div>
          <h3>${t(e.role)} · <a href="${t(e.url)}" ${r}>${t(e.company)}</a></h3>
          ${e.summary?`<p>${t(e.summary)}</p>`:""}
          ${e.link?`<a class="more" href="${t(e.link.href)}" ${r}>${t(e.link.label)} ↗</a>`:""}
        </div>
      </div>
    </article>`).join("");i("education-list").innerHTML=d.map(e=>`<article class="card">
      <span class="tag">${t(e.period)}</span>
      <h3>${t(e.degree)}</h3>
      <p><a href="${t(e.url)}" ${r}>${t(e.school)}</a></p>
    </article>`).join("");i("certs").innerHTML=h.map(e=>`<article class="card">
      <h3><span class="brand-heading">${l(e.logo)} ${t(e.issuer)}</span> <span class="count">${e.items.length}</span></h3>
      <ul class="cert-list">
        ${e.items.map(a=>`<li><a href="${t(a.href)}" ${r}>${t(a.name)}<span aria-hidden="true">↗</span></a></li>`).join("")}
      </ul>
    </article>`).join("");i("article-list").innerHTML=y.map(e=>`<article class="card repo">
      <span class="tag">LinkedIn</span>
      <h3 class="article-title"><a href="${t(e.href)}" ${r}>${t(e.title)}</a></h3>
      <div class="meta"><span>Read on LinkedIn ↗</span></div>
    </article>`).join("");const $=b.map(e=>`<li><a href="${t(e.href)}" ${r}>${t(e.label)}</a></li>`).join("");i("socials-contact").innerHTML=$;i("socials-footer").innerHTML=$;i("year").textContent=new Date().getFullYear();function H(e){const a=Math.floor((Date.now()-new Date(e))/864e5);return a<1?"today":a<30?`${a}d ago`:a<365?`${Math.floor(a/30)}mo ago`:`${Math.floor(a/365)}y ago`}function p(e){i("repo-list").innerHTML=e.map(a=>`<article class="card repo">
        <h3><a href="${t(a.html_url)}" ${r}>${t(a.name)}</a></h3>
        <p>${t(a.description||"No description yet.")}</p>
        <div class="meta">
          ${a.language?`<span>${t(a.language)}</span>`:""}
          ${a.stargazers_count?`<span>★ ${a.stargazers_count}</span>`:""}
          <span>pushed ${H(a.pushed_at)}</span>
        </div>
        ${a.pages_url?`<a class="live" href="${t(a.pages_url)}" ${r}>Live site ↗</a>`:""}
      </article>`).join("")}async function T(){const e="gh-repos-v2";try{const a=JSON.parse(sessionStorage.getItem(e));if(a&&Date.now()-a.at<36e5)return p(a.repos)}catch{}try{const a=await fetch(`https://api.github.com/users/${o}/repos?sort=pushed&per_page=30`);if(!a.ok)throw new Error(a.status);const n=(await a.json()).filter(s=>!s.fork&&!s.archived).slice(0,M).map(s=>({name:s.name,html_url:s.html_url,description:s.description,language:s.language,stargazers_count:s.stargazers_count,pushed_at:s.pushed_at,pages_url:s.has_pages?s.homepage||`https://${o}.github.io/${s.name===`${o}.github.io`?"":`${s.name}/`}`:""}));p(n);try{sessionStorage.setItem(e,JSON.stringify({at:Date.now(),repos:n}))}catch{}}catch{i("repo-list").innerHTML=`<p class="muted">Couldn't load repositories right now. See them all on <a href="https://github.com/${o}?tab=repositories&sort=updated" ${r}>GitHub</a>.</p>`}}T();const g=[...document.querySelectorAll("#nav-links a")],I=new IntersectionObserver(e=>{e.forEach(a=>{a.isIntersecting&&g.forEach(n=>{if(n.hash===`#${a.target.id}`){n.setAttribute("aria-current","true");const s=n.closest(".links");s.scrollLeft=n.offsetLeft-(s.clientWidth-n.offsetWidth)/2}else n.removeAttribute("aria-current")})})},{rootMargin:"-40% 0px -55% 0px"});g.forEach(e=>{const a=document.querySelector(e.hash);a&&I.observe(a)});L();_();w();
