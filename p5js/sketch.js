let video, classifier
let frameColor = 'Black'
let faces = []

function setup() {
  createCanvas(720, 480)
  video = createCapture(VIDEO)
  video.size(720, 480)
  video.hide() // Hide the HTML video element
  
  cv.then((cv) => {
    let cascadeUrl = 'opencv/haarcascade_frontalface_default.xml'; // Ensure this file is in the same directory
    cv.FS_createPreloadedFile('/', cascadeUrl, cascadeUrl, true, false, () => {
        faceCascade = new cv.CascadeClassifier();
        faceCascade.load(cascadeUrl);
        faceDetectReady = true;
        console.log("Haar cascade loaded successfully")
        faces = new cv.RectVector()
        gray = new cv.Mat()
    }, (err) => {
        console.error("Failed to load Haar cascade:", err);
    })
  })
}

function draw() {
  //background(50)
  video.loadPixels()
  grayscale()
  image(video, 0,0,width,height)
  //getFaces()
}
