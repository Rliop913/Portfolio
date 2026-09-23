const header = document.querySelector('[data-header]');
const year = document.querySelector('[data-year]');
year.textContent = new Date().getFullYear();

const updateHeader = () => header.classList.toggle('scrolled', window.scrollY > 20);
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function setupSignal() {
  const canvas = document.querySelector('#signal-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let phase = 0;

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.floor(canvas.clientWidth * dpr);
    canvas.height = Math.floor(canvas.clientHeight * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function draw() {
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    ctx.clearRect(0, 0, w, h);

    ctx.strokeStyle = 'rgba(255,255,255,.045)';
    ctx.lineWidth = 1;
    for (let x = 0; x <= w; x += 36) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke(); }
    for (let y = 0; y <= h; y += 36) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke(); }

    const gradient = ctx.createLinearGradient(0, 0, w, 0);
    gradient.addColorStop(0, 'rgba(92,225,255,.12)');
    gradient.addColorStop(.35, '#5ce1ff');
    gradient.addColorStop(.7, '#d6fbff');
    gradient.addColorStop(1, 'rgba(92,225,255,.12)');
    ctx.strokeStyle = gradient;
    ctx.shadowColor = 'rgba(92,225,255,.55)';
    ctx.shadowBlur = 9;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    for (let x = 0; x <= w; x += 2) {
      const envelope = .25 + .75 * Math.pow(Math.sin((x / w) * Math.PI), 2);
      const y = h / 2 + envelope * (Math.sin(x * .032 + phase) * 28 + Math.sin(x * .117 - phase * .6) * 8 + Math.sin(x * .251 + phase * 1.4) * 3);
      x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    }
    ctx.stroke();
    ctx.shadowBlur = 0;
    if (!prefersReducedMotion) phase += .018;
    requestAnimationFrame(draw);
  }

  resize();
  window.addEventListener('resize', resize);
  draw();
}

function setupSpectrum() {
  const canvas = document.querySelector('#spectrum-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  function draw() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    canvas.width = Math.floor(w * dpr);
    canvas.height = Math.floor(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.fillStyle = '#070a0d';
    ctx.fillRect(0, 0, w, h);

    const columns = 84;
    const rows = 48;
    const cw = w / columns;
    const rh = h / rows;
    for (let x = 0; x < columns; x++) {
      for (let y = 0; y < rows; y++) {
        const ridge1 = Math.exp(-Math.pow(y - (12 + Math.sin(x * .16) * 5), 2) / 20);
        const ridge2 = Math.exp(-Math.pow(y - (30 + Math.cos(x * .09) * 7), 2) / 34) * .62;
        const pulse = Math.pow(Math.sin(x * .23 + y * .31), 8) * .16;
        const value = Math.min(1, ridge1 + ridge2 + pulse);
        const alpha = .035 + value * .88;
        ctx.fillStyle = `rgba(${Math.round(50 + value * 70)}, ${Math.round(120 + value * 110)}, ${Math.round(150 + value * 105)}, ${alpha})`;
        ctx.fillRect(x * cw, h - (y + 1) * rh, Math.max(1, cw - .6), Math.max(1, rh - .6));
      }
    }
    const glow = ctx.createLinearGradient(0, 0, w, 0);
    glow.addColorStop(0, 'rgba(92,225,255,0)');
    glow.addColorStop(.62, 'rgba(92,225,255,.12)');
    glow.addColorStop(1, 'rgba(92,225,255,0)');
    ctx.fillStyle = glow;
    ctx.fillRect(0, 0, w, h);
  }

  draw();
  window.addEventListener('resize', draw);
}

setupSignal();
setupSpectrum();
