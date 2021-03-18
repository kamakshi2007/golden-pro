var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;
var score =0;
var player, form, game;
var player1,player2;
var player1Left, player1Right, player1Back;
var player2Left, player2Right, player2Back;
var players;
var player_img;
var player1score =0;
var player2score =0;
var reset;

function preload(){
  back_img = loadImage("bgg.jpg");
  //rboy_img = loadImage("rboy.png");
  player1Left = loadAnimation("images/blueLeft1.png","images/blueLeft2.png","images/blueLeft3.png","images/blueLeft4.png");
  player1Right = loadAnimation("images/blueRight1.png","images/blueRight2.png","images/blueRight3.png","images/blueRight4.png");
  player1Back = loadAnimation("images/blueBack1.png","images/blueBack2.png","images/blueBack3.png","images/blueBack4.png");
  
  player2Left = loadAnimation("images/redLeft1.png","images/redLeft2.png","images/redLeft3.png","images/redLeft4.png");
  player2Right = loadAnimation("images/redRight1.png","images/redRight2.png","images/redRight3.png","images/redRight4.png");
  player2Back = loadAnimation("images/redBack1.png","images/redBack2.png","images/redBack3.png","images/redBack4.png");

 
}
function setup() {
  createCanvas(1000, 600);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

  reset = createButton("reset");
  reset.position(1000,50);
  
}

function draw() {
  background(back_img);

  // Add conditions for gameStates and playerCount
  background(back_img);
  if (gameState === 1) {
    clear(); 
    game.play();
  }
  if (gameState === 2) {
    game.end();
  }
  if (playerCount === 2) {
    game.update(1);
  }

  this.reset.mousePressed(()=>{
    player.updateCount(0);
    game.update(0);
    Player.update(0);
  });

}