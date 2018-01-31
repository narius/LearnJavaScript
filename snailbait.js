var canvas=document.getElementsById('snailbait-game-canvas'),
  context=canvas.getContext(2d),

  background=new Image(),
  runnerImage=new Image():

function initalizeImages() {
  background.src='images/background.png';
  runnerImage.src='images/runnger.png';

  background.onload=function(e){
    startGame();
  };
}

function startGame() {
  draw();
}

function draw() {
  drawBackground();
  drawRunner();
}

function drawBackground() {
  context.drawImage(background, 0,0);
}

function drawRunner() {
  context.drawImage(runnerImage,50, 280);
}

//Launch game........

initalizeImages();
