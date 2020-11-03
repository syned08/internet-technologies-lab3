const startButton = document.querySelector('#start-btn');
const stopButton = document.querySelector('#stop-btn');

const imgs = [
    {
        src: 'https://images.unsplash.com/photo-1599496287905-d48f26f9e7a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        alt: 'Church ceiling'
    },
    {
        src: 'https://images.unsplash.com/photo-1603614486387-276f74fcbe2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1047&q=80',
        alt: 'Old man reading newspaper'
    },
    {
        src: 'https://images.unsplash.com/photo-1593642532871-8b12e02d091c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
        alt: 'Tech desktop'
    },
    {
        src: 'https://images.unsplash.com/photo-1603673772872-81a9781af1b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        alt: 'Modern Buildings'
    },
    {
        src: 'https://images.unsplash.com/photo-1603646563581-a1bed742a949?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80',
        alt: 'Play'
    }
];

startButton.addEventListener('click', () => {
    const interval = document.querySelector('#interval').value;

    let intervalId = setInterval(changeImage, interval);

    stopButton.addEventListener('click', () => {
        clearInterval(intervalId);
    })
});

let counter = 1;
function changeImage() {
    const currentImage = document.querySelector('#image');
    currentImage.setAttribute('src', imgs[counter].src);
    currentImage.setAttribute('alt', imgs[counter].alt);
    counter++;

    if (counter === imgs.length) {
        counter = 0;
    }   
}

const headerBackground = document.querySelector('#header');
const mainBackground = document.querySelector('body');

setInterval(changeBackground, 1000);

function changeBackground() {
    let currentDate = new Date();
    let currentMinutes = currentDate.getSeconds();

    if (currentMinutes >= 0 && currentMinutes < 14) {
        headerBackground.setAttribute('style', 'background-color: #FDFAB5');
        mainBackground.setAttribute('style', 'background-color: #FDFAB5');
    } else if (currentMinutes >= 14 && currentMinutes < 29) {
        headerBackground.setAttribute('style', 'background-color: #BACBD2');
        mainBackground.setAttribute('style', 'background-color: #FFF9F1');
    } else if (currentMinutes >= 29 && currentMinutes < 45) {
        headerBackground.setAttribute('style', 'background-color: #BACBD2');
        mainBackground.setAttribute('style', 'background-color: #BACBD2');
    } else if (currentMinutes >= 45 && currentMinutes < 59) {
        headerBackground.setAttribute('style', 'background-color: #FFF9F1');
        mainBackground.setAttribute('style', 'background-color: #FFF9F1');
    }
}