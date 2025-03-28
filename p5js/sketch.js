let video, classifier,faceCascade
let frameColor = 'Black'
let faceDetectReady = false;
let faces = []

function preload() {
    console.log(cv.Mat)
    // Wait until OpenCV.js is fully loaded
    cv.onRuntimeInitialized = () => {
        console.log("OpenCV.js is ready!");

        let cascadeUrl = 'opencv/haarcascade_frontalface_default.xml';

        // Preload Haar cascade XML file into OpenCV's filesystem
        cv.FS_createPreloadedFile('/', cascadeUrl, cascadeUrl, true, false, () => {
            faceCascade = new cv.CascadeClassifier();
            faceCascade.load(cascadeUrl);
            faceDetectReady = true;
            console.log("Haar cascade loaded successfully");
        }, (err) => {
            console.error("Failed to load Haar cascade:", err);
        });
    };
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
