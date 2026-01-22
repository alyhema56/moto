// Données des motos disponibles
const motos = [
    {
        id: 1,
        marque: "Yamaha",
        modele: "XTZ 125",
        prix: "1 200 000 FCFA",
        image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        annee: 2023,
        km: "0",
        carburant: "Essence",
        description: "Moto robuste idéale pour les routes de Banfora"
    },
    {
        id: 2,
        marque: "Honda",
        modele: "CG 125",
        prix: "950 000 FCFA",
        image: "https://images.unsplash.com/photo-1558981285-6f0c94958bb6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        annee: 2022,
        km: "5 000",
        carburant: "Essence",
        description: "Fiable et économique"
    },
    {
        id: 3,
        marque: "Suzuki",
        modele: "DR 200",
        prix: "1 500 000 FCFA",
        image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        annee: 2023,
        km: "0",
        carburant: "Essence",
        description: "Parfaite pour les chemins de terre"
    },
    {
        id: 4,
        marque: "Bajaj",
        modele: "Pulsar 150",
        prix: "1 100 000 FCFA",
        image: "https://images.unsplash.com/photo-1515275357-9e759bd8c892?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        annee: 2023,
        km: "0",
        carburant: "Essence",
        description: "Style sportif et performante"
    },
    {
        id: 5,
        marque: "TVS",
        modele: "Apache 160",
        prix: "1 300 000 FCFA",
        image: "https://images.unsplash.com/photo-1586173370713-5c3196a458a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        annee: 2023,
        km: "0",
        carburant: "Essence",
        description: "Moto moderne et confortable"
    },
    {
        id: 6,
        marque: "KTM",
        modele: "Duke 200",
        prix: "2 200 000 FCFA",
        image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        annee: 2023,
        km: "0",
        carburant: "Essence",
        description: "Haute performance"
    }
];

// Variables DOM
let motosContainer;
let menuToggle;
let navLinks;
let contactForm;

// Initialisation
document.addEventListener('DOMContentLoaded', function() {
    // Récupération des éléments
    motosContainer = document.querySelector('.motos-container');
    menuToggle = document.querySelector('.menu-toggle');
    navLinks = document.querySelector('.nav-links');
    contactForm = document.getElementById('contactForm');
    
    // Initialisation des fonctionnalités
    initMotos();
    initMenuToggle();
    initContactForm();
    initSmoothScroll();
    initAnimations();
});

// Afficher les motos
function initMotos() {
    motos.forEach(moto => {
        const motoCard = document.createElement('div');
        motoCard.className = 'moto-card';
        motoCard.innerHTML = `
            <img src="${moto.image}" alt="${moto.marque} ${moto.modele}" class="moto-image">
            <div class="moto-info">
                <h3>${moto.marque} ${moto.modele}</h3>
                <div class="moto-price">${moto.prix}</div>
                <ul class="moto-features">
                    <li><i class="fas fa-calendar-alt"></i> Année: ${moto.annee}</li>
                    <li><i class="fas fa-tachometer-alt"></i> Kilométrage: ${moto.km} km</li>
                    <li><i class="fas fa-gas-pump"></i> Carburant: ${moto.carburant}</li>
                </ul>
                <p>${moto.description}</p>
                <button class="btn btn-moto" onclick="contactezPourMoto('${moto.marque} ${moto.modele}')">
                    <i class="fas fa-info-circle"></i> Plus d'infos
                </button>
            </div>
        `;
        motosContainer.appendChild(motoCard);
    });
}

// Menu mobile
function initMenuToggle() {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuToggle.innerHTML = navLinks.classList.contains('active') 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-bars"></i>';
    });
    
    // Fermer le menu au clic sur un lien
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });
}

// Formulaire de contact
function initContactForm() {
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Récupération des valeurs
            const nom = this.querySelector('input[type="text"]').value;
            const telephone = this.querySelector('input[type="tel"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const message = this.querySelector('textarea').value;
            
            // Ici, normalement vous enverriez les données à un serveur
            // Pour cet exemple, on simule juste l'envoi
            
            // Réinitialisation du formulaire
            this.reset();
            
            // Message de confirmation
            alert(`Merci ${nom}! Votre message a été envoyé. Nous vous contacterons au ${telephone} dans les plus brefs délais.`);
            
            // Dans la réalité, vous utiliseriez :
            // fetch('votre-script-backend.php', {
            //     method: 'POST',
            //     body: JSON.stringify({nom, telephone, email, message}),
            //     headers: {'Content-Type': 'application/json'}
            // })
        });
    }
}

// Scroll fluide
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Animations au scroll
function initAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
            }
        });
    }, observerOptions);

    // Observer les cartes de motos
    document.querySelectorAll('.moto-card').forEach(card => {
        observer.observe(card);
    });

    // Observer les cartes de services
    document.querySelectorAll('.service-card').forEach(card => {
        observer.observe(card);
    });
}

// Fonction pour contacter pour une moto spécifique
function contactezPourMoto(moto) {
    const nom = prompt(`Vous êtes intéressé par la ${moto}?\nEntrez votre nom:`);
    if (nom) {
        const telephone = prompt(`Merci ${nom}! Entrez votre numéro de téléphone:`);
        if (telephone) {
            alert(`Merci ${nom}! Nous vous contacterons au ${telephone} pour vous donner plus d'informations sur la ${moto}.`);
            
            // Défilement vers la section contact
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                window.scrollTo({
                    top: contactSection.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Pré-remplir le formulaire (optionnel)
                if (contactForm) {
                    contactForm.querySelector('input[type="text"]').value = nom;
                    contactForm.querySelector('input[type="tel"]').value = telephone;
                    contactForm.querySelector('textarea').value = `Je suis intéressé par la ${moto}.`;
                }
            }
        }
    }
}

// Gestion du scroll pour la navbar
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

// Date automatique dans le footer
document.addEventListener('DOMContentLoaded', function() {
    const yearSpan = document.querySelector('.footer-bottom p');
    if (yearSpan) {
        const currentYear = new Date().getFullYear();
        yearSpan.innerHTML = yearSpan.innerHTML.replace('2023', currentYear);
    }
});