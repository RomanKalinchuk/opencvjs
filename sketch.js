//Work in progress/incomplete
const WIDTH = 600
const HEIGHT = 500
const BACKGROUND = 255
const DIAMETER = WIDTH/20
const ACC = 3
const power = 0.2
const instructions = " Arrows Left and Right for control "
var grounded = false
var velocity = ACC
var ballX = 100
var ballY = 50

function setup() {
  createCanvas(600, 500)
  frameRate(60)
  stroke(0)
  fill(0)
}

function draw() {
  background(BACKGROUND);
  drawHill()
  drawBall()
  checkArrows()
}
