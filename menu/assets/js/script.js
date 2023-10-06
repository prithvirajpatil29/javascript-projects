const food = [
    {
        id : 1,
        title : 'Dosa',
        category : 'breakfast',
        price : 'Rs.50',
        image : 'https://media.istockphoto.com/id/154919144/photo/south-indian-snacks-masala-dosa.jpg?s=1024x1024&w=is&k=20&c=2ofSdyeAuAK_QcLO9x43Z6EgMhRNoMtAxz93Jb1z_gc='
    },
    {
        id : 2,
        title : 'Idli',
        category : 'breakfast',
        price : 'Rs.40',
        image : 'https://images.pexels.com/photos/4331489/pexels-photo-4331489.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
        id : 3,
        title : 'Vada',
        category :  'breakfast',
        price : 'Rs.30',
        image : 'https://media.istockphoto.com/id/1436442278/photo/indian-snack-peas-masala-vada.jpg?s=1024x1024&w=is&k=20&c=UVJRi-Acau9n007qdnC6uCJnQpQZSaufFIcYZJl4xDU='
    },
    {
        id : 4,
        title : 'Puri',
        category :  'breakfast',
        price : 'Rs.60',
        image : 'https://images.unsplash.com/photo-1605719161691-5d9771fc144f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2042&q=80'
    },{
        id : 5,
        title : 'Roti',
        category : 'lunch',
        price : 'Rs.20',
        image : 'https://images.pexels.com/photos/9797029/pexels-photo-9797029.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
        id : 6,
        title : 'Naan',
        category : 'lunch',
        price : 'Rs.80',
        image : 'https://images.pexels.com/photos/10337726/pexels-photo-10337726.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
        id : 7,
        title : 'Paneer',
        category : 'lunch',
        price : 'Rs.180',
        image : 'https://images.pexels.com/photos/9609838/pexels-photo-9609838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
        id : 8,
        title : 'Biriyani',
        category : 'lunch',
        price : 'Rs.280',
        image : 'https://images.pexels.com/photos/11170284/pexels-photo-11170284.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
        id : 9,
        title : 'Milk Shake',
        category : 'Juice',
        price : 'Rs.80',
        image : 'https://images.pexels.com/photos/15357796/pexels-photo-15357796/free-photo-of-milk-shake-on-wooden-table.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
        id : 10,
        title : 'Mango Juice',
        category : 'Juice',
        price : 'Rs.50',
        image : 'https://images.pexels.com/photos/4955257/pexels-photo-4955257.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
        id : 11,
        title : 'Mango Juice',
        category : 'Juice',
        price : 'Rs.50',
        image : 'https://images.pexels.com/photos/4955257/pexels-photo-4955257.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
        id : 12,
        title : 'Lime Juice',
        category : 'Juice',
        price : 'Rs.30',
        image : 'https://images.pexels.com/photos/619166/pexels-photo-619166.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
        id : 13,
        title : 'Mixed Fruit Juice',
        category : 'Juice',
        price : 'Rs.120',
        image : 'https://images.pexels.com/photos/2531196/pexels-photo-2531196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
]
// const container = document.querySelector('.container');
    // container.innerHTML = '';
function displayfood(){
    const container = document.querySelector('.container');
    container.innerHTML = '';
    
    food.forEach(eachfood =>{
        const foodDiv = document.createElement('div');
        foodDiv.innerHTML = `
        <h4>Name : ${eachfood.title}</h4>
        <h4>Price : ${eachfood.price}</h4>
        <img src=${eachfood.image}>
    `;
    container.appendChild(foodDiv);
    })
}
const breakfastbtn = document.getElementById('breakfast');
breakfastbtn.addEventListener('click',()=>{
    const container = document.querySelector('.container');
    container.innerHTML = '';
    
    food.forEach(eachfood =>{
        if(eachfood.category === 'breakfast')
        {
            const foodDiv = document.createElement('div');
        foodDiv.innerHTML = `
        <h4>Name : ${eachfood.title}</h4>
        <h4>Price : ${eachfood.price}</h4>
        <img src=${eachfood.image}>
    `;
    container.appendChild(foodDiv);
        }
    });
});
displayfood();
const allFood = document.getElementById('all');
allFood.addEventListener('click',function(){
    displayfood();
});

const lunch = document.getElementById('lunch');
lunch.addEventListener('click',()=>{
    const container = document.querySelector('.container');
    container.innerHTML = '';
    
    food.forEach(eachfood =>{
        if(eachfood.category === 'lunch')
        {
            const foodDiv = document.createElement('div');
        foodDiv.innerHTML = `
        <h4>Name : ${eachfood.title}</h4>
        <h4>Price : ${eachfood.price}</h4>
        <img src=${eachfood.image}>
    `;
    container.appendChild(foodDiv);
        }
    });
});
const juice = document.getElementById('juice');
juice.addEventListener('click',()=>{
    const container = document.querySelector('.container');
    container.innerHTML = '';
    
    food.forEach(eachfood =>{
        if(eachfood.category === 'Juice')
        {
            const foodDiv = document.createElement('div');
        foodDiv.innerHTML = `
        <h4>Name : ${eachfood.title}</h4>
        <h4>Price : ${eachfood.price}</h4>
        <img src=${eachfood.image}>
    `;
    container.appendChild(foodDiv);
        }
    });
});