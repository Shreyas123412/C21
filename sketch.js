var Object1, Object2, Object3 ,Object4;

function setup() {
  createCanvas(1200,800);
  Object1 = createSprite(400, 100, 50, 80);
  Object1.shapeColor = "green";
  Object1.debug = true;
  Object2= createSprite(400, 800,80,30);
  Object2.shapeColor = "green";
  Object2.debug = true;
  Object3 = createSprite(100, 100, 50, 80);
  Object3.shapeColor = "green";
  Object3.debug = true;
  Object4= createSprite(100, 800,80,30);
  Object4.shapeColor = "green";
  Object4.debug = true;

  Object2.velocityY = -5;
  Object1.velocityY = +5;

}

function draw() {
  background(0,0,0);  
  Object3.x = World.mouseX
  Object3.y = World.mouseY
 if(isTouching(Object3,Object4)){
  Object3.shapeColor = "red";
  Object4.shapeColor = "red";
 } else {
  Object3.shapeColor = "green";
  Object4.shapeColor = "green";
 }
  

  

  bounceOff(Object1 , Object2);


  drawSprites();
}