let video, classifier
let frameColor = 'Black'
let openCVReady = false
let faces = []

function preload() {
    cv['onRuntimeInitialized'] = () => {
        classifier = new cv.CascadeClassifier()
        classifier.load('haarcascade_frontalface_default.xml')
        openCVReady = true
        console.log("HELLO")
    }
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
