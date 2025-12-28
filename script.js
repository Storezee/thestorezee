document.addEventListener("DOMContentLoaded", () => {
    
    // Register GSAP Plugins
    gsap.registerPlugin(ScrollTrigger);

    // --- HERO SECTION ANIMATIONS ---
    const scenes = document.querySelectorAll('.story-scene');
    const dots = document.querySelectorAll('.progress-dot');
    let currentScene = 0;

    // Initial State
    showScene(0);

    function showScene(index) {
        // Reset all
        scenes.forEach(s => s.classList.remove('active'));
        dots.forEach(d => d.classList.remove('active'));

        // Activate current
        scenes[index].classList.add('active');
        dots[index].classList.add('active');
    }

    // Loop every 3.5 seconds
    setInterval(() => {
        currentScene = (currentScene + 1) % scenes.length;
        showScene(currentScene);
    }, 3500);

    // --- HOW IT WORKS ANIMATIONS ---

    // 1. Video Reveal
    gsap.from(".video-wrapper", {
        scrollTrigger: {
            trigger: ".video-wrapper",
            start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
    });

    // --- VIDEO HOVER LOGIC ---
    const videoWrapper = document.querySelector(".video-wrapper");
    const videoPlayer = document.getElementById("storezee-video");
    const muteBtn = document.getElementById("mute-btn");
    const muteIcon = muteBtn.querySelector("i");

    if (videoWrapper && videoPlayer && muteBtn) {
        
        // 1. Mouse Enter: Play Video
        videoWrapper.addEventListener("mouseenter", () => {
            videoWrapper.classList.add("active"); // Fades out thumb/overlay via CSS
            muteBtn.classList.remove("hidden");   // Show mute button
            videoPlayer.play();
        });

        // 2. Mouse Leave: Pause Video
        videoWrapper.addEventListener("mouseleave", () => {
            videoWrapper.classList.remove("active"); // Fades in thumb/overlay
            muteBtn.classList.add("hidden");         // Hide mute button
            videoPlayer.pause();
        });

        // 3. Mute Toggle Logic
        muteBtn.addEventListener("click", (e) => {
            e.stopPropagation(); // Prevent bubbling issues
            
            if (videoPlayer.muted) {
                videoPlayer.muted = false;
                muteIcon.classList.replace("ri-volume-mute-fill", "ri-volume-up-fill");
            } else {
                videoPlayer.muted = true;
                muteIcon.classList.replace("ri-volume-up-fill", "ri-volume-mute-fill");
            }
        });
    }

    // 2. Timeline Row Reveal (Fade in steps)
    const rows = document.querySelectorAll('.timeline-row');

    rows.forEach((row) => {
        // Fade in the row
        gsap.from(row, {
            scrollTrigger: {
                trigger: row,
                start: "top 75%", 
                toggleActions: "play none none reverse"
            },
            y: 50,
            opacity: 0,
            duration: 0.8
        });

        // Highlight the dot when the row is in focus
        ScrollTrigger.create({
            trigger: row,
            start: "top 60%",
            end: "bottom 60%",
            onEnter: () => row.classList.add('active'),
            onLeaveBack: () => row.classList.remove('active')
        });
    });

    // 3. Central Line Drawing Animation
    // This targets the new .line-fill div inside .timeline-line
    gsap.to(".line-fill", {
        height: "100%",
        ease: "none",
        scrollTrigger: {
            trigger: ".timeline",
            start: "top 60%",
            end: "bottom 80%",
            scrub: true 
        }
    });

    // --- ABOUT SECTION INTERACTIVITY ---

    // 1. Tab Switcher Logic
    const switchBtns = document.querySelectorAll('.switch-btn');
    const contentPanes = document.querySelectorAll('.content-pane');

    switchBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            switchBtns.forEach(b => b.classList.remove('active'));
            contentPanes.forEach(p => p.classList.remove('active'));
            btn.classList.add('active');
            const targetId = btn.getAttribute('data-target');
            document.getElementById(targetId).classList.add('active');
            
            // Refresh scroll triggers when tab switches (content height might change)
            ScrollTrigger.refresh();
        });
    });

    // 2. Animations for About Intro
    gsap.from(".about-intro", {
        scrollTrigger: {
            trigger: ".about-intro",
            start: "top 80%",
        },
        y: 30,
        opacity: 0,
        duration: 1
    });

    // 3. Animations for Value Cards
    // Ensure cards are visible by default (fallback if animation doesn't trigger)
    const valueCards = document.querySelectorAll(".value-card");
    valueCards.forEach(card => {
        gsap.set(card, {
            opacity: 1,
            y: 0
        });
    });

    // Create the animation with explicit fromTo for better control
    gsap.fromTo(".value-card", 
        {
            y: 50,
            opacity: 0
        },
        {
            scrollTrigger: {
                trigger: ".values-grid",
                start: "top 85%", 
                toggleActions: "play none none reverse",
                once: false
            },
            y: 0,
            opacity: 1,
            stagger: 0.2,
            duration: 0.8,
            immediateRender: false
        }
    );

    // Fallback function to ensure cards are visible
    function ensureValueCardsVisible() {
        const valuesGrid = document.querySelector(".values-grid");
        if (valuesGrid) {
            const rect = valuesGrid.getBoundingClientRect();
            const isInView = rect.top < window.innerHeight * 0.9;
            
            // If section is in view or very close, ensure cards are visible
            if (isInView) {
                gsap.to(".value-card", {
                    y: 0,
                    opacity: 1,
                    stagger: 0.15,
                    duration: 0.6,
                    delay: 0.1,
                    overwrite: true
                });
            }
        }
    }

    // Check immediately and after delays to catch different load scenarios
    setTimeout(ensureValueCardsVisible, 50);
    setTimeout(ensureValueCardsVisible, 300);
    setTimeout(ensureValueCardsVisible, 800);

    // --- CRITICAL FIX: Refresh ScrollTrigger after all images load ---
    window.addEventListener("load", () => {
        ScrollTrigger.refresh();
        // Final check after all assets are loaded
        setTimeout(ensureValueCardsVisible, 100);
    });

    // --- SERVICES SWIPER CONFIGURATION ---
    const swiper = new Swiper('.service-swiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,           // Enables infinite scroll
        centeredSlides: false, // Ensures left align
        grabCursor: true,     // Hand cursor on hover
        
        // Autoplay settings
        autoplay: {
            delay: 2500,
            disableOnInteraction: false, // Continues after you click arrows
            pauseOnMouseEnter: true      // Pauses when hovering over cards (User friendly)
        },
        
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
        },
        
        breakpoints: {
            640: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        }
    });

    // --- APP DOWNLOAD SECTION: Phone Tilt ---
    const downloadSection = document.getElementById('download-app');
    const tiltPhone = document.getElementById('tilt-phone');

    if(downloadSection && tiltPhone) {
        downloadSection.addEventListener('mousemove', (e) => {
            // Calculate mouse position relative to the section
            const rect = downloadSection.getBoundingClientRect();
            const x = e.clientX - rect.left; // X position within the element.
            const y = e.clientY - rect.top;  // Y position within the element.
            
            // Calculate rotation degrees (Moderate and Sweet)
            const xRotation = -((y - rect.height/2) / 20); // Rotate X based on Y movement
            const yRotation = (x - rect.width/2) / 20;   // Rotate Y based on X movement

            // Apply rotation with GSAP for smoothness
            gsap.to(tiltPhone, {
                rotationX: xRotation,
                rotationY: yRotation,
                duration: 0.5,
                ease: "power2.out",
                transformPerspective: 1000 // Adds depth
            });
        });

        // Reset when mouse leaves
        downloadSection.addEventListener('mouseleave', () => {
            gsap.to(tiltPhone, {
                rotationX: 0,
                rotationY: 0,
                duration: 1,
                ease: "elastic.out(1, 0.5)"
            });
        });
        
        // Entrance Animation for App Section
        gsap.from("#app-visual", {
            scrollTrigger: {
                trigger: "#download-app",
                start: "top 70%",
            },
            y: 100,
            opacity: 0,
            duration: 1,
            ease: "power2.out"
        });
    }

    // --- REVIEWS INFINITE SCROLL ---
    const reviewsSwiper = new Swiper('.reviews-swiper', {
        slidesPerView: 1.2, // Shows partial next slide to encourage scroll
        spaceBetween: 20,
        loop: true,
        centeredSlides: true,
        speed: 3000, // Speed of the continuous flow (higher = slower)
        autoplay: {
            delay: 0, // No delay between slides
            disableOnInteraction: false, // Keep moving even after touch
            pauseOnMouseEnter: true // Optional: Pause when reading
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                centeredSlides: false,
            },
            1024: {
                slidesPerView: 3.5, // Show more cards on desktop
                spaceBetween: 30,
                centeredSlides: false,
            }
        }
    });

   // --- CONTACT SECTION ANIMATIONS ---
    
    // 1. Staggered Entrance for Info Cards
    // Using a simpler trigger to ensure it fires reliably
    gsap.from(".contact-card", {
        scrollTrigger: {
            trigger: "#contact", // Triggering off the whole section instead of .contact-info
            start: "top 80%",
        },
        x: -50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        clearProps: "all" // Cleans up styles after animation (helps with layout bugs)
    });

    // 2. Form Slide Up
    gsap.from(".contact-form-wrapper", {
        scrollTrigger: {
            trigger: "#contact",
            start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        delay: 0.2,
        clearProps: "all"
    });

    // 3. Form Submit Interaction (Visual Feedback)
    const contactForm = document.getElementById('contact-form');
    if(contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button');
            const originalText = btn.innerHTML;
            
            // Loading State
            btn.innerHTML = '<i class="ri-loader-4-line"></i> Sending...';
            btn.style.opacity = '0.8';
            
            // Simulate Success
            setTimeout(() => {
                btn.style.backgroundColor = '#10b981'; // Green
                btn.style.borderColor = '#10b981';
                btn.innerHTML = '<i class="ri-check-line"></i> Message Sent!';
                contactForm.reset();
                
                // Reset button after 3s
                setTimeout(() => {
                    btn.style.backgroundColor = ''; 
                    btn.style.borderColor = '';
                    btn.style.opacity = '1';
                    btn.innerHTML = originalText;
                }, 3000);
            }, 1500);
        });
    }

    // --- CRITICAL FIX: Refresh ALL ScrollTriggers after page load ---
    // This ensures elements don't get stuck hidden
    window.addEventListener("load", () => {
        ScrollTrigger.refresh();
    });

    // --- FOOTER UTILITIES ---
    
    // 1. Auto Update Year
    const yearSpan = document.getElementById('year');
    if(yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 2. Scroll To Top Button Logic (only when footer is reached)
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    const footerEl = document.getElementById('footer');
    
    if(scrollTopBtn) {
        const updateScrollTopVisibility = () => {
            if (!footerEl) return;
            const footerStart = footerEl.offsetTop;
            const viewportBottom = window.scrollY + window.innerHeight;
            
            if (viewportBottom >= footerStart) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        };

        window.addEventListener('scroll', updateScrollTopVisibility);
        window.addEventListener('load', updateScrollTopVisibility);
        updateScrollTopVisibility();

        // Click to scroll up
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // --- CHAT WIDGET VISIBILITY AFTER HERO -----------------
    const heroSection = document.getElementById('hero');
    const chatWidget = document.getElementById('storezee-chat-widget');

    function updateChatVisibility() {
        if (!chatWidget || !heroSection) return;
        const triggerPoint = heroSection.offsetHeight - 80; // show once hero ends
        if (window.scrollY > triggerPoint) {
            chatWidget.classList.add('show');
        } else {
            chatWidget.classList.remove('show');
        }
    }

    window.addEventListener('scroll', updateChatVisibility);
    window.addEventListener('load', updateChatVisibility);
    updateChatVisibility();

    // --- STOREZEE AI CHATBOT LOGIC ---
    
    
    const chatToggle = document.getElementById('chat-toggle');
    const chatWindow = document.getElementById('chat-window');
    const chatMessages = document.getElementById('chat-messages');
    const chatForm = document.getElementById('chat-form');
    const chatInput = document.getElementById('chat-input');

    // 1. Knowledge Base (The "Brain")
    const knowledgeBase = {
        "price": "Our pricing starts at just ₹20/hour! It's affordable and flexible based on bag size.",
        "cost": "It costs very little! Around ₹20-40 per hour depending on the location and luggage size.",
        "safe": "Absolutely! We use tamper-proof seals, and every bag is insured up to ₹5000. Your luggage is 100% safe.",
        "secure": "Security is our priority. We verify all 'Rakshaks' and use digital locks.",
        "location": "We are present near major railway stations and tourist spots. Check the map in the app!",
        "where": "You can find us in Dhanbad and growing! Download the app to see exact spots.",
        "time": "Most locations are open 24/7, but check the specific shop details in the app.",
        "contact": "You can email us at support@storezee.com or call +91 70915 17586.",
        "app": "You can download the app from the Google Play Store link in the footer!",
        "default": "I'm not sure about that yet. You can ask about 'pricing', 'safety', or 'locations', or contact our human support!"
    };

    // 2. Toggle Chat Window
    if(chatToggle && chatWidget) {
        chatToggle.addEventListener('click', () => {
            chatWidget.classList.toggle('open');
            // If opening for first time (empty), show welcome
            if (chatMessages.children.length === 0) {
                addBotMessage("Hi there! 👋 I'm the Storezee Bot. How can I help you today?");
                addFaqChips();
            }
        });
    }

    // 3. Handle User Input
    if(chatForm) {
        chatForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const userText = chatInput.value.trim();
            if (!userText) return;

            // Add User Message
            addUserMessage(userText);
            chatInput.value = '';

            // Simulate "Thinking" delay
            setTimeout(() => {
                const botResponse = getBotResponse(userText.toLowerCase());
                addBotMessage(botResponse);
            }, 600);
        });
    }

    // --- Helper Functions ---------

    function addUserMessage(text) {
        const div = document.createElement('div');
        div.className = 'message user';
        div.textContent = text;
        chatMessages.appendChild(div);
        scrollToBottom();
    }

    function addBotMessage(text) {
        const div = document.createElement('div');
        div.className = 'message bot';
        div.textContent = text;
        chatMessages.appendChild(div);
        scrollToBottom();
    }

    function addFaqChips() {
        const div = document.createElement('div');
        div.className = 'faq-container';
        div.innerHTML = `
            <button class="faq-chip" onclick="handleFaq('Is it safe?')">Is it safe?</button>
            <button class="faq-chip" onclick="handleFaq('What is the price?')">What is the price?</button>
            <button class="faq-chip" onclick="handleFaq('Where are you located?')">Where are you located?</button>
        `;
        chatMessages.appendChild(div);
        scrollToBottom();
    }

    // Global function for FAQ clicks (needs to be on window)
    window.handleFaq = function(question) {
        addUserMessage(question);
        setTimeout(() => {
            const response = getBotResponse(question.toLowerCase());
            addBotMessage(response);
        }, 600);
    };

    function getBotResponse(input) {
        // Simple keyword matching
        if (input.includes('price') || input.includes('cost') || input.includes('pay')) return knowledgeBase['price'];
        if (input.includes('safe') || input.includes('security') || input.includes('stolen') || input.includes('trust')) return knowledgeBase['safe'];
        if (input.includes('location') || input.includes('where') || input.includes('city')) return knowledgeBase['location'];
        if (input.includes('time') || input.includes('open') || input.includes('hour')) return knowledgeBase['time'];
        if (input.includes('contact') || input.includes('support') || input.includes('call') || input.includes('number')) return knowledgeBase['contact'];
        if (input.includes('app') || input.includes('download')) return knowledgeBase['app'];
        if (input.includes('hello') || input.includes('hi')) return "Hello! Ready to travel hands-free?";
        
        return knowledgeBase['default'];
    }

    function scrollToBottom() {
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
});