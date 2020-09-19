var bullet,wall;
var speed,weight,thickness;


function setup() {
  createCanvas(1600,400);
  
  thickness = random(22,83);



bullet = createSprite(50,200,10,30);
bullet.shapeColor = "white";

wall = createSprite(1200,200,thickness,200);
wall.shapeColor = color(80,80,80);

}

function draw() {
  background("black");  
 
  speed = random(223,321);
  weight = random(30,52);


bullet.velocityX = speed;

var damage = 0.5 * weight * speed * speed /(thickness * thickness * thickness)

if(wall.x - bullet.x < bullet.width/2+wall.width/2){
bullet.velocityX = 0;
var deformation = 0.5*weight*speed*speed/22500;
}

if(damage<10){
bullet.shapeColor = "green";
}

if(damage>10){
bullet.shapeColor = "red";
}

  drawSprites();
}