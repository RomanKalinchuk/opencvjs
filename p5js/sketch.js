let src, dst, video, img, faceCascade
let frameColor = 'Black'
let faces = []

function setup() {
  createCanvas(720, 480)
  video = createCapture(VIDEO)
  video.size(720, 480)
  video.hide() // Hide the HTML video element
  //faces = new cv.RectVector()
  //gray = new cv.Mat()
  console.log(typeof cv)
}

function draw() {
  //background(50)
  video.loadPixels()
  grayscale()
  image(video, 0,0,width,height)
  getFaces()
  
}
