class BananoEnemy{
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 100;
        this.heigth = 200;
        this.health = 100;
        this.strength = 20;
        this.sprite = document.createElement('div');
        this.direction = 0;
        this.speed = 2;
    }
    move() {
        let nextX = this.x + this.speed * this.direction
        if (nextX <= 1200 - this.width && nextX >= 100) {
            this.x = nextX
            this.sprite.style.left = this.x + 'px'
            //this.checkColission();
        }
    }
    insertBananoEnemy() {
        this.sprite.setAttribute('id', 'bananoEnemy');
        this.sprite.style.top = this.y + 'px';
        this.sprite.style.left = this.x + 'px';
        this.sprite.style.width = this.width + 'px';
        this.sprite.style.height = this.heigth + 'px';
        board.appendChild(this.sprite);
    }
    /*
    checkColission() {
        if (banano.x > bananoEnemy.x + bananoEnemy.width ||
            banano.x + banano.width < bananoEnemy.x //||
            //banano.y > bananoEnemy.y + bananoEnemy.height ||
            //banano.y + banano.height < bananoEnemy.y
        ) {
            return true
        } else {
            //banano.x = bananoEnemy.x
            banano.direction = -1;
            bananoEnemy.direction = 1;
            console.log("collision detected")
            setTimeout(this.stop, 300)
            return false
        }
    }

    stop() {
        banano.direction = 0;
        bananoEnemy.direction = 0;
    }

    attack() {
        bananoEnemy.width -= 100
        this.sprite.style.width = this.width + 'px';
        setTimeout(() => {
            bananoEnemy.width += 100
            this.sprite.style.width = this.width + 'px';
        }
            , 20)
        if (this.checkColission() === false && banano.health > 0) {
            banano.health -= bananoEnemy.strength;
            console.log(banano.health);
            if (banano.health <= 0) {
                console.log("La vida de Player2 es: " + banano.health + ", ha muerto");

            }
        }
    }*/
}