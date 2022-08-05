// Form elements
const squareInput = document.querySelector('#square-input');
const squareRange = document.querySelector('#square-range');
const inputs = document.querySelectorAll('input');

// Radios
const radioType = document.querySelectorAll('input[name="type"]');
const radioBuilding = document.querySelectorAll('input[name="building"]');
const radioRooms = document.querySelectorAll('input[name="rooms"]');

// Checkboxs
const ceilings = document.querySelector('input[name="ceiling"]');
const walls = document.querySelector('input[name="walls"]');
const floor = document.querySelector('input[name="floor"]');

const basePrice = 6000;
const totalPriceElement = document.querySelector('#total-price');

// connection range with square input
// listen with input
squareRange.addEventListener('input', function () {
	squareInput.value = squareRange.value;
});

// listen with range
squareInput.addEventListener('input', function () {
	squareRange.value = squareInput.value;
});

function calculate() {
	let totalPrice = basePrice * parseInt(squareInput.value); // 300 000

	for (const radio of radioType) {
		if (radio.checked) {
			totalPrice = totalPrice * parseFloat(radio.value); // 300 000 * 1.2
		}
	}

	for (const radio of radioBuilding) {
		if (radio.checked) {
			totalPrice = totalPrice * parseFloat(radio.value); // 360 000 * 1.1 = 390 000
		}
	}

	for (const radio of radioRooms) {
		if (radio.checked) {
			totalPrice = totalPrice * parseFloat(radio.value); // 390 000 * 0.8 = 350 000
		}
	}

	if (ceilings.checked) {
        totalPrice = totalPrice + parseFloat(ceilings.value) * parseInt(squareInput.value);
	}

	if (walls.checked) {
		totalPrice = totalPrice * parseFloat(walls.value); // ---
	}

	if (floor.checked) {
		totalPrice = totalPrice * parseFloat(floor.value); // ---
	}

	const formatter = new Intl.NumberFormat('ru');
	totalPriceElement.innerText = formatter.format(totalPrice);
}

calculate();

for (const input of inputs) {
	input.addEventListener('input', function () {
		calculate();
	});
}
