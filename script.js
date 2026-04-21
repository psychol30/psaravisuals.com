/* ============================================================
   PSARA VISUALS — script.js
   ============================================================ */

// ── NAV: scrolled state ─────────────────────────────────────
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// ── NAV: mobile toggle ──────────────────────────────────────
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');
navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(l => l.addEventListener('click', () => navLinks.classList.remove('open')));

// ── PROJECT DATA ────────────────────────────────────────────
const PROJECTS = {
  seafront: {
    title: 'Seafront Villa Renovation',
    tag:   'Exterior · Interior',
    images: [
      'assets/images/projects/seafront villa renovation/1pegeia exterior pool.jpg',
      'assets/images/projects/seafront villa renovation/att.3P6bKJTmBnMKxieAxXRMS1v0BeuOSp3OdMKNXnrzLnU.jpg',
      'assets/images/projects/seafront villa renovation/att.7dkzM_ePgu3NCqR33-fJHjEvLSymHDN6hQx5XhX2d5g.jpg',
      'assets/images/projects/seafront villa renovation/att.GP34LcUJJiy7lCI6_ASdR3UA9XNr4GFEyupljcFATqk.jpg',
      'assets/images/projects/seafront villa renovation/att.MhEDTQrVFKbZBi7aRbLappae0bvHtLijcf6O87GDK04.jpg',
      'assets/images/projects/seafront villa renovation/att.Sp8YR_3fdb19eaJURIx5berKwPFfFTjhtkt5vg1wrTc.jpg',
      'assets/images/projects/seafront villa renovation/att.Y0v8n6v6IUf5RfMvB7eLpVogZeX3gJhD4jyBRoSFthY.jpg',
      'assets/images/projects/seafront villa renovation/att.c1sY63WkFXUnuurUNg4f6Im-7pUDMnNI7jb24IZTRMs.jpg',
      'assets/images/projects/seafront villa renovation/att.la4CXpmEpKq4RfpnngA2yRezSQb9_Ig7CErIv7sD3LY.jpg',
      'assets/images/projects/seafront villa renovation/att.lbMqXISmYx-atTx02p3kY6NSLRwww2aiHKH7E7nFwMQ.jpg',
      'assets/images/projects/seafront villa renovation/b0F2A9473-1683-4F7F-8A68-FB3DADC9F498.png',
      'assets/images/projects/seafront villa renovation/C2BD9B4D-4204-4D5C-8A23-2F8A82C7B8DC_1_105_c.jpeg',
      'assets/images/projects/seafront villa renovation/F4EC6A5E-7DA4-4654-A82F-8DC5A799C333_1_102_o.jpeg',
    ]
  },
  house: {
    title: 'House in Outskirts of Limassol',
    tag:   'Interior',
    images: [
      'assets/images/projects/house in outskirts of limassol/BC7BACC0-B745-4B6C-BA0B-48AF3BB8B283_1_105_c.jpeg',
      'assets/images/projects/house in outskirts of limassol/4C564A24-BF7F-46A0-89C6-B831255C04BD_1_105_c.jpeg',
      'assets/images/projects/house in outskirts of limassol/8D6827FA-098A-474A-969E-37D85EFC6ABB_1_105_c.jpeg',
      'assets/images/projects/house in outskirts of limassol/FA0ECCF6-A955-47DF-A3C9-5FB955C9BBFE_1_105_c.jpeg',
    ]
  },
  apartment: {
    title: 'Apartment Block, Limassol',
    tag:   'Interior · Exterior',
    images: [
      'assets/images/projects/apartment block in limassol/markaris exterior.png',
      'assets/images/projects/apartment block in limassol/MARKARIS 1.jpg',
      'assets/images/projects/apartment block in limassol/markaris 1.3 2026.png',
      'assets/images/projects/apartment block in limassol/markaris apt3.jpg',
      'assets/images/projects/apartment block in limassol/markaris 3.2.png',
      'assets/images/projects/apartment block in limassol/markaris guest wc.png',
      'assets/images/projects/apartment block in limassol/APT 1.jpg',
      'assets/images/projects/apartment block in limassol/flat 1.png',
      'assets/images/projects/apartment block in limassol/flat 1.11.png',
      'assets/images/projects/apartment block in limassol/flat 3.png',
      'assets/images/projects/apartment block in limassol/abc.jpg',
      'assets/images/projects/apartment block in limassol/73FA4EDE-2805-4439-8198-3999A5CE882D_1_105_c.jpeg',
      'assets/images/projects/apartment block in limassol/AB6BAF46-1DCA-4657-8E56-5BC62A78E47A_1_105_c.jpeg',
      'assets/images/projects/apartment block in limassol/B0778FD0-C305-4765-A7CC-88550E00109B_1_102_o.jpeg',
      'assets/images/projects/apartment block in limassol/E3C0578A-34DD-4D42-8982-85A8040895E4_1_105_c.jpeg',
      'assets/images/projects/apartment block in limassol/EB4AD033-30F8-4E54-BC64-FD1BE88EA9E9_1_102_o.jpeg',
    ]
  },
  padel: {
    title: 'Dream Padel Club',
    tag:   'Exterior · Design',
    images: [
      'assets/images/projects/PADEL design and renders/12view from court day.jpg',
      'assets/images/projects/PADEL design and renders/1courts view.jpg',
      'assets/images/projects/PADEL design and renders/side angle.jpg',
      'assets/images/projects/PADEL design and renders/entrance from road (dark).jpg',
      'assets/images/projects/PADEL design and renders/view from padel court.jpg',
      'assets/images/projects/PADEL design and renders/aerial 1.png',
      'assets/images/projects/PADEL design and renders/base new padel design 2026.jpg',
    ]
  },
  extension: {
    title: 'Apartment Extension, Limassol',
    tag:   'Exterior · Interior',
    images: [
      'assets/images/projects/apartment extension Limassol/MARINOS 2026 Q.jpg',
      'assets/images/projects/apartment extension Limassol/marinos 2 2026.jpg',
      'assets/images/projects/apartment extension Limassol/marinos 3 2026.jpg',
    ]
  },
  diagrams: {
    title: 'Diagrams & Concept Development',
    tag:   'Concept · Diagrams',
    images: [
      'assets/images/projects/diagrams/parklane VIP HOTEL.jpg',
      'assets/images/projects/diagrams/parklane hotel diagram 1.jpg',
    ]
  },
  pissouri: {
    title: 'Private Villa, Pissouri Bay',
    tag:   'Exterior · Interior',
    images: [
      'assets/images/projects/Private Villa In Pissouri Bay/ALL VIEW SLAVA 2.jpg',
      'assets/images/projects/Private Villa In Pissouri Bay/slava aerial.jpg',
      'assets/images/projects/Private Villa In Pissouri Bay/bedroom 1 slava.png',
      'assets/images/projects/Private Villa In Pissouri Bay/slava bedroom 1.1.jpg',
      'assets/images/projects/Private Villa In Pissouri Bay/kitchen1.png',
      'assets/images/projects/Private Villa In Pissouri Bay/kitchen 2.jpg',
      'assets/images/projects/Private Villa In Pissouri Bay/bathroom 3.png',
      'assets/images/projects/Private Villa In Pissouri Bay/TOP PLAN VIEW SLAVA.jpg',
    ]
  },
  winery: {
    title: 'Winery',
    tag:   'Exterior · Interior',
    images: [
      'assets/images/projects/Winery/mikis winery 1.png',
      'assets/images/projects/Winery/mikis winery back.png',
      'assets/images/projects/Winery/mikis winery fire.png',
      'assets/images/projects/Winery/plan view mikis.png',
    ]
  },
  pyrgos: {
    title: 'Concept Proposal — Multiple Houses',
    tag:   'Exterior · Concept',
    images: [
      'assets/images/projects/concept proposal for multiple houses/[yrgos aerial final.jpg',
      'assets/images/projects/concept proposal for multiple houses/pyrgos pool.png',
      'assets/images/projects/concept proposal for multiple houses/pyrgos 3.png',
      'assets/images/projects/concept proposal for multiple houses/pyrgos 6.png',
      'assets/images/projects/concept proposal for multiple houses/pyrgos4.png',
      'assets/images/projects/concept proposal for multiple houses/pyrgosss.png',
    ]
  },
  mountain: {
    title: 'Mountain House',
    tag:   'Exterior',
    images: [
      'assets/images/projects/mountain house/KOKKINOS FRONT2.jpg',
      'assets/images/projects/mountain house/KOKKINOS SIDE.png',
    ]
  },
  privatehouse: {
    title: 'Private House',
    tag:   'Exterior',
    images: [
      'assets/images/projects/private house/STEF4.jpg',
      'assets/images/projects/private house/STEF5.jpg',
    ]
  }
};

// ── PROJECT FILTERS ─────────────────────────────────────────
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    document.querySelectorAll('.project-card').forEach(card => {
      const tags = card.dataset.filter || '';
      card.classList.toggle('hidden', filter !== 'all' && !tags.split(' ').includes(filter));
    });
  });
});

// ── LIGHTBOX ────────────────────────────────────────────────
const lightbox = document.getElementById('lightbox');
const lbImg    = document.getElementById('lbImg');
const lbTitle  = document.getElementById('lbTitle');
const lbTag    = document.getElementById('lbTag');
const lbCounter= document.getElementById('lbCounter');
const lbThumbs = document.getElementById('lbThumbs');
const lbClose  = document.getElementById('lbClose');
const lbPrev   = document.getElementById('lbPrev');
const lbNext   = document.getElementById('lbNext');

let currentImages = [];
let currentIndex  = 0;

function openLightbox(projectKey) {
  const p = PROJECTS[projectKey];
  if (!p) return;

  currentImages = p.images;
  currentIndex  = 0;

  lbTitle.textContent = p.title;
  lbTag.textContent   = p.tag;

  // Build thumbnails
  lbThumbs.innerHTML = '';
  p.images.forEach((src, i) => {
    const img = document.createElement('img');
    img.src = src;
    img.className = 'lb-thumb' + (i === 0 ? ' active' : '');
    img.addEventListener('click', () => goTo(i));
    lbThumbs.appendChild(img);
  });

  goTo(0);
  lightbox.classList.add('open');
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function goTo(index) {
  currentIndex = (index + currentImages.length) % currentImages.length;
  lbImg.src = currentImages[currentIndex];
  lbCounter.textContent = `${currentIndex + 1} / ${currentImages.length}`;
  lbThumbs.querySelectorAll('.lb-thumb').forEach((t, i) => {
    t.classList.toggle('active', i === currentIndex);
  });
  // Scroll active thumb into view
  const active = lbThumbs.querySelector('.lb-thumb.active');
  if (active) active.scrollIntoView({ inline: 'nearest', behavior: 'smooth' });
}

// Project card clicks
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('click', () => openLightbox(card.dataset.project));
});

lbClose.addEventListener('click', closeLightbox);
document.getElementById('lightbox').querySelector('.lb-backdrop').addEventListener('click', closeLightbox);
lbPrev.addEventListener('click', () => goTo(currentIndex - 1));
lbNext.addEventListener('click', () => goTo(currentIndex + 1));

document.addEventListener('keydown', e => {
  if (!lightbox.classList.contains('open')) return;
  if (e.key === 'Escape')     closeLightbox();
  if (e.key === 'ArrowRight') goTo(currentIndex + 1);
  if (e.key === 'ArrowLeft')  goTo(currentIndex - 1);
});

// ── CONTACT FORM ─────────────────────────────────────────────
const form     = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');
form.addEventListener('submit', e => {
  e.preventDefault();
  if (!form.name.value.trim() || !form.email.value.trim() || !form.message.value.trim()) {
    formNote.style.color = '#e07070';
    formNote.textContent = 'Please fill in your name, email, and project brief.';
    return;
  }
  formNote.style.color = 'var(--accent)';
  formNote.textContent = "Message received — I'll be in touch within 24 hours.";
  form.reset();
});

// ── FADE-IN ON SCROLL ────────────────────────────────────────
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity   = '1';
        e.target.style.transform = 'translateY(0)';
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.service-card, .project-card, .process-step, .stat').forEach(el => {
    el.style.opacity    = '0';
    el.style.transform  = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });
}
