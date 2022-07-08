var shipImg1


function preload(){

seaImg = loadImage("sea.png");
shipImg1 = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");

}

function setup(){
  createCanvas(400,400);
  
sea = createSprite(400,200,400,10);
ship = createSprite (150, 200, 50, 50);
sea.addImage(seaImg)
sea.scale=0.5
sea.velocityX = -4

ship.addAnimation("movement", shipImg1)
ship.scale=0.3

}

function draw() {
  background("blue");
    drawSprites();

if(sea.x < 0){

  sea.x = 400
}



}
