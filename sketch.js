let src, dst, video, img, faceCascade

function setup() {
  createCanvas(720, 480)
  video = createCapture(VIDEO)
  video.size(720, 480)
  video.hide() // Hide the HTML video element
  
}

function draw() {
  background(50)
  video.loadPixels()
  grayscale(video)
  image(video, 0,0,width,height)
  
}

function grayscale(img){
  for (let y = 0; y < video.height; y++) {
    for (let x = 0; x < video.width; x++) {
      let index = (x + y * video.width) * 4;
      let r = img.pixels[index];
      let g = img.pixels[index + 1];
      let b = img.pixels[index + 2];
      let grayed = (r + g + b) / 3; // Convert to grayscale

      video.pixels[index] = grayed;
      video.pixels[index + 1] = grayed;
      video.pixels[index + 2] = grayed;
      video.pixels[index + 3] = 255; // Set alpha to fully opaque
    }
  }
  video.updatePixels()
}

function onOpenCvReady() {
    console.log("OpenCV.js is ready!");
}
