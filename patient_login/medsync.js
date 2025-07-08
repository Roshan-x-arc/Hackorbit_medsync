document.addEventListener("DOMContentLoaded", () => {
  const reportDiv = document.getElementById("reportContent");

  // Simulate fetching patient data from localStorage (set by login page)
  const patientData = JSON.parse(localStorage.getItem("loggedInPatient"));

  if (patientData) {
    reportDiv.innerHTML = `
      <p><strong>Name:</strong> ${patientData.name}</p>
      <p><strong>Age:</strong> ${patientData.age}</p>
      <p><strong>Gender:</strong> ${patientData.gender}</p>
      <p><strong>Weight:</strong> ${patientData.weight} kg</p>
      <p><strong>Height:</strong> ${patientData.height} cm</p>
      <p><strong>Blood Pressure:</strong> ${patientData.bloodPressure}</p>
      <p><strong>Symptoms:</strong> ${patientData.symptoms}</p>
    `;
  } else {
    reportDiv.innerHTML = "<p>No patient data found. Please log in again.</p>";
  }
});
