let ballNumber = 0;
let mars = {
    x:100,
    y:300,
    width: 100,
    heigth: 100,
    img: document.querySelector('#mars'),
    vx: 0,
    vy: 0,
}
const balls = [];
const fps = 1000/60;
const g = 1;
let forceY = g; 
let forceX = 0; 
function time () {
    
    balls.forEach(drawBall);
    balls.forEach(moveBall);
    
    if (mars.y > window.innerWidth - mars.heigth/2) {
        mars.vy = -mars.vy;
        
    } else {
        mars.vy += forceY;
        mars.vx += forceX;
    }
    
}

function drawBall (ball) {
    ball.img.className = 'ball';
    ball.img.style.top = ball.y + 'px';
    ball.img.style.left = ball.x + 'px';
    
}

function moveBall(ball) {
    ball.y += ball.vy;
    ball.x += ball.vx;
}

function handleMouseClick (event) {
    const id = 'mars-' + ballNumber;
    document.body.innerHTML += `<img src="mars.png" id=${id}>` ;
    const newBall = {
        x: event.x, 
        y: event.y, 
        width:100, 
        heigth:100, 
        img: document.querySelector('#'+ id), 
        vx:0 ,
        vy:0
    };
    
    balls.push(newBall);
    ballNumber +=1;
 
}

document.addEventListener('click', handleMouseClick);
setInterval(time, fps);