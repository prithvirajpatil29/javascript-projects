document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('button');
    const ul = document.querySelector('ul');
    const nav = document.querySelector('nav');
    const lis = document.querySelectorAll('li');

    button.addEventListener('click', function() {
        nav.style.flexDirection = 'column';
        if(ul.style.display === 'none'|| ul.style.display === ''){
            ul.style.display = 'block';
            lis.forEach(li => {
                li.style.display = 'block';
            });
        }
        else{
            ul.style.display = 'none';
            lis.forEach(li => {
                li.style.display = 'none';
            });
        }
        // Add the following line to hide the button
        button.style.display = 'block';
        button.style.position  = 'fixed';
        button.style.right = '20px'
    });
});
