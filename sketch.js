// var fixedRect, movingRect;

var bullet, enemy, sheild, sheildimg, enemyimg;
var weight;
var speed;
var thickness;
var state = "serve";

function preload() {
  enemyimg = loadImage("enemy.png");
  sheildimg = loadImage("sheild.png");
  bulletimg = loadImage("bullet.png");
}

function setup() {
  createCanvas(1200,800);

  weight = random(22, 70);
  speed = random(40, 62);
  thickness = random(2.5, 7.5);

  sheild = createSprite(1000, 400, 50, 50);
  //sheild.shapeColor = "green";
  //sheild.debug = true;
  sheild.addImage(sheildimg);
  sheild.scale = 0.2;

  enemy = createSprite(400, 400, 80, 80);
  //enemy.shapeColor = "green";
  //enemy.debug = true;
  enemy.addImage(enemyimg);
  enemy.scale = 0.95;

  bullet = createSprite(410, 370, 10, 10);
  bullet.addImage(bulletimg);
  bullet.scale = 0.1;
}

function draw() {
  background("white");
  fill("red");

 if(hascollided(bullet)) {
   bullet.velocityX = 0;
   bullet.x = 50000;
   bullet.y = 50000;
   var damage = 0.5 * speed * speed/(thickness * thickness * thickness);
   state = "end";
 }

  if((keyDown("SPACE"))&&(state === "serve")) {
    bullet.velocityX = speed;
    state = "play";
  }

  drawSprites();

  reset();

  if((hascollided(bullet))&&(state === "end")) {
   text("speed = " + speed + "  weight = " + weight + "  thickness of bullet = " + thickness, 200, 600);
   text("total damage = " + damage, 200, 620);

  if(damage > 10) [
    text("THAT DIDN'T WORK. TRY AGAIN", 600, 700)
  ]

  if(damage > 10) [
    text("press enter to continue", 600, 720)
  ]

  if(damage < 10) [
    text("WOW!! THAT REALLY WORKED", 600, 700)
  ]

  if(damage < 10) [
    text("press enter to continue", 600, 720)
  ]
}
if(state === "serve") [
  text("press space to test", 600, 720)
]
}

function hascollided (ob1) {

  if(ob1.x >= 960) {
    return true;
  }

  return false;
}

function reset() {
  if((keyDown("ENTER"))&&(state === "end")) {
    bullet.velocityX = 0;
    state = "serve";
    bullet.x = 410;
    bullet.y = 370;
    weight = random(22, 70);
    speed = random(40, 62);
    thickness = random(2.5, 7.5);
  }
}