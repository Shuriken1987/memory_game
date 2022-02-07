let twoFliped = [];
 let icons = ['<i class="fab fa-js-square"></i>', '<i class="fab fa-php"></i>', '<i class="fab fa-laravel"></i>', '<i class="fab fa-react"></i>', '<i class="fab fa-python"></i>', '<i class="fab fa-angular"></i>', '<i class="fab fa-node"></i>', '<i class="fab fa-vuejs"></i>', '<i class="fab fa-bootstrap"></i>', '<i class="fab fa-css3"></i>', '<i class="fab fa-html5"></i>', '<i class="fab fa-sass"></i>', '<i class="fab fa-java"></i>', '<i class="fab fa-less"></i>', '<i class="fab fa-wordpress"></i>', '<i class="fab fa-symfony"></i>', '<i class="fas fa-atom"></i>', '<i class="fab fa-wix"></i>', '<i class="fab fa-js-square"></i>', '<i class="fab fa-php"></i>', '<i class="fab fa-laravel"></i>', '<i class="fab fa-react"></i>', '<i class="fab fa-python"></i>', '<i class="fab fa-angular"></i>', '<i class="fab fa-node"></i>', '<i class="fab fa-vuejs"></i>', '<i class="fab fa-bootstrap"></i>', '<i class="fab fa-css3"></i>', '<i class="fab fa-html5"></i>', '<i class="fab fa-sass"></i>', '<i class="fab fa-java"></i>', '<i class="fab fa-less"></i>', '<i class="fab fa-wordpress"></i>', '<i class="fab fa-symfony"></i>', '<i class="fas fa-atom"></i>', '<i class="fab fa-wix"></i>'];
let container = document.querySelector('.container');
render();
let cards = document.querySelectorAll('.card');
let counter = 0;
let inner = document.querySelector('.inner');
let percent = 100;
addClicks();



function flipCards() {
    this.removeEventListener('click', flipCards)
    twoFliped.push(this)
    counter++;
    let back = this.children[0];
    let front = this.children[1];
    back.style.transform = 'rotateY(0deg)';
    front.style.transform = 'rotateY(180deg)';
    if (counter == 2) {
        checkCards();
        counter = 0;
    }
}

function checkCards() {
    removeClicks();
    let front1 = twoFliped[0].children[1];
    let back1 = twoFliped[0].children[0];
    let front2 = twoFliped[1].children[1];
    let back2 = twoFliped[1].children[0];
    if (back1.innerHTML == back2.innerHTML) {
        twoFliped[0].className = 'win';
        twoFliped[1].className = 'win';
        cards = document.querySelectorAll('.card');
        if (cards.length == 0) {
            alert('Game over');
            removeClicks();
        }
        addClicks();
    } else {
        let loop = setTimeout(function () {
            back1.style.transform = 'rotateY(180deg)';
            front1.style.transform = 'rotateY(0deg)';
            back2.style.transform = 'rotateY(180deg)';
            front2.style.transform = 'rotateY(0deg)';
            addClicks();
        }, 700)
    }
    twoFliped = [];
}

function render() {
    let all = '';
    for (let i = 0; i < 36; i++) {                         
        let randomNumber = Math.floor(Math.random() * icons.length); 
        all += `<div class="card">
                 <div class="backcard">
                 ${icons[randomNumber]}
                 </div>
                 <div class="frontcard">
                 </div>
                </div>`;
        icons.splice(randomNumber, 1)
    }
    container.innerHTML = all;
}

function addClicks() {
    for (let i = 0; i < cards.length; i++) {
        cards[i].addEventListener('click', flipCards)
    }
}

function removeClicks() {
    for (let i = 0; i < cards.length; i++) {
        cards[i].removeEventListener('click', flipCards)
    }
}

// let loop = setInterval(function(){
//     percent--;
//     console.log(percent);
//     inner.style.width = `${percent}%`;
//     if (percent == 0) {
//         clearInterval(loop)
//         alert('Game over');
//         removeClicks();
//     }
// },1000);
