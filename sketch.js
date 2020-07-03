  
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;



function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  ground=new Ground(400,370,800,10);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}