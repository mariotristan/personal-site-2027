import{i as o,r as n,b as e,d as t,a as c,c as p,g as h,h as m,j as $}from"./data-IPK2q5CJ.js";const i=a=>document.getElementById(a),l='target="_blank" rel="noopener noreferrer"';o();i("r-title").textContent=n.title;i("r-name").textContent=n.name;i("r-contact").innerHTML=[`<span><a href="mailto:${e(n.email)}">${e(n.email)}</a></span>`,`<span><a href="${e(n.linkedin)}" ${l}>LinkedIn</a></span>`,'<span><a href="https://mariotristan.github.io/personal-site-2027/">mariotristan.github.io</a></span>'].join("");i("r-summary").textContent=n.summary;i("r-highlights").innerHTML=n.highlights.map(a=>`<article class="card"><h4>${e(a.title)}</h4><p>${e(a.summary)}</p></article>`).join("");i("r-roles").innerHTML=n.roles.map(a=>`<article class="card role reveal">
      <span class="tag">${e(a.period)}</span>
      <h3 class="brand-heading">${t(a.logo)} <span>${e(a.title)} · ${e(a.company)}</span></h3>
      <p class="role-intro">${e(a.intro)}</p>
      ${a.bullets.length?`<ul class="bullets">${a.bullets.map(s=>`<li>${e(s)}</li>`).join("")}</ul>`:""}
    </article>`).join("");i("r-expertise").innerHTML=n.expertise.map(a=>`<article class="card">
      <h3>${e(a.area)}</h3>
      <div class="expertise-logos">${a.logos.map(([s,r])=>t(`tech-${r}`,s,"svg")).join("")}</div>
      <ul class="bullets">${a.lines.map(s=>`<li>${e(s)}</li>`).join("")}</ul>
    </article>`).join("");i("r-education").innerHTML=c.map(a=>`<article class="card">
      <span class="tag">${e(a.period)}</span>
      <h3>${e(a.degree)}</h3>
      <p>${e(a.school)}</p>
    </article>`).join("");i("r-certs").innerHTML=p.map(a=>`<article class="card">
      <h3><span class="brand-heading">${t(a.logo)} ${e(a.issuer)}</span> <span class="count">${a.items.length}</span></h3>
      <ul class="cert-list">
        ${a.items.map(s=>`<li><a href="${e(s.href)}" ${l}>${e(s.name)}<span aria-hidden="true">↗</span></a></li>`).join("")}
      </ul>
    </article>`).join("");i("year").textContent=new Date().getFullYear();i("print").addEventListener("click",()=>window.print());h();m();$();
