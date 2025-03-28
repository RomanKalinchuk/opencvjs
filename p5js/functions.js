function onOpenCvReady(){
  console.log("OpenCV is Ready!")
}

function setColor(color){
  frameColor = color
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
