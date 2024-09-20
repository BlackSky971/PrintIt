const slides = [
    {
        "image":"slide1.jpg",
        "tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image":"slide2.jpg",
        "tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image":"slide3.jpg",
        "tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image":"slide4.png",
        "tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
    }
]

const img = document.querySelector('.banner-img');
const tagLine = document.querySelector('p');
const dotsContainer = document.querySelector('.dots');
const arrowLeft = document.getElementById('arrowLeft');
const arrowRight = document.getElementById('arrowRight');

let indexSlide = 0;

arrowRight.addEventListener('click', function() {
    indexSlide++;
    updateSlide(indexSlide);
});

arrowLeft.addEventListener('click', function() {
    indexSlide--;
    updateSlide(indexSlide);
});

function updateSlide(index) {
  index = (index + slides.length) % slides.length;
  const slide = slides[index];
  img.src = `./assets/images/slideshow/${slide.image}`;
  tagLine.innerHTML = slide.tagLine;

  // Mise à jour des dots pour refléter la diapositive actuelle
  const dots = dotsContainer.querySelectorAll('.dot');
  dots.forEach((dot, i) => dot.classList.toggle('dot_selected', i === index));
}

// Création des bullet points (dots)
slides.forEach((_, i) => {
  const dot = document.createElement('div');
  dot.classList.add('dot');
  
  // Ajouter un event listener pour chaque dot
  dot.addEventListener('click', function() {
      indexSlide = i; // Met à jour l'index avec celui du dot cliqué
      updateSlide(indexSlide); // Affiche la bonne diapositive
  });
  
  dotsContainer.appendChild(dot);
});

// Initialiser avec la première diapositive
updateSlide(0);
