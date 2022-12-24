var bgImage, bunny1, bunny2
var gardenImage, portalAnimation
var barrierImage
var ObstacleGroup
var live =10
function preload() {
  bgImage = loadImage("./assets/Horror image.jpg");
  bunnyImage = loadImage("./assets/bunny 1 image.png");
  gardenImage = loadImage("./assets/Garden image.jpg");
  barrierImage = loadImage("./assets/Hurdle Barrier Obstacle.png");
  bunny2Image = loadImage("./assets/Bunny image.png");
  portalAnimation = loadImage("./assets/Portal Animation Gif.gif");

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  bg = createSprite(width / 2, height / 2, width, height);
  bg.addImage(bgImage);
  bg.velocityX = 2;
  bg.scale = 3

  bunny = createSprite(75, height - 80, 20, 20)
  bunny.addImage("bunny", bunnyImage);
  bunny.addImage("bunny2", bunny2Image);
  bunny.debug = true

  bunny.scale = 0.25;
  
  edges = createEdgeSprites()

  

  ObstacleGroup = new Group()



}

function draw() {
  background(0);


  if (bg.position.x > 800) {
    bg.position.x = width / 2
  }

  bunny.collide(edges);
 addObstacle();
 if(keyDown('space')&& bunny.y>height-90){
  bunny.velocityY = -15
   }
  bunny.velocityY+=0.5

  if(bunny.position.y>height-20){
    bunny.position.y = height-20
  }

  if(bunny.overlap(ObstacleGroup, function(a,b){
    b.remove();
  })){
    live--
  }
  
  drawSprites()

  textSize(22)
  fill("white") 
  text("Lives: "+ live,60,40)
}

// function keyPressed() {
//   if (keyCode === 39 && bunny.position.x < width - 20) {
//     bunny.velocityX = +4
//     bunny.changeImage("bunny2", bunny2Image);
//   }

//   if (keyCode === 37) {
//     bunny.velocityX = -5
//     bunny.changeImage("bunny", bunnyImage);
//   }

//   if (keyCode === 38) {
//     bunny.velocityY = -4
//   }

// if(keyCode === 40){
//   bunny.velocityY = 5
// }
// }
function addObstacle(){
  //var x = Math.round(random(100,width-100))
  //var y = Math.round(random(50,height-50))
  if(frameCount%200==0){
  obstacleImage = createSprite(width,height-50)
  obstacleImage.velocityX = -2
  obstacleImage.addImage(barrierImage)
  obstacleImage.scale = 0.2
  obstacleImage.debug = true
  ObstacleGroup.add(obstacleImage)
  }
}




