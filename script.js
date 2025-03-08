document.getElementById('bmiForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission
  
    // Get input values
    const gender = document.getElementById('gender').value; // Get gender
    const height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to meters
    const weight = parseFloat(document.getElementById('weight').value);
  
    // Calculate BMI
    const bmi = (weight / (height * height)).toFixed(2);
  
    // Display result
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
      <strong>Your BMI: ${bmi}</strong>
      <p>Gender: ${gender === 'male' ? 'Male' : 'Female'}</p>
    `;
  
    // Add classification
    if (bmi < 18.5) {
      resultDiv.innerHTML += `<p>Underweight</p>`;
    } else if (bmi >= 18.5 && bmi < 24.9) {
      resultDiv.innerHTML += `<p>Normal weight</p>`;
    } else if (bmi >= 25 && bmi < 29.9) {
      resultDiv.innerHTML += `<p>Overweight</p>`;
    } else {
      resultDiv.innerHTML += `<p>Obesity</p>`;
    }
  });


