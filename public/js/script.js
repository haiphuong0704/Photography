// ---------- Frame-bg injection (runs first — before lightbox clones frames) ----------
(function(){
  document.querySelectorAll('.frame-img').forEach(img => {
    if(img.querySelector('.frame-bg')) return;
    const bg = document.createElement('div');
    bg.className = 'frame-bg';
    const photo = img.dataset.photo;
    if(photo) bg.style.backgroundImage = `url(${photo})`;
    img.prepend(bg);
  });
})();

// ---------- Page loader ----------
(function(){
  const loader = document.querySelector('.loader');
  if(!loader) return;
  function dismiss(){ loader.classList.add('is-gone'); }
  // Dismiss once DOM+CSS ready — don't wait for external images
  if(document.readyState !== 'loading') setTimeout(dismiss, 400);
  else document.addEventListener('DOMContentLoaded', () => setTimeout(dismiss, 400));
  // Hard cap: always dismiss after 1.5s
  setTimeout(dismiss, 1500);
})();

// ---------- Custom cursor ----------
(function(){
  const dot  = document.querySelector('.cursor');
  const ring = document.querySelector('.cursor-ring');
  if(!dot || !ring) return;

  let mx = -100, my = -100, rx = -100, ry = -100;

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    dot.style.transform = `translate(calc(${mx}px - 50%), calc(${my}px - 50%))`;
  });

  (function animRing(){
    rx += (mx - rx) * 0.13;
    ry += (my - ry) * 0.13;
    ring.style.transform = `translate(calc(${rx}px - 50%), calc(${ry}px - 50%))`;
    requestAnimationFrame(animRing);
  })();

  document.querySelectorAll('a, button, .frame, .filter-btn, .chip span, .value-card').forEach(el => {
    el.addEventListener('mouseenter', () => { dot.classList.add('is-hover'); ring.classList.add('is-hover'); });
    el.addEventListener('mouseleave', () => { dot.classList.remove('is-hover'); ring.classList.remove('is-hover'); });
  });
})();

// ---------- Nav: solid on scroll ----------
(function(){
  const nav = document.querySelector('.nav');
  if(!nav) return;
  const onScroll = () => nav.classList.toggle('is-scrolled', window.scrollY > 60);
  window.addEventListener('scroll', onScroll, {passive:true});
  onScroll();
})();

// ---------- Mobile menu ----------
(function(){
  const burger = document.querySelector('.nav-burger');
  const links  = document.querySelector('.nav-links');
  if(!burger || !links) return;
  burger.addEventListener('click', () => {
    const open = links.style.display === 'flex';
    links.style.cssText = open
      ? ''
      : 'display:flex;position:fixed;top:64px;left:0;right:0;flex-direction:column;background:#121212;color:#F3F0E7;padding:24px 32px;gap:20px;z-index:99;';
  });
})();

// ---------- Reveal on scroll ----------
(function(){
  const items = document.querySelectorAll('.reveal');
  if(!('IntersectionObserver' in window)){ items.forEach(el => el.classList.add('is-in')); return; }
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if(en.isIntersecting){ en.target.classList.add('is-in'); io.unobserve(en.target); }
    });
  }, {threshold:.12});
  items.forEach(el => io.observe(el));
})();

// ---------- Stats count-up ----------
(function(){
  const stats = document.querySelectorAll('.stat .display');
  if(!stats.length || !('IntersectionObserver' in window)) return;

  const io = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if(!en.isIntersecting) return;
      const el  = en.target;
      const raw = el.textContent.trim();
      const m   = raw.match(/^(\d+)(\+?)(.*)$/);
      if(!m){ io.unobserve(el); return; }
      const target = parseInt(m[1]);
      const suffix = m[2] + m[3];
      const dur = 1400, t0 = performance.now();
      (function step(now){
        const p    = Math.min((now - t0) / dur, 1);
        const ease = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(ease * target) + suffix;
        if(p < 1) requestAnimationFrame(step);
      })(t0);
      io.unobserve(el);
    });
  }, {threshold:.6});

  stats.forEach(el => { if(/^\d/.test(el.textContent.trim())) io.observe(el); });
})();

// ---------- Hero title char animation ----------
(function(){
  document.querySelectorAll('[data-chars]').forEach(el => {
    const text = el.textContent;
    el.innerHTML = '';
    text.split('').forEach((ch, i) => {
      const span = document.createElement('span');
      span.className = 'char';
      span.textContent = ch === ' ' ? ' ' : ch;
      span.style.transitionDelay = (i * 0.038) + 's';
      el.appendChild(span);
    });
  });

  if(!('IntersectionObserver' in window)){
    document.querySelectorAll('[data-chars] .char').forEach(c => c.classList.add('is-in'));
    return;
  }
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if(!en.isIntersecting) return;
      en.target.querySelectorAll('.char').forEach(c => c.classList.add('is-in'));
      io.unobserve(en.target);
    });
  }, {threshold:.1});
  document.querySelectorAll('[data-chars]').forEach(el => io.observe(el));
})();

// ---------- Packages hero: stat count-up ----------
(function(){
  const vals = document.querySelectorAll('.pkg-hero-stat-val[data-target]');
  if(!vals.length || !('IntersectionObserver' in window)) return;
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if(!en.isIntersecting) return;
      const el = en.target;
      const target = parseInt(el.dataset.target, 10);
      const suffix = el.dataset.target > 8 ? '+' : '';
      const dur = 1600, t0 = performance.now();
      (function step(now){
        const p    = Math.min((now - t0) / dur, 1);
        const ease = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(ease * target) + suffix;
        if(p < 1) requestAnimationFrame(step);
      })(t0);
      io.unobserve(el);
    });
  }, {threshold:.5});
  vals.forEach(el => io.observe(el));
})();

// ---------- Packages hero: background parallax ----------
(function(){
  const bg = document.querySelector('.pkg-hero-bg-img');
  if(!bg) return;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    bg.style.transform = `scale(1.15) translateY(${y * 0.04}px)`;
  }, {passive:true});
})();

// ---------- Parallax: hero visual on scroll ----------
(function(){
  const visual = document.querySelector('.hero-visual');
  if(!visual) return;
  const big   = visual.querySelector('.frame-hero');
  const small = visual.querySelector('.frame-hero-small');
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if(big)   big.style.transform   = `rotate(2deg) translateY(${y * 0.045}px)`;
    if(small) small.style.transform = `rotate(-7deg) translateY(${y * 0.08}px)`;
  }, {passive:true});
})();

// ---------- Gallery lightbox ----------
(function(){
  const grid = document.querySelector('[data-lightbox-grid]');
  if(!grid) return;
  const overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay';
  overlay.innerHTML = `
    <button class="lightbox-close" aria-label="Đóng">✕</button>
    <button class="lightbox-prev" aria-label="Trước">‹</button>
    <div class="lightbox-stage"></div>
    <button class="lightbox-next" aria-label="Tiếp">›</button>
  `;
  document.body.appendChild(overlay);

  const stage  = overlay.querySelector('.lightbox-stage');
  const frames = Array.from(grid.querySelectorAll('.frame:not(.is-hidden)'));
  let current  = 0;

  function getVisibleFrames(){ return Array.from(grid.querySelectorAll('.frame:not(.is-hidden)')); }

  function render(i){
    const visible = getVisibleFrames();
    current = (i + visible.length) % visible.length;
    const clone = visible[current].cloneNode(true);
    stage.innerHTML = '';
    stage.appendChild(clone);
    clone.querySelectorAll('.frame-img').forEach(img => {
      if(!img.querySelector('.frame-bg')){
        const bg = document.createElement('div');
        bg.className = 'frame-bg';
        if(img.dataset.photo) bg.style.backgroundImage = `url(${img.dataset.photo})`;
        img.prepend(bg);
      }
    });
  }

  function open(i){ render(i); overlay.classList.add('is-open'); document.body.style.overflow='hidden'; }
  function close(){ overlay.classList.remove('is-open'); document.body.style.overflow=''; }

  grid.addEventListener('click', e => {
    const frame = e.target.closest('.frame');
    if(!frame || frame.classList.contains('is-hidden')) return;
    const visible = getVisibleFrames();
    open(visible.indexOf(frame));
  });
  overlay.querySelector('.lightbox-close').addEventListener('click', close);
  overlay.querySelector('.lightbox-next').addEventListener('click', () => render(current + 1));
  overlay.querySelector('.lightbox-prev').addEventListener('click', () => render(current - 1));
  overlay.addEventListener('click', e => { if(e.target === overlay) close(); });
  document.addEventListener('keydown', e => {
    if(!overlay.classList.contains('is-open')) return;
    if(e.key === 'Escape') close();
    if(e.key === 'ArrowRight') render(current + 1);
    if(e.key === 'ArrowLeft')  render(current - 1);
  });
})();

// ---------- Gallery filter ----------
(function(){
  const row = document.querySelector('[data-filter-row]');
  if(!row) return;
  const items = document.querySelectorAll('.g-item');

  function applyFilter(filter){
    row.querySelectorAll('.filter-btn').forEach(b => b.classList.toggle('is-active', b.dataset.filter === filter));
    items.forEach(it => it.classList.toggle('is-hidden', filter !== 'all' && it.dataset.category !== filter));
  }

  row.addEventListener('click', e => {
    const btn = e.target.closest('.filter-btn');
    if(btn) applyFilter(btn.dataset.filter);
  });

  // Initialize from server-rendered active filter
  const initial = row.dataset.activeFilter;
  if(initial && initial !== 'all') applyFilter(initial);
})();

// ---------- Reel: running frame counter ----------
(function(){
  const counter = document.querySelector('.reel-counter');
  if(!counter) return;
  let n = 1;
  setInterval(() => {
    n = (n % 999) + 1;
    counter.textContent = `SG — 2026 // FRAME ${String(n).padStart(3,'0')}`;
  }, 80);
})();

// ---------- Language dropdown ----------
(function(){
  const drop    = document.getElementById('lang-drop');
  if(!drop) return;
  const trigger = drop.querySelector('.lang-drop-trigger');
  const menu    = drop.querySelector('.lang-drop-menu');
  const label   = document.getElementById('lang-label');
  const LANG_KEY = 'lech-lang';
  let lang = localStorage.getItem(LANG_KEY) || 'vi';

  function applyLang(l){
    lang = l;
    localStorage.setItem(LANG_KEY, l);
    document.documentElement.lang = l === 'en' ? 'en' : 'vi';
    if(label) label.textContent = l.toUpperCase();

    document.querySelectorAll('[data-vi]').forEach(el => {
      el.innerHTML = l === 'en' ? (el.dataset.en || el.dataset.vi) : el.dataset.vi;
    });
    document.querySelectorAll('[data-vi-placeholder]').forEach(el => {
      el.placeholder = l === 'en'
        ? (el.dataset.enPlaceholder || el.dataset.viPlaceholder)
        : el.dataset.viPlaceholder;
    });
    document.querySelectorAll('[data-label-vi]').forEach(el => {
      el.dataset.label = l === 'en' ? (el.dataset.labelEn || el.dataset.labelVi) : el.dataset.labelVi;
    });
    drop.querySelectorAll('.lang-opt').forEach(o => {
      o.classList.toggle('is-active', o.dataset.lang === l);
    });
    document.dispatchEvent(new CustomEvent('lech-lang-change', { detail: l }));
    closeMenu();
  }

  function openMenu(){
    drop.classList.add('is-open');
    trigger.setAttribute('aria-expanded','true');
  }
  function closeMenu(){
    drop.classList.remove('is-open');
    trigger.setAttribute('aria-expanded','false');
  }

  trigger.addEventListener('click', e => {
    e.stopPropagation();
    drop.classList.contains('is-open') ? closeMenu() : openMenu();
  });

  drop.querySelectorAll('.lang-opt').forEach(o => {
    o.addEventListener('click', () => applyLang(o.dataset.lang));
  });

  document.addEventListener('click', closeMenu);
  drop.addEventListener('click', e => e.stopPropagation());

  applyLang(lang);
})();

// ---------- Contact page: tab switcher ----------
(function(){
  const tabBtns   = document.querySelectorAll('.contact-tab-btn');
  const tabPanels = document.querySelectorAll('.contact-tab-panel');
  if(!tabBtns.length) return;

  function switchTab(id){
    tabBtns.forEach(b => b.classList.toggle('is-active', b.dataset.tab === id));
    tabPanels.forEach(p => p.classList.toggle('is-active', p.id === 'tab-' + id));
    history.replaceState(null, '', window.location.pathname + (id === 'booking' ? '#booking' : ''));
  }

  tabBtns.forEach(b => b.addEventListener('click', () => switchTab(b.dataset.tab)));

  // Wire the "Hoặc đặt lịch ngay" button inside the message form
  const switchBtn = document.getElementById('switch-to-booking');
  if(switchBtn) switchBtn.addEventListener('click', () => switchTab('booking'));

  // Auto-activate from URL hash
  if(window.location.hash === '#booking') switchTab('booking');
})();

// ---------- Back to top ----------
(function(){
  const btn = document.getElementById('back-to-top');
  if(!btn) return;
  window.addEventListener('scroll', function(){
    btn.classList.toggle('is-visible', window.scrollY > 400);
  }, {passive:true});
  btn.addEventListener('click', function(){
    window.scrollTo({top:0, behavior:'smooth'});
  });
})();

// ---------- Floating contact ----------
(function(){
  const wrap = document.getElementById('float-cta');
  const btn  = document.getElementById('float-cta-btn');
  if(!wrap || !btn) return;
  btn.addEventListener('click', function(e){
    e.stopPropagation();
    const open = wrap.classList.toggle('is-open');
    btn.setAttribute('aria-expanded', String(open));
  });
  document.addEventListener('click', function(e){
    if(!wrap.contains(e.target)) wrap.classList.remove('is-open');
  });
})();
