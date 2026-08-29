/* =========================================
   AHAD INTERIORS
   MAIN JAVASCRIPT
========================================= */


/* SERVICES */

const services = [

  {
    name: 'Wallpapers',
    slug: 'wallpapers',
    desc: 'Textures, patterns and feature-wall designs for expressive interiors.',
    img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85'
  },

  {
    name: 'Wooden Flooring',
    slug: 'wood',
    desc: 'Natural-looking grains, warm tones and refined flooring layouts.',
    img: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85'
  },

  {
    name: 'Vinyl Flooring',
    slug: 'vinyl',
    desc: 'Contemporary flooring looks with versatile colours and finishes.',
    img: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85'
  },

  {
    name: 'Curtains',
    slug: 'curtains',
    desc: 'Elegant fabrics, layers and window treatments that shape the room.',
    img: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85'
  },

  {
    name: 'All Types of Blinds',
    slug: 'blinds',
    desc: 'Roller, zebra, vertical, Venetian and other modern blind styles.',
    img: 'https://images.unsplash.com/photo-1617104678098-de229db51175?auto=format&fit=crop&w=1200&q=85'
  },

  {
    name: 'Sofa Poshish',
    slug: 'sofa',
    desc: 'Upholstery textures, tones and styling for a refreshed seating look.',
    img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=85'
  },

  {
    name: 'Wall Panelling',
    slug: 'panelling',
    desc: 'Fluted, geometric, textured and feature-wall panel concepts.',
    img: 'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1200&q=85'
  }

];


/* GALLERY IMAGES */

const galleryImages = [

  [
    'Wallpapers',
    'Luxury textured feature wall',
    'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=85'
  ],

  [
    'Wallpapers',
    'Contemporary pattern',
    'https://images.unsplash.com/photo-1615529162924-f8605388461d?auto=format&fit=crop&w=1000&q=85'
  ],

  [
    'Wallpapers',
    'Warm neutral interior',
    'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=85'
  ],

  [
    'Wooden Flooring',
    'Natural oak atmosphere',
    'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=85'
  ],

  [
    'Wooden Flooring',
    'Deep wood tones',
    'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85'
  ],

  [
    'Wooden Flooring',
    'Modern floor detail',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85'
  ],

  [
    'Vinyl Flooring',
    'Stone-inspired finish',
    'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=85'
  ],

  [
    'Vinyl Flooring',
    'Modern light finish',
    'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=85'
  ],

  [
    'Vinyl Flooring',
    'Contemporary flooring',
    'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1000&q=85'
  ],

  [
    'Curtains',
    'Layered window styling',
    'https://images.unsplash.com/photo-1617104678098-de229db51175?auto=format&fit=crop&w=1000&q=85'
  ],

  [
    'Curtains',
    'Soft sheer layers',
    'https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1000&q=85'
  ],

  [
    'Curtains',
    'Statement drapery',
    'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=1000&q=85'
  ],

  [
    'All Types of Blinds',
    'Modern roller blinds',
    'https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=1000&q=85'
  ],

  [
    'All Types of Blinds',
    'Wood-look blinds',
    'https://images.unsplash.com/photo-1617104678098-de229db51175?auto=format&fit=crop&w=1000&q=85'
  ],

  [
    'All Types of Blinds',
    'Contemporary window finish',
    'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85'
  ],

  [
    'Sofa Poshish',
    'Textured upholstery',
    'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=85'
  ],

  [
    'Sofa Poshish',
    'Warm neutral seating',
    'https://images.unsplash.com/photo-1550226891-ef816aed4a98?auto=format&fit=crop&w=1000&q=85'
  ],

  [
    'Sofa Poshish',
    'Classic upholstered look',
    'https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&w=1000&q=85'
  ],

  [
    'Wall Panelling',
    'Fluted feature wall',
    'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1000&q=85'
  ],

  [
    'Wall Panelling',
    'Contemporary TV wall',
    'https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1000&q=85'
  ],

  [
    'Wall Panelling',
    'Decorative texture',
    'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85'
  ]

];


/* PROJECTS */

const projectImages = [

  [
    'Living Room',
    'Wallpapers + Wall Panelling',
    'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1400&q=85'
  ],

  [
    'Bedroom',
    'Curtains + Flooring',
    'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=85'
  ],

  [
    'Lounge',
    'Sofa Poshish',
    'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=85'
  ],

  [
    'Contemporary Space',
    'Blinds + Flooring',
    'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85'
  ]

];


/* HERO IMAGES */

const heroImages = [

  'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2200&q=90',

  'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=2200&q=90',

  'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=2200&q=90',

  'https://images.unsplash.com/photo-1617104678098-de229db51175?auto=format&fit=crop&w=2200&q=90'

];


/* SECTION IMAGES */

const sectionImages = {

  about:
    'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=90',

  statement:
    'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=2200&q=90',

  flooring:
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=90',

  window:
    'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=90'

};


/* HELPERS */

const $ = (selector, root = document) =>
  root.querySelector(selector);


const $$ = (selector, root = document) =>
  [...root.querySelectorAll(selector)];


/* =========================================
   MOBILE NAVIGATION
========================================= */

const header = $('#siteHeader');

window.addEventListener('scroll', () => {

  header.classList.toggle(
    'scrolled',
    window.scrollY > 60
  );

});


const menuToggle = $('#menuToggle');

const menuClose = $('#menuClose');

const mobileMenu = $('#mobileMenu');

const menuBackdrop = $('#menuBackdrop');


function toggleMenu(open) {

  mobileMenu.classList.toggle(
    'open',
    open
  );

  menuBackdrop.classList.toggle(
    'open',
    open
  );

  mobileMenu.setAttribute(
    'aria-hidden',
    String(!open)
  );

  menuToggle.setAttribute(
    'aria-expanded',
    String(open)
  );

  document.body.classList.toggle(
    'lock',
    open
  );

}


menuToggle.addEventListener(
  'click',
  () => toggleMenu(true)
);


menuClose.addEventListener(
  'click',
  () => toggleMenu(false)
);


menuBackdrop.addEventListener(
  'click',
  () => toggleMenu(false)
);


$$('.mobile-menu a').forEach(a => {

  a.addEventListener(
    'click',
    () => toggleMenu(false)
  );

});


/* =========================================
   HERO SLIDER
========================================= */

const heroSlides = $('#heroSlides');

const heroDots = $('#heroDots');


heroImages.forEach((src, i) => {

  const slide = document.createElement('div');

  slide.className =
    'hero-slide' +
    (i === 0 ? ' active' : '');

  slide.style.backgroundImage =
    `url("${src}")`;

  heroSlides.appendChild(slide);


  const dot =
    document.createElement('button');

  dot.setAttribute(
    'aria-label',
    `Go to hero slide ${i + 1}`
  );


  if (i === 0) {
    dot.classList.add('active');
  }


  dot.addEventListener(
    'click',
    () => goHero(i)
  );


  heroDots.appendChild(dot);

});


let heroIndex = 0;


function goHero(i) {

  const slides =
    $$('.hero-slide');

  const dots =
    $$('#heroDots button');


  heroIndex =
    (i + heroImages.length) %
    heroImages.length;


  slides.forEach((slide, index) => {

    slide.classList.toggle(
      'active',
      index === heroIndex
    );

  });


  dots.forEach((dot, index) => {

    dot.classList.toggle(
      'active',
      index === heroIndex
    );

  });

}


$('#heroPrev').addEventListener(
  'click',
  () => goHero(heroIndex - 1)
);


$('#heroNext').addEventListener(
  'click',
  () => goHero(heroIndex + 1)
);


setInterval(
  () => goHero(heroIndex + 1),
  6500
);


/* =========================================
   SECTION IMAGES
========================================= */

$$('[data-image]').forEach(el => {

  const key =
    el.dataset.image;

  if (sectionImages[key]) {

    el.style.backgroundImage =
      `url("${sectionImages[key]}")`;

  }

});


/* =========================================
   SERVICES
========================================= */

const serviceCarousel =
  $('#serviceCarousel');


services.forEach((service, i) => {

  serviceCarousel.insertAdjacentHTML(

    'beforeend',

    `
      <article class="service-card">

        <div
          class="service-card-image"
          style="background-image:url('${service.img}')"
        >

          <span class="service-number">
            0${i + 1}
          </span>

        </div>


        <div class="service-card-content">

          <h3>
            ${service.name}
          </h3>

          <p>
            ${service.desc}
          </p>

          <a
            href="#samples"
            data-category-link="${service.name}"
          >
            View Samples ↗
          </a>

        </div>

      </article>
    `

  );

});


$('#servicePrev').addEventListener(
  'click',
  () => {

    serviceCarousel.scrollBy({
      left: -340,
      behavior: 'smooth'
    });

  }
);


$('#serviceNext').addEventListener(
  'click',
  () => {

    serviceCarousel.scrollBy({
      left: 340,
      behavior: 'smooth'
    });

  }
);


/* =========================================
   GALLERY FILTERS
========================================= */

const categories = [
  'All',
  ...services.map(service => service.name)
];


const filterTabs =
  $('#filterTabs');


let currentCategory = 'All';

let visibleCount = 12;


categories.forEach(category => {

  const button =
    document.createElement('button');

  button.textContent =
    category;


  button.className =
    category === 'All'
      ? 'active'
      : '';


  button.addEventListener(
    'click',
    () => {

      currentCategory =
        category;

      visibleCount = 12;


      $$('#filterTabs button')
        .forEach(button =>
          button.classList.remove('active')
        );


      button.classList.add('active');


      renderGallery();

    }
  );


  filterTabs.appendChild(button);

});


const gallery =
  $('#gallery');


function renderGallery() {

  const list =
    currentCategory === 'All'

      ? galleryImages

      : galleryImages.filter(
          item =>
            item[0] === currentCategory
        );


  gallery.innerHTML = '';


  list
    .slice(0, visibleCount)
    .forEach((item, i) => {

      const element =
        document.createElement('article');


      element.className =
        'gallery-item';


      element.style.backgroundImage =
        `url("${item[2]}")`;


      element.innerHTML = `

        <div class="gallery-meta">

          <small>
            ${item[0]}
          </small>

          <strong>
            ${item[1]}
          </strong>

        </div>

      `;


      element.addEventListener(
        'click',
        () => openLightbox(list, i)
      );


      gallery.appendChild(element);

    });


  $('#loadMore').style.display =
    list.length > visibleCount
      ? 'block'
      : 'none';

}


$('#loadMore').addEventListener(
  'click',
  () => {

    visibleCount += 8;

    renderGallery();

  }
);


renderGallery();


/* =========================================
   CATEGORY LINKS
========================================= */

$$('[data-category-link]').forEach(link => {

  link.addEventListener(
    'click',
    () => {

      const category =
        link.dataset.categoryLink;


      setTimeout(() => {

        const button =
          $$('#filterTabs button')
            .find(
              button =>
                button.textContent === category
            );


        if (button) {
          button.click();
        }

      }, 50);

    }
  );

});


/* =========================================
   PROJECTS
========================================= */

const projectGrid =
  $('#projectGrid');


projectImages.forEach(project => {

  projectGrid.insertAdjacentHTML(

    'beforeend',

    `
      <article
        class="project-card"
        style="background-image:url('${project[2]}')"
      >

        <div>

          <small>
            ${project[1]}
          </small>

          <h3>
            ${project[0]}
          </h3>

        </div>

      </article>
    `

  );

});


/* =========================================
   LIGHTBOX
========================================= */

const lightbox =
  $('#lightbox');


const lightboxImage =
  $('#lightboxImage');


const lightboxCaption =
  $('#lightboxCaption');


let lbList = [];

let lbIndex = 0;


function showLb(index) {

  lbIndex =
    (index + lbList.length) %
    lbList.length;


  lightboxImage.src =
    lbList[lbIndex][2];


  lightboxImage.alt =
    lbList[lbIndex][1];


  lightboxCaption.textContent =
    `${lbList[lbIndex][0]} — ${lbList[lbIndex][1]}`;

}


function openLightbox(list, index) {

  lbList = list;

  showLb(index);

  lightbox.classList.add('open');

  lightbox.setAttribute(
    'aria-hidden',
    'false'
  );

  document.body.classList.add('lock');

}


function closeLightbox() {

  lightbox.classList.remove('open');

  lightbox.setAttribute(
    'aria-hidden',
    'true'
  );

  document.body.classList.remove('lock');

}


$('#lightboxClose').addEventListener(
  'click',
  closeLightbox
);


$('#lightboxPrev').addEventListener(
  'click',
  () => showLb(lbIndex - 1)
);


$('#lightboxNext').addEventListener(
  'click',
  () => showLb(lbIndex + 1)
);


lightbox.addEventListener(
  'click',
  event => {

    if (event.target === lightbox) {
      closeLightbox();
    }

  }
);


/* KEYBOARD LIGHTBOX CONTROLS */

document.addEventListener(
  'keydown',
  event => {

    if (!lightbox.classList.contains('open')) {
      return;
    }


    if (event.key === 'Escape') {
      closeLightbox();
    }


    if (event.key === 'ArrowLeft') {
      showLb(lbIndex - 1);
    }


    if (event.key === 'ArrowRight') {
      showLb(lbIndex + 1);
    }

  }
);


/* =========================================
   CONTACT FORM
========================================= */

$('#contactForm').addEventListener(
  'submit',
  event => {

    event.preventDefault();


    const data =
      new FormData(event.currentTarget);


    const name =
      data.get('name').trim();


    const phone =
      data.get('phone').trim();


    const email =
      data.get('email').trim();


    const service =
      data.get('service');


    const message =
      data.get('message').trim();


    const text =

      `Hello Ahad Interiors,

Name: ${name}
Phone: ${phone}
Email: ${email || 'Not provided'}
Required Service: ${service}
Message: ${message}`;


    $('#formStatus').textContent =
      'Your enquiry is ready. Opening WhatsApp…';


    window.open(

      `https://wa.me/923088800140?text=${encodeURIComponent(text)}`,

      '_blank',

      'noopener'

    );

  }
);


/* =========================================
   SCROLL REVEAL
========================================= */

const observer =
  new IntersectionObserver(

    entries =>

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add(
            'visible'
          );


          observer.unobserve(
            entry.target
          );

        }

      }),

    {
      threshold: .12
    }

  );


$$('.reveal').forEach(
  element =>
    observer.observe(element)
);


/* =========================================
   COPYRIGHT YEAR
========================================= */

$('#year').textContent =
  new Date().getFullYear();
