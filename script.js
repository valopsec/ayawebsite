/* ============================================================
   LETTERS — EDIT TEXTS AND PHOTOS HERE
   ============================================================
   - label : what's written on the envelope (after "Open when")
   - title : heading inside the opened letter
   - body  : letter body (you can use <p>, <em> etc.)
   - photo : path to image/gif, or null for placeholder
             e.g.  photo: "assets/our-morning.jpg"
             or    photo: "https://media.tenor.com/.../hug.gif"
   ============================================================ */
const letters = [
  {
    label: "you're sad",
    title: "When you're sad",
    body: `
      <blockquote class="poem">
        You do not have to be good.<br>
        You do not have to walk on your knees<br>
        for a hundred miles through the desert, repenting.<br>
        You only have to let the soft animal of your body<br>
        love what it loves.
      </blockquote>
    `,
    photo: null
  },
  {
    label: "you miss me",
    title: "When you miss me",
    body: `
      <blockquote class="poem">
        I do not love you as if you were salt-rose, or topaz,<br>
        or the arrow of carnations the fire shoots off.<br>
        I love you as certain dark things are to be loved,<br>
        in secret, between the shadow and the soul.
      </blockquote>
    `,
    photo: null
  },
  {
    label: "you're bored",
    title: "When you're bored",
    body: `
      <blockquote class="poem">
        Listen; there's a hell<br>of a good universe next door; let's go.
      </blockquote>
    `,
    photo: "assets/Cat%20Sticker%20by%20MYAOWL.gif"
  },
  {
    label: "you're having a bad day",
    title: "When you're having a bad day",
    body: `
      <blockquote class="poem">
        Let everything happen to you: beauty and terror.<br>
        Just keep going. No feeling is final.
      </blockquote>
    `,
    photo: null
  },
  {
    label: "you're angry with me",
    title: "When you're angry with me",
    body: `
      <blockquote class="poem">
        Out beyond ideas of wrongdoing and rightdoing,<br>
        there is a field. I'll meet you there.<br>
        When the soul lies down in that grass,<br>
        the world is too full to talk about.
      </blockquote>
    `,
    photo: null
  },
  {
    label: "you can't sleep",
    title: "When you can't sleep",
    body: `
      <blockquote class="poem">
        Had I the heavens' embroidered cloths,<br>
        Enwrought with golden and silver light,<br>
        The blue and the dim and the dark cloths<br>
        Of night and light and the half-light,<br>
        I would spread the cloths under your feet:<br>
        But I, being poor, have only my dreams;<br>
        I have spread my dreams under your feet;<br>
        Tread softly because you tread on my dreams.
      </blockquote>
    `,
    photo: null
  },
  {
    label: "you forgot how beautiful you are",
    title: "When you forgot how beautiful you are",
    body: `
      <blockquote class="poem">
        She walks in beauty, like the night<br>
        Of cloudless climes and starry skies;<br>
        And all that's best of dark and bright<br>
        Meet in her aspect and her eyes.
      </blockquote>
    `,
    photo: null
  },
  {
    label: "you doubt my love",
    title: "When you doubt my love",
    body: `
      <blockquote class="poem">
        How do I love thee? Let me count the ways.<br>
        I love thee to the depth and breadth and height<br>
        My soul can reach, when feeling out of sight<br>
        For the ends of being and ideal grace.
      </blockquote>
    `,
    photo: null
  },
  {
    label: "you want to feel close to me",
    title: "When you want to feel close to me",
    body: `
      <blockquote class="poem">
        i carry your heart with me (i carry it in<br>
        my heart) i am never without it (anywhere<br>
        i go you go, my dear; and whatever is done<br>
        by only me is your doing, my darling)
      </blockquote>
    `,
    photo: null
  },
  {
    label: "the world feels too big",
    title: "When the world feels too big",
    body: `
      <blockquote class="poem">
        Perhaps all the dragons in our lives are princesses<br>
        who are only waiting to see us act, just once,<br>
        with beauty and courage. Perhaps everything that<br>
        frightens us is, in its deepest essence,<br>
        something helpless that wants our love.
      </blockquote>
    `,
    photo: null
  },
  {
    label: "you need courage",
    title: "When you need courage",
    body: `
      <blockquote class="poem">
        One day you finally knew<br>
        what you had to do, and began,<br>
        though the voices around you<br>
        kept shouting their bad advice —<br>
        though the whole house<br>
        began to tremble<br>
        and you felt the old tug<br>
        at your ankles.<br>
        "Mend my life!"<br>
        each voice cried.<br>
        But you didn't stop.
      </blockquote>
    `,
    photo: null
  },
  {
    label: "you crave me",
    title: "When you crave me",
    body: `
      <blockquote class="poem">
        I crave your mouth, your voice, your hair.<br>
        Silent and starving, I prowl through the streets.<br>
        Bread does not nourish me, dawn disrupts me, all day<br>
        I hunt for the liquid measure of your steps.<br>
        I hunger for your sleek laugh,<br>
        your hands the color of a savage harvest,<br>
        hunger for the pale stones of your fingernails,<br>
        I want to eat your skin like a whole almond.
      </blockquote>
    `,
    photo: null
  },
  {
    label: "you feel small",
    title: "When you feel small",
    body: `
      <blockquote class="poem">
        Even after all this time<br>
        the sun never says to the earth,<br>
        "You owe me."<br>
        Look what happens<br>
        with a love like that.<br>
        It lights the whole sky.
      </blockquote>
    `,
    photo: null
  },
  {
    label: "the night is too long",
    title: "When the night is too long",
    body: `
      <blockquote class="poem">
        Bright star, would I were stedfast as thou art —<br>
        Not in lone splendour hung aloft the night<br>
        And watching, with eternal lids apart,<br>
        Like nature's patient, sleepless Eremite,<br>
        The moving waters at their priestlike task<br>
        Of pure ablution round earth's human shores.
      </blockquote>
    `,
    photo: null
  },
  {
    label: "you want to be wanted",
    title: "When you want to be wanted",
    body: `
      <blockquote class="poem">
        Wild nights — Wild nights!<br>
        Were I with thee<br>
        Wild nights should be<br>
        Our luxury!<br><br>
        Futile — the winds —<br>
        To a Heart in port —<br>
        Done with the Compass —<br>
        Done with the Chart!
      </blockquote>
    `,
    photo: "assets/Cat%20Sticker%20by%20MYAOWL-2.gif"
  },
  {
    label: "you remember our beginning",
    title: "When you remember our beginning",
    body: `
      <blockquote class="poem">
        O my Luve is like a red, red rose<br>
        That's newly sprung in June;<br>
        O my Luve is like the melody<br>
        That's sweetly played in tune.<br><br>
        So fair art thou, my bonnie lass,<br>
        So deep in luve am I;<br>
        And I will luve thee still, my dear,<br>
        Till a' the seas gang dry.
      </blockquote>
    `,
    photo: "assets/Cat%20Love%20Sticker%20by%20MYAOWL-4.gif"
  }
];

/* ============================================================
   ENVELOPE GENERATION
   ============================================================ */
const desk = document.getElementById('desk');
// gently scattered rotations — like letters on a table
const rotations = [-5, 4, -3, 6, -4, 3, -6, 5, -2, 4];

letters.forEach((item, i) => {
  const env = document.createElement('div');
  env.className = 'envelope';
  env.style.setProperty('--rot', `${rotations[i % rotations.length]}deg`);
  env.style.animationDelay = `${0.25 + i * 0.13}s`;
  env.setAttribute('role', 'button');
  env.setAttribute('tabindex', '0');
  env.setAttribute('aria-label', `Open letter: ${item.label}`);

  env.innerHTML = `
    <div class="envelope-body"></div>
    <div class="envelope-flap"></div>
    <div class="seal">
      <span class="seal-monogram">V<span class="amp">&amp;</span>A</span>
    </div>
    <div class="label">
      <span class="label-small">Open when</span>
      <span class="label-main">${item.label}</span>
    </div>
  `;

  const open = () => openLetter(i, env);
  env.addEventListener('click', open);
  env.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); }
  });

  desk.appendChild(env);
});

/* ============================================================
   MODAL LOGIC
   ============================================================ */
const overlay      = document.getElementById('overlay');
const letterTitle  = document.getElementById('letterTitle');
const letterBody   = document.getElementById('letterBody');
const letterPhoto  = document.getElementById('letterPhoto');
const closeBtn     = document.getElementById('closeBtn');

let openTimeout = null;
let resetTimeout = null;

function openLetter(idx, envEl) {
  const data = letters[idx];

  // seal breaks + envelope shakes
  envEl.classList.add('opened');
  if (window.AyaSound) window.AyaSound.playOpen();

  // after a short moment, the letter appears
  clearTimeout(openTimeout);
  openTimeout = setTimeout(() => {
    letterTitle.textContent = data.title;
    letterBody.innerHTML = data.body;

    if (data.photo) {
      letterPhoto.innerHTML = `<img src="${data.photo}" alt="">`;
      letterPhoto.classList.add('has-gif');
      letterPhoto.style.display = '';
    } else {
      letterPhoto.innerHTML = '';
      letterPhoto.classList.remove('has-gif');
      letterPhoto.style.display = 'none';
    }

    overlay.classList.add('active');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    document.body.classList.add('modal-open'); // pauses background hearts
  }, 520);

  // after closing, envelope returns to sealed state
  clearTimeout(resetTimeout);
  resetTimeout = setTimeout(() => {
    envEl.classList.remove('opened');
  }, 1800);
}

function closeLetter() {
  overlay.classList.remove('active');
  overlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  document.body.classList.remove('modal-open'); // resume background hearts
}

closeBtn.addEventListener('click', closeLetter);
overlay.addEventListener('click', (e) => {
  if (e.target === overlay) closeLetter();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeLetter();
});

/* ============================================================
   HEARTS — scattered + gently floating
   ============================================================ */
const heartsBg = document.getElementById('heartsBg');

// scattered static hearts (watermark-like)
for (let i = 0; i < 32; i++) {
  const h = document.createElement('span');
  h.className = 'heart-static';
  const size = 12 + Math.random() * 30;
  h.style.left = `${Math.random() * 100}%`;
  h.style.top = `${Math.random() * 100}%`;
  h.style.width = `${size}px`;
  h.style.height = `${size}px`;
  h.style.transform = `rotate(${(Math.random() - 0.5) * 30}deg)`;
  h.style.opacity = (0.04 + Math.random() * 0.06).toFixed(3);
  heartsBg.appendChild(h);
}

// slowly floating hearts (rising like embers)
for (let i = 0; i < 8; i++) {
  const h = document.createElement('span');
  h.className = 'heart-floating';
  const size = 14 + Math.random() * 16;
  h.style.left = `${Math.random() * 100}%`;
  h.style.width = `${size}px`;
  h.style.height = `${size}px`;
  h.style.animationDuration = `${22 + Math.random() * 16}s`;
  h.style.animationDelay = `${(Math.random() * -25).toFixed(1)}s`;
  heartsBg.appendChild(h);
}

/* ===================================================== */

/* ============================================================
   COUNT-UP TIMER — rolling odometer with motion blur
   ============================================================ */
(function () {
  const start = new Date('2026-05-27T21:51:00+02:00'); // Europe/Bratislava
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const LINE = '1.12em'; // must match .tm-value / .tm-d height in the CSS

  const els = {
    days:    document.getElementById('tmDays'),
    hours:   document.getElementById('tmHours'),
    minutes: document.getElementById('tmMinutes'),
    seconds: document.getElementById('tmSeconds'),
  };

  const pad = (n) => String(n).padStart(2, '0');

  // Wrap each value in a vertical "roll" track so numbers can scroll.
  function initRoller(el) {
    const text = el.textContent;
    el.textContent = '';
    const roll = document.createElement('span');
    roll.className = 'tm-roll';
    const d = document.createElement('span');
    d.className = 'tm-d';
    d.textContent = text;
    roll.appendChild(d);
    el.appendChild(roll);
    el._roll = roll;
  }
  Object.values(els).forEach(initRoller);

  function setVal(el, text) {
    const roll = el._roll;
    const cur = roll.lastElementChild;
    if (cur.textContent === text) return;
    if (reduced) { cur.textContent = text; return; }

    // If a previous roll is still in flight, snap it to its end first.
    if (roll._finish) roll._finish();

    const next = document.createElement('span');
    next.className = 'tm-d';
    next.textContent = text;
    roll.appendChild(next); // sits one line below the current value

    void roll.offsetHeight;                     // reflow with both rows stacked
    roll.classList.add('rolling');              // fire the motion-blur sweep
    roll.style.transform = 'translateY(-' + LINE + ')'; // glide up to reveal it

    let done = false;
    roll._finish = function () {
      if (done) return;
      done = true;
      roll.removeEventListener('transitionend', onEnd);
      roll.classList.remove('rolling');         // drop the blur, back to sharp
      roll.style.transition = 'none';           // reset without a visible jump
      if (roll.firstElementChild !== next) roll.firstElementChild.remove();
      roll.style.transform = 'translateY(0)';
      void roll.offsetHeight;
      roll.style.transition = '';
      roll._finish = null;
    };
    function onEnd(e) {
      if (e.propertyName !== 'transform') return;
      roll._finish();
    }
    roll.addEventListener('transitionend', onEnd);
  }

  function update() {
    const diff = Math.max(0, Date.now() - start.getTime());
    const t = Math.floor(diff / 1000);
    const d = Math.floor(t / 86400);
    const h = Math.floor((t % 86400) / 3600);
    const m = Math.floor((t % 3600) / 60);
    const s = t % 60;

    setVal(els.days,    String(d));
    setVal(els.hours,   pad(h));
    setVal(els.minutes, pad(m));
    setVal(els.seconds, pad(s));
  }

  update();
  setInterval(update, 1000);
})();

/* ===================================================== */

/* ============================================================
   ANIMATED CURSOR — the gif follows the mouse
   ============================================================ */
(function () {
  const cc = document.getElementById('customCursor');
  if (!cc) return;
  // only run where there is a precise pointer (i.e. a real mouse)
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

  const off = 21; // half of the 42px gif, so it's centred on the pointer
  let shown = false, px = 0, py = 0, queued = false;

  function place() {
    queued = false;
    cc.style.transform = 'translate3d(' + (px - off) + 'px,' + (py - off) + 'px,0)';
    if (!shown) { cc.style.opacity = '1'; shown = true; }
  }
  // store the latest position and update at most once per animation frame
  window.addEventListener('mousemove', (e) => {
    px = e.clientX; py = e.clientY;
    if (!queued) { queued = true; requestAnimationFrame(place); }
  }, { passive: true });

  document.addEventListener('mouseleave', () => { cc.style.opacity = '0'; });
  document.addEventListener('mouseenter', () => { cc.style.opacity = '1'; });

  // swap to the "open" gif whenever the pointer is over something openable (an envelope)
  document.addEventListener('mouseover', (e) => {
    const openable = e.target.closest && e.target.closest('.envelope');
    cc.classList.toggle('is-open', !!openable);
  });
})();

/* ===================================================== */

/* ============================================================
   SOUND — gentle ambient piano + wax-seal/paper SFX
   All synthesized with the Web Audio API (no audio files).
   Off by default; the choice is remembered in localStorage.
   ============================================================ */
(function () {
  const KEY = 'aya-sound-on';
  const btn = document.getElementById('soundToggle');
  if (!btn) return;

  let ctx, master, musicGain, sfxGain, reverb;
  let on = false;
  let schedTimer = null;
  let nextTime = 0, idx = 0;

  const CHORD_DUR = 4.2;   // seconds each chord lingers
  const LOOKAHEAD = 2.8;   // schedule notes this far ahead

  // ---- note frequencies (Hz) ----
  const N = {
    C3:130.81, E3:164.81, F3:174.61, G3:196.00, A3:220.00, B3:246.94,
    C4:261.63, D4:293.66, E4:329.63, F4:349.23, G4:392.00, A4:440.00,
    C5:523.25
  };
  // I – vi – IV – V in C, voiced softly low-to-high
  const PROG = [
    [N.C3, N.E4, N.G4, N.C5],
    [N.A3, N.C4, N.E4, N.A4],
    [N.F3, N.A3, N.C4, N.F4],
    [N.G3, N.B3, N.D4, N.G4]
  ];

  function makeImpulse(seconds, decay) {
    const rate = ctx.sampleRate;
    const len = Math.max(1, Math.floor(rate * seconds));
    const buf = ctx.createBuffer(2, len, rate);
    for (let ch = 0; ch < 2; ch++) {
      const data = buf.getChannelData(ch);
      for (let i = 0; i < len; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, decay);
      }
    }
    return buf;
  }

  function ensureCtx() {
    if (ctx) return;
    ctx = new (window.AudioContext || window.webkitAudioContext)();

    master = ctx.createGain();
    master.gain.value = 1.0;       // always on; the toggle controls music only
    master.connect(ctx.destination);

    reverb = ctx.createConvolver();
    reverb.buffer = makeImpulse(2.6, 2.2);
    const revGain = ctx.createGain();
    revGain.gain.value = 0.45;
    reverb.connect(revGain).connect(master);

    musicGain = ctx.createGain();
    musicGain.gain.value = 0;      // ambient music starts muted (toggle fades it in)
    musicGain.connect(master);
    musicGain.connect(reverb);

    sfxGain = ctx.createGain();
    sfxGain.gain.value = 0.8;      // envelope sounds: always audible, toggle-independent
    sfxGain.connect(master);
    sfxGain.connect(reverb);
  }

  // ---- one gentle, piano-ish note ----
  function note(freq, time, dur, level) {
    const o1 = ctx.createOscillator(); o1.type = 'triangle'; o1.frequency.value = freq;
    const o2 = ctx.createOscillator(); o2.type = 'sine';     o2.frequency.value = freq * 2;
    const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 2200;
    const harm = ctx.createGain(); harm.gain.value = 0.28; // 2nd partial, quieter
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, time);
    g.gain.exponentialRampToValueAtTime(level, time + 0.012); // soft attack
    g.gain.exponentialRampToValueAtTime(0.0001, time + dur);  // long decay

    o1.connect(lp);
    o2.connect(harm).connect(lp);
    lp.connect(g).connect(musicGain);
    o1.start(time); o2.start(time);
    o1.stop(time + dur + 0.1); o2.stop(time + dur + 0.1);
  }

  function scheduleChord(t) {
    const chord = PROG[idx % PROG.length];
    note(chord[0], t, CHORD_DUR * 1.05, 0.12);              // soft root
    for (let i = 1; i < chord.length; i++) {                // arpeggiate the top
      const at = t + (i - 0.5) * (CHORD_DUR / chord.length);
      note(chord[i], at, CHORD_DUR * 0.9, 0.085);
    }
    idx++;
  }

  function scheduler() {
    if (!on || !ctx) return;
    while (nextTime < ctx.currentTime + LOOKAHEAD) {
      scheduleChord(nextTime);
      nextTime += CHORD_DUR;
    }
  }

  // ---- short filtered-noise burst (used for the SFX layers) ----
  function noise(time, dur, type, freq, q, level) {
    const len = Math.floor(ctx.sampleRate * dur);
    const buf = ctx.createBuffer(1, len, ctx.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < len; i++) data[i] = Math.random() * 2 - 1;
    const src = ctx.createBufferSource(); src.buffer = buf;
    const f = ctx.createBiquadFilter(); f.type = type; f.frequency.value = freq; if (q) f.Q.value = q;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, time);
    g.gain.exponentialRampToValueAtTime(level, time + 0.008);
    g.gain.exponentialRampToValueAtTime(0.0001, time + dur);
    src.connect(f).connect(g).connect(sfxGain);
    src.start(time); src.stop(time + dur + 0.05);
  }

  // ---- paper crinkling / scrambling open (no wax crack) ----
  function playOpen() {
    ensureCtx();                                 // plays even if music is off
    if (ctx.state === 'suspended') ctx.resume(); // opening a letter is a user gesture
    const t0 = ctx.currentTime;
    const total = 0.65;   // how long the crinkle lasts
    const grains = 24;    // many little irregular crackles = the paper "scramble"

    for (let i = 0; i < grains; i++) {
      // random, front-loaded timing so it crackles most as the paper first opens
      const frac = Math.pow(Math.random(), 1.4);
      const at   = t0 + frac * total;
      const dur  = 0.008 + Math.random() * 0.03;     // tiny crackles
      const freq = 1700 + Math.random() * 2800;      // crisp, papery highs
      const level = 0.09 + Math.random() * 0.20;
      // mix highpass + bandpass grains for a dry, crumpled texture
      if (Math.random() < 0.5) noise(at, dur, 'highpass', freq, 0,   level);
      else                     noise(at, dur, 'bandpass', freq, 0.8, level);
    }
    // soft, brief "slide" underneath so it reads as paper rather than static
    noise(t0 + 0.02, 0.34, 'bandpass', 1400, 0.6, 0.06);
  }

  // ---- on / off ----
  function setOn(state) {
    on = state;
    btn.classList.toggle('is-on', on);
    btn.setAttribute('aria-pressed', String(on));
    try { localStorage.setItem(KEY, on ? '1' : '0'); } catch (e) {}

    if (on) {
      ensureCtx();
      if (ctx.state === 'suspended') ctx.resume();
      musicGain.gain.cancelScheduledValues(ctx.currentTime);
      musicGain.gain.setValueAtTime(musicGain.gain.value, ctx.currentTime);
      musicGain.gain.linearRampToValueAtTime(0.20, ctx.currentTime + 0.8); // fade music in
      nextTime = ctx.currentTime + 0.15;
      if (!schedTimer) schedTimer = setInterval(scheduler, 300);
      scheduler();
    } else if (ctx) {
      musicGain.gain.cancelScheduledValues(ctx.currentTime);
      musicGain.gain.setValueAtTime(musicGain.gain.value, ctx.currentTime);
      musicGain.gain.linearRampToValueAtTime(0.0, ctx.currentTime + 0.5); // fade music out
    }
  }

  btn.addEventListener('click', () => setOn(!on));

  // let the letter logic play the open SFX
  window.AyaSound = { playOpen: playOpen, isOn: function () { return on; } };

  // remember the last choice; if it was on, resume on the first interaction
  let stored = '0';
  try { stored = localStorage.getItem(KEY) || '0'; } catch (e) {}
  if (stored === '1') {
    btn.classList.add('is-on');
    btn.setAttribute('aria-pressed', 'true');
    const boot = function () {
      document.removeEventListener('pointerdown', boot);
      document.removeEventListener('keydown', boot);
      setOn(true);
    };
    document.addEventListener('pointerdown', boot, { once: true });
    document.addEventListener('keydown', boot, { once: true });
  }
})();

/* ===================================================== */

/* ============================================================
   MENU — wax seal opens the panel; links switch the "rooms"
   ============================================================ */
(function () {
  const seal     = document.getElementById('menuSeal');
  const panel    = document.getElementById('menuPanel');
  const backdrop = document.getElementById('menuBackdrop');
  const closeBtn = document.getElementById('menuClose');
  if (!seal || !panel) return;

  function openMenu() {
    panel.classList.add('open');
    backdrop.classList.add('open');
    document.body.classList.add('menu-open');
  }
  function closeMenu() {
    panel.classList.remove('open');
    backdrop.classList.remove('open');
    document.body.classList.remove('menu-open');
  }

  seal.addEventListener('click', openMenu);
  closeBtn.addEventListener('click', closeMenu);
  backdrop.addEventListener('click', closeMenu);
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMenu(); });

  const views = Array.prototype.slice.call(document.querySelectorAll('.view'));
  const links = Array.prototype.slice.call(document.querySelectorAll('.menu-link'));

  function showView(id) {
    views.forEach((v) => v.classList.toggle('is-active', v.id === id));
    links.forEach((l) => l.classList.toggle('active', l.dataset.target === id));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  links.forEach((l) => {
    l.addEventListener('click', () => { showView(l.dataset.target); closeMenu(); });
  });

  // tap a "Reasons" card to flip it over
  document.addEventListener('click', (e) => {
    const card = e.target.closest && e.target.closest('.reason');
    if (card) card.classList.toggle('flipped');
  });
})();
