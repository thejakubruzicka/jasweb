const newsItems = [
    "Vítejte na nových stránkách Janixova Animačního Studia! • ",
    "Připravujeme pro vás zcela nový web s mnoha funkcemi • ",
    "Sledujte naše kanály pro nejnovější videa a aktuality • ",
    "JAS 24 přináší nejčerstvější zprávy ze světa JAS • ",
    "Nové animace již brzy na J.A.S. Animations • ",
    "Připojte se k naší komunitě na JAS Discord • ",
    "Archivní materiály najdete na korozelife Archiv • ",
    "Speciální obsah exkluzivně na NČT Extra • ",
    "Welcome to the new Janix Animation Studio website! • ",
    "We are preparing for you a brand new website with many features • ",
    "Follow our channels for the latest videos and news • ",
    "JAS 24 brings you the latest news from the world of JAS • ",
    "New animations coming soon to J.A.S. Animations • ",
    "Join our community on JAS Discord • ",
    "Archived material can be found on the Korozelife Archive • ",
    "Special content exclusively on NCT Extra • "
];

function updateTime() {
    const timeElement = document.getElementById('tv-time');
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    timeElement.textContent = `${hours}:${minutes}:${seconds}`;
}

function addGlitchEffect() {
    const glitchText = document.querySelector('.glitch-text');
    if (!glitchText) return;

    setInterval(() => {
        const shouldGlitch = Math.random() < 0.1;
        if (shouldGlitch) {
            const glitchDuration = 50 + Math.random() * 100;
            glitchText.style.transform = `translate(${Math.random() * 4 - 2}px, ${Math.random() * 4 - 2}px)`;
            glitchText.style.opacity = Math.random() * 0.5 + 0.5;
            glitchText.style.textShadow = `${Math.random() * 4 - 2}px ${Math.random() * 4 - 2}px #ff0000`;
            
            setTimeout(() => {
                glitchText.style.transform = 'translate(0)';
                glitchText.style.opacity = 1;
                glitchText.style.textShadow = '2px 2px #ff0000';
            }, glitchDuration);
        }
    }, 200);
}

function initializeNewsTicker() {
    const ticker = document.getElementById('news-ticker');
    const newsText = newsItems.join('');
    ticker.textContent = newsText.repeat(2); // Opakujeme text pro plynulé přehrávání

    let position = ticker.offsetWidth;
    
    function animate() {
        position--;
        ticker.style.transform = `translateX(${position}px)`;
        
        if (position < -ticker.scrollWidth / 2) {
            position = 0;
        }
        
        requestAnimationFrame(animate);
    }
    
    animate();
}

function addTVNoiseEffect() {
    const noise = document.querySelector('.noise');
    if (!noise) return;

    setInterval(() => {
        const shouldFlicker = Math.random() < 0.1;
        if (shouldFlicker) {
            const flickerDuration = 50 + Math.random() * 100;
            noise.style.opacity = Math.random() * 0.2;
            
            setTimeout(() => {
                noise.style.opacity = 0.05;
            }, flickerDuration);
        }
    }, 100);
}

function addScreenGlitch() {
    const screen = document.querySelector('.tv-screen');
    if (!screen) return;

    setInterval(() => {
        const shouldGlitch = Math.random() < 0.05;
        if (shouldGlitch) {
            const glitchDuration = 50 + Math.random() * 150;
            screen.style.transform = `translateX(${Math.random() * 2 - 1}px)`;
            screen.style.filter = `hue-rotate(${Math.random() * 360}deg) brightness(${1 + Math.random() * 0.2})`;
            
            setTimeout(() => {
                screen.style.transform = 'translateX(0)';
                screen.style.filter = 'none';
            }, glitchDuration);
        }
    }, 2000);
}

document.addEventListener('DOMContentLoaded', () => {
    initializeNewsTicker();
    addGlitchEffect();
    addTVNoiseEffect();
    addScreenGlitch();
    
    // Aktualizace času každou sekundu
    updateTime();
    setInterval(updateTime, 1000);
});