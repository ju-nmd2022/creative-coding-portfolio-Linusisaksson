function setup() {
  createCanvas(600, 600);
  frameRate(30);
}

let counter = 0;
let direction = 0.03;

colorR = random(0, 255);
colorB = random(0, 255);
colorG = random(0, 255);

function draw() {
  background(255, 255, 255);

  const originalY = 300;
  //   const originalX = 200;
  const divider = 10;

  beginShape();
  for (let i = -400; i < 900; i++) {
    for (let y = 0; y < 1; y++) {
      const y = originalY + noise(i / divider) * 60;
      stroke(colorR, colorB, colorG);
      vertex(i, y * counter);
      vertex(y, i + counter);
    }
  }
  endShape();
  counter += direction;

  if (counter > 2 || counter < 0) {
    direction *= -1; // Reverse the direction
  }

  // noLoop();
}
