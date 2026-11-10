import{i as s,r as i,a as l,c as o,d as c,f as p,g as m}from"./data-B_lGdOam.js";const t=e=>document.getElementById(e),a=e=>String(e).replace(/[&<>"]/g,n=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[n]),r='target="_blank" rel="noopener noreferrer"';s();t("r-title").textContent=i.title;t("r-name").textContent=i.name;t("r-contact").innerHTML=[`<span><a href="mailto:${a(i.email)}">${a(i.email)}</a></span>`,`<span><a href="${a(i.linkedin)}" ${r}>LinkedIn</a></span>`,'<span><a href="https://mariotristan.github.io/personal-site-2027/">mariotristan.github.io</a></span>'].join("");t("r-summary").textContent=i.summary;t("r-highlights").innerHTML=i.highlights.map(e=>`<li>${a(e)}</li>`).join("");t("r-roles").innerHTML=i.roles.map(e=>`<article class="card role reveal">
      <span class="tag">${a(e.period)}</span>
      <h3>${a(e.title)} · ${a(e.company)}</h3>
      <ul class="bullets">${e.bullets.map(n=>`<li>${a(n)}</li>`).join("")}</ul>
    </article>`).join("");t("r-expertise").innerHTML=i.expertise.map(e=>`<article class="card">
      <h3>${a(e.area)}</h3>
      <ul class="bullets">${e.lines.map(n=>`<li>${a(n)}</li>`).join("")}</ul>
    </article>`).join("");t("r-education").innerHTML=l.map(e=>`<article class="card">
      <span class="tag">${a(e.period)}</span>
      <h3>${a(e.degree)}</h3>
      <p>${a(e.school)}</p>
    </article>`).join("");t("r-certs").innerHTML=o.map(e=>`<article class="card">
      <h3>${a(e.issuer)} <span class="count">${e.items.length}</span></h3>
      <ul class="cert-list">
        ${e.items.map(n=>`<li><a href="${a(n.href)}" ${r}>${a(n.name)}<span aria-hidden="true">↗</span></a></li>`).join("")}
      </ul>
    </article>`).join("");t("year").textContent=new Date().getFullYear();t("print").addEventListener("click",()=>window.print());c();p();m();
