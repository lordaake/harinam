// ===================================================================================
// == Enhanced Script for "The Divine Path of Chanting" - CORRECTED VERSION
// == This script uses direct, verbatim quotes from the source material.
// ===================================================================================

document.addEventListener('DOMContentLoaded', () => {

    // -------------------------------------------------------------------------------
    // -- SECTION 1: ORIGINAL & FUNCTIONAL CORE (Unchanged)
    // -------------------------------------------------------------------------------

    // 1.1: Scroll indicator
    const scrollIndicator = document.getElementById('scrollIndicator');
    if (scrollIndicator) {
        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = scrollTop / docHeight;
            scrollIndicator.style.transform = `scaleX(${scrollPercent})`;
        });
    }

    // 1.2: Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetElement = document.querySelector(this.getAttribute('href'));
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 1.3: Image gallery lightbox effect
    document.querySelectorAll('.gallery-image').forEach(img => {
        img.addEventListener('click', function () {
            const overlay = document.createElement('div');
            overlay.classList.add('lightbox-overlay'); // Use class for easier styling
            document.body.appendChild(overlay);

            const enlargedImg = document.createElement('img');
            enlargedImg.src = this.src;
            enlargedImg.classList.add('lightbox-image');
            overlay.appendChild(enlargedImg);

            // Trigger fade-in animation
            setTimeout(() => overlay.classList.add('visible'), 10);

            overlay.addEventListener('click', () => {
                overlay.classList.remove('visible');
                setTimeout(() => document.body.removeChild(overlay), 300);
            });
        });
    });

    // 1.4: Subtle parallax effect for floating elements
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.floating-lotus');
        const speed = 0.5;

        parallaxElements.forEach(element => {
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px) rotate(${scrolled * 0.1}deg)`;
        });
    });

    // 1.5: Smooth entrance animations for sections
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    document.querySelectorAll('.content-section, .simple-guidance, .advanced-section, .testimonial, .manjari-section').forEach(section => {
        observer.observe(section);
    });

    // -------------------------------------------------------------------------------
    // -- SECTION 2: NEW FUNCTIONALITY (With VERBATIM Content)
    // -------------------------------------------------------------------------------

    // 2.1: Dynamic "Nectar of Devotion" Quote Rotator -- CORRECTED with VERBATIM QUOTES
    // Assumes an HTML structure like: <div id="katha-rotator"><p id="katha-text"></p><cite id="katha-source"></cite></div>
    const kathaNectar = [
        {
            text: "Mor praneshwari Radha, Vrindavaneshwari, taar prananath boli bhoji Giridhari. (My life's queen is Radha, the Empress of Vrindavan. Knowing that Krishna is the Lord of Her life, I worship Him.)",
            source: "Discourse on the Mood of a Manjari"
        },
        {
            text: "I would lock my door day and night and just chant Harinam. I can't describe the bliss I felt... That is why I insist with so much force: whether you like it or not, do not leave the holy name. This is my practical experience, not something I just heard.",
            source: "Testimony of Sri Sri Vinod Bihari Das Baba Ji Maharaj"
        },
        {
            text: "Even if a person of the most evil conduct worships Me with undivided devotion, he should be regarded as righteous, for he has rightly resolved. The Lord accepts a devotee the moment they surrender, regardless of past sins or habits.",
            source: "The Gita on Surrender"
        },
        {
            text: "If after repeated chanting and listening to spiritual discourses (satsanga), the throat is not emotionally obstructed, the mind is not softened, and the eyes are not filled with tears of joy, 'then how do we know the mind of a sadhak has been purified?'.",
            source: "The Signs of Spiritual Progress"
        },
        {
            text: "True devotion is when the Lord's name is on your lips and His thought is in your mind with every moment.",
            source: "The Essence of Harinam Sadhana"
        }
    ];

    const kathaTextElem = document.getElementById('katha-text');
    const kathaSourceElem = document.getElementById('katha-source');
    if (kathaTextElem && kathaSourceElem) {
        let currentIndex = 0;
        const updateQuote = () => {
            kathaTextElem.style.opacity = '0';
            kathaSourceElem.style.opacity = '0';

            setTimeout(() => {
                currentIndex = (currentIndex + 1) % kathaNectar.length;
                kathaTextElem.textContent = `"${kathaNectar[currentIndex].text}"`;
                kathaSourceElem.textContent = `— ${kathaNectar[currentIndex].source}`;
                kathaTextElem.style.opacity = '1';
                kathaSourceElem.style.opacity = '1';
            }, 600);
        };
        // Initial call
        updateQuote();
        // Set interval for rotation
        setInterval(updateQuote, 12000); // Change quote every 12 seconds
    }

    // 2.2: Tooltips for Key Sanskrit Terms (Unchanged, based on definitions)
    const definitions = {
        Harinaam: "The chanting of the Holy Name of God. In Kali Yuga, it is considered the most essential and potent means to awaken devotional love (bhakti).",
        Namabhas: "The 'shadow' of the Holy Name. Chanting where the mind wanders to worldly thoughts. It purifies the heart, but at a very slow pace.",
        'Shuddha Naam': "Pure, unadulterated chanting with full concentration, free from all other thoughts. At this stage, the Holy Name is realized as non-different from the Lord Himself.",
        Manjari: "The closest handmaidens (nitya-sakhis) of Radharani. A manjari is like a spark from Radharani's own being, whose entire life is dedicated to Her pleasure.",
        Nishtha: "Unwavering faith and steadfastness in one's chosen mantra and path. It is crucial for making tangible spiritual progress.",
        Sadhana: "Spiritual practice or discipline undertaken to achieve a spiritual goal. Harinaam is the primary sadhana for this age.",
        Satsang: "Association with saints or spiritually elevated persons. It purifies consciousness and helps obscure the negative conditioning of past lives.",
        Maya: "The illusory energy of the Lord that binds the soul to the material world. It creates the deception that the temporary world and body are our true selves."
    };
    document.querySelectorAll('[data-tooltip]').forEach(elem => {
        let tooltipElem = null;
        elem.addEventListener('mouseenter', function (event) {
            const term = this.getAttribute('data-tooltip');
            if (definitions[term]) {
                tooltipElem = document.createElement('div');
                tooltipElem.className = 'tooltip-popup';
                tooltipElem.innerHTML = `<strong>${term}:</strong> ${definitions[term]}`;
                document.body.appendChild(tooltipElem);

                // Position tooltip
                const rect = this.getBoundingClientRect();
                tooltipElem.style.left = `${rect.left + window.scrollX}px`;
                tooltipElem.style.top = `${rect.bottom + window.scrollY + 5}px`;

                setTimeout(() => tooltipElem.classList.add('visible'), 10);
            }
        });
        elem.addEventListener('mouseleave', function () {
            if (tooltipElem) {
                tooltipElem.classList.remove('visible');
                setTimeout(() => tooltipElem.remove(), 300);
            }
        });
    });

    // 2.3: "Back to Top" Button
    const backToTopBtn = document.getElementById('backToTopBtn');
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        });
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});
