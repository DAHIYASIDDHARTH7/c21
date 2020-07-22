var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(500, 100, 50, 80);
  fixedRect.shapeColor = "red";
  fixedRect.debug = true;
  movingRect = createSprite(400, 600,8,30);
  movingRect.shapeColor = "blue";
  movingRect.debug = true;

  movingRect.velocityY = -5;
 
  fixedRect = createSprite(600, 300, 50, 80);
  fixedRect.shapeColor = "red";
  fixedRect.debug = true;
  movingRect = createSprite(600, 1000,8,30);
  movingRect.shapeColor = "blue";
  movingRect.debug = true;

  movingRect.velocityY = -5;
}

function draw() {
  background(0,0,0);  
  if (movingRect.y - fixedRect.y < fixedRect.height/4 + movingRect.height/4
    && fixedRect.y - movingRect.y < fixedRect.height/4 + movingRect.height/4){
    movingRect.velocityY = movingRect.velocityY * (-2);
    fixedRect.velocityY = fixedRect.velocityY * (-2);
  }
  if (movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
    movingRect.velocityY = movingRect.velocityY * (-1);
    fixedRect.velocityY = fixedRect.velocityY * (-1);
    }
    if (movingRect.y - fixedRect.y < fixedRect.height/6 + movingRect.height/6
      && fixedRect.y - movingRect.y < fixedRect.height/6 + movingRect.height/6){
      movingRect.velocityY = movingRect.velocityY * (-3);
      fixedRect.velocityY = fixedRect.velocityY * (-3);
    }
    if (movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
      && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
      movingRect.velocityY = movingRect.velocityY * (-1);
      fixedRect.velocityY = fixedRect.velocityY * (-1);
      }
    drawSprites();
}