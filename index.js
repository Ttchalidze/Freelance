/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;

//=== State ===
/** @returns {Freelancer} a freelancer with random name occipation and rate */
function Randomjobs() {
  const Rand1 = Math.floor(Math.random() * NAMES.length);
  const Rand2 = Math.floor(Math.random() * OCCUPATIONS.length);
  const Rand3 = Math.floor(
    Math.random() * (PRICE_RANGE.max - PRICE_RANGE.min + 1) + PRICE_RANGE.min
  );
  const Jobs = NAMES[Rand1] + OCCUPATIONS[Rand2] + PRICE_RANGE[Rand3];
  return {
    name: NAMES[Rand1],
    occupation: OCCUPATIONS[Rand2],
    rate: Rand3,
  };
}

// === Components ===
const freelancers = Array.from({ length: NUM_FREELANCERS }, Randomjobs);
const freelancer = Randomjobs();

/** Avarage rate of salary for Freelancers */
function avarageRateOfFreeLancers() {
  let sum = 0;
  for (let i = 0; i < NUM_FREELANCERS; i++) {
    sum += freelancers[i].rate;
  }
  return sum / NUM_FREELANCERS;
}
const avaragerate = avarageRateOfFreeLancers();

/** Table for single freelancer */
function FreelanceCard(Freelancer) {
  const { name, occupation, rate } = Freelancer;

  const $tableFreelancer = document.createElement("table");
  $tableFreelancer.classList.add("FreeLancer");
  $tableFreelancer.innerHTML = `
  <tr>
  <td class="namecollor">${name}</td>
  <td class="occupationcollor">${occupation}</td>
  <td class="ratecollor">${rate}</td>
  </tr>`;
  return $tableFreelancer;
}
/** Table for a lot of freelancers */
function FreelanceCardS() {
  const $container = document.createElement("div");
  $container.classList.add("tableFreeLancer");

  const $tableFreelancer = freelancers.map(FreelanceCard);
  $container.replaceChildren(...$tableFreelancer);
  return $container;
}

// === Render ===
function render() {
  const $app = document.querySelector("#app");
  $app.innerHTML = `
    <h1>Freelancer Forum</h1>
    <h4>The average rate is <em class="avarage">${avaragerate}</em></h4>
    <table>
    <tr>
    <th>Name</th>
    <th>Ocupation</th>
    <th>Rate</th>
    </tr>
    <table>
    <div id="freelancer-container"></div>
  `;
  $app.querySelector("#freelancer-container").replaceWith(FreelanceCardS());
}
render();
