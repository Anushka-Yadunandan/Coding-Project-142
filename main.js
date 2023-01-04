game_status = "start";

RightWristX= "";
RightWristY="";
function draw() {
  if(game_status == "start"){
  game()
  image(video,0,0,300,300)
  image(ball_touch_paddel.wav,RightWristX,RightWristY,30,30)
}}
function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	instializeInSetup();
  canvas.center();
  video = createCapture(VIDEO);
  video.size(380 ,380);
  video.hide()
}
function gotPoses(results)
{
  if(results.length > 0)
  {
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("RightWristX = " + RightWristX +", RightWristY = " + RightWristY);
  }
poseNet.on('pose',gotPoses);
}
function startGame()
{
  game_status ="start";
  document.getElementById("status").innerHTML = " Game Is Loaded";
}