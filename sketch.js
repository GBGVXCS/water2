var player;
var obstacle, obs1, obs2, obs3;
var bg1, bg2, bg3, bg4, bg5, bg6;
var playerimg

function preload() {
  playerimg = loadImage("sprites/drop.jpg"); 
  bacimg = loadImage("sprites/bac2.jpg");
  chemimg = loadImage("sprites/chem.jpg");
  sewimg = loadImage("sprites/sewage.png");
  bgimg = loadImage("sprites/waterbg.png");
}
function setup() {
  createCanvas(800,400);
  player = createSprite(400, 200, 50, 50);
  player.addImage("playerimg", playerimg);
  player.scale = 0.20;
  obs1 = createSprite(400,0,50,50);
  obs1.addImage("obs1img",bacimg);
  obs1.scale = 0.15;
  obs2 = createSprite(250,0,50,50);
  obs2.addImage("obs2img",chemimg);
  obs2.scale = 0.15;
  obs3 = createSprite(600,0,50,50);
  obs3.addImage("obs3img",sewimg);
  obs3.scale = 0.10;
 

}

function draw() {
  background(bgimg);  
  drawSprites();
  if(keyDown(UP_ARROW)){
    console.log("working");
    player.velocityY = -5;
  }
  if(keyWentUp(UP_ARROW)){
    console.log("working");
    player.velocityY = 0;
  }
  if(keyDown(DOWN_ARROW)){
    console.log("working");
    player.velocityY = 5;
  }
  if(keyWentUp(DOWN_ARROW)){
    console.log("working");
    player.velocityY = 0;
  }
  if(keyDown(RIGHT_ARROW)){
    console.log("working");
    player.velocityX = 5;
  }
  if(keyWentUp(RIGHT_ARROW)){
    console.log("working");
    player.velocityX = 0;
  }
  if(keyDown(LEFT_ARROW)){
    console.log("working");
    player.velocityX = -5;
  }
  if(keyWentUp(LEFT_ARROW)){
    console.log("working");
    player.velocityX = 0;
  }
  
  
}