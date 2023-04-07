let mars = {
    x:100,
    y:300,
    width: 100,
    heigth: 100,
    img: document.querySelector('#mars'),
    vx: 0,
    vy: 0,
}

const fps = 1000/60;
const g = 1;
let forceY = g; 
let forceX = 0; 

function time () {
    mars.img.style.top = mars.y + 'px';
    mars.img.style.left = mars.x + 'px';
    mars.y += mars.vy;
    mars.x += mars.vx;
    mars.vy += forceY;
    mars.vx += forceX;
    if (mars.y > window.innerWidth - mars.heigth/2) {
        mars.vy = -mars.vy;
    }
    setTimeout(time, fps);
}

time();