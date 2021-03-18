class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
            if (gameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
                form = new Form()
                form.display();
            }
    player1 = createSprite(200,500);
    player1.addAnimation("runningLeft",player1Left);
    player1.addAnimation("runningRight",player1Right);
    player1.addAnimation("runningBack",player1Back);
    player1.scale = 0.5;
    
    
    
    player2 = createSprite(800,500);
    player2.addAnimation("runningLeft",player2Left);
    player2.addAnimation("runningRight",player2Right);
    player2.addAnimation("runningBack",player2Back);
    player2.scale = 0.5;

    players=[player1,player2];

        }
    
    play(){
        
        form.hide();

        Player.getPlayerInfo();
        image(back_img, 0, 0, 1000, 800);
        var x =100;
        var y=200;
        var index =0;
        drawSprites();

        for(var plr in allPlayers){
        
            index = index+1;
            x = 500-allPlayers[plr].distance;
            y=500;
            
            //console.log([index]);
            players[index -1].x = x;
            players[index - 1].y = y;

            // Differentiate the main player by printing
            // the name of the player on the basket. 
            if(index === player.index){   
                fill("black");
                textSize(25);
                text(allPlayers[plr].name ,x-25,y+25); 
            }

        }


        // Give movements for the players using arrow keys
        if (keyIsDown(RIGHT_ARROW) && player.index !== null) {
            player.distance -= 10
            player.update();
            player.setDirection("right");
            //player.changeAnimation()
            //player[this.index].changeAnimation("runningRight",player1Right);
        }
        if (keyIsDown(LEFT_ARROW) && player.index !== null) {
            player.distance += 10
            player.update();
            player.setDirection("left");
            //player[this.index].changeAnimation("runningLeft",player1Left);
        }
    


       
        
    }

    end(){
       console.log("Game Ended");
    }
}