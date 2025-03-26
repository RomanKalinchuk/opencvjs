let src, dst, video, img, faceCascade, FrameColor

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

      video.pixels[index] = grayed * (FrameColor == 'Red' ? 1:0);
      video.pixels[index + 1] = grayed * (FrameColor == 'Green' ? 1:0);
      video.pixels[index + 2] = grayed * (FrameColor == 'Blue' ? 1:0);
      video.pixels[index + 3] = 255; // Set alpha to fully opaque
    }
  }
  video.updatePixels()
}

function onOpenCvReady() {
    console.log("OpenCV.js is ready!");
}
