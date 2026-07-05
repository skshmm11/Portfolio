/* ============================================
   TOKENS
   ============================================ */
:root{
  --paper:      #FAFAF6;
  --paper-dim:  #F1EFE7;
  --ink:        #14171C;
  --muted:      #5C6370;
  --line:       #E1DED3;
  --accent:     #2F5C4F;
  --accent-ink: #1F4038;
  --accent-soft:#E5EDE8;
  --amber:      #C2793E;
  --radius:     10px;
}

*{box-sizing:border-box;}
html{scroll-behavior:smooth;}
body{
  margin:0;
  font-family:'Inter', sans-serif;
  color:var(--ink);
  background:var(--paper);
  -webkit-font-smoothing:antialiased;
  font-size:16px;
  line-height:1.6;
}
h1,h2,h3,h4{font-family:'Space Grotesk', sans-serif; letter-spacing:-0.01em; margin:0;}
.mono{font-family:'JetBrains Mono', monospace;}
a{color:inherit; text-decoration:none;}
img{max-width:100%;}
::selection{background:var(--accent-soft); color:var(--accent-ink);}

.wrap{max-width:1120px; margin:0 auto; padding:0 1.5rem;}
section{padding:6rem 0;}
@media (max-width:768px){ section{padding:4rem 0;} }

.eyebrow{
  display:inline-flex; align-items:center; gap:.5rem;
  font-family:'JetBrains Mono', monospace;
  font-size:.78rem;
  letter-spacing:.05em;
  text-transform:uppercase;
  color:var(--accent-ink);
  margin-bottom:.9rem;
}
.eyebrow::before{content:'//'; color:var(--amber);}

.section-title{
  font-size:clamp(1.7rem, 3vw, 2.3rem);
  font-weight:600;
  margin-bottom:.75rem;
  max-width:640px;
}
.section-sub{
  color:var(--muted);
  max-width:560px;
  margin-bottom:2.75rem;
  font-size:1.02rem;
}

/* ============================================
   NAVBAR
   ============================================ */
header{
  position:sticky; top:0; z-index:50;
  background:rgba(250,250,246,.88);
  backdrop-filter:blur(10px);
  border-bottom:1px solid var(--line);
}
.nav{
  display:flex; align-items:center; justify-content:space-between;
  padding:1.05rem 1.5rem;
  max-width:1120px; margin:0 auto;
}
.brand{
  font-family:'Space Grotesk', sans-serif;
  font-weight:700;
  font-size:1.05rem;
  display:flex; align-items:center; gap:.5rem;
}
.brand .cursor-dot{
  width:8px; height:8px; border-radius:50%;
  background:var(--accent);
  animation:blink 1.4s step-end infinite;
}
@keyframes blink{50%{opacity:.15;}}
.nav-links{display:flex; align-items:center; gap:2rem; list-style:none; margin:0; padding:0;}
.nav-links a{
  font-size:.92rem; font-weight:500; color:var(--muted);
  position:relative; padding:.2rem 0;
}
.nav-links a:hover{color:var(--ink);}
.nav-links a::after{
  content:''; position:absolute; left:0; bottom:-4px; width:0; height:1.5px;
  background:var(--accent); transition:width .2s ease;
}
.nav-links a:hover::after{width:100%;}
.nav-cta{
  background:var(--ink); color:var(--paper) !important;
  padding:.5rem 1.1rem; border-radius:999px;
  font-size:.85rem !important; font-weight:600 !important;
}
.nav-toggle{display:none; background:none; border:none; font-size:1.4rem; cursor:pointer; color:var(--ink);}
@media (max-width:820px){
  .nav-links{
    position:absolute; top:100%; left:0; right:0;
    background:var(--paper); border-bottom:1px solid var(--line);
    flex-direction:column; align-items:flex-start; gap:1.1rem;
    padding:1.5rem 1.5rem 2rem; display:none;
  }
  .nav-links.open{display:flex;}
  .nav-toggle{display:block;}
}

/* ============================================
   HERO
   ============================================ */
.hero{padding:4.5rem 0 5rem;}
.hero .wrap{display:grid; grid-template-columns:1.1fr .9fr; gap:3.5rem; align-items:center;}
@media (max-width:900px){ .hero .wrap{grid-template-columns:1fr; gap:2.5rem;} }

.hero h1{
  font-size:clamp(2.3rem, 5vw, 3.4rem);
  font-weight:700;
  line-height:1.08;
  margin-bottom:1rem;
}
.hero h1 .accent{color:var(--accent);}
.hero .role{
  font-size:1.15rem; font-weight:500; color:var(--muted); margin-bottom:1.4rem;
}
.hero .desc{color:var(--muted); max-width:480px; margin-bottom:2.1rem;}

.btn-row{display:flex; gap:.9rem; flex-wrap:wrap;}
.btn{
  display:inline-flex; align-items:center; gap:.5rem;
  padding:.75rem 1.5rem; border-radius:999px;
  font-weight:600; font-size:.92rem;
  border:1.5px solid transparent; cursor:pointer;
}
.btn-primary{background:var(--ink); color:var(--paper);}
.btn-primary:hover{background:var(--accent-ink);}
.btn-ghost{border-color:var(--line); color:var(--ink);}
.btn-ghost:hover{border-color:var(--accent); color:var(--accent-ink);}

/* Status panel — signature element */
.status-panel{
  background:#fff;
  border:1px solid var(--line);
  border-radius:var(--radius);
  box-shadow:0 20px 45px -28px rgba(20,23,28,.25);
  overflow:hidden;
}
.status-bar{
  display:flex; align-items:center; justify-content:space-between;
  padding:.7rem 1rem;
  background:var(--paper-dim);
  border-bottom:1px solid var(--line);
  font-family:'JetBrains Mono', monospace;
  font-size:.72rem;
  color:var(--muted);
}
.status-bar .dots{display:flex; gap:5px;}
.status-bar .dots span{width:9px; height:9px; border-radius:50%; background:#D8D4C6;}
.status-body{padding:1.35rem 1.5rem;}
.status-row{
  display:flex; justify-content:space-between; gap:1rem;
  padding:.55rem 0;
  border-bottom:1px dashed var(--line);
  font-family:'JetBrains Mono', monospace;
  font-size:.85rem;
}
.status-row:last-child{border-bottom:none;}
.status-row .k{color:var(--muted);}
.status-row .v{font-weight:600; text-align:right;}
.status-row .v.pill{
  background:var(--accent-soft); color:var(--accent-ink);
  padding:.15rem .6rem; border-radius:999px; font-size:.78rem;
}

/* ============================================
   ABOUT
   ============================================ */
.about-grid{display:grid; grid-template-columns:1.1fr .9fr; gap:3rem; align-items:start;}
@media (max-width:900px){ .about-grid{grid-template-columns:1fr;} }
.about-text p{color:var(--muted); font-size:1.02rem; margin-bottom:1.1rem;}
.about-text strong{color:var(--ink);}

.info-card{
  background:#fff; border:1px solid var(--line); border-radius:var(--radius);
  padding:1.75rem;
}
.info-row{display:flex; gap:1rem; padding:.85rem 0; border-bottom:1px solid var(--paper-dim);}
.info-row:last-child{border-bottom:none;}
.info-row .ic{
  width:34px; height:34px; border-radius:8px; flex-shrink:0;
  background:var(--accent-soft); color:var(--accent-ink);
  display:flex; align-items:center; justify-content:center; font-size:1rem;
}
.info-row .lbl{font-size:.72rem; text-transform:uppercase; letter-spacing:.05em; color:var(--muted); font-weight:700;}
.info-row .val{font-weight:600; font-size:.96rem; margin-top:.1rem;}

/* ============================================
   SKILLS
   ============================================ */
.skills-grid{display:grid; grid-template-columns:repeat(3, 1fr); gap:1.25rem;}
@media (max-width:768px){ .skills-grid{grid-template-columns:1fr;} }
.skill-card{
  background:#fff; border:1px solid var(--line); border-radius:var(--radius);
  padding:1.6rem;
}
.skill-card h4{font-size:1rem; margin-bottom:.9rem; display:flex; align-items:center; gap:.6rem;}
.skill-card h4 .num{font-family:'JetBrains Mono',monospace; font-size:.75rem; color:var(--amber);}
.chip-row{display:flex; flex-wrap:wrap; gap:.45rem;}
.chip{
  font-size:.78rem; font-family:'JetBrains Mono',monospace;
  background:var(--paper-dim); color:var(--ink);
  padding:.3rem .65rem; border-radius:6px; border:1px solid var(--line);
}

/* ============================================
   BUILD LOG (projects)
   ============================================ */
.log{border-left:2px solid var(--line); margin-left:.4rem;}
.log-entry{
  position:relative;
  padding:0 0 2.5rem 2.25rem;
}
.log-entry:last-child{padding-bottom:0;}
.log-entry::before{
  content:'';
  position:absolute; left:-2px; top:.35rem;
  width:9px; height:9px; border-radius:50%;
  background:var(--accent);
  transform:translateX(-50%);
  border:3px solid var(--paper);
  box-shadow:0 0 0 1px var(--accent);
}
.log-head{
  display:flex; align-items:baseline; gap:.75rem; flex-wrap:wrap; margin-bottom:.4rem;
}
.log-version{
  font-family:'JetBrains Mono',monospace; font-weight:700; font-size:.85rem;
  color:var(--accent-ink); background:var(--accent-soft);
  padding:.15rem .55rem; border-radius:6px;
}
.log-title{font-size:1.15rem; font-weight:700;}
.log-tag{
  font-family:'JetBrains Mono',monospace; font-size:.68rem; text-transform:uppercase;
  letter-spacing:.05em; color:var(--muted);
}
.log-desc{color:var(--muted); margin-bottom:.9rem; max-width:600px;}
.log-actions{display:flex; gap:1.25rem;}
.log-actions a{
  font-size:.86rem; font-weight:600; color:var(--ink);
  display:inline-flex; align-items:center; gap:.4rem;
  border-bottom:1.5px solid var(--line); padding-bottom:2px;
}
.log-actions a:hover{border-color:var(--accent); color:var(--accent-ink);}

/* ============================================
   CONTACT
   ============================================ */
.contact-panel{
  background:var(--ink); color:var(--paper);
  border-radius:20px; padding:3.25rem;
  display:grid; grid-template-columns:1fr 1fr; gap:3rem;
}
@media (max-width:900px){ .contact-panel{grid-template-columns:1fr; padding:2rem 1.5rem;} }
.contact-panel .eyebrow{color:#9FC2B3;}
.contact-panel .eyebrow::before{color:var(--amber);}
.contact-panel h2{color:var(--paper); margin-bottom:.75rem;}
.contact-panel p{color:#B7BEC7; max-width:420px; margin-bottom:1.75rem;}

.contact-links{display:flex; flex-direction:column; gap:0;}
.contact-links a{
  display:flex; align-items:center; gap:.9rem;
  padding:.95rem 0; border-bottom:1px solid rgba(255,255,255,.1);
  font-weight:600; color:var(--paper); font-size:.98rem;
}
.contact-links a:hover{color:#9FC2B3;}
.contact-links .ic{
  width:36px; height:36px; border-radius:9px;
  background:rgba(159,194,179,.14); color:#9FC2B3;
  display:flex; align-items:center; justify-content:center;
}

form .field{margin-bottom:1.1rem;}
form label{
  display:block; font-size:.8rem; font-weight:600; color:#B7BEC7; margin-bottom:.4rem;
}
form input, form textarea{
  width:100%; background:rgba(255,255,255,.06); border:1px solid rgba(255,255,255,.18);
  color:var(--paper); padding:.7rem .85rem; border-radius:8px; font-family:'Inter',sans-serif; font-size:.95rem;
}
form input::placeholder, form textarea::placeholder{color:#75808C;}
form input:focus, form textarea:focus{outline:none; border-color:var(--accent); background:rgba(255,255,255,.09);}
.btn-send{
  background:var(--paper); color:var(--ink); border:none;
  padding:.75rem 1.6rem; border-radius:999px; font-weight:700; cursor:pointer; font-size:.92rem;
}
.btn-send:hover{background:#9FC2B3;}
#formStatus{font-size:.85rem; margin-top:.8rem; color:#9FC2B3; min-height:1.2em;}

/* ============================================
   FOOTER
   ============================================ */
footer{
  padding:2rem 1.5rem; border-top:1px solid var(--line);
  display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:1rem;
  font-size:.85rem; color:var(--muted);
  max-width:1120px; margin:0 auto;
}
footer .mono{color:var(--muted);}

/* ============================================
   SCROLL PROGRESS BAR
   ============================================ */
.scroll-progress{
  position:fixed; top:0; left:0; height:3px; width:0%;
  background:var(--accent); z-index:100;
  transition:width .1s ease-out;
}

/* ============================================
   TOAST
   ============================================ */
.toast{
  position:fixed; bottom:1.5rem; left:50%; transform:translateX(-50%) translateY(20px);
  background:var(--ink); color:var(--paper);
  padding:.65rem 1.2rem; border-radius:999px;
  font-size:.85rem; font-weight:600;
  opacity:0; pointer-events:none;
  transition:opacity .25s ease, transform .25s ease;
  z-index:200;
}
.toast.show{opacity:1; transform:translateX(-50%) translateY(0);}

/* ============================================
   NAV ACTIVE STATE (scrollspy)
   ============================================ */
.nav-links a.active{color:var(--ink);}
.nav-links a.active::after{width:100%;}

/* ============================================
   TYPEWRITER
   ============================================ */
.type-cursor{
  color:var(--accent); font-weight:400;
  animation:blink 1s step-end infinite;
}

/* ============================================
   STATS ROW
   ============================================ */
.stats-row{
  display:grid; grid-template-columns:repeat(4, 1fr); gap:1rem;
  margin-top:2.5rem;
}
@media (max-width:768px){ .stats-row{grid-template-columns:repeat(2, 1fr);} }
.stat-card{
  background:#fff; border:1px solid var(--line); border-radius:var(--radius);
  padding:1.4rem 1.1rem; text-align:center;
}
.stat-num{
  font-family:'Space Grotesk', sans-serif; font-weight:700;
  font-size:1.9rem; color:var(--accent-ink); margin-bottom:.25rem;
}
.stat-label{font-size:.8rem; color:var(--muted); font-weight:500;}

/* ============================================
   BUILD LOG FILTERS
   ============================================ */
.log-filters{display:flex; gap:.6rem; flex-wrap:wrap; margin-bottom:2.5rem;}
.filter-btn{
  font-family:'JetBrains Mono', monospace; font-size:.8rem;
  background:#fff; border:1px solid var(--line); color:var(--muted);
  padding:.45rem 1rem; border-radius:999px; cursor:pointer;
  transition:.15s ease;
}
.filter-btn:hover{border-color:var(--accent); color:var(--accent-ink);}
.filter-btn.active{background:var(--ink); color:var(--paper); border-color:var(--ink);}
.log-entry.hidden{display:none;}

/* ============================================
   CONTACT: copy button + field errors
   ============================================ */
.contact-row{
  display:flex; align-items:center; justify-content:space-between; gap:.75rem;
  padding:.95rem 0; border-bottom:1px solid rgba(255,255,255,.1);
}
.contact-row a{padding:0; border-bottom:none; display:flex; align-items:center; gap:.9rem; font-weight:600; color:var(--paper); font-size:.98rem;}
.contact-row a:hover{color:#9FC2B3;}
.copy-btn{
  font-family:'JetBrains Mono', monospace; font-size:.72rem;
  background:rgba(255,255,255,.08); border:1px solid rgba(255,255,255,.2);
  color:#B7BEC7; padding:.3rem .7rem; border-radius:999px; cursor:pointer;
  transition:.15s ease; flex-shrink:0;
}
.copy-btn:hover{border-color:#9FC2B3; color:#9FC2B3;}

.field-error{
  display:block; min-height:1.1em; font-size:.78rem; color:#E8918A; margin-top:.35rem;
}
form input.invalid, form textarea.invalid{border-color:#E8918A;}

/* ============================================
   BACK TO TOP
   ============================================ */
.back-to-top{
  position:fixed; bottom:1.75rem; right:1.75rem;
  width:44px; height:44px; border-radius:50%;
  background:var(--ink); color:var(--paper);
  border:none; font-size:1.1rem; cursor:pointer;
  display:flex; align-items:center; justify-content:center;
  opacity:0; transform:translateY(12px); pointer-events:none;
  transition:opacity .25s ease, transform .25s ease, background .2s ease;
  z-index:80;
}
.back-to-top.show{opacity:1; transform:translateY(0); pointer-events:auto;}
.back-to-top:hover{background:var(--accent-ink);}

/* Focus visibility */
a:focus-visible, button:focus-visible, input:focus-visible, textarea:focus-visible{
  outline:2px solid var(--accent); outline-offset:2px;
}

/* Reveal */
.reveal{opacity:0; transform:translateY(18px); transition:opacity .55s ease, transform .55s ease;}
.reveal.in{opacity:1; transform:translateY(0);}

@media (prefers-reduced-motion: reduce){
  .reveal{opacity:1; transform:none; transition:none;}
  .cursor-dot{animation:none;}
}
