const browseButton = document.getElementById('browse-button');

browseButton.addEventListener('click', () => {
    window.location.href = 'browser.html';
});

    anime({
        targets: '.box',  
        translateX: 250, 
        duration: 1000, 
        easing: 'easeInOutQuad',
        direction: 'alternate',
        loop: true,
    });    
