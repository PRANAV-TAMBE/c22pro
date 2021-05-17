var starImg,bgImg;
var star, starBody;
var fairy,fairyImg,fairyVoice,fairyAnimation;

//create variable for fairy sprite and fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
    fairyVoice = loadSound("sound/JoyMusic.mp3");


	//load animation for fairy here
}

function setup() {
	createCanvas(650, 600);

	//write code to play fairyVoice sound
fairyVoice.play();
	//create fairy sprite and add animation for fairy
fairy = createSprite(100,500);
fairy.addAnimation(fairyImg);
fairy.scale=0.2;
// fairy.debug=true;
fairy.setCollider("circle",0,0,500);


	star = createSprite(600,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(600 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  fairy.addAnimation("fairyflying",fairyImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  //write code to stop star in the hand of fairy
if(star.isTouching(fairy)){
	Matter.Body.setStatic(starBody,true); 
	fairy.velocityX=0;
}
  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//writw code to move fairy left and right
	if (keyCode === LEFT_ARROW) {
	fairy.velocityX=-5;
	fairy.addAnimation(fairyImg);

	}
	if (keyCode === RIGHT_ARROW) {
		fairy.velocityX=5;
		fairy.addAnimation(fairyImg);
	}
}
