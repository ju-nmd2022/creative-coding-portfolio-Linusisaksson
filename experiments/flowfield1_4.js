let particles = [];
const amount = 1000;

const noiseSize = 0.05;
const speed = 2.5;
let randomNumber;
let lastChangeTime = 0; // Stores the last time randomNumber was changed
const changeInterval = 3000; // Change every 4 seconds (4000 ms)

function setup() {
  createCanvas(600, 600);

  // Initialize particles with random positions
  for (let i = 0; i < amount; i++) {
    particles.push(createVector(random(width), random(height)));
  }

  // Initialize randomNumber for the first time
  randomNumber = random(0, 600);
  randomNumberSquareW = random(0, 10);
  randomNumberSquareH = random(10, 100);
}

function draw() {
  strokeWeight(2);
  background(255, 255, 255, 5);

  // Check if 4 seconds have passed since the last change
  if (millis() - lastChangeTime > changeInterval) {
    randomNumber = random(0, 600); // Update randomNumber
    randomNumberSquareW = random(0, 15);
    randomNumberSquareH = random(10, 100);
    lastChangeTime = millis(); // Update the last change time
  }

  // Center of the canvas
  let centerX = randomNumber;
  let centerY = randomNumber;

  for (let i = 0; i < amount; i++) {
    let p = particles[i];
    // ellipse(p.x, p.y, 10);
    rect(p.x, p.y, 10 + randomNumberSquareW, 10 + randomNumberSquareH);

    // Calculate the vector from particle to center
    let toCenter = createVector(centerX - p.x, centerY - p.y);

    // Calculate the perpendicular vector to the vector pointing to the center
    // This perpendicular vector gives us a circular motion around the center
    // ChatGPT helped me with calculation of circular rotation.
    let angle = atan2(toCenter.y, toCenter.x) + HALF_PI;

    // Update particle position based on the calculated angle
    p.x += cos(angle) * speed;
    p.y += sin(angle) * speed;

    // Reset particle position if it goes off the canvas
    if (!onCanvas(p)) {
      p.x = random(width);
      p.y = random(height);
    }
  }
}

// Check if the particle is within the canvas bounds
function onCanvas(v) {
  return v.x > 0 && v.x < width && v.y > 0 && v.y < height;
}
