// Define the probabilities of each coin landing heads
const probabilities = [0.3, 0.5, 0.7];

// Define the initial state of the game
let turns = [0, 0, 0];
let rewards = [0, 0, 0];

// Define the function to play a turn of the game
function play(coinIndex) {
  // Update the state of the game
  turns[coinIndex]++;
  rewards[coinIndex] += Math.random() < probabilities[coinIndex];

  // Update the display of the game
  document.getElementById("turns").textContent = turns.reduce((a, b) => a + b, 0);
  document.getElementById("reward").textContent = rewards.reduce((a, b) => a + b, 0);
  document.getElementById("coin1-turns").textContent = turns[0];
  document.getElementById("coin2-turns").textContent = turns[1];
  document.getElementById("coin3-turns").textContent = turns[2];
  document.getElementById("coin1-reward").textContent = rewards[0];
  document.getElementById("coin2-reward").textContent = rewards[1];
  document.getElementById("coin3-reward").textContent = rewards[2];
}
