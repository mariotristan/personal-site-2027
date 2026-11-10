import{i as g,c as l,e as p,a as h,t as d,b as m,s as f,d as y,f as _,g as v}from"./data-B_lGdOam.js";const o="mariotristan",b=6,n=e=>document.getElementById(e),a=e=>String(e).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),i='target="_blank" rel="noopener noreferrer"';g();const L=l.reduce((e,t)=>e+t.items.length,0),w=new Date().getFullYear()-2007;n("stats").innerHTML=[[`${w}+`,"years in tech"],[p.length,"roles"],[L,"certifications"],[h.length,"degrees"]].map(([e,t])=>`<li><strong>${e}</strong><span>${t}</span></li>`).join("");n("tech").innerHTML=d.map(e=>`<span>${a(e)}</span>`).join("");n("timeline").innerHTML=p.map(e=>`<article class="row">
      <span class="tag">${a(e.period)}</span>
      <div>
        <h3>${a(e.role)} · <a href="${a(e.url)}" ${i}>${a(e.company)}</a></h3>
        <p>${a(e.summary)}</p>
        ${e.link?`<a class="more" href="${a(e.link.href)}" ${i}>${a(e.link.label)} ↗</a>`:""}
      </div>
    </article>`).join("");n("education-list").innerHTML=h.map(e=>`<article class="card">
      <span class="tag">${a(e.period)}</span>
      <h3>${a(e.degree)}</h3>
      <p><a href="${a(e.url)}" ${i}>${a(e.school)}</a></p>
    </article>`).join("");n("certs").innerHTML=l.map(e=>`<article class="card">
      <h3>${a(e.issuer)} <span class="count">${e.items.length}</span></h3>
      <ul class="cert-list">
        ${e.items.map(t=>`<li><a href="${a(t.href)}" ${i}>${a(t.name)}<span aria-hidden="true">↗</span></a></li>`).join("")}
      </ul>
    </article>`).join("");n("article-list").innerHTML=m.map(e=>`<article class="card repo">
      <span class="tag">LinkedIn</span>
      <h3 class="article-title"><a href="${a(e.href)}" ${i}>${a(e.title)}</a></h3>
      <div class="meta"><span>Read on LinkedIn ↗</span></div>
    </article>`).join("");const u=f.map(e=>`<li><a href="${a(e.href)}" ${i}>${a(e.label)}</a></li>`).join("");n("socials-contact").innerHTML=u;n("socials-footer").innerHTML=u;n("year").textContent=new Date().getFullYear();function M(e){const t=Math.floor((Date.now()-new Date(e))/864e5);return t<1?"today":t<30?`${t}d ago`:t<365?`${Math.floor(t/30)}mo ago`:`${Math.floor(t/365)}y ago`}function c(e){n("repo-list").innerHTML=e.map(t=>`<article class="card repo">
        <h3><a href="${a(t.html_url)}" ${i}>${a(t.name)}</a></h3>
        <p>${a(t.description||"No description yet.")}</p>
        <div class="meta">
          ${t.language?`<span>${a(t.language)}</span>`:""}
          ${t.stargazers_count?`<span>★ ${t.stargazers_count}</span>`:""}
          <span>pushed ${M(t.pushed_at)}</span>
        </div>
        ${t.pages_url?`<a class="live" href="${a(t.pages_url)}" ${i}>Live site ↗</a>`:""}
      </article>`).join("")}async function k(){const e="gh-repos-v2";try{const t=JSON.parse(sessionStorage.getItem(e));if(t&&Date.now()-t.at<36e5)return c(t.repos)}catch{}try{const t=await fetch(`https://api.github.com/users/${o}/repos?sort=pushed&per_page=30`);if(!t.ok)throw new Error(t.status);const r=(await t.json()).filter(s=>!s.fork&&!s.archived).slice(0,b).map(s=>({name:s.name,html_url:s.html_url,description:s.description,language:s.language,stargazers_count:s.stargazers_count,pushed_at:s.pushed_at,pages_url:s.has_pages?s.homepage||`https://${o}.github.io/${s.name===`${o}.github.io`?"":`${s.name}/`}`:""}));c(r);try{sessionStorage.setItem(e,JSON.stringify({at:Date.now(),repos:r}))}catch{}}catch{n("repo-list").innerHTML=`<p class="muted">Couldn't load repositories right now. See them all on <a href="https://github.com/${o}?tab=repositories&sort=updated" ${i}>GitHub</a>.</p>`}}k();const $=[...document.querySelectorAll("#nav-links a")],H=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&$.forEach(r=>{if(r.hash===`#${t.target.id}`){r.setAttribute("aria-current","true");const s=r.closest(".links");s.scrollLeft=r.offsetLeft-(s.clientWidth-r.offsetWidth)/2}else r.removeAttribute("aria-current")})})},{rootMargin:"-40% 0px -55% 0px"});$.forEach(e=>{const t=document.querySelector(e.hash);t&&H.observe(t)});y();_();v();
