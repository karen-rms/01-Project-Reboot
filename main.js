let board = document.getElementById('board');

let canvas = document.getElementById('canvas')

let banano = new Banano (300,350);

let bananoEnemy= new BananoEnemy(800,350);

let soundFightScreen = new Audio('sound/fightScreen.mp3');

let soundJuan = new Audio('sound/matalaJuan.mp3');

let soundHitSixtolo = new Audio('sound/ogh.mp3');

let soundNenaDaconte = new Audio('sound/enQueEstrellaEstara.wav');

let soundVictory = new Audio('sound/victory.mp3');

let soundMuerte = new Audio('sound/sonidoMuerte.mp3');

let soundGuiri= new Audio('sound/pallela.mp3')

let startSound= new Audio('sound/Startsound.mp3')

let soundScreen = new Audio('sound/soundScreen.mp3');

let birdie = document.getElementById('bird')

let bananoHeart1 =document.getElementById('heartBanano1');
let bananoHeart2 = document.getElementById('heartBanano2');
let bananoHeart3 = document.getElementById('heartBanano3');
let bananoHeart4 = document.getElementById('heartBanano4');
let bananoHeart5 = document.getElementById('heartBanano5');

let bananoEnemyHeart1 = document.getElementById('heartBananoEnemy1');
let bananoEnemyHeart2 = document.getElementById('heartBananoEnemy2');
let bananoEnemyHeart3 = document.getElementById('heartBananoEnemy3');
let bananoEnemyHeart4 = document.getElementById('heartBananoEnemy4');
let bananoEnemyHeart5 = document.getElementById('heartBananoEnemy5');

let timerMovePlayer;

let timerMovePlayer2;

let readyInterval;

let removeInterval;

var timeLeft = 15;
var elem = document.getElementById('Timer');


let startScreen = document.getElementById('start');
let startButton = document.getElementById('start-button');
let credits = document.getElementById('credits-button'); // hay que trabajar en ello aún
let returnButton = document.getElementById('returnButton');

function startGame() {
    banano.insertBanano()
    bananoEnemy.insertBananoEnemy()
    timerMovePlayer = setInterval(() => banano.move(), 3) //esto hace que se mueva el jugador1
    timerMovePlayer2= setInterval(() => bananoEnemy.move(), 3) //esto hace que se mueva el jugador2
    startSound.play()
    startSound.volume=0.3;
    soundFightScreen.play()
    soundFightScreen.volume = 0.6;
}

window.addEventListener("keydown",function(e){
    switch (e.key){
        case 'a':
            banano.direction=-1
            break
        case 'd':
            banano.direction=1
            break
        case 'w':
            banano.attack()
            break
        case 'ArrowRight':
            bananoEnemy.direction=1
            break
        case 'ArrowLeft':
            bananoEnemy.direction=-1
            break
        case 'ArrowUp':
            bananoEnemy.attack()
            break
    }
}
)

window.addEventListener('keyup', function (e) { //esto hace que se quede quieto el pj dsps de clicar 1 vez
    banano.direction = 0;
    bananoEnemy.direction=0;
})

startButton.addEventListener("click", () => {
    console.log("Press");
    readyInterval= setTimeout(()=> readyScreen(),600);
    removeInterval = setTimeout(() => removeReadyScreen(), 5300);
    canvas.style.display = "block"
    start.style.display = "none"
    soundJuan.play();
    soundJuan.volume = 0.8;
    soundScreen.volume=0;
    let timerId = setTimeout(() => {
        setInterval(countdown, 1000);
    }, 4500);
    startGameInterval = setTimeout(()=> startGame(),5300)
    setTimeout(()=>requestAnimationFrame(animateBird),5300)
})

credits.addEventListener("click",()=>{
    start.style.filter="blur" + "("+ 4 + "px)";
    creditsBox=document.createElement('div');
    creditsBox.setAttribute('id','creditsScreen');
    body.appendChild(creditsBox);
    returnButton=document.createElement('button');
    returnButton.setAttribute('id', 'returnButton')
    creditsBox.appendChild(returnButton)
    returnButton.innerText = "Return";
    returnButton.addEventListener("click", () => {
        handleClick()
    })
    /*Solo se puede ejecutar 1 vez el return*/
})

menuButton.addEventListener("click",()=>{
    handleClick()
})

function handleClick() {
    window.location.reload();
  }

function readyScreen(){
    screen = document.createElement('div');
    screen.setAttribute('id','screenReady');
    board.appendChild(screen);
    body.style.backdropFilter= "blur" + "(" + 4 + "px)";
    
}

function removeReadyScreen(){
    let ready = document.getElementById("screenReady")
    ready.parentNode.removeChild(ready);
    startGame()
}
soundScreen.play();

function countdown() {
    if (timeLeft === 0) {
      elem.innerHTML = "";
      clearInterval(timerId); 
      
    } else {
      elem.innerHTML = timeLeft;
      timeLeft--;
    }
  }

  let startTime = null;
  const duration =10000; // Duración de la animación en milisegundos

  function animateBird(timestamp) {
    if (!startTime) startTime = timestamp;
    const elapsed = timestamp - startTime;
    const progress = elapsed / duration;
    birdie.style.display="block"
    
    // Mueve el pájaro a lo largo de la duración
    birdie.style.left = progress * 1100 + 'px';

    if (progress < 1) {
      // Sigue animando hasta que se alcance el final
      requestAnimationFrame(animateBird);
    } else {
     birdie.style.display ="none"
    }
  }

