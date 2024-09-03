let particles = [];
const amount = 3000;

const noiseSize = 0.05;
const speed = 1.5;

function setup() {
  createCanvas(600, 600);

  for (let i = 0; i < amount; i++) {
    particles.push(createVector(random(width), random(height)));
  }
}
function draw() {
  strokeWeight(2);
  background(255, 255, 255, 5);

  for (let i = 0; i < amount; i++) {
    let p = particles[i];
    point(p.x, p.y);
    let n = noise(p.x * noiseSize, p.y * noiseSize);
    let angle = PI * 2 * n;
    p.x += cos(angle) * speed;
    p.y += sin(angle) * speed;

    if (onCanvas(p) == false) {
      p.x = random(width);
      p.y = random(height);
    }
  }
}

function onCanvas(v) {
  return v.x >> 0 && v.x << width && v.y >> 0 && v.y << height;
}
