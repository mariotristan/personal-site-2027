// Behaviour shared by every page: theme toggle, scroll reveal, network background, card glow.
const $ = (id) => document.getElementById(id);
const root = document.documentElement;
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

export function initTheme() {
  function applyTheme(theme) {
    root.dataset.theme = theme;
    $('theme-icon').textContent = theme === 'dark' ? '☀' : '☾';
    $('theme-toggle').setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`);
    document.querySelector('meta[name="theme-color"]').content = theme === 'dark' ? '#070914' : '#f6f7fd';
    try {
      localStorage.setItem('pref-theme', theme);
    } catch {
      // storage unavailable; theme just won't persist
    }
  }
  applyTheme(root.dataset.theme === 'light' ? 'light' : 'dark');
  $('theme-toggle').addEventListener('click', () => applyTheme(root.dataset.theme === 'dark' ? 'light' : 'dark'));
}

// Fade sections up as they scroll into view
export function initReveal() {
  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      }),
    { threshold: 0.08 },
  );
  document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
}

// Soft glow that follows the pointer on cards
export function initCardGlow() {
  document.addEventListener('pointermove', (e) => {
    const card = e.target.closest?.('.card');
    if (!card) return;
    const r = card.getBoundingClientRect();
    card.style.setProperty('--mx', `${e.clientX - r.left}px`);
    card.style.setProperty('--my', `${e.clientY - r.top}px`);
  });
}

// Drifting network of nodes behind the page; lines light up near the pointer
export function initNetwork() {
  const canvas = $('net');
  const ctx = canvas.getContext('2d');
  const pointer = { x: -999, y: -999 };
  let nodes = [];
  let W = 0;
  let H = 0;

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const n = Math.round(Math.min(90, (W * H) / 16000));
    nodes = Array.from({ length: n }, (_, i) => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      r: 1 + Math.random() * 2.2,
      c: i % 4 === 0 ? 0 : 1, // 0 = indigo, 1 = cyan
    }));
  }

  function draw() {
    const light = root.dataset.theme === 'light';
    const line = light ? '79,70,229' : '129,140,248';
    const dot = light ? ['#4f46e5', '#0e7490'] : ['#818cf8', '#22d3ee'];
    const fade = light ? 0.6 : 1;
    ctx.clearRect(0, 0, W, H);
    for (let i = 0; i < nodes.length; i++) {
      const a = nodes[i];
      if (!reduceMotion) {
        a.x += a.vx;
        a.y += a.vy;
        if (a.x < 0 || a.x > W) a.vx *= -1;
        if (a.y < 0 || a.y > H) a.vy *= -1;
      }
      for (let j = i + 1; j < nodes.length; j++) {
        const b = nodes[j];
        const d = (a.x - b.x) ** 2 + (a.y - b.y) ** 2;
        if (d < 16000) {
          ctx.strokeStyle = `rgba(${line},${0.22 * fade * (1 - d / 16000)})`;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
      const md = (a.x - pointer.x) ** 2 + (a.y - pointer.y) ** 2;
      if (md < 22000) {
        ctx.strokeStyle = `rgba(${line},${0.5 * fade * (1 - md / 22000)})`;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(pointer.x, pointer.y);
        ctx.stroke();
      }
      ctx.fillStyle = dot[a.c];
      ctx.globalAlpha = light ? 0.55 : 1;
      ctx.beginPath();
      ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 1;
    }
    if (!reduceMotion) requestAnimationFrame(draw);
  }

  window.addEventListener('resize', () => {
    resize();
    if (reduceMotion) draw();
  });
  window.addEventListener('pointermove', (e) => {
    pointer.x = e.clientX;
    pointer.y = e.clientY;
  });
  resize();
  draw();
}
