function setup() {
  createCanvas(600, 600);
  // background(100, 100, 100);
  colorMode(HSB);
  frameRate(10);
  //changed color space and added a slow framrate and removed the noLoop()
}
//variables
let size = 30;
let gap = 8;
let frameCountLimit = 10;
let currentFrame = 0;

//added variables for to make the loop stop after 10 frames

function draw() {
  if (currentFrame < frameCountLimit) {
    noFill();
    strokeWeight(4);
    push();
    translate(50, 50);

    for (let i = 0; i < 14; i++) {
      for (let y = 0; y < 14; y++) {
        squareSize = random(0, 60);
        color = (random(100, 255) * y) / 5;
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

        ellipse(-squareSize / 2, -squareSize / 2, squareSize, squareSize);
        ellipse(
          -squareSize / 2,
          -squareSize / 2,
          squareSize / 2,
          squareSize / 2
        );

        pop();
      }
    }
    currentFrame++;
  } else {
    noLoop(); // Stop the draw loop after 10 frames
  }
  pop();
}
