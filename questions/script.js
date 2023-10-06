const icon = document.querySelectorAll('i');
const para = document.querySelectorAll('p');
icon.forEach(icon => {


icon.addEventListener('click',function(){
    if(icon.classList.contains('fa-square-plus')){
        icon.classList.add('fa-square-minus');
        icon.classList.remove('fa-square-plus');
        para.forEach(para =>{
            para.style.display = 'block';
        })
    }
    else{
        icon.classList.remove('fa-square-minus');
        icon.classList.add('fa-square-plus');
        para.forEach(para =>{
            para.style.display = 'none';
        })
    }
})
})

