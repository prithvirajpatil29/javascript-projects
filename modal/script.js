const knowmorebtn = document.getElementById('knowmore');
const cancelbtn = document.getElementById('cancel');
const container = document.querySelector('.container');
const container1 = document.querySelector('.container1');
knowmorebtn.addEventListener('click',function(){
    container.style.display = 'none';
    container1.style.display = 'flex';
});
cancelbtn.addEventListener('click',function(){
    container.style.display = 'flex';
    container1.style.display = 'none';
})