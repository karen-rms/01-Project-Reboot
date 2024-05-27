class Banano {
    constructor (x,y){
    this.x = x;
    this.y = y;
    this.width = 200;
    this.heigth = 200;
    this.health = 100;
    this.strength = 20;
    this.sprite = document.createElement('div')
    this.direction = 0;
    this.speed = 2;
    }
    insertBanano () {
        this.sprite.setAttribute('id', 'banano');
        this.sprite.style.top = this.y + 'px';
        this.sprite.style.left = this.x + 'px';
        this.sprite.style.width = this.width + 'px';
        this.sprite.style.height = this.heigth + 'px';
        board.appendChild(this.sprite);  
    }

    
    checkColission() {
        if (banano.x > bananoEnemy.x + bananoEnemy.width ||
            banano.x + banano.width < bananoEnemy.x //||
            //banano.y > bananoEnemy.y + bananoEnemy.height ||
            //banano.y + banano.height < bananoEnemy.y
        )
        {
            return true
        } else {
            //banano.x = bananoEnemy.x
            banano.direction= -1 ;
            bananoEnemy.direction = 1;
            //console.log("collision detected")
            setTimeout(this.stop,300)
            return false
        }
    }

    stop(){
        banano.direction = 0;
        bananoEnemy.direction = 0;
    }
        
    move() {
        let nextX = this.x + this.speed * this.direction;
        if (nextX <= 1100 - this.width && nextX >= 0) {
            this.x = nextX;
            this.sprite.style.left = this.x + 'px';
            this.checkColission();
        }
    }

    attack(){
        banano.width += 100
        this.sprite.style.width = this.width + 'px';
            setTimeout(() => { 
                banano.width -= 100
                this.sprite.style.width = this.width + 'px'; 
            }
            , 20)
        if (this.checkColission() === false && bananoEnemy.health > 0){
            bananoEnemy.health -= banano.strength;
            console.log(bananoEnemy.health);
            if (bananoEnemy.health <= 0){
                console.log("La vida de Player2 es: " + bananoEnemy.health + ", ha muerto");

            }
         }
        if(bananoEnemy.health===80){
            bananoEnemyHeart1.style.visibility = "hidden";
        }else if(bananoEnemy.health===60){
            bananoEnemyHeart2.style.visibility = "hidden";
        }else if(bananoEnemy.health===40){
            bananoEnemyHeart3.style.visibility = "hidden";
        }else if(bananoEnemy.health===20){
            bananoEnemyHeart4.style.visibility = "hidden";
        }else if(bananoEnemy.health===0){
            canvas.style.display="none";
            gameOver.style.display="block";
            winnerImage.style.backgroundImage="url(/img/bananoWinner.gif)";
            winnerImage.style.backgroundSize="cover";
            winner.innerText="Banano wins";
            bananoEnemyHeart5.style.visibility = "visible";
            bananoEnemyHeart4.style.visibility = "visible";
            bananoEnemyHeart3.style.visibility = "visible";
            bananoEnemyHeart2.style.visibility = "visible";
            bananoEnemyHeart1.style.visibility = "visible";
            bananoHeart5.style.visibility = "visible";
            bananoHeart4.style.visibility = "visible";
            bananoHeart3.style.visibility = "visible";
            bananoHeart2.style.visibility = "visible";
            bananoHeart1.style.visibility = "visible";
            bananoEnemy.health=100;
            banano.health=100;
            this.x=300;
            this.y=350;
            bananoEnemy.x=800;
            bananoEnemy.y=350;

        }
        }
    }
    

