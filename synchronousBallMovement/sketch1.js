var canvas, backgroundImage;

var gameState = 0;
var playerCount;

var database;
var distance = 0;
var allPlayers;

var form, player, game;
var cars;
var car1,car2,car3,car4;
var car1Img,car2Img,car3Img,car4Img;
var trackimg;

var rank;

function preload(){
  car1Img=loadImage("car/images/car1.png");
  car2Img=loadImage("car/images/car2.png");
  car3Img=loadImage("car/images/car3.png");
  car4Img=loadImage("car/images/car4.png");
  trackimg=loadImage("car/images/track.jpg");
}


function setup(){
  canvas = createCanvas(displayWidth,displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if (playerCount=== 4){
    game.update(1);
  }

  if (gameState===1){
    clear();
    game.play();
  }
  if (gameState===2){
    game.end();
  }
}

