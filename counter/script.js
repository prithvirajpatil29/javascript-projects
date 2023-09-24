const increasebtn = document.getElementById('incbtn');
const decreasebtn = document.getElementById('decbtn');
const resetbtn = document.getElementById('resetbtn');
let count = 0;
const result = document.querySelector('span');
increasebtn.addEventListener('click',function(){
    count++;
    result.textContent = count;
    if(count > 0)
    {
        result.style.color = "green";
    }
})
decreasebtn.addEventListener('click',function(){
    count--;
    result.textContent = count;
    if(count < 0)
    {
        result.style.color = "red";
    }
})
resetbtn.addEventListener('click',function(){
    count = 0;
    result.textContent = count;
    result.style.color = "gold";
})
