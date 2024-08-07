function showClass(className) {
    document.querySelectorAll('.class-item').forEach(item => {
        item.style.display = 'none';
    });
    document.getElementById(className).style.display = 'block';
}

function calculateBMI(event) {
    event.preventDefault();
    const height = parseFloat(document.getElementById('height').value) / 100;
    const weight = parseFloat(document.getElementById('weight').value);
    const bmi = (weight / (height * height)).toFixed(2);
    document.getElementById('bmi-value').innerText = bmi;
}
