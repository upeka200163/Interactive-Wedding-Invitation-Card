document.addEventListener("DOMContentLoaded", () => {
    
    const frame = document.getElementById("envelopeFrame");
    const cardOverlay = document.getElementById("cardOverlay");
    const petalsContainer = document.getElementById("petalsContainer");
    const petalCount = 15; // මල් පෙති ගණන

    // 1. Generate Flower Petals Loop
    for (let i = 0; i < petalCount; i++) {
        createPetal();
    }

    function createPetal() {
        const petal = document.createElement("div");
        petal.classList.add("rose-petal");

        const size = Math.random() * 15 + 12;
        petal.style.width = `${size}px`;
        petal.style.height = `${size}px`;
        petal.style.left = `${Math.random() * 95}%`;

        const duration = Math.random() * 4 + 6; 
        const delay = Math.random() * 5;
        petal.style.animationDuration = `${duration}s`;
        petal.style.animationDelay = `${delay}s`;

        const petalColors = [
            'linear-gradient(135deg, #ff5e62, #ff9966)',
            'linear-gradient(135deg, #fa709a, #fee140)',
            'linear-gradient(135deg, #ff416c, #ff4b2b)',
            'linear-gradient(135deg, #e65c00, #f9d423)'
        ];
        petal.style.background = petalColors[Math.floor(Math.random() * petalColors.length)];

        petalsContainer.appendChild(petal);

        petal.addEventListener('animationiteration', () => {
            petal.style.left = `${Math.random() * 95}%`;
            petal.style.animationDuration = `${Math.random() * 4 + 6}s`;
        });
    }

    // 2. Envelope Click Action (Open & Close Sequencer)
    frame.addEventListener("click", () => {
        
        frame.classList.add("open");

        
        setTimeout(() => {
            cardOverlay.classList.add("show");
        }, 1000);

       
        setTimeout(() => {
           cardOverlay.classList.remove("show");
            
            
            setTimeout(() => {
                frame.classList.remove("open");
            }, 1000);

        }, 8000); 
    });
});