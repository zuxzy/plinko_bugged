const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var test;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;

function setup() {
  createCanvas(800,800);
  background(255);
  
  engine = Engine.create();
  world = engine.world;
  
  test = new Bolsek(200, 200, 10);

  for (var k = 0; k <=innerWidth; k = k + 80){
    divisions.push(new Delitev(k, height-divisionHeight/2, 10, divisionHeight))
  }

  for (var j = 40; j <=innerWidth; j=j+50){
    plinkos.push(new Pinnar(j, 75, 10));
  }

  for (var j = 15; j <=innerWidth; j=j+50){ 
    plinkos.push(new Pinnar(j, 175, 10));
  }

  for (var j = 40; j <=innerWidth; j=j+50){ 
    plinkos.push(new Pinnar(j, 275, 10));
  }

  for (var j = 15; j <=innerWidth; j=j+50){ 
    plinkos.push(new Pinnar(j, 375, 10));
  }
}



function draw() {
  background(0, 0, 0); 

  test.display();
  console.log(test);
  
  if(frameCount%60===0){
    particles.push(new Bolsek(random(0, 800), 10, 10));
  }

  for (var j = 0; j < particles.length; j++){
    particles[j].display();
  }

  for (var k = 0; k < divisions.length; k++){
    divisions[k].display();
  }

  for (var l = 0; l < plinkos.length; l++){
    plinkos[l].display();
  }

  drawSprites();
}