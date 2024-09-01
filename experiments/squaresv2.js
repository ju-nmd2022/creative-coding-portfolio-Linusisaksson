function setup() {
  createCanvas(600, 600);
  background(255, 255, 255);
  colorMode(HSB);
  frameRate(4);
  //changed color space and added a slow framrate and removed the noLoop()
}
//variables
let size = 30;
let gap = 8;

function draw() {
  noFill();
  strokeWeight(2);
  push();
  translate(30, 30);

  for (let i = 0; i < 14; i++) {
    for (let y = 0; y < 14; y++) {
      squareSize = random(0, 40);
      color = (random(0, 255) * y) / 13;
      rotation = random(0.1, 0.7 * y) / 13;

      xVariance = (random(-5, 10) * y) / 13;
      yVariance = (random(-1, 20) * y) / 13;

      //dividing all the variables by 13 ensures that the randomness is
      // increased more depending on how far down the grid the rectangle is.

      fill(color, color, color);
      push();
      translate(
        i * (size + gap) + size / 2 + xVariance,
        y * (size + gap) + size / 2 + yVariance
      );
      rotate(rotation);

      rect(-size / 2, -size / 2, size, size);

      //translates the rotation point to the middle of the rect and draws the rect on the new location
      pop();
    }
  }
  pop();
  //   noLoop();
}
