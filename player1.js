class Player1 {
    constructor (x,y){
    this.x = x;
    this.y = y;
    this.width = 100;
    this.heigth = 200;
    this.health = 100;
    this.strength = 20;
    this.sprite = document.createElement('div')
    this.direction = 0;
    this.speed = 5;
    }

    insertPlayer1 () {
        this.sprite.setAttribute('id', 'player1');
        this.sprite.style.top = this.y + 'px';
        this.sprite.style.left = this.x + 'px';
        this.sprite.style.width = this.width + 'px';
        this.sprite.style.height = this.heigth + 'px';
        board.appendChild(this.sprite);
       
    }

    move() {
        let nextX = this.x + this.speed * this.direction
        if (nextX <= 800 - this.width && nextX >= 0) {
            this.x = nextX
            this.sprite.style.left = this.x + 'px'
        }
    }
}
