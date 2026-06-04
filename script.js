const BIRTH_DATE = new Date('2004-09-12T10:00:00');
const ageDisplay = document.getElementById('live-age');
const unitLabel = document.getElementById('unit-label');
const ageBox = document.getElementById('age-box');

let currentUnit = 'years';
const units = {
    years: { label: 'YEARS ELAPSED', divisor: 1000 * 60 * 60 * 24 * 365.25 },
    months: { label: 'MONTHS ELAPSED', divisor: 1000 * 60 * 60 * 24 * 30.44 },
    days: { label: 'DAYS ELAPSED', divisor: 1000 * 60 * 60 * 24 },
    hours: { label: 'HOURS ELAPSED', divisor: 1000 * 60 * 60 },
    minutes: { label: 'MINUTES ELAPSED', divisor: 1000 * 60 },
    seconds: { label: 'SECONDS ELAPSED', divisor: 1000 },
    weeks: { label: 'WEEKS ELAPSED', divisor: 1000 * 60 * 60 * 24 * 7 }
};

function updateAge() {
    const now = new Date();
    const diff = now.getTime() - BIRTH_DATE.getTime();
    const value = (diff / units[currentUnit].divisor).toFixed(currentUnit === 'years' ? 1 : 1);
    ageDisplay.innerText = value;
}

ageBox.addEventListener('mouseenter', () => {
    const unitKeys = Object.keys(units).filter(u => u !== 'years');
    currentUnit = unitKeys[Math.floor(Math.random() * unitKeys.length)];
    unitLabel.innerText = units[currentUnit].label;
});

ageBox.addEventListener('mouseleave', () => {
    currentUnit = 'years';
    unitLabel.innerText = units[currentUnit].label;
});

setInterval(updateAge, 100);
updateAge();
