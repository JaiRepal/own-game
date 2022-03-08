var gameState=0


function preload(){
 bg=loadImage("bg.jpg")
 rocketimg=loadImage("rocket.png")
 playimg=loadImage("play.png")
 bulletimg=loadImage("bullet.png")
 e1=loadImage("e1.png")
 e2=loadImage("e2.png")

}

function setup(){
createCanvas(1520,700)
 
  play=createSprite(760,400,20,20)
  play.addImage(playimg)
  play.scale=0.3
  
  rocket=createSprite(70,350,20,20)
  rocket.addImage(rocketimg)
  rocket.scale=1.5


}

function draw(){
background(bg)
 if (gameState===0){
  play.visible=true
  rocket.visible=false
  if (mousePressedOver(play)){
    gameState=1
  }
 }

  if (gameState===1){
    play.visible=false
    rocket.visible=true
    if (keyDown("UP_ARROW")){
      rocket.y-=5
    }
    if (keyDown("DOWN_ARROW")){
      rocket.y+=5
    }
    enemy1()
    enemy2()
  }
 

 

  drawSprites()
}
function enemy1(){
  if (frameCount%150===0){
    enemy=createSprite(1550,random(50,650))
    enemy.addImage(e1)
    enemy.velocityX=-4
    enemy.scale=0.2
  }
}
function enemy2(){
  if (frameCount%150===0){
    enemy=createSprite(1850,random(50,650))
    enemy.addImage(e2)
    enemy.velocityX=-4
    enemy.scale=0.3
  }
}