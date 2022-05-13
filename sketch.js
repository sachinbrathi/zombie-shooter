var playerImg,playerShootingImg,heart1Img,heart2Img,heart3Img,bgImg,zombieImg

function preload() {
 playerImg=loadImage("assets/player.png")
 playerShootingImg=loadImage("assets/player2.png")
heart1Img=loadImage("assets/heart_1.png")
heart2Img=loadImage("assets/heart_2.png")
heart3Img=loadImage("assets/heart_3.png")
bgImg=loadImage("assets/bg.jpeg")
zombieImg=loadImage("assets/zombie.png")
}

function setup(){
    var canvas = createCanvas(windowWidth,windowHeight);
    bg=createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
    bg.addImage(bgImg)
    bg.scale=1.1
    player=createSprite(displayWidth-1150,displayHeight-300,50,50)
    player.addImage(playerImg)
    player.scale=0.3
    heart1=createSprite(displayWidth-150,40,20,20)
    heart1.addImage(heart1Img)
    heart1.scale=0.3
    heart1.visibility=false
    heart2=createSprite(displayWidth-150,40,20,20)
    heart2.addImage(heart2Img)
    heart2.scale=0.3
    heart2.visibility=false
    heart3=createSprite(displayWidth-150,40,20,20)
    heart3.addImage(heart3Img)
    heart3.scale=0.3
    heart3.visibility=true
}

function draw(){
    background(0);
     drawSprites()  
}

