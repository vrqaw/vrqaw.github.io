document.addEventListener('DOMContentLoaded', () => {
    const bgGlow = document.getElementById('bg-glow');
    const path = window.location.pathname;
    const page = path.split("/").pop() || 'index.html';

    
    document.querySelectorAll('nav a').forEach(link => {
        const href = link.getAttribute('href');
        if (href === page || (page === 'index.html' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    
    anime({
        targets: 'aside',
        translateX: [-280, 0],
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 1000
    });

    anime({
        targets: '.brand',
        opacity: [0, 1],
        scale: [0.8, 1],
        delay: 400,
        easing: 'easeOutElastic(1, .8)'
    });

    
    const cards = document.querySelectorAll('.card');
    anime({
        targets: 'section',
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 800,
        easing: 'easeOutExpo'
    });

    anime({
        targets: cards,
        opacity: [0, 1],
        translateY: [30, 0],
        delay: anime.stagger(100, {start: 300}),
        easing: 'easeOutExpo'
    });

    
    document.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth) - 0.5;
        const y = (e.clientY / window.innerHeight) - 0.5;

        anime({
            targets: bgGlow,
            translateX: x * 50,
            translateY: y * 50,
            duration: 1000,
            easing: 'easeOutQuad'
        });
    });

    
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('mouseenter', () => {
            anime({
                targets: link,
                translateX: 5,
                duration: 200,
                easing: 'easeOutQuad'
            });
        });
        link.addEventListener('mouseleave', () => {
            anime({
                targets: link,
                translateX: 0,
                duration: 200,
                easing: 'easeOutQuad'
            });
        });
    });
});
