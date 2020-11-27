const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var poly_img;
function preload() {
  poly_img = loadImage("polygon.png");
}

function setup() {
  createCanvas(800, 400);
  engine = Engine.create();
  world = engine.world;

  stand = new Ground(400, height, 800, 20);


  block1 = new Box(490, 365, 40, 40);
  block2 = new Box(530, 365, 40, 40);
  block3 = new Box(570, 365, 40, 40);
  block4 = new Box(610, 365, 40, 40);
  block5 = new Box(650, 365, 40, 40);
  block6 = new Box(690, 365, 40, 40);

  block7 = new Box(510, 325, 40, 40);
  block8 = new Box(550, 325, 40, 40);
  block9 = new Box(590, 325, 40, 40);
  block10 = new Box(630, 325, 40, 40);
  block11 = new Box(670, 325, 40, 40);

  block12 = new Box(530, 285, 40, 40);
  block13 = new Box(570, 285, 40, 40);
  block14 = new Box(610, 285, 40, 40);
  block15 = new Box(650, 285, 40, 40);

  block16 = new Box(550, 245, 40, 40);
  block17 = new Box(590, 245, 40, 40);
  block18 = new Box(630, 245, 40, 40);

  block19 = new Box(570, 205, 40, 40);
  block20 = new Box(610, 205, 40, 40);

  block21 = new Box(590, 165, 40, 40);

  var options = {
    restitution: 0.9,
    density: 1.5,
    friction: 0.6
  }
  polygon = Bodies.circle(200, 200, 20, options);
  World.add(world, polygon);
 // Matter.Body.setMass(polygon, polygon.mass * 2);
  // console.log(polygon.mass);
  slingshot = new SlingShot(this.polygon, { x: 200, y: 200 });




}

function draw() {
  background("black");
  Engine.update(engine);
  stand.display();

  fill("pink");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  fill("yellow");
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  fill("lightgreen");
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  fill("aquamarine");
  block16.display();
  block17.display();
  block18.display();
  fill("mistyrose");
  block19.display();
  block20.display();
  fill("lightskyblue");
  block21.display();

  imageMode(CENTER);
  image(poly_img, polygon.position.x, polygon.position.y, 40, 40);
  slingshot.display();

}

function mouseDragged() {
  Matter.Body.setPosition(polygon, { x: mouseX, y: mouseY });
}
function mouseReleased() {
  slingshot.fly();
}
function keyPressed() {
  if (keyCode === 32) {
    Matter.Body.setPosition(polygon, { x: 200, y: 200 });
    slingshot.attach(polygon);
  }
}