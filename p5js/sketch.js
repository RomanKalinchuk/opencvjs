let video, classifier,faceCascade
let frameColor = 'Black'
let faceDetectReady = false;
let faces = []

async function loadCV() {
    cv = (cv instanceof Promise) ? await cv : cv
    faceDetectReady = true
    console.log(Obect.keys(cv))
}

function preload(){
    loadCV()
}

function setup() {
  createCanvas(720, 480)
  video = createCapture(VIDEO)
  video.size(720, 480)
  video.hide() // Hide the HTML video element
}

function draw() {
  //background(50)
  video.loadPixels()
  image(video, 0,0,width,height)
  getFaces()
}
