const reviews = [
    {
      id: 1,
      name: 'susan smith',
      job: 'web developer',
      img: 'https://www.course-api.com/images/people/person-1.jpeg',
      text: "I'm baby meggings twee health  before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: 'anna johnson',
      job: 'web designer',
      img: 'https://www.course-api.com/images/people/person-2.jpeg',
      text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
      id: 3,
      name: 'peter jones',
      job: 'intern',
      img: 'https://www.course-api.com/images/people/person-4.jpeg',
      text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
      id: 4,
      name: 'bill anderson',
      job: 'the boss',
      img: 'https://www.course-api.com/images/people/person-3.jpeg',
      text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    },
];

let author = document.getElementById('author');
const job = document.getElementById('job');
const image = document.getElementById('person-img');
const text = document.getElementById('info');
const forwardbtn = document.querySelector('.forward-button');
const backwardbtn = document.querySelector('.back-button');
const surprisebtn = document.querySelector('.random-btn');

let currentReviewIndex = 0;
function showReview(index) {
    const review = reviews[index];
    author.innerHTML = review.name;
    job.innerHTML = review.job;
    image.src = review.img;
    text.innerHTML = review.text;
}

forwardbtn.addEventListener('click',function(){
    currentReviewIndex++;
    if (currentReviewIndex >= reviews.length) {
        currentReviewIndex = 0;
    }
    showReview(currentReviewIndex);
});

backwardbtn.addEventListener('click',function(){
    currentReviewIndex--;
    if (currentReviewIndex < 0) {
        currentReviewIndex = reviews.length - 1;
    }
    showReview(currentReviewIndex);
})
function getRandom(){
    return Math.floor(Math.random() * reviews.length);
}
surprisebtn.addEventListener('click',function(){
    let randomReviews =   reviews[getRandom()];
    author.innerHTML = randomReviews.name
    job.innerHTML = randomReviews.job;
    image.src = randomReviews.img;
    text.innerHTML = randomReviews.text;
})