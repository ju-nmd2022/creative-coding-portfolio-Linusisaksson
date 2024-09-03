let particles = [];
const amount = 3000;

const noiseSize = 0.05;
const speed = 10.5;
let size = 10;

let colorR = 255;
let colorB = 255;
let colorG = 255;

function setup() {
  createCanvas(600, 600);
  width = 600;
  height = 600;
  frameRate(60);

  for (let i = 0; i < amount; i++) {
    particles.push(createVector(random(width), random(height)));
  }
}
function draw() {
  strokeWeight(1);
  background(255, 255, 255, 10);
  fill(colorR, colorB, colorG);

  for (let i = 0; i < amount; i++) {
    let p = particles[i];
    ellipse(p.x, p.y, size);
    let n = noise(p.x * noiseSize, p.y * noiseSize, frameCount / 1000000);
    let angle = PI * 2 * n;
    p.x += cos(angle) * speed;
    p.y += sin(angle) * speed;

    if (onCanvas(p) == false) {
      p.x = random(width);
      p.y = random(height);
    }
  }
  size -= 0.02;
  //   colorB = 0;
}

function mousePressed() {
  size += 2;
  colorB -= 20;
}

function onCanvas(v) {
  return v.x >> 0 && v.x << width && v.y >> 0 && v.y << height;
}
