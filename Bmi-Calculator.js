function calculateBMI() {
    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value;

    if (weight > 0 && height > 0) {
        height = height / 100; // Convert height from cm to meters
        var bmi = weight / (height * height);
        var result = document.getElementById('result');
        result.innerHTML = 'Your BMI is ' + bmi.toFixed(2);

       
    }
}