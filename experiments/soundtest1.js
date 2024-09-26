let particles = [];
const amount = 100;
const noiseSize = 0.05;
const speed = 1;

const synth = new Tone.Synth().toDestination();
let toneStarted = false; // Used to toggle tone on and off
const notes = ["C4", "D4", "E4", "F4", "G4", "A4", "B4", "C5"];
//list of different notes in an array

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

    // Check if the particle is off the canvas
    if (!onCanvas(p)) {
      // Play a random note if Tone.js has been started
      if (toneStarted) {
        let randomNote = random(notes); // Get a random note from the array
        synth.triggerAttackRelease(randomNote, "8n"); // Play the random note
      }
      // Reset the particle to a random position on the canvas
      p.x = random(width);
      p.y = random(height);
    }
  }
}

function onCanvas(v) {
  return v.x >= 0 && v.x <= width && v.y >= 0 && v.y <= height;
}

// Start Tone.js when 'T' is pressed
function keyPressed() {
  if (key === "T" || key === "t") {
    Tone.start().then(() => {
      toneStarted = true; // starts tone.js
      console.log("Start");
    });
  }
  if (key === "Y" || key === "y") {
    toneStarted = false;
    console.log("Kill");
  }
}
