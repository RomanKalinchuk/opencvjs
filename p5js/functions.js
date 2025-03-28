function setColor(color){
  frameColor = color
}

function grayscale(){
  for (let y = 0; y < video.height; y++) {
    for (let x = 0; x < video.width; x++) {
      let index = (x + y * video.width) * 4;
      let r = video.pixels[index];
      let g = video.pixels[index + 1];
      let b = video.pixels[index + 2];
      let grayed = (r + g + b) / 3; // Convert to grayscale

      video.pixels[index] = grayed * ((frameColor == 'Red' || frameColor == 'Black') ? 1:0);
      video.pixels[index + 1] = grayed * ((frameColor == 'Green' || frameColor == 'Black') ? 1:0);
      video.pixels[index + 2] = grayed * ((frameColor == 'Blue' || frameColor == 'Black') ? 1:0);
      video.pixels[index + 3] = 255; // Set alpha to fully opaque
    }
  }
  video.updatePixels()
}

function getFaces(){
  console.log(cv)
  grayscale()
  // Detect faces
  let faces = new cv.RectVector()
  classifier.detectMultiScale(video, faces, 1.1, 3, 0);

    // Draw rectangles around faces
  for (let i = 0; i < faces.size(); ++i) {
    let face = faces.get(i);
    stroke(255, 0, 0);
    noFill();
    rect(face.x, face.y, face.width, face.height);
  }
}
