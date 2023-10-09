window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const anchors = document.querySelectorAll('nav a');

    if (window.scrollY > 0) {
        header.classList.add('scrolled');
        anchors.forEach(function(anc) {
            anc.style.color = '#000';
        });
    } else {
        header.classList.remove('scrolled');
        anchors.forEach(function(anc) {
            anc.style.color = '#fff';
        });
    }
});
