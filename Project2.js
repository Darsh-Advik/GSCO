function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  
  background(0,0,0); 

  movingRect.x = World.mouseX; 
  movingRect.y = World.mouseY; 
  
  if(isTouching(movingRect, gameObject1)){ movingRect.shapeColor = "blue"; gameObject1.shapeColor = "blue"; } 
  
  else { movingRect.shapeColor = "green"; gameObject1.shapeColor = "green"; } 

  if(isTouching(movingRect, gameObject2)){ movingRect.shapeColor = "blue"; gameObject2.shapeColor = "blue"; }
  
  else { gameObject2.shapeColor = "green"; } 
  
  if(isTouching(movingRect, gameObject3)){ movingRect.shapeColor = "blue"; gameObject3.shapeColor = "blue"; } 
  
  else { gameObject3.shapeColor = "green"; } 

  if(isTouching(movingRect, gameObject4)){ movingRect.shapeColor = "blue"; gameObject4.shapeColor = "blue"; }
  
  else { gameObject4.shapeColor = "green"; } 

  if(isTouching(movingRect,fixedRect)){ movingRect.shapeColor = "blue"; fixedRect.shapeColor = "blue"; }
  
  else { fixedRect.shapeColor = "green"; } 

  drawSprites();
}

function isTouching(object1,object2){ 
    
  if (object1.x - object2.x < object2.width/2 + object1.width/2 && object2.x - object1.x < object2.width/2 + object1.width/2 && object1.y - object2.y < object2.height/2 + object1.height/2 && object2.y - object1.y < object2.height/2 + object1.height/2) 
  
  { return true; } 
  
  else { return false; } }
