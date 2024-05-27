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
        creditsScreen.style.display = "none";
        start.style.filter = "blur" + "(" + 0 + "px)";
    })
    /*Solo se puede ejecutar 1 vez el return*/
})

menuButton.addEventListener("click",()=>{
    gameOver.style.display="none";
    start.style.display="block";
    soundScreen.play();
    soundScreen.volume=0.5;
    soundVictory.volume=0;
})

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
