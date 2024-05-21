class Player2 {
    constructor(x, y) {
        this.health = 100;
        this.x = x;
        this.y = y;
        this.strength = 20;
        this.speed;
        this.sprite = document.getElementsById('player2');
        this.direction = null;
    }
    move() {
        let nextX = this.x + this.speed * this.direction
        if (nextX <= 800 - this.width && nextX >= 0) {
            this.x = nextX
            this.sprite.style.left = this.x + 'px'
        }
    }
}