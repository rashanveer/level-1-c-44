var backGround1,backGround2,ninja ,ninjaImage,invisibleGround,enemy,enemyImage,chest ,heart1,heart1Image,gameState = 0,gameOverFlag = 0 ;

function preload() {
backGround1 = loadImage("Images/Bg1.gif")
backGround2 = loadImage("Images/Bg2.gif")
ninjaImage = loadImage("Images/PlayerStanding.png")
enemyImage = loadImage("Images/EnemyStanding.png")
heart1Image = loadImage("Images/HeartL1.png")
}
function setup() {
  createCanvas(600, 400);
  ninja = createSprite(20,320,10,10)
  ninja.scale = 0.5
  ninja.addImage(ninjaImage)
  ninja.debug = true

  enemy = createSprite(500,320,10,10)
enemy.addImage(enemyImage)
enemy.scale = 0.8
enemy.debug = true
  
heart1 = createSprite (570,300,10,10)
heart1.scale = 0.05
heart1.addImage(heart1Image)
  invisibleGround = createSprite(300,355,600,10)
  invisibleGround.visible = false;
}
function draw() {
  if(keyDown("space")){
    ninja.velocityY = -6
  }
  if(keyDown(RIGHT_ARROW)&& gameOverFlag===0){
    ninja.x = ninja.x+2
  }
  if(keyDown(LEFT_ARROW)&& gameOverFlag===0){
    ninja.x = ninja.x - 2
  }
  ninja.velocityY = ninja.velocityY +0.8
  ninja.collide(invisibleGround)

  if(gameState===0){
    background("black")
    ninja.visible = false
    enemy.visible = false
    heart1.visible = false
    text("PRESS S TO START THE GAME",250,100)
    if(keyDown("S")){
      gameState = 1
    }
  }
  if(gameState===1){
    background(backGround1);
    ninja.visible = true
    enemy.visible = true
    heart1.visible = true
    if(enemy.x - ninja.x<350){
      enemy.velocityX = -2
    }
    if(ninja.isTouching(enemy)){
 
      enemy.velocityX = 0
      gameOverFlag = 1
    }
    if(gameOverFlag===1){
      fill("black")
      textSize(25)
      text("Sorry! Bull has attacked ninja, You Lose",250,100)
      text("Press R to restart",250,200)
    }
    if(keyDown("R")&& gameOverFlag===1){
      gameState = 0
    }
    if(ninja.isTouching(heart1)){
      gameState = 2
    }
  }
 if(gameState===2){
   background("red")
 }

 
  drawSprites();
}
 
