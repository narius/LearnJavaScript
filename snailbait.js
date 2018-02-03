var canvas=document.getElementById('snailbait-game-canvas'),
  context=canvas.getContext('2d'),

  background=new Image(),
  runnerImage=new Image();

function initalizeImages() {
  background.src='images/background.png';
  runnerImage.src='images/runner.png';

  background.onload=function(e){
    startGame();
  };
}

function startGame() {
  draw();
}

function draw() {
  console.log('Draw function');
  drawBackground();
  drawRunner();
  //console.trace();
}

function drawBackground() {
  context.drawImage(background, 0,0);
}

function drawRunner() {
  context.drawImage(runnerImage,50, 280);//Orginal: 50,280
}

//Launch game........

initalizeImages();
