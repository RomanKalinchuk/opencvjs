 function drawHill(){
  var lastX
  var lastY
  for(var i=0;i<WIDTH;i++){
    var y = getY(i)
    if(lastX) line(lastX, lastY, i,y)
    lastX = i
    lastY = y
  }
}

function drawBall(){
  circle(ballX,ballY,DIAMETER)
  
  //Shift ball above line
  var ballHeight = Math.abs(getBallY()-ballY)

  if(ballHeight > 0 && !grounded){
    //keep ball from overshooting line
    ballY += ballHeight > velocity ? velocity:ballHeight
    velocity *= 1.1 //Accelleration rate
  }
  else if(!grounded){
    grounded = true
    //velocity = ACC //zeroed for testing
    velocity  = velocity*(getSlope(ballX)/4)
    rollBall()
  }
  else{
    rollBall()
  }
}

function getY(x){
  var sinWidth = WIDTH/7
  var sinHeight = HEIGHT/4
  var yOffset = HEIGHT/2
  var xOffset = 170
  var y = (sin((x-xOffset)/sinWidth)*sinHeight)+yOffset
  return y
}

function getBallY(){
  return getY(ballX+(getSlope(ballX)*2.8))-DIAMETER/2
}

function getSlope(x){
  return getY(x-1)-getY(x+1)
}

function rollBall(){
  var slope = getSlope(ballX)
  velocity += (slope/3)-friction() //Add velocity+friction
  if(ballX < (DIAMETER/1.6) || ballX > WIDTH - (DIAMETER/1.6)){
    velocity = 0
    checkArrows()
  }
  move()
}

function move(){
  ballX -= velocity - (velocity*Math.abs(getSlope(ballX)/8))
  ballY = getBallY()
}

function friction(){
  var base = 0.01
  var totalFriction = velocity/90
  //console.log(velocity)
  if(velocity>0) totalFriction+=base
  if(velocity<0) totalFriction-=base
  return totalFriction
}

function checkArrows(){
  if(keyIsDown(LEFT_ARROW)){
    velocity += power
    insertText('<'+instructions)
  }
  if(keyIsDown(RIGHT_ARROW)){
    velocity -= power
    insertText('  '+instructions+'>')
  }
  if(!keyIsPressed){
    insertText('<'+instructions+'>')
  }
}

function insertText(input){
  text(input, WIDTH/2.8,HEIGHT - 50)
}

function setColor(color = parent.color){
    fill(255*(color == 'Red'),255*(color == 'Green'),255*(color == 'Blue'))
}
