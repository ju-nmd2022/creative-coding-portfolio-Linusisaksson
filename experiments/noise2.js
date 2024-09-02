function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(255, 255, 255);

  const originalY = 300;
  const originalX = 200;
  const divider = 10;
  colorR = random(0, 255);
  colorB = random(0, 255);
  colorG = random(0, 255);

  strokeWeight(1);

  // noiseSeed(100);
  beginShape();
  for (let i = -400; i < 900; i++) {
    for (let y = 0; y < 1; y++) {
      const y = originalY + noise(i / divider) * 800;
      vertex(i, y);
      fill(colorR, colorB, colorG);

      vertex(y, i);
    }
  }
  endShape();

  noLoop();
}
