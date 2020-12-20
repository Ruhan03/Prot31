const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var divisions, plinkos;
var particles;

var particles = []
var plinkos = []
var divisions = []
var divisionHeight=300
var score = 0;
  
function setup() {
  var canvas = createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2, height, width, 20);

  for (var k = 0; k < width; k=k+80)
  {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight))
  }

for (var j = 75; j <=width; j=j+50)
  {
    plinkos.push(new Plinko(j,75))
  }

  for (var j = 50; j <=width-10; j=j+50)
  {
    plinkos.push(new Plinko(j,175))
  }

  for (var j = 75; j <=width; j=j+50)
  {
    plinkos.push(new Plinko(j,275))
  }

  for (var j = 50; j <=width-10; j=j+50)
  {
    plinkos.push(new Plinko(j,375))
  }

}

function draw() {
  background(0);
  textSize(20)
  //text("Score : "+score, 20, 30)
  Engine.update(engine)
  ground.display();
  for (var i = 0; i < plinkos.length; i++) {

    plinkos[i].display();
  }
  if(frameCount%20===0){
    particles.push(new Particle(random(width/2-30, width/2+30), 10,10)); 
  }
  for (var j = 0; j < particles.length; j++) {

    particles[j].display();
  }
  for (var k = 0; k < divisions.length; k++) {

    divisions[k].display()
  }
  drawSprites();
}