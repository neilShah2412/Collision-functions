var fixedRect,movingRect;
var g1,g2,g3g,g4;

function setup() {
  createCanvas(800,400);
 fixedRect=createSprite(300,300,50,80);
 movingRect=createSprite(400,200,80,30);
 fixedRect.shapeColor="lime"
 movingRect.shapeColor="lime"

 g1=createSprite(100,100,50,50);
 g1.shapeColor="green";
 
 g2=createSprite(200,100,50,50);
 g2.shapeColor="green";
 
 g3=createSprite(300,100,50,50);
 g3.shapeColor="green";
 
 g4=createSprite(400,100,50,50);
 g4.shapeColor="green";
 
 g2.velocityX=4;

}

function draw() {
  background("ÿellow");  

movingRect.x=World.mouseX;
movingRect.y=World.mouseY;


if (isTouching(movingRect,g2)) {
  g2.shapeColor="red"
  movingRect.shapeColor="red"

}

else {
  g2.shapeColor="lime"
  movingRect.shapeColor="lime"

}

bounceOff(movingRect,g2);


  drawSprites();

}

function isTouching( 
  o1,o2){

  if(o1.x-o2.x< o2.width/2+o1.width/2
    &&o2.x-o1.x<o2.width/2+o1.width/2
    &&o1.y-o2.y< o2.width/2+o1.width/2
    &&o2.y-o1.y<o2.width/2+o1.width/2
    
    ) {

      return true;
    }
  
  else {
  return false;
  
  }

  
}

function bounceOff(o1,o2) {
  if(o1.x-o2.x< o2.width/2+o1.width/2
    &&o2.x-o1.x<o2.width/2+o1.width/2){
      o1.velocityX=o1.velocityX*(-1);
      o2.velocityX=o2.velocityX*(-1);

  

    }

    if (o1.y-o2.y< o2.width/2+o1.width/2
      &&o2.y-o1.y<o2.width/2+o1.width/2) {
        o1.velocityY=o1.velocityY*(-1);
        o2.velocityY=o2.velocityY*(-1);
      }


}






