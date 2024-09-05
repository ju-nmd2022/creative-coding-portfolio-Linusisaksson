let particles = [];
const amount = 10000;

const noiseSize = 2.15;
const speed = 1.5;
const circleRadius = 200; // size of the canvascircle
// I got help from ChatGPT to make the calculations on how to display the canvas in a circualr shape.

function setup() {
  createCanvas(600, 600);

  for (let i = 0; i < amount; i++) {
    particles.push(createVector(random(width), random(height)));
  }
}
function draw() {
  strokeWeight(1);
  background(255, 255, 255, 5);

  const xCanvas = 600 / 2;
  const yCanvas = 600 / 2;

  for (let i = 0; i < amount; i++) {
    let p = particles[i];
    // Calculate the distance from the particle to the center of the canvas
    let distanceFromCenter = dist(p.x, p.y, xCanvas, yCanvas);

    // Only draw the particle if it is within the circular area
    if (distanceFromCenter < circleRadius) {
      point(p.x, p.y);
    }

    let n = noise(p.x * noiseSize, p.y * noiseSize);
    let angle = PI * 2 * n;
    p.x += cos(angle + 4) * speed;
    p.y += sin(angle + 8) * speed;
    //changed some variables to shift the angle of the particles

    // If the particle goes off the canvas, reposition it randomly
    if (onCanvas(p) == false) {
      p.x = random(width);
      p.y = random(height);
    }
  }
}

function onCanvas(v) {
  return v.x >> 0 && v.x << width && v.y >> 0 && v.y << height;
}

//base of the code was inspired by Barney Codes
// https://editor.p5js.org/BarneyCodes/sketches/2eES4fBEL
