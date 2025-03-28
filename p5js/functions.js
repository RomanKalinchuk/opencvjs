function onOpenCvReady(){
  console.log("OpenCV is Ready!")
}

function setColor(color){
  frameColor = color
}

function grayscale(img){
  for (let y = 0; y < video.height; y++) {
    for (let x = 0; x < video.width; x++) {
      let index = (x + y * video.width) * 4;
      let r = img.pixels[index];
      let g = img.pixels[index + 1];
      let b = img.pixels[index + 2];
      let grayed = (r + g + b) / 3; // Convert to grayscale

      video.pixels[index] = grayed * ((frameColor == 'Red' || frameColor == 'Black') ? 1:0);
      video.pixels[index + 1] = grayed * ((frameColor == 'Green' || frameColor == 'Black') ? 1:0);
      video.pixels[index + 2] = grayed * ((frameColor == 'Blue' || frameColor == 'Black') ? 1:0);
      video.pixels[index + 3] = 255; // Set alpha to fully opaque
    }
  }
  video.updatePixels()
}

function getFaces(frame){
  // Detect faces
    classifier.detectMultiScale(gray, faces, 1.1, 3, 0);

    // Draw rectangles around faces
    for (let i = 0; i < faces.size(); ++i) {
      let face = faces.get(i);
      stroke(255, 0, 0);
      noFill();
      rect(face.x, face.y, face.width, face.height);
    }
}
