const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

toggleBtn.addEventListener('click',function(){
    if(sidebar.classList.contains('show-container')){
        sidebar.classList.remove('show-slider');
    }
    else{
        sidebar.classList.add('show-slider');
    }
})
closeBtn.addEventListener('click',function(){
    sidebar.classList.remove('show-slider');
});